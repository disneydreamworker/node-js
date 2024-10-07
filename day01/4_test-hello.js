import http from "k6/http";

//test setting
export const options={
    vus:100, //virsual usrs 가 100명이 있고 
    duration:"10s", //10초 동안 테스트 할게
};

//다중 처리 테스트를 위해 가상 유저를 만들어서 처리할 거야.
export default function() {
    http.get("http://localhost:8001"); 
}

//유저 100명이 10초 동안 http://localhost:8001 에 동시에 계속해서 요청을 보낸다는 의미