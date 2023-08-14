// import React from 'react'

function Footer() {
  return (
    // <footer className="bg-dark text-white mt-5 p-4 text-center footers">
    //   © {new Date().getFullYear()} My App Name. All Rights Reserved.
    // </footer>

    <>
      <div
        className="container"
        style={{
          backgroundColor: "#f8f9fa",
          marginTop: "100px",
          // backgroundImage: `url("https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VydmljZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80")`,
        }}
      >
        <footer className="py-5">
          <div className="row">
            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-4 offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div classNameName="d-flex justify-content-between py-4 my-4 border-top">
            <p>© 2021 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a classNameName="link-dark" href="/.">
                  {/* <svg classNameName="bi" width="24" height="24">
                    <use xlink:href="/twitter"></use>
                  </svg> */}
                </a>
              </li>
              <li classNameName="ms-3">
                <a classNameName="link-dark" href="/.">
                  {/* <svg classNameName="bi" width="24" height="24">
                    <use xlink:href="/instagram"></use>
                  </svg> */}
                </a>
              </li>
              <li classNameName="ms-3">
                <a classNameName="link-dark" href="/.">
                  {/* <svg classNameName="bi" width="24" height="24">
                    <use xlink:href="/facebook"></use>
                  </svg> */}
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
