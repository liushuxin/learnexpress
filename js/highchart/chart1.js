import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Student {
  constructor(name){
    this.name=name;
    console.log("构建对象！");
  }
  sayHello() {
    alert('你好！'+this.name);
  }
}
class Text extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return (<div>
      你好，React1,
      属性扩展foo:{this.props.foo}
      属性扩展bar:{this.props.bar}
    </div>)

  }
}
var props = {};
props.foo = 'x';
props.bar = 'y';
ReactDOM.render(
    <Text {...props} />,
    document.querySelectorAll('#test')[0]
);