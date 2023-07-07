// for (var i = 0; i < 20; i++) {
//     console.log(i)
//     if (i > 2) { break; }
// }

// var numbers = [10, 20, 30, 40, 50, 60, 70];

// for (var i = 0; i < numbers.length; i += 1) {
//     var number = numbers[i];

//     if (
//         number > 50
//     ) { break; }
//     console.log(number)

// }

// var things = ['pen', 'pc', 'glass', 'mog', 'jog'];

// for (var i = 0; i < things.length; i++) {
//     var thing = things[i];
//     console.log(thing)
//     if (thing == 'pc') { break; }
// }



var numbers = [10, 20, 30, 41, 71, 11, 70];

for (var i = 0; i < numbers.length; i += 1) {
    var number = numbers[i];
    if (number > 40) { continue; }
    console.log(number)
}