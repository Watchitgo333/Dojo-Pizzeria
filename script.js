function pizzaOven(name, crust, sauce, cheeses, toppings) {
    var pizza = {}
    pizza.name = name;
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("Deep Dish Traditional 2 meat","deep dish", "traditional", "mozzerella", ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("Veggie","hand tossed", "marinara", ["mozzerella", "feta"], ["mushrooms", "olives", "onions"])

console.log(pizza2);

var pizza3 = pizzaOven("Vegan: Create your own", "hand tossed", "Garlic olive oil", ["Vegan parmesan", "Vegan feta"], 
["Oyster mushroom", "Vegan Pesto", "Tomato", "Sauteed Onion", "Slap Ya Mama seasoning"]);

console.log(pizza3);

var pizza4 = pizzaOven("Treatza", "Oreo Cookie", "Vanilla Ice Cream", "Chocolate Sauce", ["Reeses pieces", "M&M's"]);

console.log(pizza4);

var crust = [
    "Deep dish",
    "Hand Tossed",
    "Gluten Free"
];

var sauce = [
    "Traditional",
    "Olive oil",
    "Marinara",
    "Cajun Power",
    "Alfredo",
    "BBQ"
];

var cheese = [
    "Mozerella",
    "Feta",
    "Parmesan",
    "Asiago",
    "Ricotta",
    "Vegan Cheese"
];

var toppings = [
    "Pepperoni",
    "Sausage",
    "Chicken",
    "Bacon",
    "Mushrooms",
    "Olives",
    "Onions",
    "Peppers",
    "Beyond Sausage"
];

function randomRange(min,max) {
    return Math.floor(Math.random() * (max-min) + min);
}

function randomPick(arr) {
    var i = Math.floor(Math.random() * (arr.length));
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crust = randomPick(crust);
    pizza.sauce = randomPick(sauce);
    pizza.cheese = [];
    pizza.toppings = [];
    for(var i = 0; i < randomRange(0,6);i ++) {
        pizza.cheese.push(randomPick(cheese));
    }
    for(var j = 0; j < randomRange(0,8);j ++) {
    pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}

var randoPizza = randomPizza();
console.log(randoPizza);