function toggleAnswer(element) {
    const resposta = element.nextElementSibling;
    if (resposta.style.display === "block") {
        resposta.style.display = "none";
    } else {
        resposta.style.display = "block";
    }
}