(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_df97c5._.js", {

"[project]/app/(data)/Templates.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = [
    {
        name: "Science Quiz",
        desc: "Explore physics, chemistry, and biology with mind-bending science questions",
        icon: "https://cdn-icons-png.flaticon.com/128/2941/2941556.png",
        slug: "science-trivia",
        aiPrompt: "Generate 10 unique multiple-choice trivia questions about fundamental concepts in physics, chemistry, and biology. For each question, provide one correct answer and three plausible incorrect options. Include an interesting fact related to the topic within each question. Ensure no repetition of questions or the core scientific concepts tested within this set."
    },
    {
        name: "Cartoons & Anime",
        desc: "Test your knowledge of classic cartoons and popular anime series",
        icon: "https://cdn-icons-png.flaticon.com/128/1881/1881121.png",
        slug: "cartoons-anime-trivia",
        aiPrompt: "Create 10 distinct multiple-choice trivia questions that blend popular classic cartoon series and modern anime. Questions should cover a mix of character identification, significant plot points, and notable creators or studios. Provide four options for each question, with only one correct answer. Avoid any duplicate questions or overlapping themes within this set."
    },
    {
        name: "Name That Song",
        desc: "Can you identify these hit songs from lyrics or audio clips?",
        icon: "https://cdn-icons-png.flaticon.com/512/3659/3659899.png",
        slug: "music-trivia",
        aiPrompt: "Generate 10 unique multiple-choice questions that ask the user to identify a popular song based on a short excerpt of its lyrics. The songs should span various decades and genres. For each question, provide four distinct song titles as options, with only one being the correct answer. Ensure no song is repeated within this set."
    },
    {
        name: "World Geography",
        desc: "Travel the globe through challenging geography questions",
        icon: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
        slug: "geography-trivia",
        aiPrompt: "Create 10 unique multiple-choice geography trivia questions that cover a diverse range of topics including countries, capitals, famous landmarks (natural and man-made), and interesting cultural facts from different regions around the world. Provide four options for each question, with only one correct answer. Ensure global representation and no repetition of the core geographical elements tested."
    },
    {
        name: "Scenario Challenge",
        desc: "Solve real-world dilemmas with your critical thinking skills",
        icon: "https://cdn-icons-png.flaticon.com/128/5261/5261309.png",
        slug: "scenario-trivia",
        aiPrompt: "Generate 10 unique multiple-choice scenario-based questions that present either funny, thought-provoking, or humorous real-world dilemmas. For each scenario, provide four distinct options representing potential actions or outcomes, with only one option being the most logical or intended response. Ensure each scenario is different and presents a unique challenge."
    },
    {
        name: "Movie Emoji Challenge",
        desc: "Decode emoji combinations to identify famous films",
        icon: "https://cdn-icons-png.flaticon.com/128/4221/4221419.png",
        slug: "movie-emoji-trivia",
        aiPrompt: "Create 10 unique 'Guess the Movie' multiple-choice questions using only emojis. The set should include 5 Hollywood movies, 4 Bollywood movies, and 1 Bhojpuri movie (clearly labeled as 'Bhojpuri Edition'). For each emoji sequence, provide four movie title options, with only one being correct. Ensure the movie selections are random each time a new set is generated and no movie is repeated within the set."
    },
    {
        name: "History Challenge",
        desc: "Compete with other history enthusiasts on world events",
        icon: "https://cdn-icons-png.flaticon.com/128/1825/1825357.png",
        slug: "history-trivia",
        aiPrompt: "Generate 10 unique multiple-choice history trivia questions covering a broad spectrum of historical periods and events from ancient times to the modern era across the globe. Include interesting and lesser-known facts within the questions. Provide four options for each question, with only one correct answer. Ensure no repetition of the main historical events or figures tested within this set."
    },
    {
        name: "Sports Trivia",
        desc: "Prove your sports expertise across all major leagues",
        icon: "https://cdn-icons-png.flaticon.com/512/857/857455.png",
        slug: "sports-trivia",
        aiPrompt: "Create 10 unique multiple-choice sports trivia questions covering a variety of major sports, famous athletes, and significant records. Aim for a medium difficulty level with a mix of slightly easier and more challenging questions. Provide four options for each question, with only one correct answer. Ensure diversity across different sports and no repetition of the core sporting facts tested within this set."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, this);
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_refresh__.register(_c, "Button$React.forwardRef");
__turbopack_refresh__.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/dashboard/content/[template-slug]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$data$292f$Templates$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(data)/Templates.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$web$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@google/genai/dist/web/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
function CreateNewContent(props) {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(props.params);
    const slug = params['template-slug'];
    // Type assertion for the Templates array
    const typedTemplates = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$data$292f$Templates$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    const selectedTemplate = typedTemplates.find((item)=>item.slug === slug);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [quizStarted, setQuizStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [userAnswers, setUserAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [quizResult, setQuizResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Securely handle API key - should be stored in environment variables
    const apiKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GEMINI_API_KEY || "AIzaSyAKLOkKi8UdFyKbP7a8cmjCnOZMlenPlco";
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const ai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$web$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleGenAI"]({
        apiKey
    });
    const generateQuiz = async ()=>{
        setLoading(true);
        try {
            const topic = selectedTemplate?.aiPrompt || "knowledge base quiz";
            const prompt = `Generate a random trivia bot like quiz with 10 multiple choice questions about ${topic}. 
                Return ONLY the raw JSON array without any markdown formatting or code blocks.
                Each question object must have:
                {
                    "question": "string",
                    "options": ["string", "string", "string", "string"],
                    "correctAnswer": "string" (must exactly match one option)
                }`;
            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: prompt
            });
            try {
                // Ensure response.text exists and is a string
                if (!response.text) {
                    throw new Error("Empty response from API");
                }
                let responseText = response.text;
                // Remove markdown code blocks if present
                if (responseText.startsWith('```json')) {
                    responseText = responseText.replace(/```json|```/g, '').trim();
                }
                const quizData = JSON.parse(responseText);
                if (!Array.isArray(quizData)) {
                    throw new Error("Invalid quiz format received");
                }
                setQuestions(quizData);
                setQuizStarted(true);
            } catch (parseError) {
                console.error("Failed to parse quiz data:", parseError, "Response:", response.text);
                alert(`Failed to process the quiz questions. Please try again. Error: ${parseError.message}`);
            }
        } catch (error) {
            console.error("Error generating quiz:", error);
            alert(`Failed to generate quiz. Please try again. ${error instanceof Error ? error.message : ''}`);
        } finally{
            setLoading(false);
        }
    };
    const handleAnswerSelect = (questionIndex, answer)=>{
        setUserAnswers((prev)=>({
                ...prev,
                [questionIndex]: answer
            }));
    };
    const submitQuiz = async ()=>{
        setLoading(true);
        try {
            const prompt = `Evaluate this quiz:
                Questions: ${JSON.stringify(questions)}
                User Answers: ${JSON.stringify(userAnswers)}
                
                Return a valid JSON object with:
                {
                    "score": number (count of correct answers),
                    "total": number (total questions),
                    "feedback": "string" (constructive feedback)
                }
                Ensure the response is valid JSON.`;
            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: prompt
            });
            try {
                // Ensure response.text exists and is a string
                if (!response.text) {
                    throw new Error("Empty response from API");
                }
                let responseText = response.text;
                // Remove markdown code blocks if present
                if (responseText.startsWith('```json')) {
                    responseText = responseText.replace(/```json|```/g, '').trim();
                }
                const result = JSON.parse(responseText);
                setQuizResult(result);
            } catch (parseError) {
                console.error("Failed to parse quiz results:", parseError);
                alert("Failed to process your quiz results. Please try again.");
            }
        } catch (error) {
            console.error("Error evaluating quiz:", error);
            alert(`Failed to evaluate quiz. Please try again. ${error instanceof Error ? error.message : ''}`);
        } finally{
            setLoading(false);
        }
    };
    const resetQuiz = ()=>{
        setQuizStarted(false);
        setQuestions([]);
        setUserAnswers({});
        setQuizResult(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/dashboard",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {}, void 0, false, {
                            fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                            lineNumber: 163,
                            columnNumber: 25
                        }, this),
                        "Back"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                    lineNumber: 163,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                lineNumber: 162,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-5 py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2",
                        children: !quizStarted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold mb-4",
                                    children: [
                                        selectedTemplate?.name || "General Knowledge",
                                        " Quiz"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: generateQuiz,
                                    disabled: loading,
                                    size: "lg",
                                    children: loading ? "Generating Quiz..." : "Start Quiz"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                            lineNumber: 169,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold",
                                    children: [
                                        selectedTemplate?.name || "General Knowledge",
                                        " Quiz"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                                    lineNumber: 183,
                                    columnNumber: 29
                                }, this),
                                questions.map((question, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 border rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold",
                                                children: [
                                                    index + 1,
                                                    ". ",
                                                    question.question
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 mt-2",
                                                children: question.options.map((option, optIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "radio",
                                                                id: `q${index}-o${optIndex}`,
                                                                name: `question-${index}`,
                                                                checked: userAnswers[index] === option,
                                                                onChange: ()=>handleAnswerSelect(index, option),
                                                                className: "mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: `q${index}-o${optIndex}`,
                                                                children: option
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, optIndex, true, {
                                                        fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 33
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: submitQuiz,
                                            disabled: loading,
                                            className: "flex-1",
                                            children: loading ? "Submitting..." : "Submit Quiz"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                                            lineNumber: 207,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            onClick: resetQuiz,
                                            className: "flex-1",
                                            children: "Reset"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                            lineNumber: 182,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                        lineNumber: 167,
                        columnNumber: 17
                    }, this),
                    quizResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 bg-blue-50 rounded-lg sticky top-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-4",
                                    children: "Quiz Results"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl mb-2",
                                    children: [
                                        "Score: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: [
                                                quizResult.score,
                                                "/",
                                                quizResult.total
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                                            lineNumber: 231,
                                            columnNumber: 40
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                                    lineNumber: 230,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg mb-4",
                                    children: quizResult.feedback
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                                    lineNumber: 233,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: resetQuiz,
                                    className: "w-full",
                                    children: "Take Another Quiz"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                                    lineNumber: 234,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                            lineNumber: 228,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                        lineNumber: 227,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
                lineNumber: 166,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/content/[template-slug]/page.tsx",
        lineNumber: 161,
        columnNumber: 9
    }, this);
}
_s(CreateNewContent, "uUwMKTyEZT7TyWKm78K2xEsEdV4=");
_c = CreateNewContent;
const __TURBOPACK__default__export__ = CreateNewContent;
var _c;
__turbopack_refresh__.register(_c, "CreateNewContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/dashboard/content/[template-slug]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_df97c5._.js.map