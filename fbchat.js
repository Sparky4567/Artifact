class FbChat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shouldUpdate: null,
		};
	}

	componentDidMount() {
		if (config.messenger === true) {
			if (this.state.shouldUpdate === null) {
				var chatbox = document.getElementById("fb-customer-chat");
				chatbox.setAttribute("page_id", config.fbpageId);
				chatbox.setAttribute("attribution", "biz_inbox");

				window.fbAsyncInit = function () {
					FB.init({
						xfbml: true,
						version: "v12.0",
					});
				};

				(function (d, s, id) {
					var js,
						fjs = d.getElementsByTagName(s)[0];
					if (d.getElementById(id)) return;
					js = d.createElement(s);
					js.id = id;
					js.src =
						"https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
					fjs.parentNode.insertBefore(js, fjs);
				})(document, "script", "facebook-jssdk");
				this.setState({ shouldUpdate: true });
			} else {
				this.setState({ shouldUpdate: null }, () => {
					if (window.FB) {
						FB.init({
							xfbml: true,
							version: "v12.0",
						});
					}
				});
			}
		}
	}

	render() {
		return (
			<div className="row">
				<div id="fb-root"></div>
				<div
					id="fb-customer-chat"
					className="fb-customerchat"
					attribution="setup_tool"
					page_id={config.messenger === true ? config.fbpageId : ""}
					theme_color="#212121"
				></div>
			</div>
		);
	}
}
