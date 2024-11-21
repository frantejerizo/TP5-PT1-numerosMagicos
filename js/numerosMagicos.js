function generarNumeroMagico()
{
    numeroAleatorio = Math.floor(Math.random() * 10 + 1);
    console.log(`Numero aleatorio generado: ${numeroAleatorio}`)
    alert(`Se ha generado un numero aleatorio 😱`)
}

function enviarFormulario(e)
{
    e.preventDefault()
    const input = document.querySelector("input")
    console.log(input.value)

    if (numeroAleatorio === -1)
    {
        alert(`Todavia no generaste el numero.`)
    }
    else if (input.value == numeroAleatorio)
    {
        alert(`Adivinaste correctamente 😎`)
    }
    else if (input.value > numeroAleatorio)
    {
        alert(`Te pasaste 🥱`)
    }
    else
    {
        alert(`Te faltó un poco mas 😬`)
    }
}

let numeroAleatorio = -1

const botonComenzar = document.getElementsByClassName("btn btn-danger")
console.log(botonComenzar)

const formulario = document.querySelector("form")
console.log(formulario)

botonComenzar[0].addEventListener("click",generarNumeroMagico)
formulario.addEventListener("submit",enviarFormulario)



