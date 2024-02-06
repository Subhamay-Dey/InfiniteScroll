const container = document.querySelector('.container')
const URL = 'http://api.adorable.io/avatars/250?img='
// const url = 'https://i.pravatar.cc/250?img='

function getRandNum(){
    return Math.floor(Math.random() * 100)
}

function loadImages(numImages = 10){
    let i = 0;
    while(i < numImages) {
        const img = document.createElement('img')
        img.src = `${URL}${getRandNum()}`
        container.appendChild(img)
        i++
    }
}

loadImages();