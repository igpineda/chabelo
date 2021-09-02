const lista = [1, 2, 3, 4, 5, 6]

// ""+var1
// ''+var1
// `${var}`
const listaObjs = lista.map(item => {
  return { elemento: item, nombre: `nombre de ${item}` }
})

const lista2 = listaObjs.map(item => item.nombre)

const lista3 = listaObjs.map(({ elemento }) => elemento)

//()=>{}

const algo = lista.reduce((contador,item,index) => {

    
  return contador
},0)

console.log({algo});

// console.log({lista});

// console.log({listaObjs});

// console.log({lista2});
// console.log({lista3});
