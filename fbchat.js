if (config.messenger === true) {
	if (document.getElementById("fb-customer-chat")) {
		setTimeout(() => {
			if (document.getElementById("fb-customer-chat")) {
				var chatbox = document.getElementById("fb-customer-chat");
				if (chatbox.length) {
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
				}
			}
		}, 1000);
	}
}
