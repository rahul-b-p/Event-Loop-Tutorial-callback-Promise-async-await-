console.log('started');
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("failed")
        // resolve("success");
    }, 3000)
})

promise.then((response) => {
    console.log(response);
}).catch((error) => {
    console.error(error);
});

console.log('lodding...');
