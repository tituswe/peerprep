import QuestionConstraints from '../../components/Questions/Read/QuestionConstraints';
import QuestionDescription from '../../components/Questions/Read/QuestionDescription';
import QuestionExamples from '../../components/Questions/Read/QuestionExamples';
import QuestionFooter from '../../components/Questions/Read/QuestionFooter';
import QuestionHeader from '../../components/Questions/Read/QuestionHeader';
import QuestionTags from '../../components/Questions/Read/QuestionTags';

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
