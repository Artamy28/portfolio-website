// On page load, check local storage and toggle darkmode if it was toggled before
const checkDarkmode = () => {
	if (localStorage.getItem("isDarkMode") === "1") {
		darkmodeToggle();
	}
};

// Function called when button is clicked, used to toggle darkmode on/off
const darkmodeToggle = () => {
	let select = document.getElementById("darkmodeToggle");
	let select2 = document.querySelector(".nav-links button");

	// if lightmode on, toggle into darkmode
	if (select.href.includes("/css/styles_lightmode.css")) {
		select.setAttribute("href", "./css/styles_darkmode.css");
		select2.innerHTML = "Light Mode";
		// save darkmode status into local storage
		localStorage.setItem("isDarkMode", "1");
	}
	// if darkmode on, toggle into lightmode
	else if (select.href.includes("/css/styles_darkmode.css")) {
		select.setAttribute("href", "./css/styles_lightmode.css");
		select2.innerHTML = "Dark Mode";
		// save darkmode status into local storage
		localStorage.setItem("isDarkMode", "0");
	}
	// else something is wrong
	else {
		console.log("darkmodeToggle error: href");
	}
};

// Toggling videos on/off
const openVideo1 = () => {
	let select = document.getElementById("vid1");
	select.classList.toggle("hide");
};

const closeVideo1 = () => {
	let select = document.getElementById("vid1");
	select.classList.add("hide");
};

const openVideo2 = () => {
	let select = document.getElementById("vid2");
	select.classList.toggle("hide");
};

const closeVideo2 = () => {
	let select = document.getElementById("vid2");
	select.classList.add("hide");
};

const openVideo3 = () => {
	let select = document.getElementById("vid3");
	select.classList.toggle("hide");
};

const closeVideo3 = () => {
	let select = document.getElementById("vid3");
	select.classList.add("hide");
};

const formSubmit = (e) => {
	alert("form submit");
	console.log(e.target.elements);
};

// the navbar is usually solid
// make the navbar opaque in between page sections, when there is nothing behind
// this makes it so the navbar color transitions smoothly
document.addEventListener("scroll", () => {
	const vh = (window.scrollY / window.innerHeight) * 100;
	const section1 = document.querySelector(".section1");
	const section2 = document.querySelector(".section2");
	const section3 = document.querySelector(".section3");
	const scrollHeightToVh =
		(document.body.scrollHeight / window.innerHeight) * 100;
	// first page
	if (vh >= 90 && vh <= 100) {
		section1.classList.add("transparent");
		section2.classList.add("transparent");
		section3.classList.add("transparent");
	}
	// second page
	else if (vh >= 190 && vh <= 200) {
		section1.classList.add("transparent");
		section2.classList.add("transparent");
		section3.classList.add("transparent");
	}
	// third page, since page before height is auto, we calculate from the bottom
	else if (vh >= scrollHeightToVh - 110 && vh <= scrollHeightToVh - 100) {
		section1.classList.add("transparent");
		section2.classList.add("transparent");
		section3.classList.add("transparent");
	}
	// else, if we are not in between pages remove transparent
	else {
		section1.classList.remove("transparent");
		section2.classList.remove("transparent");
		section3.classList.remove("transparent");
	}

	// first page
	if (vh < 100) {
		section1.classList.add("s1p1");
		section1.classList.remove("s1p2");

		section2.classList.add("s2p1");
		section2.classList.remove("s2p2");

		section3.classList.add("s3p1");
		section3.classList.remove("s3p2");
		console.log("page1");
	}
	// second page
	else if (vh >= 100 && vh < 200) {
		section1.classList.remove("s1p1");
		section1.classList.remove("s1p3");
		section1.classList.add("s1p2");

		section2.classList.remove("s2p1");
		section2.classList.remove("s2p3");
		section2.classList.add("s2p2");

		section3.classList.remove("s3p1");
		section3.classList.remove("s3p3");
		section3.classList.add("s3p2");

		console.log("page2");
	}
	// third page, since project page height is auto, we calculate from the bottom
	else if (vh >= 200 && vh < scrollHeightToVh - 100) {
		section1.classList.remove("s1p2");
		section1.classList.remove("s1p4");
		section1.classList.add("s1p3");

		section2.classList.remove("s2p2");
		section2.classList.remove("s2p4");
		section2.classList.add("s2p3");

		section3.classList.remove("s3p2");
		section3.classList.remove("s3p4");
		section3.classList.add("s3p3");

		console.log("page3");
	}
	// fourth page, since project page height is auto, we calculate from the bottom
	else if (vh >= scrollHeightToVh - 100) {
		section1.classList.remove("s1p3");
		section1.classList.add("s1p4");

		section2.classList.remove("s2p3");
		section2.classList.add("s2p4");

		section3.classList.remove("s3p3");
		section3.classList.add("s3p4");

		console.log("page4");
	}
	// else there is an error
	else {
		console.log("scroll error: vh");
	}
});
