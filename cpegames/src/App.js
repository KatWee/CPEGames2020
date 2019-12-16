import React,{Component} from 'react';
import Header from './Header.js'
import Body from './Body.js'
class App extends Component{
  // constructor(){
  //   super();
  //   this.state={
  //     data:[],
  //     message:"unlike",
  //     type:""
  //   };
  //   this.changeMessage = this.changeMessage.bind(this);
  //   this.insertData = this.insertData.bind(this);
  // }

  // changeMessage(){
  //   this.setState({message:"like"});
  // }

  // insertData(){
  //   this.changeMessage();
  //   var item = "kat";
  //   var array = this.state.data;
  //   array.push(item);
  //   this.setState({data:array});
  // }
  // change(event){
  //   this.setState({type:event.target.value});
  // }

  // render (){
  //   return(
  //     <div>
  //         <Header title = "kat" name = "katname"/>
  //         <Body/>
  //         <h1>{this.state.data}</h1>
  //         <button onClick={this.insertData}>{this.state.message}</button>
  //         <br/>
  //         <input type="text" onChange={this.change.bind(this)}></input>
  //         <h1>hello:{this.state.type}</h1>
  //     </div>
  //   );
  // }

  render (){
      return(
        <div>
            <h1><a href="/header">Header</a></h1>
            <h1><a href="/body">Body</a></h1>
            <h1><a href="/">Home</a></h1>
        </div>
      );
  }
}

export default App;
