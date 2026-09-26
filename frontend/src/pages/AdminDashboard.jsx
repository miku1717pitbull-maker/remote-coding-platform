import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
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
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </header>


      {/* MAIN */}

      <main className="admin-content">


        {/* WELCOME */}

        <section className="admin-welcome">

          <span className="page-label">
            ADMINISTRATION
          </span>

          <h1>
            Admin Dashboard
          </h1>

          <p>
            Manage assessments, candidates, questions and
            evaluation results from one place.
          </p>

        </section>


        {/* STATISTICS */}

        <section className="admin-stats">


          <div className="admin-stat-card">

            <span>
              TOTAL ASSESSMENTS
            </span>

            <strong>
              12
            </strong>

            <small>
              8 active or scheduled
            </small>

          </div>


          <div className="admin-stat-card">

            <span>
              CANDIDATES
            </span>

            <strong>
              248
            </strong>

            <small>
              Registered candidates
            </small>

          </div>


          <div className="admin-stat-card">

            <span>
              QUESTIONS
            </span>

            <strong>
              86
            </strong>

            <small>
              Coding questions
            </small>

          </div>


          <div className="admin-stat-card">

            <span>
              COMPLETED ATTEMPTS
            </span>

            <strong>
              184
            </strong>

            <small>
              Assessment submissions
            </small>

          </div>


        </section>


        {/* MAIN GRID */}

        <section className="admin-dashboard-grid">


          {/* RECENT ASSESSMENTS */}

          <div className="admin-panel">

            <div className="admin-panel-header">

              <div>

                <span className="section-label">
                  ASSESSMENT ACTIVITY
                </span>

                <h2>
                  Recent Assessments
                </h2>

              </div>

              <button
                className="admin-secondary-button"
                onClick={() =>
                  navigate("/admin/assessments")
                }
              >
                View All
              </button>

            </div>


            <div className="admin-table-card">

              <table className="admin-table">

                <thead>

                  <tr>

                    <th>
                      ASSESSMENT
                    </th>

                    <th>
                      QUESTIONS
                    </th>

                    <th>
                      CANDIDATES
                    </th>

                    <th>
                      STATUS
                    </th>

                    <th>
                      ACTION
                    </th>

                  </tr>

                </thead>


                <tbody>


                  <tr>

                    <td>
                      <strong>
                        Programming Fundamentals
                      </strong>
                    </td>

                    <td>
                      10
                    </td>

                    <td>
                      84
                    </td>

                    <td>

                      <span className="table-status active">
                        Active
                      </span>

                    </td>

                    <td>

                      <button
                        className="admin-small-button"
                        onClick={() =>
                          navigate("/admin/assessments")
                        }
                      >
                        Manage
                      </button>

                    </td>

                  </tr>


                  <tr>

                    <td>
                      <strong>
                        Web Development Basics
                      </strong>
                    </td>

                    <td>
                      15
                    </td>

                    <td>
                      62
                    </td>

                    <td>

                      <span className="table-status completed">
                        Completed
                      </span>

                    </td>

                    <td>

                      <button
                        className="admin-small-button"
                        onClick={() =>
                          navigate("/admin/results")
                        }
                      >
                        Results
                      </button>

                    </td>

                  </tr>


                  <tr>

                    <td>
                      <strong>
                        Data Structures
                      </strong>
                    </td>

                    <td>
                      20
                    </td>

                    <td>
                      51
                    </td>

                    <td>

                      <span className="table-status active">
                        Active
                      </span>

                    </td>

                    <td>

                      <button
                        className="admin-small-button"
                        onClick={() =>
                          navigate("/admin/assessments")
                        }
                      >
                        Manage
                      </button>

                    </td>

                  </tr>


                  <tr>

                    <td>
                      <strong>
                        Database Fundamentals
                      </strong>
                    </td>

                    <td>
                      12
                    </td>

                    <td>
                      37
                    </td>

                    <td>

                      <span className="table-status completed">
                        Completed
                      </span>

                    </td>

                    <td>

                      <button
                        className="admin-small-button"
                        onClick={() =>
                          navigate("/admin/results")
                        }
                      >
                        Results
                      </button>

                    </td>

                  </tr>


                </tbody>

              </table>

            </div>

          </div>


          {/* QUICK ACTIONS */}

          <div className="admin-panel">

            <span className="section-label">
              ADMIN TOOLS
            </span>

            <h2>
              Quick Actions
            </h2>


            <div className="quick-actions">


              <button
                className="quick-action"
                onClick={() =>
                  navigate("/admin/assessments")
                }
              >

                <strong>
                  + Create Assessment
                </strong>

                <small>
                  Create a new coding assessment
                </small>

              </button>


              <button
                className="quick-action"
                onClick={() =>
                  navigate("/admin/assessments/questions")
                }
              >

                <strong>
                  Manage Questions
                </strong>

                <small>
                  Add and organize coding questions
                </small>

              </button>


              <button
                className="quick-action"
                onClick={() =>
                  navigate("/admin/candidates")
                }
              >

                <strong>
                  View Candidates
                </strong>

                <small>
                  Manage registered candidates
                </small>

              </button>


              <button
                className="quick-action"
                onClick={() =>
                  navigate("/admin/results")
                }
              >

                <strong>
                  View Results
                </strong>

                <small>
                  Review assessment performance
                </small>

              </button>


            </div>

          </div>


        </section>


        {/* PLATFORM ACTIVITY */}

        <section className="admin-platform-grid">


          <div className="admin-panel">

            <div className="admin-panel-header">

              <div>

                <span className="section-label">
                  PLATFORM ACTIVITY
                </span>

                <h2>
                  Recent Activity
                </h2>

              </div>

            </div>


            <div className="activity-list">


              <div className="activity-item">

                <div className="activity-marker">
                  A
                </div>

                <div>

                  <strong>
                    New assessment created
                  </strong>

                  <span>
                    Programming Fundamentals was added
                    to the assessment list.
                  </span>

                </div>

                <small>
                  2h ago
                </small>

              </div>


              <div className="activity-item">

                <div className="activity-marker">
                  C
                </div>

                <div>

                  <strong>
                    Candidate registered
                  </strong>

                  <span>
                    A new candidate joined the platform.
                  </span>

                </div>

                <small>
                  4h ago
                </small>

              </div>


              <div className="activity-item">

                <div className="activity-marker">
                  R
                </div>

                <div>

                  <strong>
                    Assessment completed
                  </strong>

                  <span>
                    A candidate submitted an assessment.
                  </span>

                </div>

                <small>
                  6h ago
                </small>

              </div>


              <div className="activity-item">

                <div className="activity-marker">
                  Q
                </div>

                <div>

                  <strong>
                    Question added
                  </strong>

                  <span>
                    A new coding question was added
                    to the question bank.
                  </span>

                </div>

                <small>
                  Yesterday
                </small>

              </div>


            </div>

          </div>


          {/* SYSTEM STATUS */}

          <div className="admin-panel system-status-panel">

            <span className="section-label">
              SYSTEM
            </span>

            <h2>
              Platform Status
            </h2>


            <div className="system-status-row">

              <div>

                <span className="system-status-dot"></span>

                <strong>
                  Assessment Platform
                </strong>

              </div>

              <span className="system-online">
                Online
              </span>

            </div>


            <div className="system-status-row">

              <div>

                <span className="system-status-dot"></span>

                <strong>
                  Code Editor
                </strong>

              </div>

              <span className="system-online">
                Ready
              </span>

            </div>


            <div className="system-status-row">

              <div>

                <span className="system-status-dot"></span>

                <strong>
                  Question Bank
                </strong>

              </div>

              <span className="system-online">
                Available
              </span>

            </div>


            <div className="admin-system-note">

              <strong>
                Backend integration
              </strong>

              <p>
                The dashboard currently uses mock data.
                These values can be replaced with API
                responses when the backend is connected.
              </p>

            </div>

          </div>


        </section>


        {/* NAVIGATION */}

        <section className="admin-navigation">

          <button
            onClick={() =>
              navigate("/admin/assessments")
            }
          >
            Assessments
          </button>

          <button
            onClick={() =>
              navigate("/admin/assessments/questions")
            }
          >
            Questions
          </button>

          <button
            onClick={() =>
              navigate("/admin/candidates")
            }
          >
            Candidates
          </button>

          <button
            onClick={() =>
              navigate("/admin/results")
            }
          >
            Results
          </button>

        </section>


      </main>

    </div>
  );
}

export default AdminDashboard;