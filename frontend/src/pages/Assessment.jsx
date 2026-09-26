import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";

function Assessment() {
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      title: "Find the Largest Element",
      description:
        "Write a program to find the largest element in an array of integers.",
      difficulty: "Easy",
      marks: 10,
    },
    {
      id: 2,
      title: "Reverse a String",
      description:
        "Write a program to reverse a given string without using a built-in reverse function.",
      difficulty: "Easy",
      marks: 10,
    },
    {
      id: 3,
      title: "Binary Search",
      description:
        "Implement binary search to find a target element in a sorted array.",
      difficulty: "Medium",
      marks: 10,
    },
    {
      id: 4,
      title: "Count Vowels",
      description:
        "Write a program to count the number of vowels present in a given string.",
      difficulty: "Easy",
      marks: 10,
    },
    {
      id: 5,
      title: "Check Palindrome",
      description:
        "Write a program to check whether a given string is a palindrome.",
      difficulty: "Easy",
      marks: 10,
    },
    {
      id: 6,
      title: "Sum of Array",
      description:
        "Write a program to calculate the sum of all elements in an integer array.",
      difficulty: "Easy",
      marks: 10,
    },
    {
      id: 7,
      title: "Find Second Largest",
      description:
        "Write a program to find the second largest element in an array.",
      difficulty: "Medium",
      marks: 10,
    },
    {
      id: 8,
      title: "Remove Duplicates",
      description:
        "Write a program to remove duplicate elements from an array.",
      difficulty: "Medium",
      marks: 10,
    },
    {
      id: 9,
      title: "Factorial",
      description:
        "Write a program to calculate the factorial of a given positive integer.",
      difficulty: "Easy",
      marks: 10,
    },
    {
      id: 10,
      title: "Fibonacci Series",
      description:
        "Write a program to generate the Fibonacci series up to a given number of terms.",
      difficulty: "Easy",
      marks: 10,
    },
  ];

  const createInitialCode = () => {
    return questions.reduce((codes, question) => {
      codes[question.id] = "// Write your solution here\n\n";
      return codes;
    }, {});
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [timeLeft, setTimeLeft] = useState(60 * 60);

  const [language, setLanguage] = useState("javascript");

  const [questionCodes, setQuestionCodes] = useState(
    createInitialCode()
  );

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      alert(
        "Your assessment time has expired. The assessment will be submitted."
      );

      navigate("/dashboard");

      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((previousTime) => previousTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  const handleCodeChange = (value) => {
    setQuestionCodes((previousCodes) => ({
      ...previousCodes,
      [questions[currentQuestion].id]: value || "",
    }));
  };

  const handleQuestionChange = (index) => {
    setCurrentQuestion(index);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleRunCode = () => {
    alert(
      "Code execution will be connected to the backend later."
    );
  };

  const handleSubmit = () => {
    const confirmed = window.confirm(
      "Are you sure you want to submit your assessment?"
    );

    if (!confirmed) {
      return;
    }

    alert("Assessment submitted successfully.");

    navigate("/dashboard");
  };

  const current = questions[currentQuestion];

  const timerWarning = timeLeft <= 300;

  return (
    <div className="assessment-page">

      <header className="assessment-header">

        <div className="assessment-header-title">
          <span>
            CODING ASSESSMENT
          </span>

          <h2>
            Programming Fundamentals
          </h2>
        </div>

        <div
          className={`timer ${
            timerWarning ? "timer-warning" : ""
          }`}
        >
          <span className="timer-label">
            TIME LEFT
          </span>

          <strong>
            {formatTime(timeLeft)}
          </strong>
        </div>

      </header>


      <div className="assessment-container">

        <aside className="question-sidebar">

          <h3>
            Questions
          </h3>

          <p className="question-progress">
            {currentQuestion + 1} of {questions.length}
          </p>

          <div className="question-list">

            {questions.map((question, index) => (

              <button
                key={question.id}
                className={`question-number ${
                  currentQuestion === index
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleQuestionChange(index)
                }
              >
                {index + 1}
              </button>

            ))}

          </div>

        </aside>


        <main className="coding-section">

          <section className="question-panel">

            <span className="page-label">
              QUESTION {currentQuestion + 1}
            </span>

            <h2>
              {current.title}
            </h2>

            <p>
              {current.description}
            </p>

            <div className="question-information">

              <div>
                <strong>
                  Difficulty
                </strong>

                <span>
                  {current.difficulty}
                </span>
              </div>

              <div>
                <strong>
                  Marks
                </strong>

                <span>
                  {current.marks}
                </span>
              </div>

            </div>

          </section>


          <section className="editor-section">

            <div className="editor-toolbar">

              <select
                value={language}
                onChange={(e) =>
                  setLanguage(e.target.value)
                }
              >

                <option value="javascript">
                  JavaScript
                </option>

                <option value="python">
                  Python
                </option>

                <option value="java">
                  Java
                </option>

                <option value="cpp">
                  C++
                </option>

              </select>


              <button
                className="run-button"
                onClick={handleRunCode}
              >
                ▶ Run Code
              </button>

            </div>


            <div className="code-editor">

              <Editor
                height="100%"
                language={language}
                theme="vs-dark"
                value={questionCodes[current.id]}
                onChange={handleCodeChange}
                options={{
                  minimap: {
                    enabled: false,
                  },
                  fontSize: 14,
                  automaticLayout: true,
                  tabSize: 2,
                  wordWrap: "on",
                }}
              />

            </div>

          </section>

        </main>

      </div>


      <footer className="assessment-footer">

        <button
          className="previous-button"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          ← Previous
        </button>


        <div className="assessment-footer-center">
          Question {currentQuestion + 1} of {questions.length}
        </div>


        <div>

          {currentQuestion < questions.length - 1 ? (

            <button
              className="next-button"
              onClick={handleNext}
            >
              Next →
            </button>

          ) : (

            <button
              className="submit-button"
              onClick={handleSubmit}
            >
              Submit Assessment
            </button>

          )}

        </div>

      </footer>

    </div>
  );
}

export default Assessment;