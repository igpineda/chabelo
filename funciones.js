funcion(" otra cosa")


function funcion(){
    console.log("acá")
}

const funcion2 = function (){
    console.log("acá2")
}

const funcion3 = ()=>
    console.log("acá3")

    
const funcion4 = (par)=>`acá4${par}`

console.log(funcion4(" otra cosa"))