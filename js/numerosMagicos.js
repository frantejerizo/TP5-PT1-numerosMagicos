function generarNumeroMagico()
{
    numeroAleatorio = Math.floor(Math.random() * 10 + 1);
    console.log(`Numero aleatorio generado: ${numeroAleatorio}`)
}

function enviarFormulario(e)
{
    // e.preventDefault()
    const input = document.querySelector("input")
    console.log(input.value)

    if (numeroAleatorio === -1)
    {
        alert(`todavia no generaste el numero.`)
    }
    else if (input.value == numeroAleatorio)
    {
        alert(`le calzaste`)
    }
    else if (input.value > numeroAleatorio)
    {
        alert(`te pasaste`)
    }
    else
    {
        alert(`te falta pa`)
    }
}

let numeroAleatorio = -1

const botonComenzar = document.getElementsByClassName("btn btn-danger")
console.log(botonComenzar)

const formulario = document.querySelector("form")
console.log(formulario)

botonComenzar[0].addEventListener("click",generarNumeroMagico)
formulario.addEventListener("submit",enviarFormulario)



