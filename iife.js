const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject("failed")
        resolve(["Java","Python","JavaScript",'C++']);
    }, 3000);
});

(async()=>{
    const data = await promise;
    console.log(data);
})();