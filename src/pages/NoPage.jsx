// bootstrap-icons
import "bootstrap-icons/font/bootstrap-icons.css";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// jquery
// import "jquery/dist/jquery.min.js";

export default function NoPage() {
  return (
    <>
      <div
        class="page-wrap d-flex flex-row align-items-center"
        style={{
          height: "100vh",
        }}
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 text-center">
              <span class="display-1 d-block">404</span>
              <div class="mb-4 lead">
                The page you are looking for was not found.
              </div>
              <a href="/" class="btn btn-link">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
