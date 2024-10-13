

const coffees = ['Latte', 'Cappuccino', 'Americano'];
const coffeName = prompt(`Поиск по названию:' ${coffees}`).trim()

const index = coffees.findIndex(coffee => coffee.toLowerCase() === coffeName.toLowerCase())

if (index !== -1) {
    alert(`Держите ваш любимый кофе ${coffees[index]}. Он ${index + 1} - й по популярности в нашей кофейне.`)
} else {
    alert('К сожалению, такого вида кофе нет в наличии.')
}
console.log(coffees[index])