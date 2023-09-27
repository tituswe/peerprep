import { useSelector } from 'react-redux';
import { selectQuestions } from '../../features/questions/questionsSlice';
import { Question } from '../../types';

const QuestionTable = () => {
  const questions = useSelector(selectQuestions);

  return (
    <table>
      <thead className="text-neutral-500 text-left">
        <tr>
          <th className="p-4 w-24">Status</th>
          <th className="p-4">Title</th>
          <th className="p-4 w-24">Solution</th>
          <th className="p-4 w-24">Acceptance</th>
          <th className="p-4 w-36">Difficulty</th>
          <th className="p-4 w-48">Frequency</th>
        </tr>
      </thead>
      <tbody className="border-t">
        {questions.map((question: Question, index: number) => (
          <tr key={question.id}>
            <td className="p-4 w-24">TODO</td>
            <td className="p-4">
              {index}. {question.title}
            </td>
            <td className="p-4 w-24">TODO</td>
            <td className="p-4 w-24">TODO</td>
            <td className="p-4 w-36">{question.difficulty}</td>
            <td className="p-4 w-48">TODO</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuestionTable;
