function waitOneSecond(message) {
    return new Promise((resolve, _) => {
        setTimeout(() => resolve(`${ message }`), 1000);
    });
}

async function countOneToTen() {
    for (let x of [...Array(10).keys()]) {
        let result = await waitOneSecond(`${ x + 1 } 초 대기 중...`);
        console.log(result);
    }

    console.log("-END-");
}

countOneToTen();