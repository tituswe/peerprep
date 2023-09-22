import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useCallback, useState } from 'react';
import SectionHeader from './SectionHeader';

const QuestionConstraints = () => {
  const [constraints, setConstraints] = useState<string[]>([]);

  const onAdd = useCallback(() => {
    setConstraints([...constraints, '']);
  }, [constraints]);

  const onRemove = useCallback(
    (index: number) => {
      setConstraints(constraints.filter((_, i) => i !== index));
    },
    [constraints]
  );

  return (
    <div className="flex flex-col bg-gray-200 p-8 rounded-2xl shadow-lg gap-4">
      <SectionHeader title="Constraints" />

      {constraints.map((_, index) => (
        <div key={index} className="flex gap-4 items-center px-4">
          <ArrowRightIcon className="w-4 h-4" />
          <input
            type="text"
            className="rounded-lg shadow-inner bg-gray-100 w-full"
          />
          <button onClick={() => onRemove(index)} className="pl-3 flex">
            <div className="p-1 bg-gray-100 rounded-full shadow-lg hover:scale-105">
              <MinusIcon className="w-4 h-4 text-rose-500" />
            </div>
          </button>
        </div>
      ))}

      <button onClick={onAdd} className="pl-3 flex">
        <div className="p-1 bg-gray-100 rounded-full shadow-lg hover:scale-105">
          <PlusIcon className="w-4 h-4 text-sky-500" />
        </div>
      </button>
    </div>
  );
};

export default QuestionConstraints;
