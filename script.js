function progresso() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    document.querySelector(".indicador").style.width = scrollPercentage + "%";
}

window.addEventListener("scroll", progresso);