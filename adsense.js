class AdsenseComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shouldUpdate: null,
		};
		this.settings = {
			timeout: 700,
		};
		this.adElementStyle = {
			width: 250 + "px",
			height: 14 + "rem",
		};
	}

	componentDidMount() {
		if (config.adsense.adsenseId !== "" && config.adsense.enabled === true) {
			if (config.adsense.adSlot !== "") {
				if (!window.adsbygoogle) {
					let el = document.createElement("script");
					el.async;
					el.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`;
					el.crossorigin = "anonymous";
					document.body.appendChild(el);
					(window.adsbygoogle = window.adsbygoogle || []).push({});
				}
			}
		}
	}

	render() {
		return (
			<div className="row">
				<ins
					className="adsbygoogle d-block mx-auto"
					style={this.adElementStyle}
					data-ad-client={`ca-pub-${config.adsense.adsenseId}`}
					data-ad-slot={config.adsense.adSlot}
					data-ad-layout="in-article"
					data-ad-format="fluid"
				></ins>
			</div>
		);
	}
}
