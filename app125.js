// function savetoDb(data , success , failure) {
//      let internetSpeed  = Math.floor(Math.random() * 10) + 1;
//      if(internetSpeed > 4) {
//        success();
//      } else {
//         failure();
//      }
// }



// savetoDb
// ("shreyas Pagar", 
//     () => {
//     console.log("success : your data was saved");
//     savetoDb(
//         "hello world!",
//          () => {
//         console.log("success2 : data2 saved");
//         savetoDb(
//             "shreyas", 
//             () => {
//             console.log("success3: data3 saved");
//         }, 
//         () => {
//             console.log("failure3 : weak connecton");
//         })
//     }, () => {
//         console.log("failure2 : weak connection");
//     }
// );
// },
// () => {
//     console.log("failure : weak connection. data not saved");
// }
// );

function savetoDb(data) {
     return new Promise((resolve, reject) => {
     let internetSpeed  = Math.floor(Math.random() * 10) + 1;
        
        if(internetSpeed > 4) {
            resolve("success : data was saved");
        } else {
            reject("failure: weak connection");
        }
     });
}

savetoDb("shreyas pagar");

 