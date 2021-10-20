class GoogleTranslator extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: null,
		};
		this.settings = {
			timeout: 700,
		};
		this.googleTranslatator = this.googleTranslatator.bind(this);
		this.checkifLoaded = this.checkifLoaded.bind(this);
	}

	checkifLoaded() {
		if (this.state.loaded === true) {
			window.google.translate.TranslateElement(
				{
					pageLanguage: "lt",
				},
				"google_translate_element"
			);
			this.setState({ loaded: null }, () => {
				document
					.querySelectorAll(".goog-te-combo")[0]
					.classList.add("form-control");
			});
		}
	}

	googleTranslatator() {
		let el = document.createElement("script");
		el.id = "bigG";
		el.defer = "defer";
		el.type = "text/javascript";
		el.src = `https://translate.google.com/translate_a/element.js`;
		el.onload = () => {
			setTimeout(() => {
				this.setState({ loaded: true });
			}, this.settings.timeout);
		};
		document.body.appendChild(el);
	}

	componentDidMount() {
		this.googleTranslatator();
	}

	componentDidUpdate() {
		this.checkifLoaded();
	}

	render() {
		return <div id="google_translate_element"></div>;
	}
}
