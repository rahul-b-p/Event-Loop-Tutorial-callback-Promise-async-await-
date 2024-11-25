const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(["Java","Python","JavaScript",'C++']);
        reject('API Failed!')
    }, 3000);
});

const readData = async () => {
    try {
        const data = await promise;
        console.log(data);
    }
    catch (error) {
        console.error(error);

    }
}

readData();