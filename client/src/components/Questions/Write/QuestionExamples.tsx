import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useCallback, useState } from 'react';
import QuestionExample from './QuestionExample';

const QuestionExamples = () => {
  const [examples, setExamples] = useState<number[]>([]);

  const onAdd = useCallback(() => {
    setExamples([...examples, examples.length]);
  }, [examples]);

  const onDelete = useCallback(
    (index: number) => {
      console.log(index);
      setExamples(examples.filter((_, i) => i !== index));
    },
    [examples]
  );

  return (
    <>
      {examples.map((_, index) => (
        <div key={index} className="relative">
          <QuestionExample />
          <button
            onClick={() => onDelete(index)}
            className="absolute -top-2 -right-2 p-1 rounded-full shadow-md bg-gray-100"
          >
            <MinusIcon className="w-4 h-4 text-rose-500" />
          </button>
        </div>
      ))}

      <button
        onClick={onAdd}
        className="flex justify-center bg-gray-100 p-8 rounded-2xl shadow-lg transition hover:bg-gray-200 hover:opacity-75"
      >
        <PlusIcon className="w-6 h-6 text-sky-500" />
      </button>
    </>
  );
};

export default QuestionExamples;
