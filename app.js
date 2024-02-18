const header = document.getElementById('header');
const secQuienesSomos = document.querySelector('.quines-somos')
const tienesUnProblema = document.querySelector('.tienes-un-problema')
const propuestaSolutiva = document.querySelector('.propuesta-solutiva')
const comoQuienes = document.querySelector('.como-y-a-quienes')
const comentario = document.querySelector('.comentario')
const motivacion = document.querySelector('.motivacion')
const contacto = document.querySelector('.contacto')
const fondoNuevos = document.querySelectorAll('.fondo')


const sizeHeight = window.innerHeight
const sizeWidth = window.innerWidth

console.log(sizeWidth);
let cuadro
fondoNuevos.forEach(fondoNuevo => {
    const count = 55
    for (let i = 0; i < count; i++) {
        cuadro = document.createElement('div')
        
        const alto = Math.floor(Math.random() * (300 - 50 + 1))  + 50 
        const ancho = Math.floor(Math.random() * (300 - 50 + 1)) + 50
        const x = Math.random() * sizeWidth 
        const y = Math.random() * -sizeHeight * 7
    
        // cuadro.style.background = '#2c2c79'
        cuadro .style.border = 'solid 2px'
        // cuadro.style.borderRadius = '50%'
        cuadro.style.opacity = '0.5'
    
        cuadro.style.position = 'absolute'
        cuadro.style.left = x +'px'
        cuadro.style.top = -y +'px'
        cuadro.style.transform = 'rotate(45deg)'

        cuadro.style.width = ancho +'px'
        cuadro.style.height = ancho +'px'
        
        fondoNuevo.appendChild(cuadro)
    }
});



header.addEventListener('click', () => {
    header.classList.toggle('active')
})


window.addEventListener('scroll', () => {
    const section = Math.round(scrollY / sizeHeight)
    
    if (section == 1 ) secQuienesSomos.classList.add('show')
    if (section == 2 ) tienesUnProblema.classList.add('show')
    if (section == 3 ) propuestaSolutiva.classList.add('show')
    if (section == 4 ) comoQuienes.classList.add('show')
    if (section == 5 ) comentario.classList.add('show')
    if (section == 6 ) motivacion.classList.add('show')
    if (section == 7 ) contacto.classList.add('show')
    
})