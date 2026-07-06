var header = document.getElementById('header')
var nagivation_header = document.getElementById('nagivation_header')
var content = document.getElementById('content')
var showSidebar = false
function clicar() {
    showSidebar = !showSidebar
    console.log(showSidebar)
    if (showSidebar) {
        nagivation_header.style.marginLeft = '-65vw'
        nagivation_header.style.animationName = 'showSidebar'
        content.style.filter = 'blur(2px)'
    } else {
        nagivation_header.style.marginLeft = '-1000vw'
        nagivation_header.style.animationName = ''
        content.style.filter = ''
    }
}
function closee() {
    if (showSidebar) {
        clicar();

    }
}
window.addEventListener('resize', function (event) {
    if (window.innerWidth > 768 && showSidebar) {
        clicar()
    }

})

// Validação do formulário
const formulario = document.getElementById("formContato");

if (formulario) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        const nome = document.getElementById("itxt1").value.trim();
        const empresa = document.getElementById("itxt2").value.trim();
        const email = document.getElementById("iemail").value.trim();
        const telefone = document.getElementById("inumber").value.trim();
        const categoria = document.getElementById("res").value;
        const mensagem = document.getElementById("imsg").value.trim();

        if (nome.length < 3) {
            alert("O nome deve possuir pelo menos 3 caracteres.");
            document.getElementById("itxt1").focus();
            return;
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValido.test(email)) {
            alert("Digite um e-mail válido.");
            document.getElementById("iemail").focus();
            return;
        }

        if (telefone.length < 10) {
            alert("Digite um telefone válido.");
            document.getElementById("inumber").focus();
            return;
        }

        if (categoria === "") {
            alert("Selecione uma categoria.");
            document.getElementById("res").focus();
            return;
        }

        if (mensagem.length < 10) {
            alert("A mensagem deve ter pelo menos 10 caracteres.");
            document.getElementById("imsg").focus();
            return;
        }

        alert("Mensagem enviada com sucesso!");

        formulario.submit();

    });

}