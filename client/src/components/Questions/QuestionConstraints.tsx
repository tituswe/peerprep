import { ArrowRightIcon } from '@heroicons/react/24/outline';
import SectionHeader from './SectionHeader';

const QuestionConstraints = () => {
  const constraints = [
    '2 <= nums.length <= 10^4',
    '-10^9 <= nums[i] <= 10^9',
    '-10^9 <= target <= 10^9',
    'Only one valid answer exists.'
  ];
  return (
    <div className="flex flex-col bg-gray-200 p-8 rounded-2xl shadow-lg gap-4">
      <SectionHeader title="Constraints" />

      {constraints.map((constraint, index) => (
        <div key={index} className="flex gap-4 items-center px-4">
          <ArrowRightIcon className="w-4 h-4" />
          {constraint}
        </div>
      ))}
    </div>
  );
};

export default QuestionConstraints;
