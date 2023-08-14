// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js.map";
import "bootstrap/dist/js/bootstrap.min.js";
import "../static/css/services.css";

export const Services = () => {
  return (
    <>
      <section
        id="services"
        className="services-mf pt-5 route"
        style={{
          // backgroundImage: `url("https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VydmljZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80")`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          backgroundPosition: "center",
          // backgroundColor:"#01294b"
        }}
      >
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-sm-12"}>
              <div className={"title-box text-center"}>
                <h3 className="title-a">Services</h3>
                <p className={"subtitle-a"}>
                  Check below some services you are to expect from me
                </p>
                <div className={"line-mf"}></div>
              </div>
            </div>
          </div>

          <div
            className="row border border-secondary showDow"
            style={{
              // backgroundImage: `url("https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VydmljZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80")`,
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "cover",
              backgroundPosition: "center",
              // backgroundColor:"#01294b"
            }}
          >
            <div className="col-md-4 border border-secondary">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <span className="ico-circle">
                      <i className="bi bi-code-square"></i>
                    </span>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title"> WEB DEVELOPMENT </h2>
                  <p className="s-description text-center"></p>
                  <p>
                    Web and backend development using Python, Django, MySQL,
                    Postgres, Express, HTML, Bootstrap, APIs, CSS, JavaScript,
                    Jira, Git, and GitHub to build user-friendly web
                    applications.
                  </p>
                  <p></p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <span className="ico-circle">
                      <i className="bi bi-file-earmark-pdf"></i>
                    </span>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title"> Data Conversion </h2>
                  <p className="s-description text-center"></p>
                  <p>
                    Conversion jobs on Upwork involve transforming files to
                    another format. This can include converting PDF, Word, or
                    HTML documents, as well as images, videos, or audio files.
                  </p>
                  <p></p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <span className="ico-circle">
                      <i className="bi bi-regex"></i>
                    </span>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title"> APIs DEVELOPMENT </h2>
                  <p className="s-description text-center"></p>
                  <p>
                    Can build, test, and optimize APIs using Express, Sequelize,
                    MySQL, Postgres, Redis, and Postman. Can design scalable API
                    architectures and integrate APIs with other systems.
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
