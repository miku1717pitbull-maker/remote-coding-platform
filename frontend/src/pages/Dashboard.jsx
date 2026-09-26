import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleStartAssessment = () => {
    navigate("/assessment-details");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="student-dashboard">

      {/* HEADER */}

      <header className="student-header">

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


        <div className="student-header-right">

          <div className="student-profile">

            <div className="student-avatar">
              S
            </div>

            <div>
              <strong>
                Student
              </strong>

              <span>
                Candidate
              </span>
            </div>

          </div>

          <button
            className="student-logout"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </header>


      {/* MAIN */}

      <main className="student-dashboard-content">


        {/* WELCOME */}

        <section className="student-welcome">

          <div>

            <span className="page-label">
              STUDENT DASHBOARD
            </span>

            <h1>
              Good afternoon, Student.
            </h1>

            <p>
              Ready to test your coding skills?
              Continue your active assessment or review your
              previous performance.
            </p>

          </div>

          <div className="welcome-status">

            <span className="status-dot"></span>

            Assessment platform online

          </div>

        </section>


        {/* QUICK STATS */}

        <section className="student-stats">

          <div className="student-stat">

            <div className="student-stat-icon">
              A
            </div>

            <div>
              <span>
                Assessments
              </span>

              <strong>
                3
              </strong>
            </div>

          </div>


          <div className="student-stat">

            <div className="student-stat-icon">
              ✓
            </div>

            <div>
              <span>
                Completed
              </span>

              <strong>
                2
              </strong>
            </div>

          </div>


          <div className="student-stat">

            <div className="student-stat-icon">
              %
            </div>

            <div>
              <span>
                Average Score
              </span>

              <strong>
                79%
              </strong>
            </div>

          </div>


          <div className="student-stat">

            <div className="student-stat-icon">
              !
            </div>

            <div>
              <span>
                Active
              </span>

              <strong>
                1
              </strong>
            </div>

          </div>

        </section>


        {/* MAIN DASHBOARD GRID */}

        <section className="student-main-grid">


          {/* ACTIVE ASSESSMENT */}

          <div className="active-assessment-card">

            <div className="active-card-top">

              <div>

                <span className="section-label">
                  ACTIVE ASSESSMENT
                </span>

                <h2>
                  Programming Fundamentals
                </h2>

                <p>
                  Test your programming fundamentals,
                  problem-solving ability and coding skills.
                </p>

              </div>

              <span className="active-badge">
                Active
              </span>

            </div>


            <div className="assessment-meta">

              <div>
                <strong>
                  10
                </strong>

                <span>
                  Questions
                </span>
              </div>

              <div>
                <strong>
                  60
                </strong>

                <span>
                  Minutes
                </span>
              </div>

              <div>
                <strong>
                  100
                </strong>

                <span>
                  Total Marks
                </span>
              </div>

              <div>
                <strong>
                  Mixed
                </strong>

                <span>
                  Difficulty
                </span>
              </div>

            </div>


            <div className="assessment-progress">

              <div className="progress-header">

                <span>
                  Assessment availability
                </span>

                <strong>
                  Ready to start
                </strong>

              </div>

              <div className="progress-bar">

                <div className="progress-fill"></div>

              </div>

            </div>


            <div className="active-card-footer">

              <span>
                Estimated completion time: 60 minutes
              </span>

              <button
                className="continue-assessment-button"
                onClick={handleStartAssessment}
              >
                Start Assessment →
              </button>

            </div>

          </div>


          {/* PROGRESS CARD */}

          <div className="student-progress-card">

            <div className="card-heading">

              <div>

                <span className="section-label">
                  YOUR PROGRESS
                </span>

                <h3>
                  Performance Overview
                </h3>

              </div>

            </div>


            <div className="performance-score">

              <div className="score-circle">

                <strong>
                  79%
                </strong>

                <span>
                  Average
                </span>

              </div>

            </div>


            <div className="performance-details">

              <div>

                <span>
                  Completed
                </span>

                <strong>
                  2
                </strong>

              </div>

              <div>

                <span>
                  Active
                </span>

                <strong>
                  1
                </strong>

              </div>

              <div>

                <span>
                  Total
                </span>

                <strong>
                  3
                </strong>

              </div>

            </div>

          </div>


        </section>


        {/* RECENT ASSESSMENTS */}

        <section className="recent-assessments-card">

          <div className="recent-header">

            <div>

              <span className="section-label">
                ACTIVITY
              </span>

              <h2>
                Recent Assessments
              </h2>

              <p>
                Your latest assessment attempts and scores.
              </p>

            </div>

          </div>


          <div className="student-table-wrapper">

            <table className="student-table">

              <thead>

                <tr>

                  <th>
                    ASSESSMENT
                  </th>

                  <th>
                    DATE
                  </th>

                  <th>
                    SCORE
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

                    <div className="assessment-name">

                      <div className="assessment-mini-icon">
                        PF
                      </div>

                      <div>

                        <strong>
                          Programming Basics
                        </strong>

                        <span>
                          Coding Assessment
                        </span>

                      </div>

                    </div>

                  </td>

                  <td>
                    20 Sep 2026
                  </td>

                  <td>

                    <strong className="score-value">
                      82%
                    </strong>

                  </td>

                  <td>

                    <span className="student-status completed">
                      Completed
                    </span>

                  </td>

                  <td>

                    <button
                      className="student-view-button"
                      onClick={() =>
                        alert(
                          "Detailed result will be connected to the backend later."
                        )
                      }
                    >
                      View
                    </button>

                  </td>

                </tr>


                <tr>

                  <td>

                    <div className="assessment-name">

                      <div className="assessment-mini-icon">
                        HC
                      </div>

                      <div>

                        <strong>
                          HTML & CSS
                        </strong>

                        <span>
                          Web Development
                        </span>

                      </div>

                    </div>

                  </td>

                  <td>
                    15 Sep 2026
                  </td>

                  <td>

                    <strong className="score-value">
                      76%
                    </strong>

                  </td>

                  <td>

                    <span className="student-status completed">
                      Completed
                    </span>

                  </td>

                  <td>

                    <button
                      className="student-view-button"
                      onClick={() =>
                        alert(
                          "Detailed result will be connected to the backend later."
                        )
                      }
                    >
                      View
                    </button>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </section>


        {/* INFORMATION */}

        <section className="student-info-grid">

          <div className="student-info-card">

            <div className="info-card-icon">
              ?
            </div>

            <div>

              <strong>
                Need help?
              </strong>

              <p>
                Contact your administrator if you have
                problems accessing an assessment.
              </p>

            </div>

          </div>


          <div className="student-info-card">

            <div className="info-card-icon">
              i
            </div>

            <div>

              <strong>
                Assessment Guidelines
              </strong>

              <p>
                Make sure you have a stable internet connection
                before starting your assessment.
              </p>

            </div>

          </div>

        </section>


      </main>

    </div>
  );
}

export default Dashboard;