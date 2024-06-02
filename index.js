precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

//boton para agregar//

const btnmas = document.querySelector('#btnMas')
const result = document.querySelector('.cantidad')
let contador = 0 
btnmas.addEventListener("click", ()=> {
    contador = contador + 1
    result.innerHTML = contador
})

//boton para quitar//

const btnMenos = document.querySelector('#btnMenos')

btnMenos.addEventListener("click", ()=>{
    contador = contador - 1
    result.innerHTML = contador
})

//resultado final//
const total = document.querySelector('.valor-total')

btnmas.addEventListener("click",()=>{
    let operacion = Number(precio)*Number(contador)

    total.innerHTML = operacion
})

btnMenos.addEventListener("click",()=>{
    let operacion = Number(precio)*Number(contador)
    total.innerHTML = operacion
})



