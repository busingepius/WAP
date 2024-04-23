// console.log('start');
// let foo = new Promise((resolve, reject) => {
//     resolve(' done ! ');
// })
//
// let bar = new Promise((resolve, reject) => {
//     console.log(' insidebar - start');
//     // let result = await foo();
//     // console.log(result);
//     // console.log('insidebar - end');
//     resolve(() => foo.then(data => {
//         console.log(data);
//         console.log('insidebar - end');
//     }))
// })
//
// bar.then(data => data());
// console.log('end');

async function getData(url) {
    let data = await fetch(url);
    console.log(data);
    return data;
}

getData("https://algolia.com/");


