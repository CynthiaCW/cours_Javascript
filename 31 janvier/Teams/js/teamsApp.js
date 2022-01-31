console.log('teamsApp')

// remplacer dynamiquement les infos de la card avec
// les infos de l'objet oneDev si dessous :

const oneDev  = {
    'firstName' : 'Menuk',
    'lastName'  : 'Efrim',
    'verbatim'  : 'Behaviour-driven Self-driving Conference Calls',
    'jobTitle'  : 'Full Stack 🚀',
    'profilePic': 'profil01.jpg',
    'stack':[{                              //-- C'est un tableau d'objet
            'label':'VueJs',
            'level':3
        },
        {
            'label':'php',
            'level':5
        }
    ]
}

console.log(oneDev.firstName);

// Je déclare toutes mes variables
let firstLastName = document.querySelector(".card-text>h2")

let jobTitle = document.querySelector(".job")

let laius = document.querySelector(".card-text>p")

let profilePic = document.querySelector('.card>.card-image')
let VueJs = document.querySelector(".stat> .techno")
let php = document.querySelector(".stat border> .techno")

//Je change les valeurs
//profilePic.style.backgroundImage = 'url("img/profil01.jpg")'
profilePic.style.backgroundImage = 'url(img/'+oneDev.profilePic+')' // Recupere l'url dans le tableau de objet 
//profilePic.style.backgroundImage = oneDev.profilePic

jobTitle.textcontent = oneDev.jobTitle

laius.textContent = oneDev.verbatim

firstLastName.textContent = oneDev.firstName+' '+oneDev.lastName

jobTitle.textContent = oneDev.jobTitle



//------------
let levelEtoile = document.querySelectorAll('.stat>.level')
console.log(levelEtoile)

levelEtoile[0].textContent ='' // Permet d'enlever les étoiles deja presente dans level
 

for (let i = 0; i <= oneDev.stack[0].level; i++) {
    console.log(i)
    
    levelEtoile[0].textContent = levelEtoile[0].textContent+'🌟'
}



//Comment faire pour attraper les deux stacks en une seule opérations





/*
firstName = element.innerHTML
firstName.innerHTML = 'Menuk'

console.log(firstName)

let lastName = document.querySelector('.f_l')
lastName = element.innerHTML
lastName.innerHTML = 'Efrim'

console.log(lastName)

//Je souhaite changer la profession
let jobTitle = document.querySelector(".job")
jobTitle = element.innerHTML
jobTitle.innerHTML = 'Full Stack 🚀'
*/

// ! Attention le nombre d'étoiles doit bien correspondre au level

// si vous êtes en avance :
// Regardez un peu l'object destructuring ^^
// > https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
