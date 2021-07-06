//---------------------------------------------------App de Peliculas-----------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------Array de peliculas------------------------------------------------------------------------------------------------------------------------------
let peliculas = [
    {id:1, nombre: 'Star Wars', genero: 'ciencia ficcion', anio: 1977, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508101/afterclass/ahT4ObS7XKedQkOSpGr1wQ97aKA_s86oek.jpg'},
    {id:2, nombre: 'Nobody', genero: 'accion', anio: 2021, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508101/afterclass/ddO5a3tMPpQutSDQO1bESgLWadB_nsr7h6.jpg'},
    {id:3, nombre: 'Mortal Kombat', genero: 'aventura', anio: 2021, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508102/afterclass/t2GbiMJfO8txoihdJC8RsfK1ds7_e9o7v4.jpg'},
    {id:4, nombre: 'Interstellar', genero: 'ciencia ficcion', anio: 2014, atp: false, img: 'https://res.cloudinary.com/vaporbox/image/upload/v1625508102/afterclass/nrSaXF39nDfAAeLKksRCyvSzI2a_hvgguc.jpg'},
    {id:5, nombre: 'The Big Lebowsky', genero: 'comedia', anio: 1998, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508101/afterclass/EJFkJD9BH400jfzKz3W5xLYHQa_ic29jw.jpg'},
    {id:6, nombre: 'Mulan', genero: 'aventura', anio: 2020, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508101/afterclass/72XYwdIugXnjHxS6upI6U0yeTBU_lk2u9w.jpg' },
    {id:7, nombre: 'A Quiet Place', genero: 'terror', anio: 2018, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508101/afterclass/5pairI20KJs1SEa4Z8yAsPR779m_a9uwch.jpg'},
    {id:8, nombre: 'The Exorcist', genero: 'terror', anio: 1973, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508103/afterclass/rQU3sOBms4WA7iFAqBCtbMXgaB8_ynkkix.jpg'},
    {id:9, nombre: 'SpongeBob', genero: 'animacion', anio: 2020, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508102/afterclass/fi2pg2mtAZwhq3qVuAs6PztjnHT_hbdv35.jpg'},
    {id:10, nombre: 'Luca', genero: 'animacion', anio: 2020, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625540511/afterclass/pr06RihHOGE3waZQx5fs2WYUdwr_a7dvh2.jpg'},
    {id:11, nombre: 'Spirit', genero: 'animacion', anio: 2021, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625540564/afterclass/mptEtOkw906BJuD9rRUKG5sr5E9_s43aw0.jpg'},
    {id:12, nombre: 'Monster Inc.', genero: 'animacion', anio: 2001, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625540669/afterclass/jTE3BLVCpYaR71L2U8SHV22HvEr_fbtiu6.jpg'},
    {id:13, nombre: 'Blade Runner', genero: 'ciencia ficcion', anio: 1982, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625540759/afterclass/k7tpmwwSqwJ6l1f1FqDMnM7x5c2_tgukok.jpg'},
    {id:14, nombre: 'Joker', genero: 'drama', anio: 2019, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625540959/afterclass/v0eQLbzT6sWelfApuYsEkYpzufl_e85kyq.jpg'},
    {id:15, nombre: 'Rey León', genero: 'animacion', anio: 1994, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625541034/afterclass/b0MxU37dNmMwKtoPVYPKOZSIrIn_xx4f3x.jpg'},
    {id:16, nombre: 'Jurassic Park', genero: 'ciencia ficcion', anio: 1993, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625541181/afterclass/1r8TWaAExHbFRzyqT3Vcbq1XZQb_jotm6u.jpg'},
]
//------------------------------------------------------------Clase pelicula si quieren crear nuevas------------------------------------------------------------------------------------------------------
class Pelicula {
    constructor(id, nombre, genero, anio, atp, img){
        this.id = id,
        this.nombre = nombre,
        this.genero = genero,
        this.anio = anio,
        this.atp = atp,
        this.img = img
    }
}
//-------------------------------------------------------Variables y elementos creados--------------------------------------------------------------------------------------------------------------------
let atp
let edad = Number(prompt('Cual es tu edad?'))
let preguntar = confirm('Queres filtrar por año?')
let contenedor = document.getElementById('contenedor')
let resultado = document.querySelector('#resultado')
let titulo = document.createElement('h1')
titulo.setAttribute('class', 'text-center mt-5')
contenedor.prepend(titulo)

//-------------------------------------------------------Funciones--------------------------------------------------------------------------
function crearTarjetasHTML(filtradas){
    let peliculasFiltradas = filtradas
    for(const pelicula of peliculasFiltradas){
        resultado.innerHTML += `<div id="movie${pelicula.id}" class="card">
                                    <img src=${pelicula.img} class="card-img-top">
                                    <div class="card-body">
                                        <h5 class="card-title">${pelicula.nombre}</h5>
                                        <p class="card-text">Género: ${pelicula.genero} <br> Año: ${pelicula.anio} <br> ATP: ${pelicula.atp}</p>
                                    </div>
                                </div>`
    }
}

function darEstilo(atp){
    if(!atp){
        document.body.setAttribute('style', 'background-color: #000546; color: whitesmoke')
    }else if(atp){
        document.body.setAttribute('style', 'background-color: #9BDA00;')
    }

    let cards = document.getElementsByClassName('card')
    for(const card of cards){
        card.setAttribute('style', 'width: 13rem; background-color: black; color: whitesmoke; margin: 2.2rem')
    }
}

function filtrarPorAnio(){
    resultado.innerHTML = ''
    let filtro = Number(prompt('Desde que año te gustaría buscar?'))
    let peliculasFiltradas = peliculas.filter(pelicula => pelicula.anio >= filtro)
    crearTarjetasHTML(peliculasFiltradas)
    titulo.textContent = `Películas posteriores a ${filtro}`
}




peliculas.push(new Pelicula(17, 'Deadpool', 'aventura', 2016, false, 'https://res.cloudinary.com/vaporbox/image/upload/v1625508101/afterclass/pcZT1Ouq99dY6J2iGXjMxw16x6o_d9ifqk.jpg'))

if(edad >= 14){
    atp = false
    titulo.textContent = 'Todas las peliculas'
    crearTarjetasHTML(peliculas)
}else{
    atp = true
    titulo.textContent = 'Peliculas para vos'
    peliculas = peliculas.filter(pelicula => pelicula.atp === true)
    crearTarjetasHTML(peliculas)
}

if(preguntar){
    filtrarPorAnio()
}

darEstilo(atp)

//titulo.parentNode.removeChild(titulo)
