import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE {
    name: string
    desc: string
    icon: string
    category: string
    slug: string
    aiPrompt: string
    form?: FORM[]
}

export interface FORM {
    label: string
    field: string
    name: string
    required?: boolean
}

interface TemplateListSectionProps {
    userSearchInput: string
}

// Type assertion for the imported Templates
const typedTemplates = Templates as TEMPLATE[]

function TemplateListSection({ userSearchInput }: TemplateListSectionProps) {
    const [templateList, setTemplateList] = useState<TEMPLATE[]>(typedTemplates)
  
    useEffect(() => {
        if (userSearchInput) {
            const filterData = typedTemplates.filter(item =>
                item.name.toLowerCase().includes(userSearchInput.toLowerCase())
            )
            setTemplateList(filterData)
        } else {
            setTemplateList(typedTemplates)
        }
    }, [userSearchInput])

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
            {templateList.map((item, index) => (
                <TemplateCard key={item.slug || index} {...item} />
            ))}
        </div>
    )
}

export default TemplateListSection