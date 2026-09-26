import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function Results() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [results] = useState([
    {
      id: 1,
      candidate: "Rahul Sharma",
      email: "rahul.sharma@example.com",
      assessment: "Programming Fundamentals",
      score: 82,
      totalMarks: 100,
      status: "Completed",
      submittedAt: "20 Sep 2026, 11:42 AM",
      duration: "48 min",
    },
    {
      id: 2,
      candidate: "Priya Singh",
      email: "priya.singh@example.com",
      assessment: "Programming Fundamentals",
      score: 91,
      totalMarks: 100,
      status: "Completed",
      submittedAt: "20 Sep 2026, 12:18 PM",
      duration: "52 min",
    },
    {
      id: 3,
      candidate: "Arjun Verma",
      email: "arjun.verma@example.com",
      assessment: "Data Structures",
      score: null,
      totalMarks: 100,
      status: "In Progress",
      submittedAt: "-",
      duration: "31 min",
    },
    {
      id: 4,
      candidate: "Neha Gupta",
      email: "neha.gupta@example.com",
      assessment: "Web Development Basics",
      score: 76,
      totalMarks: 100,
      status: "Completed",
      submittedAt: "15 Sep 2026, 02:06 PM",
      duration: "61 min",
    },
    {
      id: 5,
      candidate: "Aman Rawat",
      email: "aman.rawat@example.com",
      assessment: "Database Fundamentals",
      score: null,
      totalMarks: 100,
      status: "Not Started",
      submittedAt: "-",
      duration: "-",
    },
    {
      id: 6,
      candidate: "Sneha Joshi",
      email: "sneha.joshi@example.com",
      assessment: "Programming Fundamentals",
      score: 68,
      totalMarks: 100,
      status: "Completed",
      submittedAt: "19 Sep 2026, 10:31 AM",
      duration: "57 min",
    },
    {
      id: 7,
      candidate: "Vikas Negi",
      email: "vikas.negi@example.com",
      assessment: "Data Structures",
      score: null,
      totalMarks: 100,
      status: "In Progress",
      submittedAt: "-",
      duration: "42 min",
    },
    {
      id: 8,
      candidate: "Anjali Mehta",
      email: "anjali.mehta@example.com",
      assessment: "Web Development Basics",
      score: 88,
      totalMarks: 100,
      status: "Completed",
      submittedAt: "16 Sep 2026, 03:14 PM",
      duration: "63 min",
    },
  ]);

  const filteredResults = useMemo(() => {
    return results.filter((result) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        result.candidate
          .toLowerCase()
          .includes(search) ||
        result.email
          .toLowerCase()
          .includes(search) ||
        result.assessment
          .toLowerCase()
          .includes(search);

      const matchesStatus =
        statusFilter === "All" ||
        result.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [results, searchTerm, statusFilter]);

  const completedResults = results.filter(
    (result) => result.status === "Completed"
  );

  const inProgressResults = results.filter(
    (result) => result.status === "In Progress"
  );

  const notStartedResults = results.filter(
    (result) => result.status === "Not Started"
  );

  const averageScore = (() => {
    if (completedResults.length === 0) {
      return 0;
    }

    const total = completedResults.reduce(
      (sum, result) => sum + result.score,
      0
    );

    return Math.round(total / completedResults.length);
  })();

  const highestScore = (() => {
    if (completedResults.length === 0) {
      return 0;
    }

    return Math.max(
      ...completedResults.map((result) => result.score)
    );
  })();

  const handleViewResult = (result) => {
    alert(
      `Result Details\n\nCandidate: ${result.candidate}\nEmail: ${result.email}\nAssessment: ${result.assessment}\nScore: ${
        result.score !== null
          ? `${result.score}/${result.totalMarks}`
          : "Not available"
      }\nStatus: ${result.status}\nSubmitted: ${result.submittedAt}\nDuration: ${result.duration}`
    );
  };

  const handleExport = () => {
    alert(
      "Result export will be connected to the backend later."
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


      {/* MAIN */}

      <main className="admin-content">


        {/* PAGE HEADER */}

        <section className="admin-page-header">

          <div>

            <span className="page-label">
              RESULTS & EVALUATION
            </span>

            <h1>
              Assessment Results
            </h1>

            <p>
              Review candidate performance and completed
              assessment submissions.
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
              className="admin-secondary-button"
              onClick={() =>
                navigate("/admin/candidates")
              }
            >
              Candidates
            </button>

            <button
              className="admin-primary-button"
              onClick={handleExport}
            >
              Export Results
            </button>

          </div>

        </section>


        {/* SUMMARY */}

        <section className="admin-stats results-summary">


          <div className="admin-stat-card">

            <span>
              TOTAL SUBMISSIONS
            </span>

            <strong>
              {completedResults.length}
            </strong>

            <small>
              Completed assessments
            </small>

          </div>


          <div className="admin-stat-card">

            <span>
              AVERAGE SCORE
            </span>

            <strong>
              {averageScore}%
            </strong>

            <small>
              Across completed results
            </small>

          </div>


          <div className="admin-stat-card">

            <span>
              HIGHEST SCORE
            </span>

            <strong>
              {highestScore}%
            </strong>

            <small>
              Best completed result
            </small>

          </div>


          <div className="admin-stat-card">

            <span>
              IN PROGRESS
            </span>

            <strong>
              {inProgressResults.length}
            </strong>

            <small>
              Current attempts
            </small>

          </div>


        </section>


        {/* FILTERS */}

        <section className="results-controls">

          <div className="results-search">

            <label>
              SEARCH RESULTS
            </label>

            <input
              type="text"
              placeholder="Search candidate or assessment..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

          </div>


          <div className="results-filter">

            <label>
              STATUS
            </label>

            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
            >

              <option value="All">
                All Results
              </option>

              <option value="Completed">
                Completed
              </option>

              <option value="In Progress">
                In Progress
              </option>

              <option value="Not Started">
                Not Started
              </option>

            </select>

          </div>


          <div className="results-filter-count">

            <span>
              Showing
            </span>

            <strong>
              {filteredResults.length}
            </strong>

            <span>
              records
            </span>

          </div>

        </section>


        {/* RESULTS TABLE */}

        <section className="admin-panel">

          <div className="admin-panel-header">

            <div>

              <span className="section-label">
                RESULT RECORDS
              </span>

              <h2>
                Candidate Results
              </h2>

            </div>

            <span className="assessment-count">
              {results.length} records
            </span>

          </div>


          <div className="admin-table-card">

            <table className="admin-table results-table">

              <thead>

                <tr>

                  <th>
                    CANDIDATE
                  </th>

                  <th>
                    ASSESSMENT
                  </th>

                  <th>
                    SCORE
                  </th>

                  <th>
                    STATUS
                  </th>

                  <th>
                    SUBMITTED
                  </th>

                  <th>
                    DURATION
                  </th>

                  <th>
                    ACTION
                  </th>

                </tr>

              </thead>


              <tbody>

                {filteredResults.map((result) => (

                  <tr key={result.id}>

                    <td>

                      <div className="result-candidate">

                        <div className="candidate-avatar">
                          {result.candidate
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <div>

                          <strong>
                            {result.candidate}
                          </strong>

                          <span>
                            {result.email}
                          </span>

                        </div>

                      </div>

                    </td>


                    <td>

                      <span className="result-assessment">
                        {result.assessment}
                      </span>

                    </td>


                    <td>

                      {result.score !== null ? (

                        <div className="result-score">

                          <strong>
                            {result.score}%
                          </strong>

                          <span>
                            {result.score}/{result.totalMarks}
                          </span>

                        </div>

                      ) : (

                        <span className="score-unavailable">
                          —
                        </span>

                      )}

                    </td>


                    <td>

                      <span
                        className={`candidate-status ${result.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {result.status}
                      </span>

                    </td>


                    <td>
                      {result.submittedAt}
                    </td>


                    <td>
                      {result.duration}
                    </td>


                    <td>

                      <button
                        className="admin-small-button"
                        onClick={() =>
                          handleViewResult(result)
                        }
                      >
                        View
                      </button>

                    </td>

                  </tr>

                ))}


                {filteredResults.length === 0 && (

                  <tr>

                    <td
                      colSpan="7"
                      className="empty-results"
                    >
                      No results match your search or filter.

                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </section>


        {/* PERFORMANCE OVERVIEW */}

        <section className="results-overview-grid">


          {/* SCORE DISTRIBUTION */}

          <div className="admin-panel">

            <span className="section-label">
              PERFORMANCE
            </span>

            <h2>
              Score Overview
            </h2>


            <div className="score-overview">


              <div className="score-overview-item">

                <div className="score-overview-top">

                  <span>
                    80% - 100%
                  </span>

                  <strong>
                    {
                      completedResults.filter(
                        (result) =>
                          result.score >= 80
                      ).length
                    }
                  </strong>

                </div>

                <div className="score-overview-bar">

                  <div
                    className="score-overview-fill high"
                    style={{
                      width: `${
                        completedResults.length > 0
                          ? (completedResults.filter(
                              (result) =>
                                result.score >= 80
                            ).length /
                              completedResults.length) *
                            100
                          : 0
                      }%`,
                    }}
                  ></div>

                </div>

              </div>


              <div className="score-overview-item">

                <div className="score-overview-top">

                  <span>
                    60% - 79%
                  </span>

                  <strong>
                    {
                      completedResults.filter(
                        (result) =>
                          result.score >= 60 &&
                          result.score < 80
                      ).length
                    }
                  </strong>

                </div>

                <div className="score-overview-bar">

                  <div
                    className="score-overview-fill medium"
                    style={{
                      width: `${
                        completedResults.length > 0
                          ? (completedResults.filter(
                              (result) =>
                                result.score >= 60 &&
                                result.score < 80
                            ).length /
                              completedResults.length) *
                            100
                          : 0
                      }%`,
                    }}
                  ></div>

                </div>

              </div>


              <div className="score-overview-item">

                <div className="score-overview-top">

                  <span>
                    Below 60%
                  </span>

                  <strong>
                    {
                      completedResults.filter(
                        (result) =>
                          result.score < 60
                      ).length
                    }
                  </strong>

                </div>

                <div className="score-overview-bar">

                  <div
                    className="score-overview-fill low"
                    style={{
                      width: `${
                        completedResults.length > 0
                          ? (completedResults.filter(
                              (result) =>
                                result.score < 60
                            ).length /
                              completedResults.length) *
                            100
                          : 0
                      }%`,
                    }}
                  ></div>

                </div>

              </div>


            </div>

          </div>


          {/* STATUS SUMMARY */}

          <div className="admin-panel">

            <span className="section-label">
              SUBMISSION STATUS
            </span>

            <h2>
              Result Summary
            </h2>


            <div className="result-status-list">


              <div className="result-status-row">

                <div>

                  <span className="result-status-indicator completed"></span>

                  <strong>
                    Completed
                  </strong>

                </div>

                <strong>
                  {completedResults.length}
                </strong>

              </div>


              <div className="result-status-row">

                <div>

                  <span className="result-status-indicator progress"></span>

                  <strong>
                    In Progress
                  </strong>

                </div>

                <strong>
                  {inProgressResults.length}
                </strong>

              </div>


              <div className="result-status-row">

                <div>

                  <span className="result-status-indicator not-started"></span>

                  <strong>
                    Not Started
                  </strong>

                </div>

                <strong>
                  {notStartedResults.length}
                </strong>

              </div>


            </div>


            <button
              className="admin-secondary-button results-candidates-button"
              onClick={() =>
                navigate("/admin/candidates")
              }
            >
              Manage Candidates →
            </button>

          </div>


        </section>


        {/* BACKEND NOTE */}

        <section className="results-backend-note">

          <div className="info-card-icon">
            i
          </div>

          <div>

            <strong>
              Backend integration
            </strong>

            <p>
              Result values are currently mock frontend
              data. Once the backend API is ready, this
              page can fetch submissions, scores, statuses
              and evaluation details dynamically.
            </p>

          </div>

        </section>


      </main>

    </div>
  );
}

export default Results;