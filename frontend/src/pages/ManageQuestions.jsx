import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ManageQuestions() {
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [selectedAssessment, setSelectedAssessment] = useState(
    "Programming Fundamentals"
  );

  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "Find the Largest Element",
      description:
        "Write a program to find the largest element in an array of integers.",
      difficulty: "Easy",
      marks: 10,
      language: "JavaScript",
    },
    {
      id: 2,
      title: "Reverse a String",
      description:
        "Write a program to reverse a given string without using a built-in reverse function.",
      difficulty: "Easy",
      marks: 10,
      language: "JavaScript",
    },
    {
      id: 3,
      title: "Binary Search",
      description:
        "Implement binary search to find a target element in a sorted array.",
      difficulty: "Medium",
      marks: 10,
      language: "JavaScript",
    },
    {
      id: 4,
      title: "Check Palindrome",
      description:
        "Write a program to check whether a given string is a palindrome.",
      difficulty: "Easy",
      marks: 10,
      language: "Python",
    },
    {
      id: 5,
      title: "Find Second Largest",
      description:
        "Write a program to find the second largest element in an array.",
      difficulty: "Medium",
      marks: 10,
      language: "Java",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    difficulty: "Easy",
    marks: "10",
    language: "JavaScript",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      difficulty: "Easy",
      marks: "10",
      language: "JavaScript",
    });

    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      setQuestions((previousQuestions) =>
        previousQuestions.map((question) =>
          question.id === editingId
            ? {
                ...question,
                title: formData.title,
                description: formData.description,
                difficulty: formData.difficulty,
                marks: Number(formData.marks),
                language: formData.language,
              }
            : question
        )
      );

      alert("Question updated successfully.");
    } else {
      const newQuestion = {
        id:
          questions.length > 0
            ? Math.max(
                ...questions.map((question) => question.id)
              ) + 1
            : 1,
        title: formData.title,
        description: formData.description,
        difficulty: formData.difficulty,
        marks: Number(formData.marks),
        language: formData.language,
      };

      setQuestions((previousQuestions) => [
        ...previousQuestions,
        newQuestion,
      ]);

      alert("Question added successfully.");
    }

    resetForm();
  };

  const handleEdit = (question) => {
    setEditingId(question.id);

    setFormData({
      title: question.title,
      description: question.description,
      difficulty: question.difficulty,
      marks: String(question.marks),
      language: question.language,
    });

    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this question?"
    );

    if (!confirmed) {
      return;
    }

    setQuestions((previousQuestions) =>
      previousQuestions.filter(
        (question) => question.id !== id
      )
    );
  };

  const handlePreview = (question) => {
    alert(
      `Question Preview\n\n${question.title}\n\n${question.description}\n\nDifficulty: ${question.difficulty}\nMarks: ${question.marks}\nLanguage: ${question.language}`
    );
  };

  const totalMarks = questions.reduce(
    (total, question) => total + Number(question.marks),
    0
  );

  return (
    <div className="admin-page">

      {/* HEADER */}

      <header className="admin-header">

        <div className="student-brand">

          <div className="student-brand-logo">
            RC
          </div>

          <div>
            <strong>
              Remote Coding
            </strong>

            <span>
              Assessment Platform
            </span>
          </div>

        </div>


        <div className="admin-user">

          <div className="student-avatar">
            A
          </div>

          <span>
            Administrator
          </span>

          <button
            className="admin-logout"
            onClick={() => navigate("/login")}
          >
            Logout
          </button>

        </div>

      </header>


      {/* MAIN CONTENT */}

      <main className="admin-content">


        {/* PAGE HEADER */}

        <section className="admin-page-header">

          <div>

            <span className="page-label">
              QUESTION MANAGEMENT
            </span>

            <h1>
              Manage Questions
            </h1>

            <p>
              Create and organize coding questions for your
              assessments.
            </p>

          </div>


          <div className="admin-actions">

            <button
              className="admin-secondary-button"
              onClick={() =>
                navigate("/admin/assessments")
              }
            >
              ← Assessments
            </button>

            <button
              className="admin-primary-button"
              onClick={() => {
                if (showForm) {
                  resetForm();
                } else {
                  setShowForm(true);
                }
              }}
            >
              {showForm
                ? "Cancel"
                : "+ Add Question"}
            </button>

          </div>

        </section>


        {/* ASSESSMENT SELECTOR */}

        <section className="question-assessment-bar">

          <div>

            <span>
              CURRENT ASSESSMENT
            </span>

            <strong>
              {selectedAssessment}
            </strong>

          </div>


          <select
            value={selectedAssessment}
            onChange={(e) =>
              setSelectedAssessment(e.target.value)
            }
          >

            <option value="Programming Fundamentals">
              Programming Fundamentals
            </option>

            <option value="Web Development Basics">
              Web Development Basics
            </option>

            <option value="Data Structures">
              Data Structures
            </option>

            <option value="Database Fundamentals">
              Database Fundamentals
            </option>

          </select>

        </section>


        {/* SUMMARY */}

        <section className="admin-stats question-summary">


          <div className="admin-stat-card">

            <span>
              TOTAL QUESTIONS
            </span>

            <strong>
              {questions.length}
            </strong>

            <small>
              Questions in assessment
            </small>

          </div>


          <div className="admin-stat-card">

            <span>
              TOTAL MARKS
            </span>

            <strong>
              {totalMarks}
            </strong>

            <small>
              Combined question marks
            </small>

          </div>


          <div className="admin-stat-card">

            <span>
              EASY
            </span>

            <strong>
              {
                questions.filter(
                  (question) =>
                    question.difficulty === "Easy"
                ).length
              }
            </strong>

            <small>
              Beginner questions
            </small>

          </div>


          <div className="admin-stat-card">

            <span>
              MEDIUM / HARD
            </span>

            <strong>
              {
                questions.filter(
                  (question) =>
                    question.difficulty === "Medium" ||
                    question.difficulty === "Hard"
                ).length
              }
            </strong>

            <small>
              Advanced questions
            </small>

          </div>


        </section>


        {/* ADD / EDIT FORM */}

        {showForm && (

          <section className="admin-form question-form">

            <div className="question-form-heading">

              <div>

                <span className="section-label">
                  {editingId
                    ? "EDIT QUESTION"
                    : "NEW QUESTION"}
                </span>

                <h2>
                  {editingId
                    ? "Edit Coding Question"
                    : "Add Coding Question"}
                </h2>

                <p>
                  Define the question details that candidates
                  will see during the assessment.
                </p>

              </div>

            </div>


            <form onSubmit={handleSubmit}>


              <div className="admin-form-grid">


                <div className="admin-form-group full">

                  <label>
                    Question Title
                  </label>

                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g. Find the Largest Element"
                    required
                  />

                </div>


                <div className="admin-form-group full">

                  <label>
                    Problem Description
                  </label>

                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe the problem clearly for the candidate..."
                    required
                  />

                </div>


                <div className="admin-form-group">

                  <label>
                    Difficulty
                  </label>

                  <select
                    name="difficulty"
                    value={formData.difficulty}
                    onChange={handleInputChange}
                  >

                    <option value="Easy">
                      Easy
                    </option>

                    <option value="Medium">
                      Medium
                    </option>

                    <option value="Hard">
                      Hard
                    </option>

                  </select>

                </div>


                <div className="admin-form-group">

                  <label>
                    Marks
                  </label>

                  <input
                    type="number"
                    name="marks"
                    value={formData.marks}
                    onChange={handleInputChange}
                    min="1"
                    placeholder="10"
                    required
                  />

                </div>


                <div className="admin-form-group">

                  <label>
                    Default Language
                  </label>

                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                  >

                    <option value="JavaScript">
                      JavaScript
                    </option>

                    <option value="Python">
                      Python
                    </option>

                    <option value="Java">
                      Java
                    </option>

                    <option value="C++">
                      C++
                    </option>

                  </select>

                </div>


              </div>


              <div className="question-form-footer">

                <span>
                  Test cases and code execution can be
                  connected through the backend later.
                </span>


                <div className="admin-actions">

                  <button
                    type="button"
                    className="admin-secondary-button"
                    onClick={resetForm}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="admin-primary-button"
                  >
                    {editingId
                      ? "Update Question"
                      : "Add Question"}
                  </button>

                </div>

              </div>


            </form>

          </section>

        )}


        {/* QUESTIONS TABLE */}

        <section className="admin-panel">

          <div className="admin-panel-header">

            <div>

              <span className="section-label">
                QUESTION BANK
              </span>

              <h2>
                Assessment Questions
              </h2>

            </div>

            <span className="assessment-count">
              {questions.length} questions
            </span>

          </div>


          <div className="admin-table-card">

            <table className="admin-table question-management-table">

              <thead>

                <tr>

                  <th>
                    #
                  </th>

                  <th>
                    QUESTION
                  </th>

                  <th>
                    DIFFICULTY
                  </th>

                  <th>
                    MARKS
                  </th>

                  <th>
                    LANGUAGE
                  </th>

                  <th>
                    ACTIONS
                  </th>

                </tr>

              </thead>


              <tbody>

                {questions.map((question, index) => (

                  <tr key={question.id}>

                    <td>
                      <span className="question-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </td>


                    <td>

                      <div className="admin-question-name">

                        <strong>
                          {question.title}
                        </strong>

                        <span>
                          {question.description}
                        </span>

                      </div>

                    </td>


                    <td>

                      <span
                        className={`question-difficulty ${question.difficulty.toLowerCase()}`}
                      >
                        {question.difficulty}
                      </span>

                    </td>


                    <td>
                      {question.marks}
                    </td>


                    <td>
                      {question.language}
                    </td>


                    <td>

                      <div className="assessment-row-actions">

                        <button
                          className="admin-small-button"
                          onClick={() =>
                            handlePreview(question)
                          }
                        >
                          Preview
                        </button>

                        <button
                          className="admin-small-button"
                          onClick={() =>
                            handleEdit(question)
                          }
                        >
                          Edit
                        </button>

                        <button
                          className="admin-small-button danger"
                          onClick={() =>
                            handleDelete(question.id)
                          }
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}


                {questions.length === 0 && (

                  <tr>

                    <td
                      colSpan="6"
                      className="empty-assessments"
                    >
                      No questions have been added to this
                      assessment yet.

                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </section>


        {/* QUESTION SET GUIDE */}

        <section className="question-guide">

          <div>

            <span className="section-label">
              QUESTION SET
            </span>

            <h2>
              Build a balanced assessment
            </h2>

            <p>
              Questions should cover different levels of
              difficulty and coding concepts.
            </p>

          </div>


          <div className="question-guide-items">


            <div className="question-guide-item">

              <span className="guide-number">
                01
              </span>

              <div>

                <strong>
                  Easy
                </strong>

                <small>
                  Core concepts and basic logic
                </small>

              </div>

            </div>


            <div className="question-guide-item">

              <span className="guide-number">
                02
              </span>

              <div>

                <strong>
                  Medium
                </strong>

                <small>
                  Problem solving and implementation
                </small>

              </div>

            </div>


            <div className="question-guide-item">

              <span className="guide-number">
                03
              </span>

              <div>

                <strong>
                  Hard
                </strong>

                <small>
                  Advanced algorithms and logic
                </small>

              </div>

            </div>


          </div>

        </section>


      </main>

    </div>
  );
}

export default ManageQuestions;