"use strict";var toggle_RadioBtns=document.querySelectorAll(".toggle__wrapper input"),body=document.querySelector("body"),dark_RadioBtn=document.querySelector("#dark"),pref_ColoredScheme=window.matchMedia("(prefers-color-scheme: dark)");function getColorMode(){return localStorage.getItem("colorMode")}function set_ColorMode(e){localStorage.setItem("colorMode",e),"dark"==e?(body.classList.add("dark-mode"),body.classList.remove("light-mode")):(body.classList.remove("dark-mode"),body.classList.add("light-mode"))}function dark_RadioBtn_Active(){toggle_RadioBtns[0].checked=!0}function light_RadioBtn_Active(){toggle_RadioBtns[1].checked=!0}function colorScheme_onChangeHandler(e){e.matches?dark_RadioBtn_Active():light_RadioBtn_Active()}var colorMode=getColorMode();"dark"==colorMode?(body.classList.add("dark-mode"),dark_RadioBtn_Active()):"light"==colorMode?(body.classList.add("light-mode"),light_RadioBtn_Active()):(pref_ColoredScheme.matches?dark_RadioBtn_Active():light_RadioBtn_Active(),pref_ColoredScheme.addEventListener("change",colorScheme_onChangeHandler)),toggle_RadioBtns.forEach((function(e){e.addEventListener("click",(function(){pref_ColoredScheme.removeEventListener("change",colorScheme_onChangeHandler),dark_RadioBtn.checked?set_ColorMode("dark"):set_ColorMode("light")}))}));
//# sourceMappingURL=script.js.map