function redirect(url) {
    window.location = url;
}

function IsMobile() {
    const viewportWidth = window.innerWidth;
    return viewportWidth < 1000;
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
    }
    
    const articles_div = document.querySelector(".articles");
    if (articles_div !== null) {
        fetch('/articles.json')
            .then(response => response.json())
            .then(data => {
                for (const article of data.slice(-5)) {
                    const article_div = document.createElement("div");
                    article_div.setAttribute("class", "heading");
                    article_div.setAttribute("onclick", "redirect('" + article.href + "')")
                    article_div.setAttribute("style", "background-image: url(" + article.image + "); cursor: pointer;")
                    article_div.innerHTML = "<div class=\"header-content\"><span class=\"heading-h\">" + article.heading + "</span><br><span class=\"heading-m\">" + article.theme + "</span></div>";
                    articles_div.appendChild(article_div);
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });
    }
}

if (IsMobile()) {
    redirect(window.location.href + "mobile");
}