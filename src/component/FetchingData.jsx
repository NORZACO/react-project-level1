import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { Button } from "react-bootstrap";

const URL = "http://127.0.0.1:8000/api/v1/users";

// Catching rendering errors with an error boundary
function CatchingError() {
  return <h1> CatchingError </h1>;
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <CatchingError />;
    }
    return this.props.children;
  }
}

// TODO #1 : LR-1 calling express api
function FetchingData() {
  const [getResults, setResults] = useState([]);
  const [status, setStatus] = useState(null);
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setStatus(data.status);
        setResults(data.data.result);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="album py-5 bg-body-tertiary">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1>Users</h1>
          </div>
          <div class="col">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button class="btn btn-primary me-md-2" type="button">
                Add User
              </button>
              {/* <Link to="/adduser"><Button variant="outline-secondary">Add user</Button
              ></Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search user"
                aria-label="Search user"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {status === "success" ? (
        getResults.length > 0 ? (
          getResults.map((item) => (
            <div key={item.userId}>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      onClick={() => console.log(alert("Bye"))}
                      src={item.avatar}
                      className="bd-placeholder-img card-img-top"
                      alt="xx"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.username}</h5>
                      <p className="card-text">{item.email}</p>
                      <p className="card-text">{item.password}</p>
                      <p className="card-text">{item.birthdate}</p>
                      <p className="card-text">{item.registeredAt}</p>
                      <p className="card-text">{item.lastLogin}</p>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No users found</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default function FetchData() {
  return (
    <div>
      <ErrorBoundary>
        <FetchingData />
      </ErrorBoundary>
    </div>
  );
}
