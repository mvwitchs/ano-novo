function responderConvite() {
    alert("Parabéns, você se tornou um Mestre Jedi! Que a Força esteja com você sempre! Ansiosa para passar o ano novo juntos na galáxia!");
    document.getElementById('jediImage').src = 'assets/jedi.jpg';
    document.getElementById('jediImage').style.display = 'block';
    document.getElementById('aceitarMusica').play();
    document.querySelector('section').style.display = 'none';
}

var recusarClicado = false;

function recusarConvite() {
    var recusarBotao = document.querySelector('button:last-child');

    if (!recusarClicado) {
        // Se for a primeira vez que o botão é clicado
        recusarClicado = true;
        recusarBotao.textContent = 'Transformar-se em Lord Sith';
        recusarBotao.style.backgroundColor = '#dc3545';
        recusarBotao.style.color = '#fff';
        alert("Você está prestes a entrar no Lado Negro da Força. Clique novamente para confirmar por sua conta e risco.");
        document.getElementById('recusarMusica').play();
       
    } else {
        recusarBotao.onclick = function () {
        // Se for a segunda vez que o botão é clicado
            alert("Agora você é um Lord Sith! Que a escuridão guie seus passos.");
        };
        // Oculta o conteúdo da seção
        document.querySelector('section').style.display = 'none';

        // Exibe a imagem do Lord Sith
        document.getElementById('sithImage').src = 'assets/sith.jpg';
        document.getElementById('sithImage').style.display = 'block';
    }
}
