import React, {Component} from 'react';
import views from './images/eye.png';
import user from './images/user.png';
import sales from './images/sales.png';
import order from './images/order.png';

import './App.css';

class AppListData extends Component{
    state = {
        dataTest: [
            {
              name:'Visitor', number: 20000, url: views
            },
            {
              name:'User', number: 1234, url: user
            },
            {
              name:'Sales',number: 450, url: sales
            },
            {
              name:'Order', number: 320, url: order
            }]
    }
    render(){
      
  
  
      return (
        <div className='AppDataBase'>
          {dataTest.map((data, index) =>
            <AppData key={data.name} name={data.name} number={data.number} url={data.url}/>
          )}
        </div>
      )
    }
  }
  
  class AppData extends Component{
    render(){
      const name = this.props.name;
      const number = this.props.number;
      const url = this.props.url;
  
      return(
        <div className='data' id={name}>
            <div className='data-image' style={{
                          backgroundImage: `url(${this.props.url})`
                      }}/>
            <p className='data-number pData'>{number}</p>
            <p className='data-name pData'>{name}</p>
        </div>
      );
      
    }
  }
  
  
  export default AppData