class Student {
  constructor(name){
    this.name=name;
    console.log("构建对象！");
  }
  sayHello() {
    alert('你好！'+this.name);
  }
}
let stu = new Student('小明');
stu.sayHello();
export default Student