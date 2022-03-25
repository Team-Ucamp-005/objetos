// objetos

let personaje1 = {
  "nombre": "Timmy",
  "raza": "dinosaurio",
  "edad": 65000000,
  "peso": 8,
  "vivo": false,
  "vamos_a_necesitar_otro_trimmy": function () {
    if (!this.vivo) {
      console.log('vamos a necesitar otro timmy!!')
    }
  }
}

let personaje2 = {
  nombre: 'Monkey D. Luffy',
  ocupacion: 'pirata',
  edad: 19,
  transformar: function () {
    console.log('Gear fourth... Bounce Man!')
  }
}


/*
  En una recauderia, el vendedor quiere realizar un registro de frutas y verduras que tiene en su local, 
  y  quiere dividirlos por tipo: “frutas” o “verduras”, crearemos un objeto por cada fruta y verdura, 
  en el cual tendrán como propiedades, “nombre”, “tipo”, “cantidad”

    let item = {
      nombre: “Manzana”,
      tipo: “fruta”,
      cantidad: 5
    }
*/

// const agregarItem = document.getElementsByClassName('btn-success')
// const valueItem = document.getElementById('verduras')
const verduras = []
const frutas = []

const canasta = [
  {
    nombre: 'Manzana',
    tipo: 'fruta',
    cantidad: 10
  },
  {
    nombre: 'aguacate',
    tipo: 'fruta',
    cantidad: 10
  },
  {
    nombre: 'sandia',
    tipo: 'fruta',
    cantidad: 3
  },
  {
    nombre: 'melon',
    tipo: 'fruta',
    cantidad: 5
  },
  {
    nombre: 'naranja',
    tipo: 'fruta',
    cantidad: 10
  },
  {
    nombre: 'papa',
    tipo: 'verdura',
    cantidad: 10
  },
  {
    nombre: 'zanahoria',
    tipo: 'verdura',
    cantidad: 8
  },
  {
    nombre: 'apio',
    tipo: 'verdura',
    cantidad: 5
  },
  {
    nombre: 'brocoli',
    tipo: 'verdura',
    cantidad: 1
  },
  {
    nombre: 'perejil',
    tipo: 'verdura',
    cantidad: 15
  },
]

function filtrarCanasta(canasta){
    canasta.map(function(item){
        if(item.tipo === 'verdura'){
            verduras.push(item)
        } else {
            frutas.push(item)
        }
    })
    console.log(verduras)
    console.log(frutas)
}

filtrarCanasta(canasta)

function agregarFrutaLista(){
  const x = document.getElementById('nodo').value
  if(x === undefined || null || ''){
    alert('no ingresaste nada')
  }else{
    let node = document.createElement("LI")             
    let textnode = document.createTextNode(x)               
    node.appendChild(textnode)                              
    document.getElementById("frutas-lista").appendChild(node)
  }
}