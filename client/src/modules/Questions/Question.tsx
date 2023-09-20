import QuestionConstraints from '../../components/Questions/QuestionConstraints';
import QuestionDescription from '../../components/Questions/QuestionDescription';
import QuestionExamples from '../../components/Questions/QuestionExamples';
import QuestionFooter from '../../components/Questions/QuestionFooter';
import QuestionHeader from '../../components/Questions/QuestionHeader';
import QuestionTags from '../../components/Questions/QuestionTags';

const Question = () => {
  return (
    <div className="flex flex-row w-full h-screen overflow-hidden">
      <div className="flex flex-col w-full min-w-[512px] max-w-[1024px] p-4 gap-4 overflow-auto">
        <QuestionHeader />
        <QuestionTags />
        <QuestionDescription />
        <QuestionExamples />
        <QuestionConstraints />
        <QuestionFooter />
      </div>
      <div className="flex flex-col w-full p-4 gap-4 overflow-auto">
        Text Editor
      </div>
    </div>
  );
};

export default Question;
