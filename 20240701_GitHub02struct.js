// paso1. 
// Define the menu items and prices (side courses/acompañamiento + main courses/pricipal + dessert/postre)

const bottMenu = {
  breakfast:{
    sideCourses: [
      { name: "Fruta", price: 3.99 },
      { name: "Yogurt", price: 1.95 },
      { name: "Reposteria", price: 2.99 }
    ],
    mains: [
      { name: "Huevos", price: 8.99},
      { name: "Tostadas", price: 4.95 },
      { name: "Cereales", price: 6.99 }
    ],
    desserts: [
      { name: "Muffin", price: 3.99},
      { name: "Yogurt", price: 1.99 },
      { name: "batido", price: 3.95 }
    ] 
  },
  lunch: {
    sideCourses: [
      { name: "Ensalada", price: 3.95 },
      { name: "Patatas", price: 1.95 },
      { name: "Aros de Cebolla", price: 1.99 }
    ],
    mains: [
      { name: "Paella", price: 9.95 },
      { name: "Lasagna", price: 7.95 },
      { name: "Secreto Iberico", price: 7.99 }
    ],
    desserts: [
      { name: "Fruta", price: 3.99 },
      { name: "Yogurt", price: 1.99 },
      { name: "Flan", price: 2.99 }
    ] 
  },
  dinner: {
    sideCourses: [
        { name: "Ensalada", price: 3.95 },
        { name: "Patatas", price: 1.95 },
        { name: "Aros de Cebolla", price: 1.99 }
    ],
    mains: [
        { name: "Pato", price: 9.95 },
        { name: "Lasagna", price: 7.95 },
        { name: "Salmon", price: 7.99 }
    ],
    desserts: [
      { name: "Fruta", price: 3.99 },
      { name: "Flan", price: 2.95 },
      { name: "Yogurt", price: 1.99 }
    ] 
  }
};

// paso2. comments for the food choices.  
/*
function generateComment() { 
*/
  const comments = [
    "Gran elección",
    "Increible opción",
    "Excelente elección",
    "De chuparse los dedos",
    "Le va a encantar",
  ];

/* Ponemos en el paso 4 donde se elige item y devuelve un comentario
return comments[Math.floor(Math.random() * comments.length)];
}
*/

// paso3. Function to display the menu options in the prompt
 
function getMenuOptions(menuType, courseType) {
    return bottMenu[menuType][courseType]
        .map(item => `${item.name} - ${item.price}€`)
        .join('\n');
}

// paso4. Function to select an item and get a comment. De una caja (vault) ir sacando comentarios random para contestar cada elección de plato por parte del camarero. 

function selectItem(menuType, courseType, itemName) {
  const item = bottMenu[menuType][courseType].find(it => it.name.toLowerCase() === itemName.toLowerCase());
  if (!item) {
      return null;
  }
  const randomComment = comments[Math.floor(Math.random() * comments.length)];
  alert(`${randomComment}`);
  return item;
}

// paso5. Function to calculate the total cost and create the itemized bill o Factura detallada por cada 1 de los platos y su total
function createItemizedBill(sideCourse, main, dessert) {
  let totalCost = sideCourse.price + main.price + dessert.price;
  let bill = `AUTOPISTA BOTTEGA DINER \n\nSu Factura detallada:\n\nAcompañamiento: ${sideCourse.name} - ${sideCourse.price}€\nPrincipal: ${main.name} - ${main.price}€\nPostre: ${dessert.name} - ${dessert.price}€\n`;
  bill += `\nTotal: ${totalCost}€`;
  return bill;
}

// paso6. Function to prompt for a valid selection

function promptForValidSelection(menuType, courseType, promptMessage) {
  let selectedItem;
  while (!selectedItem) {
      const itemName = prompt(promptMessage);
      selectedItem = selectItem(menuType, courseType, itemName);
      if (!selectedItem) {
          alert("elección inapropiada. Por favor, pruebe de nuevo.");
      }
  }
  return selectedItem;
}

// paso7. Function to determine meal type based on time

function getMealType(hour, minute) {
  const totalMinutes = hour * 60 + minute;
  const breakfastEnd = 11 * 60; // 11:00 AM
  const lunchEnd = 17 * 60; // 5:00 PM
  const closingTime = 23 * 60; // 11:00 PM

  if (totalMinutes >= 7 * 60 && totalMinutes < breakfastEnd) {
      return "breakfast";
  } else if (totalMinutes >= breakfastEnd && totalMinutes < lunchEnd) {
      return "lunch";
  } else if (totalMinutes >= lunchEnd && totalMinutes <= closingTime) {
      return "dinner";
  } else {
      return null;
  }
}

// paso 8. Main function to run the diner menu selection

function runDiner() {
  const timeInput = prompt("Bienvenidos al Autopista Bottega Diner! Por favor, introduzca su hora de reserva (HH:MM):");
  const timeParts = timeInput.split(':');
  const hour = parseInt(timeParts[0], 10);
  const minute = parseInt(timeParts[1], 10);

  if (isNaN(hour) || isNaN(minute) || hour < 0 || hour >= 24 || minute < 0 || minute >= 60) {
    alert("Formato de inapropiado. Introduzca la hora en formato HH:MM.");
    return;
  }

  if (hour < 7 || hour >= 23 || (hour === 22 && minute > 15)) {
    alert("Lo sentimos, estamos cerrados. Nuestro horario de apertura es de 07:00 a 23:00.");
    return;
  }

  const mealType = getMealType(hour, minute);
  if (!mealType) {
      alert("Lo sentimos, estamos cerrados. Nuestro horario de apertura es de 07:00 a 23:00.");
      return;
  }


  alert(`Welcome to ${mealType.charAt(0).toUpperCase() + mealType.slice(1)} Menu!`);

  const sideCoursesOptions = getMenuOptions(mealType, 'sideCourses');
  const selectedSideCourse = promptForValidSelection(mealType, 'sideCourses', `Por favor, seleccione un plato de acompañamiento introduciendo su nombre:\n${sideCoursesOptions}`);

  const mainOptions = getMenuOptions(mealType, 'mains');
  const selectedMain = promptForValidSelection(mealType, 'mains', `Por favor, seleccione un plato principal introduciendo su respectivo nombre:\n${mainOptions}`);

  const dessertOptions = getMenuOptions(mealType, 'desserts');
  const selectedDessert = promptForValidSelection(mealType, 'desserts', `Por favor, seleccione un postre introduciendo su respectivo nombre:\n${dessertOptions}`);

  const itemizedBill = createItemizedBill(selectedSideCourse, selectedMain, selectedDessert);

  alert(itemizedBill);
}

// paso 9. Run the diner menu selection process
runDiner();
