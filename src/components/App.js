
import React, { Component, useState } from "react";
import "../styles/App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0 ,timeStart:Date.now(),top:0,left:0};
    this.handleClick=this.handleClick.bind(this);
    this.handleKeyPressEvent=this.handleKeyPressEvent.bind(this);
    this.clockValue=this.clockValue.bind(this);
  }

  handleKeyPressEvent(event){
    let code=event.keyCode;
    if(code==37 && !(this.state.x==250 && this.state.y==250)){
      this.setState({
        x:this.state.left-5,
        y:this.state.top,
        top:this.state.top,
        left:this.state.left-5,
      });
    }
    if(code==38 && !(this.state.x==250 && this.state.y==250)){
      this.setState({
        x:this.state.left,
        y:this.state.top-5,
        top:this.state.top-5,
        left:this.state.left,
      });
    }
    if(code==39 && !(this.state.x==250 && this.state.y==250)){
      this.setState({
        x:this.state.left+5,
        y:this.state.top,
        top:this.state.top,
        left:this.state.left+5,
      });
    }
    if(code==40 && !(this.state.x==250 && this.state.y==250)){
      this.setState({
        x:this.state.left,
        y:this.state.top+5,
        top:this.state.top+5,
        left:this.state.left,
      });
    }

    if((this.state.x==250 && this.state.y==250)){
      clearInterval(this.intervalID);
      document.removeEventListener("keydown",this.handleKeyPressEvent);
    }
  }


  handleClick(){
    document.addEventListener("keydown",this.handleKeyPressEvent);
    this.setState({ time: 0, x: 0, y: 0 ,timeStart:Date.now(),top:0,left:0});
    this.intervalID=setInterval(()=>this.clockValue(),1000);
  }
  clockValue(){
    if(!(this.state.x==250 && this.state.y==250)){
      let calculateSeconds=Date.now()-this.state.timeStart;
      let seconds=Math.floor(calculateSeconds/1000);
      this.setState({
        time:seconds,
      });
    }
  }
  
  

  render() {
    return (
      <>
        <div className="ball" style={{top:this.state.top+"px",left:this.state.left+"px",position:"absolute"}}></div>
        <div className="hole"></div>
        <div className="heading-timer">{this.state.time}</div>
        <button className="start" onClick={this.handleClick}>Start Timer</button>
      </>
    );
  }
}

export default App;
