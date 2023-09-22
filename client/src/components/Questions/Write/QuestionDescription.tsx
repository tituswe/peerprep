import { useEffect, useRef } from 'react';
import SectionHeader from './SectionHeader';

const QuestionDescription = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [textareaRef.current?.value]);

  return (
    <>
      <div className="flex flex-col bg-gray-200 gap-4 p-8 rounded-2xl shadow-lg">
        <SectionHeader title="Description" />

        <textarea
          ref={textareaRef}
          rows={1}
          onChange={() => {
            if (textareaRef.current) {
              textareaRef.current.style.height = 'auto';
              textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            }
          }}
          className="resize-none min-h-[80px] p-2 border rounded-xl overflow-hidden bg-gray-100 shadow-inner"
        />
      </div>
    </>
  );
};

export default QuestionDescription;
