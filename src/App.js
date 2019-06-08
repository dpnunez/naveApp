import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class AppListData extends Component{
  render(){
    const dataTest = [
      {
        name:'Visitor', number: 20000
      },
      {
        name:'User', number: 1234
      },
      {
        name:'Sales',number: 450
      },
      {
        name:'Order', number: 320
      }];


    return (
      <div className='AppDataBase'>
        {dataTest.map((data, index) =>
          <AppData key={data.name} name={data.name} number={data.number} color='#FF00FF'/>
        )}
      </div>
    )
  }
}

class AppData extends Component{
  render(){
    const name = this.props.name;
    const number = this.props.number;
    const bgColor = this.props.color;
    return(
      <div className='data' id={name}>
          <img src='https://image.flaticon.com/icons/svg/23/23228.svg'></img>
          <p className='data-number pData'>{number}</p>
          <p className='data-name pData'>{name}</p>
      </div>
    );
    
  }
}


class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className='Page-Overview'>Page Overview</h1>
        </header>
        <AppListData />
      </div>
    );
  }
}

export default App;
