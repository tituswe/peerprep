import { CheckIcon } from '@heroicons/react/24/solid';
import { useCallback, useEffect, useRef } from 'react';
import SectionHeader from './SectionHeader';

const QuestionDescription = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onAdd = useCallback(() => {
    alert('added');
  }, []);

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
          className="resize-none p-2 border rounded-xl overflow-hidden bg-gray-100 shadow-inner"
        />

        <button onClick={onAdd} className="flex justify-end">
          <div className="p-1 bg-gray-100 rounded-full shadow-lg hover:scale-105">
            <CheckIcon className="w-6 h-6 text-green-500" />
          </div>
        </button>
      </div>
    </>
  );
};

export default QuestionDescription;
