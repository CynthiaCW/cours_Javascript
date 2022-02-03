/*
    Je définie ce que je dois faire en fonction de la video :
        On rentre une valeur de type number dans l'input text du BUDGET global 
        -> class budget-field
        -> Le résultat s'affiche dans le span de footer - textContent pour remplacer le - par la valeur rentrée
        
        On rentre une valeur de type string dans l'input DEPENSE
        -> class depense-field
        -> Le résultat s'affiche dans le span de expense - textContent pour remplacer le - par la valeur rentrée
        
        On rentre le montant de la dépense (valeur de type number) dans l'input MONTANT
        -> class montant-field
        -> Le résultat s'affiche dans le span de balance - textContent pour remplacer le - par la valeur rentrée

        On va ajouter différents évènements :

        Au click sur le button class add-btn, on va faire le calcul du budget global - montant.
        Le résultat correspondra à la balance 
        Il s'affichera dans le span de balance - textContent pour remplacer le - par la valeur rentrée

        Dans la Div DEPENSE expenses-container, il y aura un affichage du nom de la dépense et de la valeur 
        suivie d'une ligne de séparation -> Faire un createElement pour créer le style de la ligne
        -> Mettre append() qui renvoie les resultats les uns en dessous des autres

        Calcul également toutes le montant des dépenses et renvoie une balance négative si le budget est dépassé

        La derniere fonctionnalitée permet de rebouter le calculateur de budget 
        -> addEventLister au click sur sur button reset-btn
        */

console.log('budget');

// Je commence par la partie gestion Budget en déclarant les variables dont j'aurais besoin

let formulaire = document.querySelector('.left-form');
console.log(formulaire);

//Budget
let containerBudget = document.querySelector('.form-container');
let fullInputBudget = document.querySelector('.budget-field');
let champsBudget    = document.getElementById('budget');

let footerBudget    = document.querySelector('.footer > .income > span'); //C'est dans span qu'on affichera la valeur du budget rentré par le user

// Dépense
let fullInputDepense        = document.querySelector('.depense-field');
let champsDepense           = document.getElementById('depense');
let containerDepenseMontant = document.querySelectorAll('.depenses-container');

let expenseDepense          = document.querySelector('.footer > .expense > span'); //C'est dans span qu'on affichera la valeur du budget rentré par le user

// Montant
let fullInputMontant = document.querySelector('.montant-field');
let champsMontant    = document.getElementById('montant');

let depenseMontant = document.querySelector('.footer > .expense > span'); //Footer affichage dépenses et montant 

let balanceMontant = document.querySelector('.footer > .balance > span'); //C'est dans span qu'on affichera la valeur du budget rentré par le user
// Je vérifie si c'est ok console.log(balanceMontant)

//Je crée mon button
let buttonForm = document.querySelector('.add-btn');

buttonForm.addEventListener('click', calculateBudget); //j'ajoute un evenement au 'click'

function calculateBudget(){
    let champSaisieD       = champsDepense.value
    let champSaisieB       = champsBudget.value
    let champSaisieM       = champsMontant.value
    let totalBudgetMontant = champSaisieB-champSaisieM

    console.log(champSaisieB)
    console.log(champSaisieD)
    console.log(champSaisieM)

    let item1 = document.querySelector('.expenses-item > span') //1ere dépense
    let item2 = document.querySelector('.expenses-item > span') //2nd dépense
/* 
J'essaye d'attraper le footer budget pour rentrer la valeur inscrite par l'utilisateur 
    -> deja déclaré : let footerBudget = document.querySelector('.footer > .income > span'); //C'est dans span qu'on affichera la valeur du budget rentré par le user
    -> champSaisieB : Champs saisie par l'utilisateur 
*/    

    //Affichage budget
    footerBudget.textContent = champSaisieB
    console.log(champSaisieB)

    //Affichage dépenses
    depenseMontant.textContent = champSaisieM
    console.log(champSaisieM)

    //Affichage balance
    balanceMontant.textContent = totalBudgetMontant
    console.log(totalBudgetMontant)
    balanceMontant.style.color ='green'
    balanceMontant.style.fontWeight ='900'

    //Au click sur le bouton j'affiche le nom de ma dépense et son montant

    item1.textContent = champSaisieD+' '+champSaisieM+'€'
    //item2.textContent = champSaisieD+' '+champSaisieM+'€'
    //fonctionalité append() qui affiche les resultats les uns en dessous des autres 
    //Fonctionnalité qui permet de calculer toutes les dépenses et d'afficher le montant dans la balance
    //"" affiche une balance négatif avec un changement de couleur quand le budget est rouge
    //Fonctionnalité qui permet de reboote le contenu en cliquant sur le bouton

    if(champSaisieD=''){ //Si c'est une string
        console.log(champSaisieD+"ok nom d'une dépense")  
    }
    if(champSaisieB=isNaN){ //C'est un numbre
        console.log(champSaisieB+"ok valeur")
    }
    if(champSaisieM=isNaN){
        console.log(champSaisieM+"ok valeur")
    }
    console.log('Dépense pour un sac',totalBudgetMontant) //Affiche 985 sur 1000€ de budget

};













