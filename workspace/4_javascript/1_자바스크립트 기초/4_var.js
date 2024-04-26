//  var 키워드로 변수를 만들면 같은 이름으로 여러개를 선언 한 것처첨 보인다.
// 하지만 
var data = 10;

console.log(data);

var data = 49;
console.log(data);

// 호이스팅
// 변수 선언을 스코프 가장 위로 올려 실행하는 것을 말함.
console.log(name);
var name = "조용준";

//  그냥 초기화 안하고 선언만 해도 undifiend
var test = undefined;
console.log(test);

// let 확인! 중복은 되지 않는다.
let age =22;
console.log('나이 : ' + age);