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
  y  quiere filtrarlo por tipo: “frutas” o “verduras”, crearemos un objeto por cada fruta y verdura, 
  en el cual tendrán como propiedades, “nombre”, “tipo”, “cantidad”

    let item = {
      nombre: “Manzana”,
      tipo: “fruta”,
      cantidad: 5
    }
*/


let canasta = [
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
let nuevaCanasta

// filtra segun el tipo de elemento
function filtrarCanasta() {
  const tipo = document.getElementById('tipo-filtro').value
  nuevaCanasta = canasta.filter(function (element) {
    return element.tipo === tipo
  })
  renderLista(nuevaCanasta)
}


// renderiza y muestra la lista de frutas
function renderLista(canastaRender) {
  const list = document.getElementById('frutas-lista')
  list.innerHTML = ''
  canastaRender.forEach(function (element, index) {
    let node = document.createElement("LI")
    let textnode = document.createTextNode(element.nombre + ' ' + element.tipo + ' ' + element.cantidad)
    node.setAttribute('id', index)
    node.appendChild(textnode)
    document.getElementById("frutas-lista").appendChild(node)
  });

}

// agrega un elemento nuevo a la lista y lo renderiza
function agregarFrutaLista() {
  const name = document.getElementById('nombre').value
  const type = document.getElementById('tipo').value
  const quantity = document.getElementById('cantidad').value
  if (name === undefined || null || '') {
    alert('no ingresaste nada')
  } else {
    const nuevaCanasta = canasta.slice()
    nuevaCanasta.push({
      nombre: name,
      tipo: type,
      cantidad: quantity
    })
    canasta = nuevaCanasta
    renderLista(nuevaCanasta)
  }
}



// renders
renderLista(canasta)