const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
const App = () => (
  <ReactRouterDOM.BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        {window.location.hostname} <span className="sr-only">(current)</span>
      </Link>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              {config.mainpageTitle} <span className="sr-only">(current)</span>
            </Link>
          </li>
          {config.contactsPostUrl !== "" ? (
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: `/${
                    config.contactsPostUrl.split(
                      config.contactsPostUrl.split("//")[1].split("/")[0] + "/"
                    )[1]
                  }`,
                  reset: true,
                  message: null,
                }}
              >
                {config.contactpageTitle}{" "}
              </Link>
            </li>
          ) : (
            ""
          )}

          {config.aboutMepostUrl !== "" ? (
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: `/${
                    config.aboutMepostUrl.split(
                      config.aboutMepostUrl.split("//")[1].split("/")[0] + "/"
                    )[1]
                  }`,
                  reset: true,
                  message: null,
                }}
              >
                {config.aboutmepageTitle}{" "}
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </nav>
    <Switch>
      <Route exact path="/" component={PostComponent} />
      <Route path="/:postId" component={OnePost} />
      <Route component={NotFound} />
    </Switch>
  </ReactRouterDOM.BrowserRouter>
);

ReactDOM.render(<App />, document.querySelector("#posts"));
