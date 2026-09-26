import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function Candidates() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [candidates] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul.sharma@example.com",
      assessment: "Programming Fundamentals",
      score: 82,
      status: "Completed",
      date: "20 Sep 2026",
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya.singh@example.com",
      assessment: "Programming Fundamentals",
      score: 91,
      status: "Completed",
      date: "20 Sep 2026",
    },
    {
      id: 3,
      name: "Arjun Verma",
      email: "arjun.verma@example.com",
      assessment: "Data Structures",
      score: null,
      status: "In Progress",
      date: "26 Sep 2026",
    },
    {
      id: 4,
      name: "Neha Gupta",
      email: "neha.gupta@example.com",
      assessment: "Web Development Basics",
      score: 76,
      status: "Completed",
      date: "15 Sep 2026",
    },
    {
      id: 5,
      name: "Aman Rawat",
      email: "aman.rawat@example.com",
      assessment: "Database Fundamentals",
      score: null,
      status: "Not Started",
      date: "-",
    },
    {
      id: 6,
      name: "Sneha Joshi",
      email: "sneha.joshi@example.com",
      assessment: "Programming Fundamentals",
      score: 68,
      status: "Completed",
      date: "19 Sep 2026",
    },
    {
      id: 7,
      name: "Vikas Negi",
      email: "vikas.negi@example.com",
      assessment: "Data Structures",
      score: null,
      status: "In Progress",
      date: "26 Sep 2026",
    },
    {
      id: 8,
      name: "Anjali Mehta",
      email: "anjali.mehta@example.com",
      assessment: "Web Development Basics",
      score: 88,
      status: "Completed",
      date: "16 Sep 2026",
    },
  ]);

  const filteredCandidates = useMemo(() => {
    return candidates.filter((candidate) => {
      const matchesSearch =
        candidate.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        candidate.email
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        candidate.assessment
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        candidate.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [candidates, searchTerm, statusFilter]);

  const completedCount = candidates.filter(
    (candidate) => candidate.status === "Completed"
  ).length;

  const inProgressCount = candidates.filter(
    (candidate) => candidate.status === "In Progress"
  ).length;

  const notStartedCount = candidates.filter(
    (candidate) => candidate.status === "Not Started"
  ).length;

  const averageScore = (() => {
    const completedCandidates = candidates.filter(
      (candidate) =>
        candidate.score !== null &&
        candidate.score !== undefined
    );

    if (completedCandidates.length === 0) {
      return 0;
    }

    const total = completedCandidates.reduce(
      (sum, candidate) => sum + candidate.score,
      0
    );

    return Math.round(total / completedCandidates.length);
  })();

  const handleViewCandidate = (candidate) => {
    alert(
      `Candidate Details\n\nName: ${candidate.name}\nEmail: ${candidate.email}\nAssessment: ${candidate.assessment}\nStatus: ${candidate.status}\nScore: ${
        candidate.score !== null
          ? `${candidate.score}%`
          : "Not available"
      }`
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


      {/* MAIN CONTENT */}

      <main className="admin-content">


        {/* PAGE HEADER */}

        <section className="admin-page-header">

          <div>

            <span className="page-label">
              CANDIDATE MANAGEMENT
            </span>

            <h1>
              Candidates
            </h1>

            <p>
              Search candidates and monitor their assessment
              participation and results.
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
                navigate("/admin/results")
              }
            >
              View Results
            </button>

          </div>

        </section>


        {/* SUMMARY */}

        <section className="admin-stats candidate-summary">


          <div className="admin-stat-card">

            <span>
              TOTAL CANDIDATES
            </span>

            <strong>
              {candidates.length}
            </strong>

            <small>
              Registered candidates
            </small>

          </div>


          <div className="admin-stat-card">

            <span>
              COMPLETED
            </span>

            <strong>
              {completedCount}
            </strong>

            <small>
              Submitted assessments
            </small>

          </div>


          <div className="admin-stat-card">

            <span>
              IN PROGRESS
            </span>

            <strong>
              {inProgressCount}
            </strong>

            <small>
              Currently attempting
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
              Completed assessments
            </small>

          </div>


        </section>


        {/* SEARCH AND FILTER */}

        <section className="candidate-controls">

          <div className="candidate-search">

            <label>
              SEARCH
            </label>

            <input
              type="text"
              placeholder="Search by name, email or assessment..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

          </div>


          <div className="candidate-filter">

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
                All Candidates
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


          <div className="candidate-result-count">

            <span>
              Showing
            </span>

            <strong>
              {filteredCandidates.length}
            </strong>

            <span>
              candidates
            </span>

          </div>

        </section>


        {/* CANDIDATES TABLE */}

        <section className="admin-panel">

          <div className="admin-panel-header">

            <div>

              <span className="section-label">
                CANDIDATE LIST
              </span>

              <h2>
                Registered Candidates
              </h2>

            </div>

            <span className="assessment-count">
              {candidates.length} total
            </span>

          </div>


          <div className="admin-table-card">

            <table className="admin-table candidate-table">

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
                    DATE
                  </th>

                  <th>
                    ACTION
                  </th>

                </tr>

              </thead>


              <tbody>

                {filteredCandidates.map((candidate) => (

                  <tr key={candidate.id}>

                    <td>

                      <div className="candidate-name">

                        <div className="candidate-avatar">
                          {candidate.name
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <div>

                          <strong>
                            {candidate.name}
                          </strong>

                          <span>
                            {candidate.email}
                          </span>

                        </div>

                      </div>

                    </td>


                    <td>

                      <span className="candidate-assessment">
                        {candidate.assessment}
                      </span>

                    </td>


                    <td>

                      {candidate.score !== null ? (

                        <strong className="candidate-score">
                          {candidate.score}%
                        </strong>

                      ) : (

                        <span className="score-unavailable">
                          —
                        </span>

                      )}

                    </td>


                    <td>

                      <span
                        className={`candidate-status ${candidate.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {candidate.status}
                      </span>

                    </td>


                    <td>
                      {candidate.date}
                    </td>


                    <td>

                      <button
                        className="admin-small-button"
                        onClick={() =>
                          handleViewCandidate(candidate)
                        }
                      >
                        View
                      </button>

                    </td>

                  </tr>

                ))}


                {filteredCandidates.length === 0 && (

                  <tr>

                    <td
                      colSpan="6"
                      className="empty-candidates"
                    >
                      No candidates match your search or
                      filter.

                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </section>


        {/* CANDIDATE BREAKDOWN */}

        <section className="candidate-breakdown-grid">


          <div className="admin-panel">

            <span className="section-label">
              PARTICIPATION
            </span>

            <h2>
              Candidate Status
            </h2>


            <div className="candidate-status-breakdown">

              <div className="candidate-breakdown-row">

                <div>

                  <span className="breakdown-indicator completed"></span>

                  <strong>
                    Completed
                  </strong>

                </div>

                <span>
                  {completedCount}
                </span>

              </div>


              <div className="candidate-breakdown-bar">

                <div
                  className="candidate-breakdown-fill completed"
                  style={{
                    width: `${
                      (completedCount /
                        candidates.length) *
                      100
                    }%`,
                  }}
                ></div>

              </div>


              <div className="candidate-breakdown-row">

                <div>

                  <span className="breakdown-indicator progress"></span>

                  <strong>
                    In Progress
                  </strong>

                </div>

                <span>
                  {inProgressCount}
                </span>

              </div>


              <div className="candidate-breakdown-bar">

                <div
                  className="candidate-breakdown-fill progress"
                  style={{
                    width: `${
                      (inProgressCount /
                        candidates.length) *
                      100
                    }%`,
                  }}
                ></div>

              </div>


              <div className="candidate-breakdown-row">

                <div>

                  <span className="breakdown-indicator not-started"></span>

                  <strong>
                    Not Started
                  </strong>

                </div>

                <span>
                  {notStartedCount}
                </span>

              </div>


              <div className="candidate-breakdown-bar">

                <div
                  className="candidate-breakdown-fill not-started"
                  style={{
                    width: `${
                      (notStartedCount /
                        candidates.length) *
                      100
                    }%`,
                  }}
                ></div>

              </div>

            </div>

          </div>


          <div className="admin-panel">

            <span className="section-label">
              ADMIN NOTE
            </span>

            <h2>
              Candidate Management
            </h2>

            <div className="candidate-note">

              <div className="info-card-icon">
                i
              </div>

              <p>
                Candidate information and assessment
                attempts are currently displayed using mock
                frontend data. This section can be connected
                to the candidate and assessment APIs later.
              </p>

            </div>


            <button
              className="admin-primary-button candidate-results-button"
              onClick={() =>
                navigate("/admin/results")
              }
            >
              Open Assessment Results →
            </button>

          </div>


        </section>


      </main>

    </div>
  );
}

export default Candidates;