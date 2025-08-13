function redirect(url) {
    window.location = url;
}

function IsMobile() {
    const width = document.body.clientWidth;
    return width < 1000;
}

window.onload = function () {
    const mobile = IsMobile();
    const main = document.getElementsByTagName("main")[0];
    if (!mobile) {
        const header = document.getElementsByTagName("header")[0];
        const main = document.getElementsByTagName("main")[0];
        header.style.width = main.clientWidth + "px";
        fetch('/links.json')
            .then(response => response.json())
            .then(data => {
                const links = document.querySelector(".links");
                for (const link of data) {
                    const link_div = document.createElement("div");
                    link_div.setAttribute("class", "link");
                    link_div.setAttribute("onclick", "redirect('" + link.href + "')")
                    link_div.innerHTML = "<span>" + link.name + "</span>";
                    links.appendChild(link_div);
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });
    } else {
        redirect(window.location.href + "mobile");
    }
}