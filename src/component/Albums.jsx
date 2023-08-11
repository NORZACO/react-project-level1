import React from "react";
// import '@docsearch/css@3';
import "bootstrap/dist/css/bootstrap.min.css";

// Custom styles can be added in a separate CSS file or with a CSS-in-JS library
const customStyles = `
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
  // Add other styles here...
`;

const Album = () => (
  <>
    <style>{customStyles}</style>
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Album example</h1>
            <p className="lead text-body-secondary">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
            <p>
              <a href="#6" className="btn btn-primary my-2">
                Main call to action
              </a>
              <a href="#6" className="btn btn-secondary my-2">
                Secondary action
              </a>
            </p>
          </div>
        </div>
      </section>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {/* Here you can map through an array of cards and render them dynamically */}
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
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
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat the above code block for additional cards */}
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Album;
