'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Student = function () {
  function Student(name) {
    _classCallCheck(this, Student);

    this.name = name;
    console.log("构建对象！");
  }

  _createClass(Student, [{
    key: 'sayHello',
    value: function sayHello() {
      alert('你好！' + this.name);
    }
  }]);

  return Student;
}();

var stu = new Student('小明');
stu.sayHello();
exports.default = Student;