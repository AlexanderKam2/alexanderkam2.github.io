function menuButtonClick() {
    const menu_box = document.getElementsByClassName("menu")[0];
    menu_box.style.animation = "slidein 0.5s ease-in-out 1 forwards";
}

function menuCloseButtonClick() {
    const menu_box = document.getElementsByClassName("menu")[0];
    menu_box.style.animation = "slideout 0.5s ease-in-out 1 forwards";
}