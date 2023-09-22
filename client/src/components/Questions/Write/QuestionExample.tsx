import { useEffect, useRef, useState } from 'react';
import SectionHeader from './SectionHeader';

const QuestionExample = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [explanation, setExplanation] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [textareaRef.current?.value]);

  return (
    <div className="flex flex-col bg-gray-200 p-8 rounded-2xl shadow-lg">
      <SectionHeader title={`Example`} />

      <div className="flex flex-col pt-4 px-4 gap-2">
        <div className="flex flex-row gap-4">
          <a className="min-w-[100px] w-[100px]">In: </a>
          <input
            type="text"
            className="rounded-lg shadow-inner bg-gray-100 w-full"
          />
        </div>

        <div className="flex flex-row gap-4">
          <a className="min-w-[100px] w-[100px]">Out: </a>
          <input
            type="text"
            className="rounded-lg shadow-inner bg-gray-100 w-full"
          />
        </div>

        <div className="flex flex-row gap-4">
          <a className="min-w-[100px] w-[100px]">Explanation: </a>
          <textarea
            ref={textareaRef}
            rows={1}
            onChange={() => {
              if (textareaRef.current) {
                textareaRef.current.style.height = 'auto';
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
              }
            }}
            className="resize-none min-h-[60px] p-2 border rounded-xl overflow-hidden bg-gray-100 shadow-inner w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionExample;
