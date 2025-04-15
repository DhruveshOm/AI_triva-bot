import React,{ useEffect, useRef,use } from 'react'


import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface props{
  aiOutput:string;
}

function OutputSection({aiOutput}:props) {
    const editorRef:any=useRef<any>(null);

    useEffect(()=>{
      const editorInstance=editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput);
    },[aiOutput])

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
        <div className='flex justify-between items-center p-5'>
            <h2>Your Result</h2>
            <Button className='gap-2'><Copy className='w-4 h-4' />Copy</Button>
        </div>
        
    {/* <Editor
    ref={editorRef}
    initialValue="Your result will appear here."
    // previewStyle="vertical"
    height="600px"
    initialEditType="wysiwyg"
    useCommandShortcut={true}
    onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
  /> */}
  </div>
  )
}
export default OutputSection