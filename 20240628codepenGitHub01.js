// paso1.
alert("Bienvenido al restaurante Bottega Diner, horario de apertura entre las 7h y las 23h");

// paso2. condicionales según hora 3 opciones desayuno, comida y cena


let i = prompt("Introduzca la hora de entrada al restaurante: ", 21); //.format('HH')


if (i < 7 || i > 23) { //fuera de las 7h y las 23h
  let i = prompt("lo siento estamos cerrados, nuestro horario de apertura: de 7h a 23h, introduzca la hora de entrada al restaurante: ", 21);
} 


var num = parseInt(i);

      if (num >= 13 && num <= 17) {
        console.log("Puedes comer entre 13h y 17h");

      } else if (num >= 7 && num <= 12) {
        console.log("Puedes desayunar entre 7h y 12h");
        console.log(`Hoy tenemos de menu principal: ${bottegaMenu.desayuno.mainCourses}. /n
           Con los complementos: ${bottegaMenu.desayuno.sideCourses} /n
           y de postres: ${bottegaMenu.desayuno.beverages}.`)        
      
      } else if (num >= 20 && num <= 23) {
        console.log("Puedes cenar entre 20h y 23h");

      } else {
        console.log("lo siento estamos cerrados, vuelva en nuestro horario de apertura de 7h a 23h");
      }


// paso3. de una caja o vault ir sacando comentarios random para contestar cada elección de plato por parte del camarero. 

function generateComment() {
  const comments = [
    "Gran elección",
    "Increible opción",
    "Excelente elección",
    "De chuparse los dedos",
    "Le va a encantar",
  ];
  return comments[Math.floor(Math.random() * comments.length)];
}

// paso4. funcion que enseña en menu (main courses + side dishes) cada comida tiene ppal, secundario y postre ó bebida

const bottegaMenu = {
  desayuno:{
    mainCourses:{
      "Huevos": 9,
      "Tostadas": 5,
      "Cereales": 7    
    },
    sideCourses:{
      "Fruta": 4,
      "Yogurt": 2,
      "Reposteria": 3
    },
    beverages:{
      "Refresco": 2,
      "Zumo de fruta": 2,
      "batido": 4
    }   
  },
  comida:{
    mainCourses:{
      "Paella": 10,
      "Lasagna": 8,
      "Secreto Ibérico": 8    
    },
    sideCourses:{
      "Ensalada": 4,
      "Patatas": 2,
      "Aros de Cebolla": 2
    },
    desserts:{
      "Fruta": 4,
      "Flan": 3,
      "Yogurt": 2    
    }   
  },
  cena:{
    mainCourses:{
      "Pato": 10,
      "Lasagna": 8,
      "Salmón": 8    
    },
    sideCourses:{
      "Ensalada": 4,
      "Patatas": 2,
      "Aros de Cebolla": 2
    },
    desserts:{
      "Fruta": 4,
      "Flan": 3,
      "Yogurt": 2    
    }   
  }
};


// var mainCourses, sideCourses, desserts;
// alert(`"Hoy tenemos de menu principal: ${bottegaMenu(desayuno, mainCourses)}. Con los complementos: ${bottegaMenu(desayuno, sideCourses)} y de postres: ${bottegaMenu(desayuno, beverages)}."`)
// alert(`"Hoy tenemos de menu principal: ${bottegaMenu(comida, mainCourses)}. Con los complementos: ${bottegaMenu(comida, sideCourses)} y de postres: ${bottegaMenu(comida, desserts)}."`)
// alert(`"Hoy tenemos de menu principal: ${bottegaMenu(cena, mainCourses)}. Con los complementos: ${bottegaMenu(cena, sideCourses)} y de postres: ${bottegaMenu(cena, desserts)}."`)

// paso4 y 5. gestión de error con bucle while aunq sea infinito hasta q el usuario meta algo de lo que queramos
// paso6. no obligar a q use 1 sola manera de escribir con toLowerCase y compararlo con algo.
// paso7. selecion de plato del menu con prompt 

const text = prompt('Que plato principal desea del menu desayuno?', '');
const mainCoursesOption = text.toLowerCase(); 

while (mainCoursesOption !== "huevos" || mainCoursesOption !== "tostadas" || mainCoursesOption !== "cereales") { // distinto !=
  
  const text = prompt('Que plato principal desea del menu desayuno 2?', '');
  const mainCoursesOption = text.toLowerCase(); 
}
console.log("Has elegido correctamente");


// paso7. gestión de error default puede ser 1opción para resolver comentario de "vaya no ha elegido correctamente" cuando no se elige entre lo q hay. 
//gestión de error custom class?

class BottegaDinerError extends Error {
      constructor(msg = 'An error occurred', ...params) {
        super(...params);

        this.msg = msg;
      }
    }


    function siteComponent(func) {
      return func();
    }

    try {
      console.log(siteComponent('oops'));
    } catch(e) {
      throw new BottegaDinerError('BottegaDinerError', e);
    }

    widget = () => {
      return '<div>Hi there</div>';
    }

// paso8. La función confirm muestra una ventana modal con una pregunta y dos botones: OK y CANCELAR.

/*El resultado es true si se pulsa OK y false en caso contrario.

Por ejemplo:


let isBoss = confirm("¿Eres el jefe?");

alert( isBoss ); // true si se pulsa OK
*/

// paso9. cuando acabas de seleccionar los 3 platos presentas factura con todo lo elegido y su precio ud y el total.

var num1, num2, num3, total;
num1 = parseInt(alert("introducir el número 1: "));
num2 = parseInt(alert("introducir el número 2: "));
num3 = parseInt(alert("introducir el número 3: "));
total=(num1 + num2 + num3)
alert("el resultado de la suma es: " + total);
    
    
// paso10. si pones horario al restaurante 3am cerrado y 10am le das xej desayuno como opción, ya hecho en el paso2 

