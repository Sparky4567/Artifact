class AdsenseComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shouldUpdate: null,
		};
	}

	componentDidMount() {
		if (config.adsenseId !== "") {
            if(this.state.shouldUpdate===null)
			let el = document.createElement("script");
			el.crossOrigin = "anonymous";
			el.defer = "defer";
			el.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`;
			this.setState({
				shouldUpdate: true,
			},()=>{
                (adsbygoogle = window.adsbygoogle || []).push({
                    google_ad_client: `ca-pub-${config.adsenseId}`,
                    enable_page_level_ads: true
               });
            });
		}
        else{
            this.setState({ shouldUpdate: null }, () => {
                (adsbygoogle = window.adsbygoogle || []).push({
                    google_ad_client: `ca-pub-${config.adsenseId}`,
                    enable_page_level_ads: true
               });
            });
        }
	}

	render() {
		return <div className="adsense"/>;
	}
}
