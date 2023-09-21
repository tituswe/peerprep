import { CheckIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useCallback, useState } from 'react';
import QuestionTag from './QuestionTag';

const QuestionTags = () => {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [tag, setTag] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);

  const onAdd = useCallback(() => {
    setTags([tag, ...tags]);
    setIsAdding(false);
    setTag('');
  }, [tag]);

  const onDelete = useCallback(
    (tag: string) => {
      setTags(tags.filter((t) => t !== tag));
      setTag('');
    },
    [tags]
  );

  const onToggle = useCallback(() => {
    setIsAdding(!isAdding);
    setTag('');
  }, [isAdding]);

  return (
    <div className="flex flex-row flex-wrap gap-4 px-4 py-2 items-center">
      {isAdding ? (
        <button
          onClick={onAdd}
          className="rounded-full p-2 shadow-xl transition hover:scale-105"
        >
          <CheckIcon className="w-6 h-6  text-green-500" />
        </button>
      ) : (
        <button
          onClick={onToggle}
          className="rounded-full p-2 shadow-xl transition hover:scale-105"
        >
          <PlusIcon className="w-6 h-6 text-sky-500" />
        </button>
      )}

      {isAdding && (
        <div className="relative text-sm font-semibold text-rose-500 min-h-[36px] rounded-xl px-4 py-2 bg-gray-100 shadow-md">
          <input
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="rounded-xl bg-transparent shadow-inner"
          />
          <button
            onClick={onToggle}
            className="absolute -top-2 -right-2 p-1 rounded-full shadow-md"
          >
            <MinusIcon className="w-3 h-3 text-rose-500" />
          </button>
        </div>
      )}
      {tags.map((tag, index) => (
        <QuestionTag key={index} tag={tag} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default QuestionTags;