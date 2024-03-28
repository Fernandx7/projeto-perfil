function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('Light')

    // pegar a tag img
    const img = document.querySelector("#profile img")

     // substituir a imagem 
    if(html.classList.contains('Light')) {
    // se tiver lightMode, adicionar imagem light
    img.setAttribute('src', './assets/euescuro.jpg')
    
    } else {
        // se tiver sem lightMode, manter a imagem normal 
        img.setAttribute('src', './assets/euclaro.jpg')
    }

}