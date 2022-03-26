/*

En una recauderia, el vendedor quiere realizar un registro de frutas y verduras que tiene en su local, y  quiere filtrar por tipo: “frutas” o “verduras”, 
crearemos un objeto por cada fruta y verdura, en el cual tendrán como propiedades, “nombre”, “tipo”, “cantidad”

  let item = {
    nombre: “Manzana”,
    tipo: “fruta”,
    cantidad: 5
  }

*/


// let personaje = {
//   "nombre": 'Monkey D. Luffy',
//   ocupacion: 'pirata',
//   edad: 19,
//   transformar: function () {
//     console.log('Gear fourth... Bounce Man!')
//   }
// }

// console.log(personaje.nombre)
// console.log(personaje["ocupacion"])
// personaje.transformar()

// for (const llave in personaje) {
//   console.log(`${llave}: ${personaje[llave]}`);
// }


// let { edad, ocupacion, nombre } = personaje;

// console.log('-------------------')
// console.log('nombre', nombre)
// console.log('ocupacion', ocupacion)
// console.log('edad', edad)
// console.log('-------------------')

// let arr = ['manzana', 'narnaja', 'cereza']

// let [pos0, pos1, pos2] = arr
// console.log('-------------------')
// console.log('manzana', pos0)
// console.log('naranja', pos1)
// console.log('cereza', pos2)
// console.log('-------------------')


let canasta = [
  {
    nombre: "Manzana",
    tipo: "fruta",
    cantidad: 5
  },
  {
    nombre: "mango",
    tipo: "fruta",
    cantidad: 30
  },
  {
    nombre: "naranja",
    tipo: "fruta",
    cantidad: 50
  },
  {
    nombre: "brocoli",
    tipo: "verdura",
    cantidad: 20
  },
  {
    nombre: "mamey",
    tipo: "fruta",
    cantidad: 5
  },
  {
    nombre: "melon",
    tipo: "fruta",
    cantidad: 15
  },
  {
    nombre: "aguacate",
    tipo: "fruta",
    cantidad: 100
  },
  {
    nombre: "apio",
    tipo: "verdura",
    cantidad: 80
  },
  {
    nombre: "espinaca",
    tipo: "verdura",
    cantidad: 20
  },
];

console.log('canasta original', canasta)

function filtrarCanasta() {
  let valorFiltro = document.getElementById('tipo-filtro').value
  console.log(valorFiltro)
  const canastaFilter = canasta.filter(function (item) { return item.tipo === valorFiltro });
  renderLista(canastaFilter)
  console.log('canasta filtrada', canastaFilter);
};

// console.log(document)

function renderLista(elQueQuieras) {
  // se define list asignandole el objeto del elemento html con el id lista
  const list = document.getElementById('lista')
  // al ser asignado list con este objeto utilizamos su metodo innerHTML para limpiar los valores que tenga dentro
  list.innerHTML = '';
  // se itera el arreglo 'elQueQuieras' 
  elQueQuieras.forEach(function (element, index) {
    // en cada vuelta del arreglo se define la variable nodo creando un elemento <li></li>
    let nodo = document.createElement('LI');
    // en cada vuelta del arreglo se define la variable textNodo creando el texto concatenando los valores del objeto mapeando element
    let textNodo = document.createTextNode(element.nombre + ' ' + element.tipo + ' ' + element.cantidad)
    // le agregamos el atributo id con el numero de la posicion que tiene este elemento <li id="0"></li>
    nodo.setAttribute('id', index)
    //insertamos el texto dentro de nodo utilizando appendChild
    nodo.appendChild(textNodo)
    // obtenemos el elemento lista por medio de su id e insertamos el elemento nodo como su hijo
    document.getElementById('lista').appendChild(nodo)
  })
};


function agregarItem() {
  const name = document.getElementById('nombre').value;
  console.log(name)
  const type = document.getElementById('tipo').value;
  console.log(type)
  const quantity = document.getElementById('cantidad').value;
  console.log(quantity)

  const obj = {
    nombre: name,
    tipo: type,
    cantidad: quantity
  }

  canasta.push(obj)
  filtrarCanasta()
}

// filtrarCanasta();

renderLista(canasta)




//clases
// Definimos una clase
// clase padre
// class Animal {
//   constructor(nombre) {
//     this.nombre = nombre
//   }

//   hablar() {
//     console.log(this.nombre + ' hace ruido')
//   }

// }

// // instanciar una clase
// const jirafa = new Animal('Jirafa');

// console.log('Animal dice: ' + jirafa.nombre)

// jirafa.hablar()



// class Perro extends Animal {
//   constructor(nombre) {
//     super(nombre)
//   }

//   hablar() {
//     return `${this.nombre} ladra`
//   }
// }

// const perro = new Perro('Firulais')

// console.log('perro dice:', perro.hablar())


// class Rectangulo {
//   constructor(alto, ancho) {
//     // Con la palabra `this` se hace referencia al ámbito de la clase
//     // Las propiedades `alto` y `ancho` representan el estado de la clase
//     this.alto = alto;
//     this.ancho = ancho;
// otra manera de crear metodos privados
      // this.calc = this.calcularArea()
//   }

//   // Getter (encapsulamiento)
//   get area() {
//     return this.calcularArea();
//   }

//   // Método, comportamiento de la clase
//   calcularArea() {
//     return this.alto * this.ancho;
//   }
// };

// let figura = new Rectangulo(123, 200);
// console.log(figura.calcularArea())














