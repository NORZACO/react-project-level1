import "../static/bootstrap/signin.css";

export function SignIn() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export function Login() {
  return (
    <>
    <hr/>
      <main className="form-signin w-10 m-auto border border-secondary" style={{
        maxWidth: "700px",
        paddingBottom: "15px",
        paddingTop: "50px",
      }}>
        <form>
          <h1 class={"h3 mb-3 fw-normal"}>Please sign in</h1>
          <div class={"form-floating"}>
            <input
              type={"email"}
              class={"form-control"}
              id={"floatingInput"}
              placeholder={"name@example.com"}
            />
            <label for={"floatingInput"}>Email address</label>
          </div>
          <div class={"form-floating"}>
            <input
              type={"password"}
              class={"form-control"}
              id={"floatingPassword"}
              placeholder={"Password"}
            />
            <label for={"floatingPassword"}>Password</label>
          </div>
          <div class={"form-check text-start my-3"}>
            <input
              class={"form-check-input"}
              type={"checkbox"}
              value="remember-me"
              id={"flexCheckDefault"}
            />
            <label class={"form-check-label"} for={"flexCheckDefault"}>
              Remember me
            </label>
          </div>
          <button class={"btn btn-primary w-100 py-2"} type="submit">
            Sign in
          </button>
          <p class={"mt-5 mb-3 text-body-secondary"}>&copy; 2017-2023</p>
        </form>
      </main>
      {/* <div class="b-example-divider"></div> */}
    </>
  );
}
