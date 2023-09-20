import QuestionTag from './QuestionTag';

const QuestionTags = () => {
  const tags = ['Data Structures', 'Strings', 'Two Pointer'];

  return (
    <div className="flex flex-row gap-4 px-4 py-2">
      {tags.map((tag, index) => (
        <QuestionTag key={index} tag={tag} />
      ))}
    </div>
  );
};

export default QuestionTags;
