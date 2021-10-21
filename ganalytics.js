class GoogleAnalytics extends React.Component {
	constructor(props) {
		super(props);
		this.settings = {
			timeout: 1000,
		};
	}

	componentDidMount() {
		if (config.gA.enabled === true && config.gA.gtagId !== "") {
			if (!window.dataLayer) {
				let ga = document.createElement("script");
				ga.defer = "defer";
				ga.src = `https://www.googletagmanager.com/gtag/js?id=${config.gA.gtagId}`;
				document.body.appendChild(ga);
				try {
					window.dataLayer = window.dataLayer || [];
					function gtag() {
						dataLayer.push(arguments);
					}
					gtag("js", new Date());
					gtag("config", config.gA.gtagId);
				} catch (error) {
					setTimeout(() => {
						window.dataLayer = window.dataLayer || [];
						function gtag() {
							dataLayer.push(arguments);
						}
						gtag("js", new Date());

						gtag("config", config.gA.gtagId);
					}, this.settings.timeout);
				}
			} else {
				try {
					window.dataLayer = window.dataLayer || [];
					function gtag() {
						dataLayer.push(arguments);
					}
					gtag("js", new Date());
					gtag("config", config.gA.gtagId);
				} catch (error) {
					setTimeout(() => {
						window.dataLayer = window.dataLayer || [];
						function gtag() {
							dataLayer.push(arguments);
						}
						gtag("js", new Date());

						gtag("config", config.gA.gtagId);
					}, this.settings.timeout);
				}
			}
		}
	}

	render() {
		return <div id="gAnalytics" />;
	}
}
