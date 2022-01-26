console.log('rockPaper.js');


let allBtns = document.querySelectorAll('.cardBtn')

let choices = ['pierre','feuille','ciseaux']

allBtns[0].addEventListener('click',function(){

    console.log('pierre!')
    let tourOrdi = getRandomInt(3)
    console.log('ordi joue > ', choices[tourOrdi])

    if(choices[tourOrdi]==='pierre'){
        console.log('égalité')
    }
    if(choices[tourOrdi]==='feuille'){
        console.log('perdu :(')
    }
    if(choices[tourOrdi]==='ciseaux'){
        console.log('gagné !')
    }

})

allBtns[1].addEventListener('click',function(){

    console.log('Feuille!')
    let tourOrdi = getRandomInt(3)
    console.log('ordi joue > ', choices[tourOrdi])

    if(choices[tourOrdi]==='feuille'){
        console.log('égalité')
    }
    if(choices[tourOrdi]==='ciseaux'){
        console.log('perdu :(')
    }
    if(choices[tourOrdi]==='pierre'){
        console.log('gagné !')
    }

})



// cette fonction "lance un dé"

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}