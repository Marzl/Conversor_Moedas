async function Conversor_Dolar() {
    let valor = document.getElementById("valorInput").value;
    if (!valor || isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido!");
        return;
    }
    const moedaOrigem = "BRL";
    const moedaDestino = "USD";
    const url = `https://api.exchangerate-api.com/v4/latest/${moedaOrigem}`;
    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        const taxa = dados.rates[moedaDestino];
        const resultado = (valor * taxa).toFixed(2);
        document.getElementById("valorConvertido").value = resultado + " " + moedaDestino;
    } catch (error) {
        alert("Erro ao buscar taxa de câmbio. Tente novamente mais tarde.");
    }
}
async function Conversor_Euro() {
    let valor = document.getElementById("valorInput").value;
    if (!valor || isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido!");
        return;
    }
    const moedaOrigem = "BRL";
    const moedaDestino = "EUR";
    const url = `https://api.exchangerate-api.com/v4/latest/${moedaOrigem}`;
    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        const taxa = dados.rates[moedaDestino];
        const resultado = (valor * taxa).toFixed(2);
        document.getElementById("valorConvertido").value = resultado + " " + moedaDestino;
    } catch (error) {
        alert("Erro ao buscar taxa de câmbio. Tente novamente mais tarde.");
    }
}
function Trocar_Fundo() {
    let container = document.querySelector(".container");
    container.classList.toggle("night-mode");
}          
function createCoinRain() {
    const coinContainer = document.getElementById("coin-container");
    const isNightMode = document.querySelector(".container").classList.contains("night-mode");

    // Limpa moedas antigas antes de criar novas
    coinContainer.innerHTML = "";

    for (let i = 0; i < 20; i++) {
        const coin = document.createElement("div");
        coin.classList.add("coin");

        // Define a imagem da moeda de acordo com o modo
        coin.style.backgroundImage = isNightMode
            ? "url('https://i.postimg.cc/25vdDZB4/170693702-10548238.png')"  // Moeda prateada
            : "url('https://i.postimg.cc/KzDnKhfj/133740038-10243319.png')";   // Moeda dourada

        // Posição e animação aleatórias
        coin.style.left = `${Math.random() * 100}vw`;
        coin.style.animationDuration = `${3 + Math.random() * 2}s`; // Tempo variável de queda
        coin.style.animationDelay = `${Math.random()}s`;

        coinContainer.appendChild(coin);
    }
}

// Modifica o fundo e reinicia a chuva de moedas
function Trocar_Fundo() {
    let container = document.querySelector(".container");
    container.classList.toggle("night-mode");

    createCoinRain(); // Reinicia a chuva com as novas moedas
}

// Inicializa a chuva ao carregar a página
document.addEventListener("DOMContentLoaded", createCoinRain);