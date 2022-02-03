console.log('hey course app.js')

//Je définis ce que je dois faire par etape :



// -- Récupérer les éléments HTML 

// Champ course
const produitInput = document.querySelector('#chmpList');
// Bouton ajouter
const addButton = document.querySelector('.btn-primary');
// Bouton Tout supprimer
const removeBtn = document.querySelector('.btn-danger');
// Commentaire "Merci d'ajouter du contenu"
const infos = document.querySelector('.infos');


// -- Champ course event
produitInput.addEventListener('keyup',updateProduit);

// -- J'ajoute un event sur le bouton ajouter
addButton.addEventListener('click',addCourse);


function addCourse() {
    // Je crée une div qui va s'afficher en dessous
    let divCourse = document.createElement('div')
    
    document.querySelector('.col-lg-8').append(divCourse)
    //divCourse.classList.add('')
    divCourse.textContent=document.querySelector('#chmpList').value
    
    let poubelle = document.createElement('i')
    poubelle.classList.add('far','fa-trash-alt')
    divCourse.append(poubelle)
    //const valeurProduit = document.querySelector('#chmpList').value
    
    //valeurProduit = NaN
    //console.log(valeurProduit)
    


}



/*
// -- J'ajoute un event sur le bouton tout supprimer
removeBtn.addEventListener('click',deleteCourse);
function deleteCourse() {

};
*/
function updateProduit(){
	let expensesItems = document.querySelectorAll('.expenses-item')

	for (var i = 0; i < expensesItems.length; i++) {
		const itemEnCours = expensesItems[i]
		itemEnCours.remove()
	}
}