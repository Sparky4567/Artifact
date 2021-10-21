class GoogleTranslator extends React.Component {
	constructor(props) {
		super(props);

		this.settings = {
			timeout: 1000,
		};
		this.googleTranslatator = this.googleTranslatator.bind(this);
	}

	googleTranslatator() {
		let el = document.createElement("script");
		el.id = "bigG";
		el.defer = "defer";
		el.type = "text/javascript";
		el.src = `https://translate.google.com/translate_a/element.js`;
		document.body.appendChild(el);
		try {
			window.google.translate.TranslateElement(
				{
					pageLanguage: "lt",
				},
				"google_translate_element"
			);
			document
				.querySelectorAll(".goog-te-combo")[0]
				.classList.add("form-control");
		} catch (error) {
			setTimeout(() => {
				window.google.translate.TranslateElement(
					{
						pageLanguage: "lt",
					},
					"google_translate_element"
				);
				document
					.querySelectorAll(".goog-te-combo")[0]
					.classList.add("form-control");
			}, this.settings.timeout);
		}
	}

	componentDidMount() {
		this.googleTranslatator();
	}

	render() {
		return <div id="google_translate_element"></div>;
	}
}
