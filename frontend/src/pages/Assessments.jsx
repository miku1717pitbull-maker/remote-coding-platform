import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Assessments() {
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);

  const [assessments, setAssessments] = useState([
    {
      id: 1,
      title: "Programming Fundamentals",
      description:
        "Basic programming and problem-solving assessment.",
      questions: 10,
      duration: 60,
      marks: 100,
      candidates: 84,
      status: "Active",
    },
    {
      id: 2,
      title: "Web Development Basics",
      description:
        "Assessment covering HTML, CSS and JavaScript fundamentals.",
      questions: 15,
      duration: 75,
      marks: 100,
      candidates: 62,
      status: "Completed",
    },
    {
      id: 3,
      title: "Data Structures",
      description:
        "Coding assessment focused on common data structures.",
      questions: 20,
      duration: 90,
      marks: 100,
      candidates: 51,
      status: "Active",
    },
    {
      id: 4,
      title: "Database Fundamentals",
      description:
        "SQL and database concepts assessment.",
      questions: 12,
      duration: 60,
      marks: 100,
      candidates: 37,
      status: "Completed",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    marks: "",
    difficulty: "Mixed",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleCreateAssessment = (e) => {
    e.preventDefault();

    const newAssessment = {
      id: assessments.length + 1,
      title: formData.title,
      description: formData.description,
      questions: 0,
      duration: Number(formData.duration),
      marks: Number(formData.marks),
      candidates: 0,
      status: "Draft",
    };

    setAssessments((previousAssessments) => [
      ...previousAssessments,
      newAssessment,
    ]);

    setFormData({
      title: "",
      description: "",
      duration: "",
      marks: "",
      difficulty: "Mixed",
    });

    setShowForm(false);

    alert(
      "Assessment created successfully. Add questions before activating it."
    );
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this assessment?"
    );

    if (!confirmed) {
      return;
    }

    setAssessments((previousAssessments) =>
      previousAssessments.filter(
        (assessment) => assessment.id !== id
      )
    );
  };

  const handleToggleStatus = (id) => {
    setAssessments((previousAssessments) =>
      previousAssessments.map((assessment) => {
        if (assessment.id !== id) {
          return assessment;
        }

        let newStatus = "Active";

        if (assessment.status === "Active") {
          newStatus = "Inactive";
        }

        if (assessment.status === "Inactive") {
          newStatus = "Active";
        }

        if (assessment.status === "Draft") {
          newStatus = "Active";
        }

        return {
          ...assessment,
          status: newStatus,
        };
      })
    );
  };

  const handleEdit = () => {
    alert(
      "Edit functionality will be connected to the backend/API later."
    );
  };

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


      {/* CONTENT */}

      <main className="admin-content">


        {/* PAGE HEADER */}

        <section className="admin-page-header">

          <div>

            <span className="page-label">
              ASSESSMENT MANAGEMENT
            </span>

            <h1>
              Assessments
            </h1>

            <p>
              Create, manage and organize coding assessments.
            </p>

          </div>


          <div className="admin-actions">

            <button
              className="admin-secondary-button"
              onClick={() => navigate("/admin")}
            >
              ← Dashboard
            </button>

            <button
              className="admin-primary-button"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm
                ? "Cancel"
                : "+ Create Assessment"}
            </button>

          </div>

        </section>


        {/* SUMMARY */}

        <section className="admin-stats assessment-summary">

          <div className="admin-stat-card">

            <span>
              TOTAL ASSESSMENTS
            </span>

            <strong>
              {assessments.length}
            </strong>

            <small>
              All assessments
            </small>

          </div>


          <div className="admin-stat-card">

            <span>
              ACTIVE
            </span>

            <strong>
              {
                assessments.filter(
                  (assessment) =>
                    assessment.status === "Active"
                ).length
              }
            </strong>

            <small>
              Currently available
            </small>

          </div>


          <div className="admin-stat-card">

            <span>
              COMPLETED
            </span>

            <strong>
              {
                assessments.filter(
                  (assessment) =>
                    assessment.status === "Completed"
                ).length
              }
            </strong>

            <small>
              Previous assessments
            </small>

          </div>


          <div className="admin-stat-card">

            <span>
              DRAFTS
            </span>

            <strong>
              {
                assessments.filter(
                  (assessment) =>
                    assessment.status === "Draft"
                ).length
              }
            </strong>

            <small>
              Awaiting setup
            </small>

          </div>

        </section>


        {/* CREATE FORM */}

        {showForm && (

          <section className="admin-form">

            <div className="assessment-form-heading">

              <div>

                <span className="section-label">
                  NEW ASSESSMENT
                </span>

                <h2>
                  Create Assessment
                </h2>

                <p>
                  Enter the basic details for the new coding
                  assessment.
                </p>

              </div>

            </div>


            <form onSubmit={handleCreateAssessment}>

              <div className="admin-form-grid">


                <div className="admin-form-group">

                  <label>
                    Assessment Title
                  </label>

                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g. Java Programming Test"
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

                    <option value="Mixed">
                      Mixed
                    </option>

                  </select>

                </div>


                <div className="admin-form-group full">

                  <label>
                    Description
                  </label>

                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe the assessment..."
                    required
                  />

                </div>


                <div className="admin-form-group">

                  <label>
                    Duration (Minutes)
                  </label>

                  <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    placeholder="60"
                    min="1"
                    required
                  />

                </div>


                <div className="admin-form-group">

                  <label>
                    Total Marks
                  </label>

                  <input
                    type="number"
                    name="marks"
                    value={formData.marks}
                    onChange={handleInputChange}
                    placeholder="100"
                    min="1"
                    required
                  />

                </div>

              </div>


              <div className="assessment-form-footer">

                <span>
                  Questions can be added after creating the assessment.
                </span>

                <button
                  type="submit"
                  className="admin-primary-button"
                >
                  Create Assessment
                </button>

              </div>

            </form>

          </section>

        )}


        {/* ASSESSMENT LIST */}

        <section className="admin-panel">

          <div className="admin-panel-header">

            <div>

              <span className="section-label">
                ASSESSMENT LIST
              </span>

              <h2>
                All Assessments
              </h2>

            </div>

            <span className="assessment-count">
              {assessments.length} assessments
            </span>

          </div>


          <div className="admin-table-card">

            <table className="admin-table assessment-management-table">

              <thead>

                <tr>

                  <th>
                    ASSESSMENT
                  </th>

                  <th>
                    QUESTIONS
                  </th>

                  <th>
                    DURATION
                  </th>

                  <th>
                    MARKS
                  </th>

                  <th>
                    CANDIDATES
                  </th>

                  <th>
                    STATUS
                  </th>

                  <th>
                    ACTIONS
                  </th>

                </tr>

              </thead>


              <tbody>

                {assessments.map((assessment) => (

                  <tr key={assessment.id}>

                    <td>

                      <div className="admin-assessment-name">

                        <strong>
                          {assessment.title}
                        </strong>

                        <span>
                          {assessment.description}
                        </span>

                      </div>

                    </td>


                    <td>
                      {assessment.questions}
                    </td>


                    <td>
                      {assessment.duration} min
                    </td>


                    <td>
                      {assessment.marks}
                    </td>


                    <td>
                      {assessment.candidates}
                    </td>


                    <td>

                      <span
                        className={`table-status ${assessment.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {assessment.status}
                      </span>

                    </td>


                    <td>

                      <div className="assessment-row-actions">

                        <button
                          className="admin-small-button"
                          onClick={() =>
                            navigate(
                              "/admin/assessments/questions"
                            )
                          }
                        >
                          Questions
                        </button>

                        <button
                          className="admin-small-button"
                          onClick={handleEdit}
                        >
                          Edit
                        </button>

                        <button
                          className="admin-small-button"
                          onClick={() =>
                            handleToggleStatus(
                              assessment.id
                            )
                          }
                        >
                          {assessment.status === "Active"
                            ? "Disable"
                            : "Activate"}
                        </button>

                        <button
                          className="admin-small-button danger"
                          onClick={() =>
                            handleDelete(
                              assessment.id
                            )
                          }
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}


                {assessments.length === 0 && (

                  <tr>

                    <td
                      colSpan="7"
                      className="empty-assessments"
                    >
                      No assessments available.
                      Create your first assessment above.

                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </section>


        {/* WORKFLOW INFORMATION */}

        <section className="assessment-workflow">

          <div>

            <span className="section-label">
              ADMIN WORKFLOW
            </span>

            <h2>
              Assessment Setup
            </h2>

            <p>
              Build an assessment in three simple stages.
            </p>

          </div>


          <div className="workflow-steps">


            <div className="workflow-step">

              <span>
                01
              </span>

              <div>

                <strong>
                  Create
                </strong>

                <small>
                  Define assessment details.
                </small>

              </div>

            </div>


            <div className="workflow-line"></div>


            <div className="workflow-step">

              <span>
                02
              </span>

              <div>

                <strong>
                  Add Questions
                </strong>

                <small>
                  Build the coding question set.
                </small>

              </div>

            </div>


            <div className="workflow-line"></div>


            <div className="workflow-step">

              <span>
                03
              </span>

              <div>

                <strong>
                  Activate
                </strong>

                <small>
                  Make the assessment available.
                </small>

              </div>

            </div>


          </div>

        </section>


      </main>

    </div>
  );
}

export default Assessments;