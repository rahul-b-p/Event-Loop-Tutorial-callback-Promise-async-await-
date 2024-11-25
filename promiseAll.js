const promise1 = new Promise((resolve, reject) => {
    resolve(['JavaScript', 'Java', 'C++', 'Python']);
})

const promise2 = new Promise((resolve, reject) => {

    resolve(['Angular','React','Next','Flutter']);

    throw new Error('Already Resolved');

    const errmessege = new Error();
    errmessege.message = 'Api  Not Found';
    errmessege.cause = 'may be your server will be unavailable right now';
    errmessege.name = 'Internal Server Error';
    reject(errmessege);
});

const allPromises = Promise.all([promise1, promise2])

allPromises.then((res) => {
    console.log(res.flat(Infinity));
}).catch((err) => {
    console.error(err);
});


