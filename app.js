const header = document.getElementById('header');
const secQuienesSomos = document.querySelector('.quines-somos')
const tienesUnProblema = document.querySelector('.tienes-un-problema')
const propuestaSolutiva = document.querySelector('.propuesta-solutiva')
const comoQuienes = document.querySelector('.como-y-a-quienes')
const comentario = document.querySelector('.comentario')
const motivacion = document.querySelector('.motivacion')
const contacto = document.querySelector('.contacto')

header.addEventListener('click', () => {
    header.classList.toggle('active')
})

console.log(tienesUnProblema);

console.log(window.innerHeight);

const sizeHeight = window.innerHeight

window.addEventListener('scroll', (e) => {
    // console.log(Math.round(scrollY / sizeHeight));
    const section = Math.round(scrollY / sizeHeight)
    
    // section == 1 
    // ? secQuienesSomos.classList.add('show')
    // : secQuienesSomos.classList.remove('show')
    // section == 2 
    // ? tienesUnProblema.classList.add('show')
    // : tienesUnProblema.classList.remove('show')
    // section == 3 
    // ? propuestaSolutiva.classList.add('show')
    // : propuestaSolutiva.classList.remove('show')
    // section == 4 
    // ? comoQuienes.classList.add('show')
    // : comoQuienes.classList.remove('show')
    // section == 5 
    // ? comentario.classList.add('show')
    // : comentario.classList.remove('show')
    // section == 6 
    // ? motivacion.classList.add('show')
    // : motivacion.classList.remove('show')
    // section == 7 
    // ? contacto.classList.add('show')
    // : contacto.classList.remove('show')

    if (section == 1 ) secQuienesSomos.classList.add('show')
    if (section == 2 ) tienesUnProblema.classList.add('show')
    if (section == 3 ) propuestaSolutiva.classList.add('show')
    if (section == 4 ) comoQuienes.classList.add('show')
    if (section == 5 ) comentario.classList.add('show')
    if (section == 6 ) motivacion.classList.add('show')
    if (section == 7 ) contacto.classList.add('show')
    
})