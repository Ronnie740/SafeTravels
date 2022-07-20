$(function () {
	$("#dropdown").on("click", function () {
		if ($("#dropdown-ul").hasClass("invisible")) {
			$("#dropdown-ul").removeClass("invisible");
			$("#dropdown-ul").addClass("visible");
		} else {
			$("#dropdown-ul").removeClass("visible");
			$("#dropdown-ul").addClass("invisible");
		}
	});
	$("#menuIcon").on("click", function () {
		$("#navSm").toggleClass("hidden");
	});
	$("#smDropdown").on("click", function () {
		$("#smDropdown-ul").toggleClass("hidden");
	});
});
