import React, { useEffect, useState } from 'react'
import Header from '../../coman/Header';

function Task2() {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            })
    }

    return (
        <>
            <Header />

            <div className="container my-5">

                {/* Title Section */}
                <div className="text-center mb-4">
                    <h2 className="fw-bold">Task 2 :- User List</h2>
                    <p className="text-muted">Fetched using useEffect Hook</p>
                </div>

                {/* Card Layout */}
                <div className="card shadow-lg border-0 rounded-4">
                    <div className="card-body p-4">

                        {loading ? (
                            <div className="text-center py-5">
                                <div className="spinner-border text-primary mb-3" role="status"></div>
                                <p className="fw-semibold">Loading Users...</p>
                            </div>
                        ) : (
                            <div className="table-responsive">
                                <table className="table table-hover align-middle text-center">
                                    <thead className="table-primary">
                                        <tr>
                                            <th>#ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>City</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user.map((data) => (
                                            <tr key={data.id}>
                                                <td className="fw-semibold">{data.id}</td>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>
                                                    <span className="badge bg-secondary">
                                                        {data.address.city}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                    </div>
                </div>

            </div>
        </>
    )
}

export default Task2;