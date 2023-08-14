import React, { useState, useEffect } from "react";
import "../static/css/album.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

const query = `
query {
    allLifts {
        id
        name
        status
        elevationGain
    }
}`;

// options
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query }),
};

const URL = "https://snowtooth.moonhighway.com/";

function Lift({ name, elevationGain, status, url = "https://www.mwamuzidev.com/media/blog_posts/images/The_Backend_Developer_Friend_for_Mock_Data.png" }) {
  return (
    <div className="LoaderBoots">
{/*       
      <h1> status : {status} </h1>
      <h1>username: {name} </h1>
      <h1> elevationGain: {elevationGain} </h1>
        <h1> url: {url} </h1> */}

<div className="album py-5 bg-body-tertiary">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 albumShadow">
        <div className="col">
          <div className="card shadow-sm">
            <img src={url} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>

              {/* all data */}
              <ul className="list-group list-group-flush">
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  Status
                  <span className="badge bg-primary rounded-pill">
                    {status}
                  </span>
                </li>
              </ul>

              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )

}

function LoadingCompenent() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
}

// let RawFetchingData
function FetchLiftData() {
  const [data, setDatas] = useState([]); // get data
  const [error, setError] = useState(null); // error
  const [isLoading, setLoadeding] = useState(false); // loading

  useEffect(() => {
    setLoadeding(true); // Fixed the typo here as well
    fetch(URL, options)
      .then((response) => response.json())
      .then(setDatas) // set data
      .then(() => setLoadeding(false)) // Usually, you would set loading to false after receiving data
      .then(() => console.log("data fetched"))
      .catch(setError);
  }, []);

  console.log(data.data);

  // check if it is loading
  if (isLoading) return <LoadingCompenent />;
  // check is they is error
  if (error) return <div>Error: {JSON.stringify(error.message)}</div>;
  // check if they is no data
  if (!data) return <div>No Data</div>;

  // if everything is ok
  console.log(data);
  //  data.allLifts
  return (
    <div>
      {data?.data?.allLifts.map((lift) => (
        <Lift
          key={lift.id}
          id={lift.id}
          name={lift.name}
          status={lift.status}
          capacity={lift.capacity}
          night={lift.night}
          elevationGain={lift.elevationGain}
          type={lift.type}
          url={lift.url}
          trails={lift.trails}
        />
      ))}
    </div>
  );
}


export default FetchLiftData;
