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

<<<<<<< HEAD
    this.disquscheck = this.disquscheck.bind(this);
    this.shareThis = this.shareThis.bind(this);
    this.gen = this.gen.bind(this);
    this.getNext = this.getNext.bind(this);
    this.getNextButton = this.getNextButton.bind(this);
    this.getPrevious = this.getPrevious.bind(this);
    this.getPreviousButton = this.getPreviousButton.bind(this);
    this.adsense = this.adsense.bind(this);
    this.goUp = this.goUp.bind(this);
  }
=======
		this.buttonValues = {
			loadmoreText: config.loadmoreTitle,
		};
		this.getVal = this.getVal.bind(this);
		this.loadmore = this.loadmore.bind(this);
>>>>>>> 41c6a4574cf56f958973bc2bbb62ae2197cc0b5e

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

<<<<<<< HEAD
  shareThis() {
    if (config.shareKey !== "") {
      if (window.__sharethis__) {
        window.__sharethis__.load("inline-share-buttons", this.state.config);
      } else {
        let shareThisScript = document.createElement("script");
        shareThisScript.src = `https://platform-api.sharethis.com/js/sharethis.js#property=${config.shareKey}&product=sop`;
        shareThisScript.defer = "defer";
        document.body.appendChild(shareThisScript);
        shareThisScript.addEventListener("load", () => {
          __sharethis__.initialize();
        });
      }
    }
  }
=======
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
>>>>>>> 41c6a4574cf56f958973bc2bbb62ae2197cc0b5e

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

<<<<<<< HEAD
  componentDidMount() {
    if (this.props.location.message) {
      this.setState(
        {
          count: this.props.location.in,
          message: this.props.location.message,
          stream: this.props.location.dataStream,
          shouldgoUp: this.props.location.goUp,
        },
        () => {
          if (
            this.state.stream !== null &&
            this.state.message !== null &&
            this.state.count !== null &&
            typeof this.props.location.reset === "undefined"
          ) {
            this.setState({ repeat: true }, () => {
              this.gen();
              this.disquscheck();
              this.adsense();
              this.goUp();
            });
          }
        }
      );
    } else {
      let postId = window.location.pathname;
      let url = `https://www.googleapis.com/blogger/v3/blogs/${this.settings.blogId}/posts/bypath?path=${postId}&fetchBodies=true&fetchImages=true&key=${this.settings.key}`;

      fetch(url)
        .then((r) => {
          if (r.ok) {
            return r.json();
          } else {
            let notfoundMessage = {
              title: config.notfoundError,
              content: config.notfoundText,
              images: [
                {
                  url: config.graphImageUrl,
                },
              ],
              author: {
                displayName: "Artifact theme",
              },
            };
            return notfoundMessage;
          }
        })
        .then((d) => {
          this.setState({ message: d, shouldgoUp: true }, () => {
            this.disquscheck();
            this.shareThis();
            this.adsense();
            this.goUp();
          });
        });
    }
  }

  gen() {
    let ob = { newer: this.getPrevious(), older: this.getNext() };
    ob.older.answer !== false
      ? this.setState({
          next: true,
          nextUrl: ob.older.answer.url.split(
            window.location.host.split(".")[
              window.location.host.split(".").length - 1
            ]
          )[1],
        })
      : this.setState({
          next: false,
          nextUrl: null,
        });
    ob.newer.answer !== false
      ? this.setState({
          previous: true,
          prevUrl: ob.newer.answer.url.split(
            window.location.host.split(".")[
              window.location.host.split(".").length - 1
            ]
          )[1],
        })
      : this.setState({
          previous: false,
          prevUrl: null,
        });
  }

  getNext() {
    if (this.state.repeat === true && this.state.count !== null) {
      let thisArray = this.state.stream;
      let thiselIndex = this.state.count;
      let nextPostindex = thiselIndex + 1;
      let nextEl;

      switch (true) {
        case typeof thisArray[nextPostindex] !== "undefined":
          nextEl = thisArray[nextPostindex];
          break;
        case typeof thisArray[nextPostindex] === "undefined":
          nextEl = false;
          break;

        default:
          break;
      }
      return { answer: nextEl };
    }
  }

  getNextButton() {
    if (this.state.repeat === true && this.state.count !== null) {
      let thisArray = this.state.stream;
      let thiselIndex = this.state.count;
      let nextPostindex = thiselIndex + 1;
      let nextEl;

      switch (true) {
        case typeof thisArray[nextPostindex] !== "undefined":
          nextEl = thisArray[nextPostindex];
          break;
        case typeof thisArray[nextPostindex] === "undefined":
          nextEl = false;
          break;

        default:
          break;
      }
      let ob = { answer: nextEl };
      if (ob.answer !== false) {
        this.setState(
          {
            message: ob.answer,
            count: this.state.count + 1,
          },
          () => {
            this.gen();
          }
        );
        window.scrollTo(0, 0);
      }
    }
  }

  getPrevious() {
    let thisArray = this.state.stream;
    let thiselIndex = this.state.count;
    let previousPostindex = thiselIndex - 1;
    let previousEl;
    switch (true) {
      case typeof thisArray[previousPostindex] !== "undefined":
        previousEl = thisArray[previousPostindex];
        break;
      case typeof thisArray[previousPostindex] === "undefined":
        previousEl = false;
        break;

      default:
        break;
    }
    return { answer: previousEl };
  }

  getPreviousButton() {
    let thisArray = this.state.stream;
    let thiselIndex = this.state.count;
    let previousPostindex = thiselIndex - 1;
    let previousEl;
    switch (true) {
      case typeof thisArray[previousPostindex] !== "undefined":
        previousEl = thisArray[previousPostindex];
        break;
      case typeof thisArray[previousPostindex] === "undefined":
        previousEl = false;
        break;

      default:
        break;
    }
    let ob = { answer: previousEl };
    if (ob.answer !== false) {
      this.setState(
        {
          message: ob.answer,
          count: this.state.count - 1,
        },
        () => {
          this.gen();
        }
      );
      window.scrollTo(0, 0);
    }
  }

  componentDidUpdate() {
    if (
      typeof this.props.location.reset !== "undefined" &&
      this.props.location.reset === true
    ) {
      let postId = window.location.pathname;
      let url = `https://www.googleapis.com/blogger/v3/blogs/${this.settings.blogId}/posts/bypath?path=${postId}&fetchBodies=true&fetchImages=true&key=${this.settings.key}`;
      fetch(url)
        .then((r) => r.json())
        .then((d) => {
          this.setState({ message: d }, () => {
            this.disquscheck();
            this.shareThis();
            this.adsense();
            this.props.location.reset = false;
          });
        });
    }
    if (this.state.shouldhideNav === true) {
      this.setState({ shouldhideNav: false });
      this.disquscheck();
      this.shareThis();
    } else {
      this.disquscheck();
      this.shareThis();
    }
  }

  render() {
    return (
      <div>
        {this.state.message !== null ? (
          <div className="row">
            <div className="col-lg-7 col-md-7 mx-auto col-sm-12 col-xs-12 d-flex align-items-stretch">
              <div className="card mt-4 mb-4" style={this.cardWidth}>
                <img
                  className="card-img-top"
                  style={this.cardStyle}
                  src={
                    this.state.message.images !== "undefined"
                      ? this.state.message.images
                        ? this.state.message.images[0].url
                        : config.graphImageUrl
                      : config.graphImageUrl
                  }
                  alt={window.location.hostname}
                />
                <div className="card-header">
                  {config.publishedonText}
                  {new Date(this.state.message.published).toLocaleString()}
                </div>
                <div className="card-body">
                  <h4 className="card-title">{this.state.message.title}</h4>
                  <div className="row pt-4 pb-2">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <GoogleTranslator />
                    </div>
                  </div>
                  <div className="row py-4">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div
                        id="sharethis-inline-buttons"
                        className="sharethis-inline-share-buttons"
                        data-url={window.location.href}
                        data-title={document.title}
                      />
                    </div>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.message.content,
                    }}
                  ></div>
                  <div className="row py-4">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <FbChat />
                      <div id="disqus_thread"></div>
                    </div>
                  </div>

                  <div className="row text-center py-4" id="postNav">
                    <div className="col-lg-6 text-center col-md-6 col-sm-12 col-xs-12 mx-auto">
                      {this.state.previous !== null &&
                      this.state.previous !== false ? (
                        <Link
                          id="previousTap"
                          className="btn btn-lg btn-dark d-block my-2 mx-1"
                          onClick={this.getPreviousButton}
                          to={{
                            pathname: `${this.state.prevUrl}`,
                            message: this.state.message,
                          }}
                        >
                          {config.previousTitle}
                        </Link>
                      ) : (
                        ""
                      )}
                      {this.state.next !== null && this.state.next !== false ? (
                        <Link
                          id="forwardTap"
                          className="btn btn-lg btn-dark d-block my-2 mx-1"
                          onClick={this.getNextButton}
                          to={{
                            pathname: `${this.state.nextUrl}`,
                            message: this.state.message,
                          }}
                        >
                          {config.nextTitle}
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="col-lg-12 text-center col-md-12 col-sm-12 col-xs-12 mx-auto">
                      <Link className="btn btn-md btn-dark mt-4 d-block" to="/">
                        {config.backtomainTitile}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card-footer text-muted">
                  {this.state.message.author.displayName !== "undefined"
                    ? config.publishedbyTitle +
                      this.state.message.author.displayName
                    : ""}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <LoadingComponent />
        )}
      </div>
    );
  }
=======
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
			return <p>Loading...</p>;
		}
	}
>>>>>>> 41c6a4574cf56f958973bc2bbb62ae2197cc0b5e
}
