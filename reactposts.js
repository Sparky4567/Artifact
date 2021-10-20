class PostComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      searchData: null,
      searchWord: null,
      maxResults: config.maxCount,
      carouselItems: null,
    };
    this.webType = {
      type: "website",
    };
    this.cardStyle = {
      maxHeight: 20 + "rem",
      minHeight: 20 + "rem",
    };
    this.cardWidth = {
      width: 100 + "%",
    };
    this.carouselStyle = {
      width: 100 + "%",
      height: 28 + "rem",
      filter: `contrast(${60 + "%"})`,
      borderRadius: 10 + "px",
    };

    this.buttonValues = {
      loadmoreText: config.loadmoreTitle,
    };
    this.getVal = this.getVal.bind(this);
    this.loadmore = this.loadmore.bind(this);

    this.settings = {
      key: config.key,
      blogId: config.blogid,
    };
    this.importantUrls = {
      mainFeed: `https://www.googleapis.com/blogger/v3/blogs/${this.settings.blogId}/posts?maxResults=${this.state.maxResults}&status=live&fetchImages=true&fetchBodies=true&key=${this.settings.key}`,
    };
  }

  getVal() {
    if (
      document.getElementById("searField").value !== "" &&
      this.state.data !== null
    ) {
      let searchWord = document.getElementById("searField").value;
      let temp = [];
      this.state.data.forEach((element) => {
        if (element.content.includes(String(searchWord).toLowerCase())) {
          temp.push(element);
        }
      });
      if (temp.length === 0) {
        this.setState({ searchData: null });
      } else {
        this.setState({ searchData: temp });
      }
    } else if (document.getElementById("searField").value === "") {
      fetch(this.importantUrls.mainFeed)
        .then((r) => r.json())
        .then((d) => {
          this.setState({ data: d.items });
        });
    }
  }

  loadmore() {
    this.setState({ maxResults: this.state.maxResults + 9 }, () => {
      this.importantUrls.mainFeed = `https://www.googleapis.com/blogger/v3/blogs/${this.settings.blogId}/posts?maxResults=${this.state.maxResults}&status=live&fetchImages=true&fetchBodies=true&key=${this.settings.key}`;
      fetch(this.importantUrls.mainFeed)
        .then((r) => r.json())
        .then((d) => {
          this.setState({ data: d.items });
        });
    });
  }

  componentDidMount() {
    fetch(this.importantUrls.mainFeed)
      .then((r) => r.json())
      .then((d) => {
        this.setState({ data: d.items }, () => {
          let carouselSlicedItems = this.state.data.slice(0, 4);
          this.setState({ carouselItems: carouselSlicedItems });
        });
      });
  }

  render() {
    if (this.state.data !== null && this.state.searchData === null) {
      return (
        <div className="container">
          <div className="row pt-4 pb-2">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <GoogleTranslator />
            </div>
          </div>
          <div className="row pt-4 pb-2">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input
                id="searField"
                onKeyPress={this.getVal}
                className="form-control form-control-lg"
                placeholder={config.searchplaceholderText}
              ></input>
            </div>
          </div>
          {config.carousel === true &&
          this.state.carouselItems !== null &&
          config.carousel !== false &&
          this.state.data.length >= 3 ? (
            <div className="row pt-4 pb-2">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div
                  id="carouselId"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators">
                    {this.state.carouselItems.map((item, ind) => {
                      return (
                        <li
                          data-target="#carouselId"
                          data-slide-to={ind}
                          class="active"
                        ></li>
                      );
                    })}
                  </ol>
                  <div class="carousel-inner" role="listbox">
                    {this.state.carouselItems.map((item, x) => {
                      return x === 0 ? (
                        <div class="carousel-item active">
                          <Link
                            to={{
                              pathname: `${
                                item.url.split(
                                  window.location.host.split(".")[
                                    window.location.host.split(".").length - 1
                                  ]
                                )[1]
                              }`,
                              message: item[x],
                              dataStream: this.state.data,
                              in: x,
                              goUp: true,
                            }}
                          >
                            <img
                              style={this.carouselStyle}
                              src={
                                item.images ? item.images[0].url : graphImageUrl
                              }
                              data-src={
                                item.images ? item.images[0].url : graphImageUrl
                              }
                              alt={`${x} slide`}
                            />
                          </Link>
                          <div class="carousel-caption">
                            <h3>{item.title}</h3>
                          </div>
                        </div>
                      ) : (
                        <div class="carousel-item">
                          <Link
                            to={{
                              pathname: `${
                                item.url.split(
                                  window.location.host.split(".")[
                                    window.location.host.split(".").length - 1
                                  ]
                                )[1]
                              }`,
                              message: item[x],
                              dataStream: this.state.data,
                              in: x,
                              goUp: true,
                            }}
                          >
                            <img
                              style={this.carouselStyle}
                              src={
                                item.images ? item.images[0].url : graphImageUrl
                              }
                              data-src={
                                item.images ? item.images[0].url : graphImageUrl
                              }
                              alt={`${x} slide`}
                            />
                          </Link>
                          <div class="carousel-caption">
                            <h3>{item.title}</h3>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselId"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselId"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="row">
            {this.state.data.map((post, index) => {
              return (
                <div
                  className="col-lg-4 col-md-4 mx-auto col-sm-12 col-xs-12 d-flex align-items-stretch"
                  key={this.state.data[index].published}
                >
                  <div className="card mt-4 mb-4" style={this.cardWidth}>
                    <img
                      className="card-img-top"
                      style={this.cardStyle}
                      src={
                        this.state.data[index].images
                          ? this.state.data[index].images[0].url
                          : graphImageUrl
                      }
                      alt={window.location.hostname}
                    />
                    <div className="card-header">
                      {config.publishedonText}
                      {new Date(
                        this.state.data[index].published
                      ).toLocaleString()}
                    </div>
                    <div className="card-body">
                      <div className="card-title">
                        <h4>{this.state.data[index].title}</h4>
                      </div>
                      <p>
                        <Link
                          className="btn btn-md btn-dark"
                          to={{
                            pathname: `${
                              this.state.data[index].url.split(
                                window.location.host.split(".")[
                                  window.location.host.split(".").length - 1
                                ]
                              )[1]
                            }`,
                            message: this.state.data[index],
                            dataStream: this.state.data,
                            in: index,
                            goUp: true,
                          }}
                        >
                          {config.readmoreTitle}
                        </Link>
                      </p>
                    </div>
                    <div className="card-footer text-muted">
                      {config.publishedbyTitle +
                        this.state.data[index].author.displayName}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row pt-4 pb-4 text-center mb-4">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              {this.state.data.length === this.state.maxResults ? (
                <button
                  id="loadMore"
                  className="btn btn-md btn-lg btn-dark"
                  onClick={this.loadmore}
                >
                  {this.buttonValues.loadmoreText}
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      );
    } else if (this.state.data !== null && this.state.searchData !== null) {
      return (
        <div className="container">
          <div className="row pt-4 pb-2">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <GoogleTranslator />
            </div>
          </div>
          <div className="row pt-4 pb-2">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input
                id="searField"
                onKeyUp={this.getVal}
                className="form-control form-control-lg"
                placeholder={config.searchplaceholderText}
              ></input>
            </div>
          </div>
          <div className="row">
            {this.state.searchData.map((post, index) => {
              return (
                <div
                  className="col-lg-4 col-md-4 mx-auto col-sm-12 col-xs-12 d-flex align-items-stretch"
                  key={this.state.searchData[index].published}
                >
                  <div className="card mt-4 mb-4" style={this.cardWidth}>
                    <img
                      className="card-img-top"
                      style={this.cardStyle}
                      src={
                        this.state.searchData[index].images
                          ? this.state.searchData[index].images[0].url
                          : graphImageUrl
                      }
                      alt={window.location.hostname}
                    />
                    <div className="card-header">
                      {config.publishedonText}
                      {new Date(
                        this.state.searchData[index].published
                      ).toLocaleString()}
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">
                        <h4>{this.state.searchData[index].title}</h4>
                      </h4>
                      <p>
                        <Link
                          className="btn btn-md btn-dark"
                          to={{
                            pathname: `/posts/${this.state.searchData[index].id}`,
                            message: this.state.searchData[index],
                            dataStream: this.state.searchData,
                            in: index,
                            goUp: true,
                          }}
                        >
                          {config.readmoreTitle}
                        </Link>
                      </p>
                    </div>
                    <div className="card-footer text-muted">
                      {config.publishedbyTitle +
                        this.state.searchData[index].author.displayName}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row pt-4 pb-4 text-center mb-4">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              {this.state.data.length === this.state.maxResults - 1 ? (
                <button
                  id="loadMore"
                  className="btn btn-md btn-lg btn-dark"
                  onClick={this.loadmore}
                >
                  {this.buttonValues.loadmoreText}
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      );
    } else {
      return (
       <LoadingComponent/>
      );
    }
  }
}
