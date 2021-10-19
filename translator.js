function googleTranslateElementInit() {
	new google.translate.TranslateElement(
		{ pageLanguage: "lt" },
		"google_translate_element"
	);
	document.querySelectorAll(".goog-te-combo")[0].classList.add("form-control");
}
