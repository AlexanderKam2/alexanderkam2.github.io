function redirect(url) {
    window.location = url;
}

function IsMobile() {
    const width = document.body.clientWidth;
    return width < 1000;
}

function menuOn() {
    const menu_box = document.getElementsByClassName("menu-box")[0];
    menu_box.style.display = "block";
    document.body.style.overflow = 'hidden';
}

function menuOff() {
    const menu_box = document.getElementsByClassName("menu-box")[0];
    menu_box.style.display = "none";
    document.body.style.overflow = 'auto';
}

window.onload = function () {
    if (!IsMobile()) {redirect("..")}
    const header = document.getElementsByTagName("header")[0];
    const main = document.getElementsByTagName("main")[0];

    main.style.minHeight = document.body.clientHeight - header.clientHeight + "px";

    const menu_header = document.querySelector(".menu-header");
    const menu_frame = document.getElementById("js-menu");

    menu_frame.style.width = "100%";
    menu_frame.style.height = document.body.clientHeight - menu_header.clientHeight + "px";

    fetch('/links.json')
        .then(response => response.json())
        .then(data => {
            const links = document.querySelector("#js-menu");
            for (const link of data) {
                const link_div = document.createElement("div");
                link_div.setAttribute("onclick", "redirect('" + link.href + "mobile/')")
                link_div.innerText = link.name;
                link_div.style.textDecoration = "underline";
                link_div.style.cursor = "pointer";
                links.appendChild(link_div);
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
}