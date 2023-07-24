import React, { useState } from "react";
import ProgressBar from "../../common/ProgressBar";
import "./TestExamArea.css";
import QuestionCard from "./QuestionCard";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const mockData = {
  topic: "Six Sigma Methodology",
  problems: [
    {
      question: "What is the primary goal of Six Sigma methodology?",
      choices: [
        {
          answer: "a) Reduce process variability",
          correctness: true,
        },
        {
          answer: "b) Improve customer satisfaction",
          correctness: false,
        },
        {
          answer: "c) Increase operational efficiency",
          correctness: false,
        },
        {
          answer: "d) Enhance employee morale",
          correctness: false,
        },
      ],
    },
    {
      question:
        "Which of the following tools is commonly used to analyze process data and identify potential improvement opportunities in Six Sigma?",
      choices: [
        {
          answer: "a) Reduce process variability",
          correctness: true,
        },
        {
          answer: "b) Improve customer satisfaction",
          correctness: false,
        },
        {
          answer: "c) Increase operational efficiency",
          correctness: false,
        },
        {
          answer: "d) Enhance employee morale",
          correctness: false,
        },
      ],
    },
    {
      question: "What is the primary goal of Six Sigma methodology?",
      choices: [
        {
          answer: "a) Reduce process variability",
          correctness: true,
        },
        {
          answer: "b) Improve customer satisfaction",
          correctness: false,
        },
        {
          answer: "c) Increase operational efficiency",
          correctness: false,
        },
        {
          answer: "d) Enhance employee morale",
          correctness: false,
        },
      ],
    },
    {
      question:
        "Which of the following tools is commonly used to analyze process data and identify potential improvement opportunities in Six Sigma?",
      choices: [
        {
          answer: "a) Reduce process variability",
          correctness: true,
        },
        {
          answer: "b) Improve customer satisfaction",
          correctness: false,
        },
        {
          answer: "c) Increase operational efficiency",
          correctness: false,
        },
        {
          answer: "d) Enhance employee morale",
          correctness: false,
        },
      ],
    },
    {
      question: "What is the primary goal of Six Sigma methodology?",
      choices: [
        {
          answer: "a) Reduce process variability",
          correctness: true,
        },
        {
          answer: "b) Improve customer satisfaction",
          correctness: false,
        },
        {
          answer: "c) Increase operational efficiency",
          correctness: false,
        },
        {
          answer: "d) Enhance employee morale",
          correctness: false,
        },
      ],
    },
    {
      question:
        "Which of the following tools is commonly used to analyze process data and identify potential improvement opportunities in Six Sigma?",
      choices: [
        {
          answer: "a) Reduce process variability",
          correctness: true,
        },
        {
          answer: "b) Improve customer satisfaction",
          correctness: false,
        },
        {
          answer: "c) Increase operational efficiency",
          correctness: false,
        },
        {
          answer: "d) Enhance employee morale",
          correctness: false,
        },
      ],
    },
    {
      question: "What is the primary goal of Six Sigma methodology?",
      choices: [
        {
          answer: "a) Reduce process variability",
          correctness: true,
        },
        {
          answer: "b) Improve customer satisfaction",
          correctness: false,
        },
        {
          answer: "c) Increase operational efficiency",
          correctness: false,
        },
        {
          answer: "d) Enhance employee morale",
          correctness: false,
        },
      ],
    },
    {
      question:
        "Which of the following tools is commonly used to analyze process data and identify potential improvement opportunities in Six Sigma?",
      choices: [
        {
          answer: "a) Reduce process variability",
          correctness: true,
        },
        {
          answer: "b) Improve customer satisfaction",
          correctness: false,
        },
        {
          answer: "c) Increase operational efficiency",
          correctness: false,
        },
        {
          answer: "d) Enhance employee morale",
          correctness: false,
        },
      ],
    },
  ],
};

const TestExamArea = () => {
  const [data, setData] = useState(() => mockData);
  const [result, setResult] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleChange = (choiceId, problemId) => {
    setResult((prvResult) => ({
      ...result,
      [problemId]: choiceId,
    }));
  };

  const progress = (Object.keys(result).length / data.problems.length) * 100;

  const score =
    (Object.keys(result).filter(
      (res) =>
        data.problems[res].choices.findIndex((a) => a.correctness === true) ===
        result[res]
    ).length *
      100) /
    data.problems.length;

  const correctCount = Object.keys(result).filter(
    (res) =>
      data.problems[res].choices.findIndex((a) => a.correctness === true) ===
      result[res]
  ).length;

  return (
    <div className="test-exam-container">
      <div className="test-exam-header">
        <div className="test-exam-header-1">
          <h3 className="test-exam-header-title">Test Lab</h3>
          {progress === 100 && (
            <button
              className="test-exam-show-btn"
              onClick={() => setShowResult(true)}
            >
              Finish
            </button>
          )}
        </div>
        <ProgressBar value={progress} />
        <h4 className="test-exam-topic">
          {showResult ? `Great Job your score:` : data.topic}
        </h4>
        <p className="test-exam-problem-count">
          {showResult
            ? "Good Effort!  You have completed the Six Sigma Methodology quiz."
            : `${data.problems.length} Questions`}
        </p>
      </div>
      <div className="test-exam-test-area">
        {showResult ? (
          <div className="test-exam-result-container">
            <div className="test-exam-result-content">
              <div className="test-exam-result-1">
                <h5
                  style={{
                    marginBottom: 0,
                    color: "white",
                  }}
                >
                  Score
                </h5>
                <p className="test-exam-percentage">{score}%</p>
              </div>
              <div className="test-exam-result-2">
                <div className="test-exam-circle-bar">
                  <CircularProgressbar
                    value={correctCount / data.problems.length * 100}
                    text={`${correctCount}`}
                    strokeWidth={12}
                    styles={buildStyles({
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "butt",

                      // Text size
                      textSize: "30px",

                      // How long animation takes to go from one percentage to another, in seconds
                      pathTransitionDuration: 0.5,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `#B6F09C`,
                      textColor: "#FFF",
                      trailColor: "#1B1D20",
                      backgroundColor: "#0C1132",
                    })}
                  />
                </div>
                <div className="test-exam-total-count">
                  <h5
                    style={{
                      marginBottom: 0,
                      color: "white",
                    }}
                  >
                    Total Correctness
                  </h5>
                  <p
                    style={{
                      color: "#9B9C9E",
                      padding: 0,
                      margin: 0,
                      fontSize: "12px",
                    }}
                  >
                    {correctCount} out of {data.problems.length} correct answers
                  </p>
                </div>
              </div>
            </div>
            <div className="test-exam-result-btn-container">
              <button className="cbtn cbtn-secondary">I'm done</button>
              <button className="cbtn cbtn-primary">Take another Test</button>
            </div>
          </div>
        ) : (
          <div style={{ marginBottom: "100px" }}>
            {data.problems.map((problem, idx) => (
              <div key={idx} className="test-exam-question">
                <h5 className="test-exam-question-no">Question {idx + 1}</h5>
                <QuestionCard
                  problem={problem}
                  answer={result[idx]}
                  onChange={(selectedIdx) => handleChange(selectedIdx, idx)}
                />
                <button className="test-exam-show-btn">Show answer</button>
              </div>
            ))}
          </div>
        )}
        <div className="test-exam-question-mask"></div>
      </div>
    </div>
  );
};

export default TestExamArea;
