import QuestionExample from './QuestionExample';

const QuestionExamples = () => {
  const questions = [
    {
      input: {
        nums: '[2, 7, 11, 15]',
        target: '9'
      },
      output: '[0, 1]',
      explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
    }
  ];

  return (
    <>
      {questions.map((question, index) => (
        <QuestionExample
          isAdding
          key={index}
          index={index + 1}
          input={question.input}
          output={question.output}
          explanation={question.explanation}
        />
      ))}
    </>
  );
};

export default QuestionExamples;
