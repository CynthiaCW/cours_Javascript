  const TREKS = [
    'Kilimanjaro',
    'Everest',
    'Mount Fuji',
    'Vaalserberg',
    'Denali',
    'Popocatepetl',
    'Mont Blanc',
    'Queyra'
  ];



let leUl = document.createElement('ul')
leUl.classList.add("list-group")
for (var i = 0; i < TREKS.length; i++) {
    let leTrek = TREKS[i]
    let li = document.createElement('li')
    li.textContent = TREKS[i]
    leUl.append(li)
    li.classList.add('list-group-item')
    
    console.log(leTrek)
}
let cardBody = document.querySelector('.card-body')

document.querySelector('.card-body').append(leUl)  
