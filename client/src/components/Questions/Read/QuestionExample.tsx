import SectionHeader from './SectionHeader';

interface QuestionExampleProps {
  index: number;
  input: Record<string, string>;
  output: string;
  explanation?: string;
}

const QuestionExample: React.FC<QuestionExampleProps> = ({
  index,
  input,
  output,
  explanation
}) => {
  return (
    <div className="flex flex-col bg-gray-200 p-8 rounded-2xl shadow-lg">
      <SectionHeader title={`Example ${index}`} />

      <div className="flex flex-col pt-4 px-4 gap-2">
        <div className="flex flex-row gap-4">
          <a className="w-[100px]">In: </a>
          {Object.entries(input).map(([key, value], id) => (
            <div key={id} className="flex gap-4">
              <p>
                {key} = {value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4">
          <a className="w-[100px]">Out: </a>
          <p>{output}</p>
        </div>

        {explanation && (
          <div className="flex flex-row gap-4">
            <a className="w-[100px]">Explanation: </a>
            <p>{explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionExample;
