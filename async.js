const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject("failed")
        // resolve(["Java","Python","JavaScript",'C++']);
        reject('API Failed!')
    }, 3000);
});

const readData=async()=>{
    const data = await promise.catch((err)=>{
        console.error(err);
    })
    if(data){
        console.log(data);
    }
}

readData();
