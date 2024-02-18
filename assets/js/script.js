// inicio do slide

var slider_img = document.querySelectorAll('.slider_img').length;
var slides = document.querySelector('.slides');
var currentSlide = 0;

// o slides esta recebendo as imagens vezes o tanho da tela,  e multiplicando ese tamanho
slides.style.width = `calc(${slider_img}*100vw)`;

function nextSlider() {
    currentSlide++;

    if (currentSlide > (slider_img - 1)) {
        currentSlide = 0;
    }
    let widthSlider = document.querySelector('.slider_img').clientWidth;
    // margin recebe o currentSlide vezes o tamanho da tela
    let margin = (currentSlide * widthSlider);
    /* 
    colocar o marginleft em menos para poder 
    jogar a imagem para esquerda, caso seja o contrario ele ira jogar para direita e nao ira ver mais imagem
    */
    slides.style.marginLeft = `-${margin}px`;
}

setInterval(nextSlider, 4000);

// fim do slide

// slider da sessao 1
var produtoSlider = document.querySelectorAll('.containerProdutos').length;
var containerProdutos = document.querySelector('.slidesProdutos');

var currentProdutos = 0;

containerProdutos.style.width = `calc(${produtoSlider }*100vw)`;

function nextProdutos() {
    currentProdutos++;

    if (currentProdutos > (produtoSlider - 1)) {
        currentProdutos = 0;
    }

    upProdutos();
    console.log(currentProdutos);


}

function prevProdutos() {
    currentProdutos--;
    if (currentProdutos < 0) {
        currentProdutos = produtoSlider - 1;
    }
    upProdutos();
    console.log(currentProdutos);
}

function upProdutos() {
    let widthSlider = document.querySelector('.containerProdutos').clientWidth;

    var proxProdutos = (currentProdutos * widthSlider);
    containerProdutos.style.marginLeft = `-${proxProdutos}px`
}


// slider da sessao 2
var produtoSlider2 = document.querySelectorAll('.containerProdutos2').length;
var containerProdutos2 = document.querySelector('.slidesProdutos2');

var currentProdutos2 = 0;

containerProdutos2.style.width = `calc(${produtoSlider2 }*100vw)`;

function nextProdutos2() {
    currentProdutos2++;

    if (currentProdutos2 > (produtoSlider2 - 1)) {
        currentProdutos2 = 0;
    }

    upProdutos2();
    console.log(currentProdutos2);


}

function prevProdutos2() {
    currentProdutos2--;
    if (currentProdutos2 < 0) {
        currentProdutos2 = produtoSlider2 - 1;
    }
    upProdutos2();
    console.log(currentProdutos2);
}

function upProdutos2() {
    let widthSlider = document.querySelector('.containerProdutos2').clientWidth;
    var proxProdutos2 = (currentProdutos2 * widthSlider);
    containerProdutos2.style.marginLeft = `-${proxProdutos2}px`
}

function menu() {
    let botao = document.querySelector('.fechar');
    let ul = document.querySelector('#ul');

    if (ul.style.display == "flex") {
        ul.style.display = "none";

    } else {
        ul.style.display = "flex";

    }
}