let otro

let variable
variable = null
variable = NaN
variable = 0
variable = false
variable = otro & true
variable = "0"
// if (variable) console.log("si tiene algo", variable)
// else console.log("no tiene nada", variable)

const objeto = { nombre: "nombre", 
// nom: { nom2: "true" } 
}
const nom2 = objeto?.nom?.nom2  || "test"

// if (nom2) {
//   console.log("si tiene algo", nom2)
// } else console.log("no tiene nada", nom2)

let condicion = false

const funcion = ()=> console.log("funcion")

const var2 = condicion && funcion()

console.log("siguiente")

