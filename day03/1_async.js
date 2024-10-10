async function myName() {
    return "ssg";
}

console.log(myName());



async function showName() {
    const name = await myName(); //await는 async 내에서만 사용 가능함
    console.log(name);
}

console.log(showName());