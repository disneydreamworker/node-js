const DB = [];

//회원 가입 예시
//회원가입 API 함수 : 콜백이 3중으로 중첩 되며 함수 실행의 순서를 보장함. 실행 순서는 다음과 같음.

// saved : KIM to DB
// ssg@ssg.com got an email
// KIM got registerd

function register(user) {

    return saveDB(user, function(user) {
        
        return sendEmail(user, function(user) {

            return getResult(user);
        });
    });
}

//DB 저장 후 콜백 실행, parameter로 함수가 들어감. -> 콜백 함수
function saveDB(user, callback) {
    DB.push(user);
    console.log(`saved : ${user.name} to DB`);
    return callback(user);
}

//이메이 발송 로그를 남기고 코드 실행 후 콜백 실행
function sendEmail(user, callback) {
    console.log(`${user.email} got an email`);
    return callback(user);
}

function getResult(user) {
    return `${user.name} got registerd`;
}

const result = register({
    email: "ssg@ssg.com",
    password : "password",
    name : "KIM"
});

console.log(result);