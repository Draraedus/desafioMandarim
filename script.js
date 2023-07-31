document.addEventListener('DOMContentLoaded', function() {
    for(let i = 0; i<3; i++) {
        const imagem = document.querySelectorAll('.imgNews')[i];

        const listraHorizontal = document.querySelectorAll('.horizontalStripe')[i];

        console.log(imagem)
        var colorThief = new ColorThief();
        var color = colorThief.getColor(imagem);
        console.log(color)
    
        listraHorizontal.setAttribute('style', `background-image: url(${imagem.src})`);
    }
})