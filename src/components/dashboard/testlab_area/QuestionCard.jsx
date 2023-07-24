import { useState } from "react";
import RadioButton from "../../common/RadioButton";
import "./QuestionCard.css";

const QuestionCard = ({ problem, onChange, answer }) => {
  const [selected, setSelected] = useState()

  const handleSelect = (idx) => {
    setSelected(idx)
    if (onChange) {
      onChange(idx)
    }
  }

  useState(() => {
    setSelected(answer)
  }, [answer])

  return (
    <div className="question-card-container">
      <p className="question-card-question">{problem.question}</p>
      <div>
        {problem.choices.map((item, idx) => (
          <div className="question-card-item" key={idx}>
            <div className="question-card-answer">{item.answer}</div>
            <div className="question-card-choice">
                <RadioButton size={30} checked={selected === idx} onSelect={() => handleSelect(idx)}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
