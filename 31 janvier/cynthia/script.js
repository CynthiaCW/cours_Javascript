/* LES OBJETS : Permets de structurer la DATA */

console.log('intro object app')

let firstName = 'bob';
let lastName = 'morane';

let hobbies = ['kayac', 'frisbee', 'GRS']

let user = {
    'firstName' : 'bob', //-- 'firstName' est la clé et 'bob' est la valeur
    'lastName' : 'morane',
    'hobbies' : ['kayac', 'frisbee', 'GRS']
}

// Syntaxe crochet
console.log(user['firstName']);

// Syntaxe pointé 
console.log(user.firstName);

let monImg = document.querySelectorAll('img') //<--- Affiche un nodelist
console.log(monImg)

// Syntaxe crochet
console.log(user['hobbies'][1])

// Syntaxe pointé 
console.log(user.hobbies[1])

// Avec la boucle for, j'affiche tous les éléments de mon tableau hobbies
for (var i=0; i< user.hobbies.length; i++) {  
    let currentHobbie = user.hobbies[i]
    console.log(currentHobbie)
}