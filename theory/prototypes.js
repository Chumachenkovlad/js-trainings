const MyProto = { field: "1" };
const obj = { test: "hello" };

obj.__proto__ = MyProto;
const obj2 = Object.create(MyProto);

console.log(obj2.field);
console.log(obj.field);

MyProto.field = 2;

const obj3 = Object.create(MyProto);

console.log(obj2.field);
console.log(obj3.field);
console.log(obj);
