import SectionHeader from './SectionHeader';

const QuestionDescription = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-200 gap-4 p-8 rounded-2xl shadow-lg">
        <SectionHeader title="Description" />

        <p className="px-4">
          You are given an integer array nums and an integer x. In one
          operation, you can either remove the leftmost or the rightmost element
          from the array nums and subtract its value from x. Note that this
          modifies the array for future operations.
        </p>
        <p className="px-4">
          Return the minimum number of operations to reduce x to exactly 0 if it
          is possible, otherwise, return -1.
        </p>
      </div>
    </>
  );
};

export default QuestionDescription;
