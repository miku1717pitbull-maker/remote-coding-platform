import { useNavigate } from "react-router-dom";

function AssessmentDetails() {
  const navigate = useNavigate();

  return (
    <div className="assessment-details-page">

      <div className="assessment-details-header">

        <div>
          <span className="page-label">
            CODING ASSESSMENT
          </span>

          <h2>Programming Fundamentals</h2>

          <p>
            Review the assessment details and instructions before starting.
          </p>
        </div>

        <button
          className="details-back-button"
          onClick={() => navigate("/dashboard")}
        >
          ← Dashboard
        </button>

      </div>

      <div className="assessment-info-grid">

        <div className="assessment-info-card">
          <span>Questions</span>
          <strong>10</strong>
          <small>Coding questions</small>
        </div>

        <div className="assessment-info-card">
          <span>Duration</span>
          <strong>60</strong>
          <small>Minutes</small>
        </div>

        <div className="assessment-info-card">
          <span>Total Marks</span>
          <strong>100</strong>
          <small>Maximum score</small>
        </div>

        <div className="assessment-info-card">
          <span>Difficulty</span>
          <strong>Mixed</strong>
          <small>Easy to Hard</small>
        </div>

      </div>

      <div className="assessment-instructions-panel">

        <div className="instructions-heading">
          <div>
            <span className="page-label">
              BEFORE YOU START
            </span>

            <h3>Assessment Instructions</h3>
          </div>
        </div>

        <div className="instructions-content">

          <div className="instruction-item">
            <span className="instruction-number">
              01
            </span>

            <div>
              <strong>Complete all questions</strong>

              <p>
                Attempt all coding questions within the available
                assessment time.
              </p>
            </div>
          </div>

          <div className="instruction-item">
            <span className="instruction-number">
              02
            </span>

            <div>
              <strong>Manage your time</strong>

              <p>
                The assessment has a fixed duration of 60 minutes.
                The timer will start when you begin.
              </p>
            </div>
          </div>

          <div className="instruction-item">
            <span className="instruction-number">
              03
            </span>

            <div>
              <strong>Write and test your code</strong>

              <p>
                Use the online code editor to write your solution
                and test your approach.
              </p>
            </div>
          </div>

          <div className="instruction-item">
            <span className="instruction-number">
              04
            </span>

            <div>
              <strong>Submit before time expires</strong>

              <p>
                Make sure you submit your assessment before the
                timer reaches zero.
              </p>
            </div>
          </div>

          <div className="instruction-item">
            <span className="instruction-number">
              05
            </span>

            <div>
              <strong>Do not refresh unnecessarily</strong>

              <p>
                Avoid closing or refreshing the assessment page
                while the test is in progress.
              </p>
            </div>
          </div>

        </div>

        <div className="assessment-warning">
          <strong>Important:</strong>

          <span>
            Once you start the assessment, the timer will begin.
            Make sure you are ready before continuing.
          </span>
        </div>

        <div className="assessment-start-area">

          <button
            className="start-assessment-button"
            onClick={() => navigate("/assessment")}
          >
            Start Assessment →
          </button>

        </div>

      </div>

    </div>
  );
}

export default AssessmentDetails;