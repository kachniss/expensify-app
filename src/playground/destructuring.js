/**
 * Object destructuring
 */

// const person = {
//     name: 'kach',
//     age: 27,
//     location: {
//         city: 'Vancouver',
//         temp: '18'
//     }
// };

// const {name = 'anonymous', age} = person;

// console.log(`${name} is ${age}.`);

// const {city, temp: temperature} = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} degrees in ${city}`);
// }

// const book = {
//     title:'Eragon',
//     author: 'Christopher Paolini',
//     publisher: {
//         name: 'idk'
//     }
// };


// const {name: publisherName = 'self-published'} = book.publisher

// console.log(publisherName);

/**
 * Array destructuring
 */

 const address = ['996 Jupiter Ave', 'LA', 'CA', 'zipzip'];

 const [, city ='NYC', state = 'NY'] = address;

 console.log(`You are in ${city} in ${state}`);