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
      你好，React1
    </div>)

  }
}
ReactDOM.render(
    <Text />,
    document.querySelectorAll('#test')[0]
);