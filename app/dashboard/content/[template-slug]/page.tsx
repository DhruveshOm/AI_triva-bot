"use client"
import React, { useState } from 'react'
import { use } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { GoogleGenAI } from "@google/genai"
import Link from 'next/link'

interface PROPS {
    params: Promise<{
        'template-slug': string
    }>
}

interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
}

interface QuizResult {
    score: number;
    total: number;
    feedback: string;
}

function CreateNewContent(props: PROPS) {
    const params = use(props.params)
    const slug = params['template-slug']
    
    const selectedTemplate: TEMPLATE | undefined = Templates.find((item) => item.slug === slug)
    const [loading, setLoading] = useState(false)
    const [quizStarted, setQuizStarted] = useState(false)
    const [questions, setQuestions] = useState<Question[]>([])
    const [userAnswers, setUserAnswers] = useState<Record<number, string>>({})
    const [quizResult, setQuizResult] = useState<QuizResult | null>(null)

    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "AIzaSyAKLOkKi8UdFyKbP7a8cmjCnOZMlenPlco"
    const ai = new GoogleGenAI({ apiKey })

    const generateQuiz = async () => {
        setLoading(true)
        try {
            const topic = selectedTemplate?.aiPrompt || "knowlegde base quize"
            const prompt = `Generate a random trivia bot like quiz with 10 multiple choice questions about ${topic}. 
                Return ONLY the raw JSON array without any markdown formatting or code blocks.
                Each question object must have:
                {
                    "question": "string",
                    "options": ["string", "string", "string", "string"],
                    "correctAnswer": "string" (must exactly match one option)
                }`

            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: prompt,
            })

            try {
                // Clean the response text before parsing
                let responseText = response.text;
                
                // Remove markdown code blocks if present
                if (responseText.startsWith('```json')) {
                    responseText = responseText.replace(/```json|```/g, '').trim();
                }
                
                const quizData = JSON.parse(responseText);
                
                if (!Array.isArray(quizData)) {
                    throw new Error("Invalid quiz format received");
                }
                setQuestions(quizData)
                setQuizStarted(true)
            } catch (parseError) {
                console.error("Failed to parse quiz data:", parseError, "Response:", response.text)
                alert(`Failed to process the quiz questions. Please try again. Error: ${parseError.message}`)
            }
        } catch (error) {
            console.error("Error generating quiz:", error)
            alert("Failed to generate quiz. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    const handleAnswerSelect = (questionIndex: number, answer: string) => {
        setUserAnswers(prev => ({
            ...prev,
            [questionIndex]: answer
        }))
    }

    const submitQuiz = async () => {
        setLoading(true)
        try {
            const prompt = `Evaluate this quiz:
                Questions: ${JSON.stringify(questions)}
                User Answers: ${JSON.stringify(userAnswers)}
                
                Return a valid JSON object with:
                {
                    "score": number (count of correct answers),
                    "total": number (total questions),
                    "feedback": "string" (constructive feedback )
                }
                Ensure the response is valid JSON.`

            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: prompt,
            })

            try {
                // Remove the parentheses from response.text
                let responseText = response.text;
                
                // Remove markdown code blocks if present
                if (responseText.startsWith('```json')) {
                    responseText = responseText.replace(/```json|```/g, '').trim();
                }
                const result = JSON.parse(responseText)
                setQuizResult(result)
            } catch (parseError) {
                console.error("Failed to parse quiz results:", parseError)
                alert("Failed to process your quiz results. Please try again.")
            }
        } catch (error) {
            console.error("Error evaluating quiz:", error)
            alert("Failed to evaluate quiz. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    const resetQuiz = () => {
        setQuizStarted(false)
        setQuestions([])
        setUserAnswers({})
        setQuizResult(null)
    }

    return (
        <div className='p-10'>
            <Link href="/dashboard">
                <Button><ArrowLeft />Back</Button>
            </Link>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                <div className="md:col-span-2">
                    {!quizStarted ? (
                        <div className="flex flex-col items-center justify-center h-full">
                            <h1 className="text-2xl font-bold mb-4">
                                {selectedTemplate?.name || "General Knowledge"} Quiz
                            </h1>
                            <Button 
                                onClick={generateQuiz} 
                                disabled={loading}
                                size="lg"
                            >
                                {loading ? "Generating Quiz..." : "Start Quiz"}
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">
                                {selectedTemplate?.name || "General Knowledge"} Quiz
                            </h2>
                            {questions.map((question, index) => (
                                <div key={index} className="p-4 border rounded-lg">
                                    <p className="font-bold">{index + 1}. {question.question}</p>
                                    <div className="space-y-2 mt-2">
                                        {question.options.map((option, optIndex) => (
                                            <div key={optIndex} className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id={`q${index}-o${optIndex}`}
                                                    name={`question-${index}`}
                                                    checked={userAnswers[index] === option}
                                                    onChange={() => handleAnswerSelect(index, option)}
                                                    className="mr-2"
                                                />
                                                <label htmlFor={`q${index}-o${optIndex}`}>{option}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div className="flex gap-2">
                                <Button 
                                    onClick={submitQuiz} 
                                    disabled={loading}
                                    className="flex-1"
                                >
                                    {loading ? "Submitting..." : "Submit Quiz"}
                                </Button>
                                <Button 
                                    variant="outline" 
                                    onClick={resetQuiz}
                                    className="flex-1"
                                >
                                    Reset
                                </Button>
                            </div>
                        </div>
                    )}
                </div>

                {quizResult && (
                    <div className="md:col-span-1">
                        <div className="p-6 bg-blue-50 rounded-lg sticky top-4">
                            <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
                            <p className="text-xl mb-2">
                                Score: <span className="font-bold">{quizResult.score}/{quizResult.total}</span>
                            </p>
                            <p className="text-lg mb-4">{quizResult.feedback}</p>
                            <Button 
                                onClick={resetQuiz} 
                                className="w-full"
                            >
                                Take Another Quiz
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CreateNewContent