import React, {Component} from 'react';
import AppListData from './AppListData';
import views from './images/eye.png';
import user from './images/user.png';
import sales from './images/sales.png';
import order from './images/order.png';

import {Bar} from 'react-chartjs-2';
import Container from '@material-ui/core/Container';
import AppDataGraph from './AppDataGraph';
import AppReports from './AppReports';


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
      }],

      dataReport: [
        {
          "id": 1,
          "user": "NAVER",
          "image": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
          "message": "Voluptate consectetur commodo reprehenderit deserunt aliqua eiusmod fugiat nulla aute mollit anim id.",
          "time": "56 mins ago"
        },
        {
          "id": 2,
          "user": "NAVER",
          "image": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
          "message": "Voluptate consectetur commodo reprehenderit deserunt aliqua eiusmod fugiat nulla aute mollit anim id.",
          "time": "56 mins ago"
        },
        {
          "id": 3,
          "user": "NAVER",
          "image": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
          "message": "Voluptate consectetur commodo reprehenderit deserunt aliqua eiusmod fugiat nulla aute mollit anim id.",
          "time": "56 mins ago"
        },
      ]

  }

  onReportAdd = function(){

  }
  render(){
    return (
      <div className="App">
        <Container component="main" maxWidth="lg">
          <header className="App-header">
            <h1 className='Page-Overview'>Page Overview</h1>
          </header>
          <AppListData  dataList={this.state.dataList}/>
          <div className="sessoes">
            <AppDataGraph />
            <AppReports dataReport={this.state.dataReport}/>
          </div>
          
        </Container>
      </div>
    );
  }
}

export default App;
