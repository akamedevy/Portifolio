function progresso() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    document.querySelector(".indicador").style.width = scrollPercentage + "%";
}

function progressoAtivo() {
    const testElement = document.createElement("div");
    testElement.style.animationTimeline = "scroll()";
    return testElement.style.animationTimeline !== "";
}

if (!progressoAtivo()) {
    console.log("animation-timeline não é suportado. Ativando Javascript.");
    window.addEventListener("scroll", progresso);
} else {
    console.log("animation-timeline é suportado.");
}