import React from 'react'
import { Link, useNavigate } from 'react-router'

function NotFound() {
    const Redirect = useNavigate();

    const Back = () => {
        Redirect("/");
    }
    return (
        <div>
            <div className="container">
                <div className="text-center">
                    <h1 className="display-1 fw-bold text-danger">404</h1>
                    <h3 className="mb-3">Page Not Found</h3>
                    <p className="mb-4">
                        Sorry, the page you are looking for doesn’t exist.
                    </p>
                    {/* <Link to="/" className="btn btn-primary btn-lg">
                        Go Back Home
                    </Link> */}
                    <button className="btn btn-primary btn-lg" onClick={Back}>Go Back Home</button>
                </div>
            </div>

        </div>
    )
}

export default NotFound