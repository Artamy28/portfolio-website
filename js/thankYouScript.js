// On page load, check local storage and toggle darkmode if it was toggled before
const checkDarkmode = () => {
	if (localStorage.getItem("isDarkMode") === "1") {
		darkmodeToggle();
	}
};

const darkmodeToggle = () => {
	let select = document.getElementById("darkmodeToggle");

	// if lightmode on, toggle into darkmode
	if (select.href.includes("/css/thankYou_styles_light.css")) {
		select.setAttribute("href", "./css/thankYou_styles_dark.css");
		// save darkmode status into local storage
		localStorage.setItem("isDarkMode", "1");
	}
	// if darkmode on, toggle into lightmode
	else if (select.href.includes("/css/thankYou_styles_dark.css")) {
		select.setAttribute("href", "./css/thankYou_styles_light.css");
		// save darkmode status into local storage
		localStorage.setItem("isDarkMode", "0");
	}
	// else something is wrong
	else {
		console.log("darkmodeToggle error: href");
	}
};
