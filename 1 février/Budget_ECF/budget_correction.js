console.log('budget')

// récupérer les éléments HTML 

const budgetInput = document.querySelector('#budget')
const budgetInfo  = document.querySelector('.income >span')

const addBtn = document.querySelector('.add-btn')
const eraseBtn =document.querySelector('.reset-btn')


eraseBtn.addEventListener('click',eraseAll)

// init 
let totalDepense = 0 // Valeur de départ
let totalBudget  = 0 // Valeur de départ
let balance      = 0 // Valeur de départ

budgetInput.addEventListener('keyup',updateBudget)

function updateBudget(){
	totalBudget = budgetInput.value
	budgetInfo.textContent=totalBudget
}	


addBtn.addEventListener('click',addItems)


function addItems(){

	const depenseLabel = document.querySelector('#depense').value
	const depensePrix  = document.querySelector('#montant').value



	// createElement 
	const divParentList = document.querySelector('.expenses-list')

	const maSpan = document.createElement('span')
	maSpan.textContent = depenseLabel + ' '+depensePrix+' €'

	const laDiv = document.createElement('div')
	laDiv.classList.add('expenses-item')

	laDiv.append(maSpan)
	divParentList.prepend(laDiv)

	// On incrémente la variable de telle valeur 
	// totalDepense+ correspond a une incrémentation 
	// +depenseprix correspond à un nombre 
	// On peut mettre +=+ au lieu de totalDepense += Number(depensePrix)
	totalDepense+=+depensePrix 
	updateExpense()
	updateBalance()
	
}

function updateExpense(){
	document.querySelector('.expense >span').textContent = totalDepense+'€'
}

function updateBalance(){
	// balance = budget - totalDepense
	balance = totalBudget-totalDepense
	document.querySelector('.balance >span').textContent = balance+'€'
}

function eraseAll(){
	console.log('eraseAll')

	totalDepense = 0
	updateExpense()
	totalBudget  = 0
	balance   = 0
	updateBalance()
	flushItems()
	

}
function flushItems(){
	let expensesItems = document.querySelectorAll('.expenses-item')

	for (var i = 0; i < expensesItems.length; i++) {
		const itemEnCours = expensesItems[i]
		itemEnCours.remove()
	}
}

//----------------------------------------------------------------

console.log('budget')

// récupérer les éléments HTML 

const budgetInput = document.querySelector('#budget')
const budgetInfo  = document.querySelector('.income >span')

const addBtn = document.querySelector('.add-btn')
const eraseBtn =document.querySelector('.reset-btn')


eraseBtn.addEventListener('click',eraseAll)

// init 
let totalDepense = 0
let totalBudget  = 0
let balance      = 0

budgetInput.addEventListener('focusout',updateBudget)

function updateBudget(){
	totalBudget = budgetInput.value
	budgetInfo.textContent=totalBudget
}	


addBtn.addEventListener('click',addItems)


function addItems(){

	const depenseLabel = document.querySelector('#depense').value
	const depensePrix  = document.querySelector('#montant').value

	// createElement 
	const divParentList = document.querySelector('.expenses-list')

	const maSpan = document.createElement('span')
	maSpan.textContent = depenseLabel + ' '+depensePrix+' €'

	const laDiv = document.createElement('div')
	laDiv.classList.add('expenses-item')

	laDiv.append(maSpan)
	divParentList.prepend(laDiv)

	totalDepense += Number(depensePrix)
	updateExpense()
	updateBalance()
	
}

function updateExpense(){
	document.querySelector('.expense >span').textContent = totalDepense+'€'
}

function updateBalance(){
	// balance = budget - totalDepense
	balance = totalBudget-totalDepense
	document.querySelector('.balance >span').textContent = balance+'€'
}

function eraseAll(){
	console.log('eraseAll')

	totalDepense = 0
	updateExpense()
	totalBudget  = 0
	balance   = 0
	updateBalance()
	flushItems()
	

}
function flushItems(){
	let expensesItems = document.querySelectorAll('.expenses-item')

	for (var i = 0; i < expensesItems.length; i++) {
		const itemEnCours = expensesItems[i]
		itemEnCours.remove()
	}
}







