class OneSignalComponent extends React.Component {
	constructor(props) {
		super(props);
		this.settings = {
			timeout: 1000,
		};
		this.oneSignalInit = this.oneSignalInit.bind(this);
	}

	oneSignalInit(passedId) {
		window.OneSignal = window.OneSignal || [];
		OneSignal.push(function () {
			OneSignal.init({
				appId: passedId,
			});
		});
	}

	componentDidMount() {
		if (
			!window.OneSignal &&
			config.oneSignal.enabled === true &&
			config.oneSignal.onesignalId !== ""
		) {
			let el = document.createElement("script");
			el.src = "https://cdn.onesignal.com/sdks/OneSignalSDK.js";
			el.defer="defer";
			document.body.appendChild(el);
			try {
				this.oneSignalInit(config.oneSignal.onesignalId);
			} catch (error) {
				setTimeout(() => {
					this.oneSignalInit(config.oneSignal.onesignalId);
				}, this.settings.timeout);
			}
		}
	}

	render() {
		return <div className="OneSignal"></div>;
	}
}
