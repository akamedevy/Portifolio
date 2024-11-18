// function progresso() {
//     const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     const scrollPercentage = (scrollTop / scrollHeight) * 100;

//     document.querySelector(".indicador").style.width = scrollPercentage + "%";
// }

// function progressoAtivo() {
//     const testElement = document.createElement("div");
//     testElement.style.animationTimeline = "scroll()";
//     return testElement.style.animationTimeline !== "";
// }

// if (!progressoAtivo()) {
//     console.log("animation-timeline não é suportado. Ativando Javascript.");
//     window.addEventListener("scroll", progresso);
// } else {
//     console.log("animation-timeline é suportado.");
// }

window.addEventListener("scroll", function() {
    const ScrollPos = window.scrollY; // Posição da rolagem
    console.log(ScrollPos);

    const minhadiv = document.querySelector(".qualificacoes");

    // Verifica se a rolagem passou de 2000px e muda o fundo suavemente
    if (ScrollPos >= 2200) {
        minhadiv.style.backgroundColor = 'white';
    } else {
        minhadiv.style.backgroundColor = 'black';
    }
});