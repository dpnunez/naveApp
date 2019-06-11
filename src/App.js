import React, {Component} from 'react';
import AppListData from './AppListData';
import views from './images/eye.png';
import user from './images/user.png';
import sales from './images/sales.png';
import order from './images/order.png';

import Container from '@material-ui/core/Container';

class App extends Component{
  state = {
    dataList: [
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
      <div className="App">
        <Container component="main" maxWidth="lg">
          <header className="App-header">
            <h1 className='Page-Overview'>Page Overview</h1>
          </header>
          <AppListData  dataList={this.state.dataList}/>
          
        </Container>
      </div>
    );
  }
}

export default App;
