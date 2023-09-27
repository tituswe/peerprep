import QuestionConstraints from '../../components/Questions/Write/QuestionConstraints';
import QuestionDescription from '../../components/Questions/Write/QuestionDescription';
import QuestionExamples from '../../components/Questions/Write/QuestionExamples';
import QuestionHeader from '../../components/Questions/Write/QuestionHeader';
import QuestionTags from '../../components/Questions/Write/QuestionTags';

const QuestionCreator = () => {
  return (
    <>
      <div className="flex flex-row w-full h-screen overflow-hidden">
        <div className="flex flex-col w-full min-w-[512px] max-w-[1024px] p-4 gap-4 overflow-auto">
          <QuestionHeader />
          <QuestionTags />
          <QuestionDescription />
          <QuestionExamples />
          <QuestionConstraints />
        </div>
        <div className="flex flex-col w-full p-4 gap-4 overflow-auto">
          Text Editor
        </div>
      </div>
      <div className="absolute bottom-8 w-full flex justify-center">
        <button
          onClick={() => alert('submitted!')}
          className="px-16 py-4 rounded-full bg-lime-500 bg-opacity-50 hover:bg-opacity-100 text-white font-semibold shadow-xl transition hover:scale-105"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default QuestionCreator;
