console.log('one');

function addApi1(callback) {
    setTimeout(() => {
        callback(5);
    },1000)
}

function addApi2(callback) {
    setTimeout(() => {
        callback(5);
    },1000)
}

function addApi3(callback) {
    setTimeout(() => {
        callback(5);
    },1000)
}

addApi1((val1)=>{
    console.log(val1);
    addApi2((val2)=>{
        console.log(val1+val2);
        addApi3((val3)=>{
            console.log(val1+val2+val3);
            
        })
    })
});

console.log('three');


