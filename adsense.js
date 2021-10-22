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
			width: 80 + "%",
			height: 14 + "rem",
			display: "block",
			marginLeft: "auto",
			marginRight: "auto",
		};
	}

	componentDidMount() {
		if (config.adsense.adsenseId !== "" && config.adsense.enabled === true) {
			if (config.adsense.adSlot !== "") {
				let el = document.createElement("script");
				el.async;
				el.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`;
				el.crossorigin = "anonymous";
				document.body.appendChild(el);
				window.adsbygoogle.push({});
			}
		}
	}

	render() {
		return (
			<div className="row py-4">
				<ins
					className="adsbygoogle"
					style={this.adElementStyle}
					data-ad-client={`ca-pub-${config.adsense.adsenseId}`}
					data-ad-slot={config.adsense.adSlot}
					data-ad-layout="in-article"
					data-ad-format="fluid"
					data-adtest="on"
				></ins>
			</div>
		);
	}
}
