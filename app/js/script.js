const toggle_RadioBtns = document.querySelectorAll(".toggle__wrapper input");
const body = document.querySelector("body");
const dark_RadioBtn = document.querySelector("#dark");
let pref_ColoredScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Toggle Switch Utilities Functions
function getColorMode() {
	return localStorage.getItem("colorMode");
}
function set_ColorMode(mode) {
	localStorage.setItem("colorMode", mode);
	if(mode == "dark") {
		body.classList.add("dark-mode");
		body.classList.remove("light-mode");
	} else {
		body.classList.remove("dark-mode");
		body.classList.add("light-mode");
	}
}
function dark_RadioBtn_Active() {
	toggle_RadioBtns[0].checked = true;
}
function light_RadioBtn_Active() {
	toggle_RadioBtns[1].checked = true;
}

function colorScheme_onChangeHandler({ matches }) {
  matches ? dark_RadioBtn_Active() : light_RadioBtn_Active();
}

// Toggle Switch Logic
let colorMode = getColorMode();
if(colorMode == "dark") {
	body.classList.add("dark-mode");
	dark_RadioBtn_Active();
} else if(colorMode == "light") {
	body.classList.add("light-mode");
	light_RadioBtn_Active();
} else {
	// Nothing is set by user beforehand
	// So, will display according to system pref -> OK! Nice.
	// But need to adjust the toggle__Button
	if(pref_ColoredScheme.matches) {
		dark_RadioBtn_Active();
	} else {
		light_RadioBtn_Active();
	}
	// Adding an event listener only if user changes color scheme at the start itself
	pref_ColoredScheme.addEventListener('change', colorScheme_onChangeHandler);
}
toggle_RadioBtns.forEach(btn => {
	btn.addEventListener("click", () => {
		pref_ColoredScheme
    .removeEventListener('change', colorScheme_onChangeHandler);
		if(dark_RadioBtn.checked) {
			set_ColorMode("dark");
		} else {
			set_ColorMode("light");
		}
	});
})

