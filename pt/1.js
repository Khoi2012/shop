// var count = 0;


// function updateCount () {
//     count++;
//     console.log(count)
// }

// setInterval(updateCount , 500)

// conle.solog(parseInt(3.5))

// var a = 4.494949
// console.log(typeof a.toFixed(2))

// var input = 'Incididunt ex labore deserunt ad incididunt in enim amet'
// var b = '';

// for ( var i = 0 ; i < input.length ; i++) {
//     if(input[i] !== 'a' || input[i] !== "A") {
//          b =b+ input[i];
//     }
// }

// console.log(b)

// var input = 'Incididunt ex labore deserunt ad incididunt in enim amet'
// var result = '';
// for ( i = 0 ; i < input.length ; i++) {
//     if ( input[i] !== 'a' || input[i] !== 'A'){
//         result += input[i]
//     }
// }
// console.log(result)


var input = 'Voluptate-aliqua-ad-eiusmod';

console.log(input.split('-'))

// var m = 3.6
// console.log(Math.round(m))

var numbers = [2.4, 2.6, 3.2, 3.85, 1.2];

var number = numbers.map( function (item){
    return Math.round(item);
})
console.log(number)

// var obj = new Date()
// console.log(obj.getFullYear())


// var namsinh = window.prompt('Nhap nam sinh:')
// console.log(namsinh)

// var date = new Date('08/25/2022');
// Cách 2:
// var date = new Date('2022-08-25');

// var dateObj = new Date('2018-02-19');
// var month = dateObj.getMonth();
// dateObj.setMonth(month + 2);
// var date = dateObj.getDate();
// dateObj.setDate(date - 10);
// console.log(dateObj);