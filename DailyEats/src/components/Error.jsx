import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="error-page">
            <div className="error-card">
                <p className="error-tag">Oops!</p>
                <h1>Page Not Found</h1>
                <p className="error-message">
                    The page you're looking for doesn't exist or may have been moved.
                </p>
                <div className="error-actions">
                    <Link to="/" className="error-btn primary">Go to Home</Link>
                    <button className="error-btn secondary" onClick={() => window.location.reload()}>
                        Try Again
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Error;
