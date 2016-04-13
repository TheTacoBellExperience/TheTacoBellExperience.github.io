console.log("function getInput() { return $('input').filter(function(){return this.name == 'message';})[0]; }; function sendMsg(msg) { $(getInput()).val(msg); $(getInput()).submit(); };")

var counts = [
    'Double',
    'Triple',
    'Quadruple',
]
var adjectives = [
    'Beefy',
    'Cheesy',
    'Spicy',
    'Fiery',
    'Crunchy',
    'Crispy',
    'Loaded',
    'Grilled',
    'Smothered',
    'Stuft',
    'Cantina',
]
var fillers = [
    'Potato',
    'Nacho Cheese',
    'Bean',
    'Black Bean',
    'Rice',
    'Ground Beef',
    'Shredded Chicken',
    'Chicken',
    'Steak',
    'Fajitas',
    'Fritos®',
    'Doritos® Locos',
    'Fiery Doritos® Locos',
    'Cool Ranch® Doritos® Locos',
    'Nacho Cheese Doritos® Locos',
]
var meal_modifiers = [
    'Fiesta',
    'Fresco',
    'Fresco Grilled',
    'Lava',
]
var meals = [
    'Taco',
    'Soft Taco',
    'Double Decker® Taco',
    'Taco Salad',
    'Burrito',
    'Gordita',
    'Chalupa',
    'Crunchwrap',
    'Quesadilla',
    'Griller',
    'Mexican Pizza',
    'Quesarito',
    'Crunchwrap Slider',
    'Tostada',
    'Meximelt®',
    'XXL Grilled Stuft Burrito',
    'Smothered Burrito',
    'Combo Burrito',
    '5-Layer Burrito',
    '7-Layer Burrito',
    'Nachos',
    'Nachos Bellgrande®',
    'Doritos® Locos Taco',
    'Doritos® Locos Gordita',
    'Doritos® Locos Chalupa',
    'Doritos® Locos Nachos',
    'Waffle Taco',
    'Enchirito',
    'Roll-Up',
    'Power Bowl',
]
var modifiers = [
    'Crunch',
    'Supreme®',
    'Party Pack',
]

function get_next_phrase(phrases, randomness, ignore) {
    if (Math.random() < randomness) {
        for (var n in phrases) {
            var pick = ~~(Math.random() * phrases.length);
            var add = phrases[pick];
            if (ignore == undefined) {
                return add;
            }
            if (ignore.indexOf(add) == -1) {
                return add
            }
        }
    }
    return undefined;
}

function generate_taco_bell() {
    food = []
    food.push(get_next_phrase(counts, .1))
    food.push(get_next_phrase(adjectives, .85, food))
    food.push(get_next_phrase(fillers, .75, food))
    food.push(get_next_phrase(meal_modifiers, .1, food))
    food.push(get_next_phrase(meals, 1.0, food))
    food.push(get_next_phrase(modifiers, .25, food))
    return food.filter(function(item) { return item != undefined; }).join(' ');
}

/*
function get_next_phrase(phrases, skips=None, 0.5) {
    trues = int(randomness * 100)
    falses = int(100 - trues)
    chance = [True] * trues + [False] * falses
    if not random.choice(chance):
        return []
    if not skips:
        skips = []
    for _ in range(len(phrases)):
        word = random.choice(phrases)
        skip = False
        for s in skips:
            if s in word:
                skip = True
        if not skip:
            break
    return [word]
}


function generate_taco_bell(vegan=False) {
    food = get_next_phrase(counts, .1)
    food += get_next_phrase(adjectives, skips=food, .85)
    food += get_next_phrase(fillers, skips=food, .75)
    food += get_next_phrase(meal_modifiers, skips=food, .1)
    food += get_next_phrase(meals, skips=food, 1.0)
    food += get_next_phrase(modifiers, skips=food, .25)

    return ' '.join(food)
}
*/
