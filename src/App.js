import React, {Component} from 'react';
import AppListData from './AppListData';

import {Bar} from 'react-chartjs-2';
import Container from '@material-ui/core/Container';
import AppDataGraph from './AppDataGraph';
import AppReports from './AppReports';


class App extends Component{
  state = {
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
