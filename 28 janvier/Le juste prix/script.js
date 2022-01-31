
/*
createElement ('div')
Math.random() Math.round()
addEventListener('click') (btn)
'KeyUp'
chpTxt.value
if
*/

// Etape 1 - Sélectionner nos éléments - On déclare nos variables

    //On déclare la variable qui permet d'attraper la div prix
    let inputPrix = document.querySelector('#prix'); 

    //On déclare la variable qui va permettre d'attraper le bouton "deviner"
    let leBtn = document.querySelector('.btn-primary');    
    
    //On déclare la variable erreur "Vous devez devinez le prix"
    let erreurType = document.querySelector('.text-danger'); 

        // Cacher l'erreur
        erreurType.style.display = 'none';

    // On déclare la variable nombre aleatoire
    let nbAletoire = Math.floor(Math.random() * 100);

    //On déclare une valeur minimum au nombre aléatoire
    let val = 0;

    // Message users
    let valeurChiffreG = 'Chiffre trop grand'
    let valeurChiffreP = 'Chiffre trop petit'
    let valeurChiffreE = "Ouiiii, c'est la bonne réponse" // Si le résultat est egale au nombre aléatoire
        
    // leBtn.addEventListener('click',valeurChiffreG, valeurChiffreP, valeurChiffreP);
/*
    function verification(){
        if (val<nbAletoire) {
            valeurChiffreG = chpTxt.value('Chiffre trop grand');
        } else if (val>nbAletoire) {
                valeurChiffreP = chpTxt.value('Chiffre trop petit');
            } 
                else (val===nbAletoire) {
                    valeurChiffreP = chpTxt.value("Ouiiii, c'est la bonne réponse");
            }
    }*/
    






    if (val < nbAletoire) {
        
    }
 

    //------------------------------------------------------------------------

    let laDiv = document.querySelector('.card-text')
let leBtn = document.querySelector('.btn')
let cardTitle = document.querySelector('.card-title')
let nbCitations = citations.length // au chargement 21

console.log(nbCitations)



leBtn.addEventListener('click',newCitation)

function newCitation(){
	let nombreAlea    = getRandomInt(0,citations.length)
	laDiv.textContent = citations[nombreAlea]
	// ici j'enlève la citation qui vient d'être tirée
	citations.splice(nombreAlea,1)
	if(citations.length==0){
		cardTitle.textContent = "fini:("
	}else{
		cardTitle.textContent = "Citations ("+citations.length+")"
	}
	
	
}

function getRandomInt(min, max) {
	console.log('un nombre alea entre ',min, 'et ', max)
  return Math.floor(Math.random() * (max - min)) + min
}
// Etape 2 - Cacher l'erreur 


// Etape 3 - Générer un nombre aléatoire


// Etape 6 - Créer la fonction vérifier


// Etape 4 - Vérifier que l'utilisateur donne bien un nombre


// Etape 5 - Agir à l'envoi du formulaire