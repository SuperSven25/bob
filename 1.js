const element = ['fire', 'earth', 'wind']

function man(element){
    element.push("water")
    return element
}


var resultat = man(element)
console.log(resultat)