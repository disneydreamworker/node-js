const { default: mongoose } = require("mongoose");

//person model
var mongoose = require("mongoose"); //hoisting을 위한 var 변수 선언, 몽구스 임포트 
var Schema = mongoose.Schema;
//Schema 는 create DB와 동일함
const personSchema = new Schema ( {
    name : String,
    age : Number,
    email : {type: String , require : true },
});

module.export('Person', personSchema); //person 모델 객체 생성


