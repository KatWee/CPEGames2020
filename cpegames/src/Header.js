import React,{Component} from 'react';
class Header extends Component{
  constructor(){
    super();
    this.state = {
      name:"kat",
      count:0
    };
  }
    render (){
      // setTimeout(()=>{
      //   this.setState({name:"kat2"});
      // },1000);
      // setInterval(() => {
      //   this.setState({count:this.state.count+1});
      // }, 100);
      return(
        <div>
          <h1>Header</h1>
          <p>{this.props.title}</p>
          <p>{this.props.name}</p>
          <h2>{this.state.name}</h2>
          <h2>{this.state.count}</h2>
        </div>
      );
    }
  }
export default Header