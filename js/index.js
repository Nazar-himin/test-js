// for (let i = 0; i < 10; i++) {
//     prn(i);
// }

// for (let i = 10; i >= 0; i--) {
//     prn(i);
// }

// for (let i = 10; i >= 0; i = i-2) {
//     prn(i);
// }

// for (let i = 10; i >= 0; i--) {
//     if (i % 2 === 0) {
//       prn(i);  
//     }    
// }

// for (let i = 10; i >= 0; i--) {
//     if (i % 2 !== 0) {
//         continue;
//     }    
//     prn(i);
// }

function prn(val) {
    document.write(val + '<br>');
}


// let counter = 0;
// while (counter <= 10) {
//     prn(counter);
//     counter++;
// }


// let counter = 0;
// do {
//     prn(counter);
//     counter++;
// } while (counter <= 10)


// let num = parseFloat(prompt('Enter a number'));
// while (Number.isNaN(num)) {
//     alert('Please Enter a number');
//     num = parseFloat(prompt('Enter a number'));
// }

// let num;
// do {
//     num = parseFloat(prompt('Enter a number'));
// } while(Number.isNaN(num));

let products = [];
products[0] = 'Tesla model X';
products[1] = 'Ferrari f30';
products[2] = 'Porshe 2';
// prn(products[1]);
products.push('Chevrole Malibu');
products.push('Chevrole Camaro');
prn(products.length);
products[100] = 'Zaz Sens';
prn(products.length);