

let caja = document.getElementById('texto');
let numero = Math. random()*10


const versiculos = {
    "versiculos":[
        {
            "titulo":"Salmo 121:7-8",
            "contenido":"El Señor te protegerá; de todo mal protegerá tu vida. El Señor te cuidará en el hogar y en el camino, desde ahora y para siempre."
        },
        {
            "titulo":"Efesios 5:15-16",
            "contenido":"Así que tengan cuidado de su manera de vivir. No vivan como necios, sino como sabios, aprovechando al máximo cada momento oportuno, porque los días son malos."
        },
        {
            "titulo":"Proverbios 27:19",
            "contenido":"En el agua se refleja el rostro, y en el corazón se refleja la persona."
        },
        {
            "titulo":"2 Corintios 5:7",
            "contenido":"Vivimos por fe, no por vista."
        },
        {
            "titulo":"Colosenses 3:23-24",
            "contenido":"Hagan lo que hagan, trabajen de buena gana, como para el Señor y no como para nadie en este mundo, conscientes de que el Señor los recompensará con la herencia. Ustedes sirven a Cristo el Señor."
        },
        {
            "titulo":"Proverbios 21:21",
            "contenido":"El que va tras la justicia y el amor halla vida, prosperidad y honra."
        },
        {
            "titulo":"Marcos 8:36",
            "contenido":"¿De qué sirve ganar el mundo entero si se pierde la vida?"
        },
        {
            "titulo":"Salmo 73:26",
            "contenido":"Podrán desfallecer mi cuerpo y mi espíritu, pero Dios fortalece mi corazón; él es mi herencia eterna."
        },
        {
            "titulo":"1 Pedro 3:10-11",
            "contenido":"En efecto, el que quiera amar la vida y gozar de días felices, que refrene su lengua de hablar el mal y sus labios de proferir engaños; que se aparte del mal y haga el bien; que busque la paz y la siga."
        },
        {
            "titulo":"Proverbios 4:23",
            "contenido":"Guíame, pues eres mi roca y mi fortaleza, dirígeme por amor a tu nombre."
        }
    ]
}



window.addEventListener('DOMContentLoaded', (event) => {

    versiculo = versiculos.versiculos
    numero = Math.floor(numero)

   
    console.log(numero)
    console.log(versiculos.versiculos)



    caja.innerHTML = `
    <h2>Versículo De La Biblia</h2>

    <div class="caja-versiculos">
        <p>»${versiculo[numero].contenido}».</p>
            <span>${versiculo[numero].titulo}</span>
    </div>

    `

});
