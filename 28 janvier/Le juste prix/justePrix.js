// -- Etape 1 - Sélectionner nos éléments

//On déclare la variable erreur "Vous devez devinez le prix"
const inputPrix = document.querySelector('#prix');

//On déclare la variable qui va permettre d'attraper le bouton "deviner"
const leBtn = document.querySelector('.btn-primary');

//On déclare la variable qui va permetre de faire disparaitre le message d'erreur  
const erreurType = document.querySelector('.text-danger');

const divParentResult = document.querySelector('#instructions');

const chmpTxt = document.querySelector('#prix');
// -- Etape 2 - Cacher l'erreur
erreurType.style.display = 'none'; //<-- Fait disparaitre le message d'erreur

// -- Etape 3 - Générer un nombre aléatoire

let nbAlea = getRandomInt(100)

console.log('nbAleatoire ', nbAlea);

// Cette fonction lance un dé
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//
chmpTxt.addEventListener('keyup', function(){
    let valeurSaisie = Number(chmpTxt.value)
        if (isNaN(valeurSaisie)){
            console.log('pas un nombre, chaussette surement')
        } else {
            console.log('tout va bien cest un nombre')
        }
})


leBtn.addEventListener('click', function () {
    let valeurSaisie = chmpTxt.value
    console.log('click deviner')
    console.log(valeurSaisie)
    compare(valeurSaisie)
})



// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
// Etape 5 - Agir à l'envoi du formulaire
// ici je vais comparer avec le nombre aléatoire généré
// je compare la saisie dans chmpTxt.value 


// Etape 6 - Créer la fonction vérifier
function compare(valeurSaisie) {
    if (valeurSaisie < nbAlea) {
        console.log('Chiffre trop grand')

    } else if (valeurSaisie > nbAlea) {
        console.log('Chiffre trop petit')

    } else if (chmpTxt == nbAlea) {
        console.log("Ouiiii, c'est la bonne réponse")
        let laDiv = document.createElement('div')
        divParentResult.textContent = "C'est gagné";
        laDiv.classList.add('.plus','alert')
        divParentResult.prepend(laDiv)
    }
}


/* CODE REMI 

// Etape 1 - Sélectionner nos éléments

const btn        = document.querySelector('.btn-primary')
const chmpTxt    = document.querySelector('#prix')
const erreurType = document.querySelector('.text-danger')

const divParentResult = document.querySelector('#instructions')

let nbAlea = getRandomInt(100)

function getRandomInt(max) {
  return Math.floor(Math.random() * max+1);
}


chmpTxt.addEventListener('keyup',function(){
  let valeurSaisie = +chmpTxt.value 
  //le + est un raccourci pour forcer une string en number
  if(isNaN(valeurSaisie)){
    console.log('PAS UN NOMBRE, chausette surement?')
  }else{
    console.log('tout va bien number')
  }
 
})


btn.addEventListener('click',function(){

  let valeurSaisie = chmpTxt.value 
  console.log('click deviner')
  console.log(valeurSaisie)
  compare(valeurSaisie)
  // ici je vais comparer avec le nombre aléatoire généré 
  // je compare la saisie dans chmpTxt.value 

})

// Etape 2 - Cacher l'erreur
erreurType.style.display='none'

// Etape 3 - Générer un nombre aléatoire



// Etape 6 - Créer la fonction vérifier

function compare(valeurSaisie){
  let laDiv = document.createElement('div')
  if(valeurSaisie==nbAlea){
    laDiv.textContent='Gagne'
    laDiv.classList.add('fini','alert')
  }
  if(valeurSaisie>nbAlea){
    laDiv.textContent='moins'
    laDiv.classList.add('moins','alert')

  }else if(valeurSaisie<nbAlea){
    laDiv.textContent='Plus plus '
    laDiv.classList.add('plus','alert') 
  }
   divParentResult.prepend(laDiv)

}



// Etape 4 - Vérifier que l'utilisateur donne bien un nombre


// Etape 5 - Agir à l'envoi du formulaire

*/


