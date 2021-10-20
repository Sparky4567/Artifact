class OnePost extends React.Component {
	constructor(props) {
		super(props);

		this.cardStyle = {
			maxHeight: 26 + "rem",
			minHeight: 26 + "rem",
		};
		this.cardWidth = {
			width: 100 + "%",
		};
		this.state = {
			id: "sharethis-inline-buttons",
			count: null,
			message: null,
			data: null,
			stream: null,
			menuBar: null,
			nextMessage: null,
			previousMessage: null,
			nextUrl: null,
			prevUrl: null,
			next: null,
			shouldgoUp: null,
			previous: null,
			nextIndex: null,
			previousIndex: null,
			repeat: false,
			maxResults: 1,
			config: {
				alignment: "left",
				background_color: "#212121",
				color: "custom",
				enabled: true,
				font_size: 16,
				has_spacing: true,
				labels: "none",
				language: "en",
				min_count: 0,
				networks: [
					"facebook",
					"twitter",
					"pinterest",
					"email",
					"sms",
					"sharethis",
				],
				num_networks: 6,
				padding: 12,
				radius: 20,
				show_total: true,
				size: 48,
				size_label: "large",
				spacing: 8,
				text_color: "#fff",
				use_native_counts: true,
			},
		};
		this.webType = {
			type: "website",
		};
		this.settings = {
			key: config.key,
			blogId: config.blogid,
		};

		this.disquscheck = this.disquscheck.bind(this);
		this.shareThis = this.shareThis.bind(this);
		this.gen = this.gen.bind(this);
		this.getNext = this.getNext.bind(this);
		this.getNextButton = this.getNextButton.bind(this);
		this.getPrevious = this.getPrevious.bind(this);
		this.getPreviousButton = this.getPreviousButton.bind(this);
		this.goUp = this.goUp.bind(this);
		this.adsense = this.adsense.bind(this);
	}

	disquscheck() {
		if (config.discusScript !== "") {
			let disqus_config = function () {
				this.page.url = window.location.href;
				this.page.identifier = this.page.url;
			};
			if (!window.DISQUS) {
				(function () {
					var d = document,
						s = d.createElement("script");
					s.src = config.discusScript;
					s.setAttribute("data-timestamp", +new Date());
					(d.head || d.body).appendChild(s);
				})();
			} else {
				DISQUS.reset({
					reload: true,
					config: disqus_config,
				});
			}
		}
	}

	goUp() {
		if (this.state.shouldgoUp !== null && this.state.shouldgoUp === true) {
			window.scrollTo(0, 0);
			this.setState({ shouldgoUp: null });
		}
	}

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
}
