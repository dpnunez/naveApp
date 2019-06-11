import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import './App.css';
  

const dataPura= [
    {
      "month": "January",
      "sales": 856
    },
    {
      "month": "February",
      "sales": 999
    },
    {
      "month": "March",
      "sales": 645
    },
    {
      "month": "April",
      "sales": 834
    },
    {
      "month": "May",
      "sales": 989
    },
    {
      "month": "June",
      "sales": 790
    },
    {
      "month": "July",
      "sales": 1010
    }
  ];

class AppDataGraph extends React.Component{
    state = {
          
        data: {
            labels: dataPura.map((dataM) => (
                      dataM.month
                    )
            ),
            datasets: [
              {
                label: 'Views',
                backgroundColor: '#4c84ff',
                borderWidth: 1,
                data: dataPura.map(dataM =>(
                  dataM.sales
                ))
              }
            ]
        }
    }
    render(){
        return (
            <div className='App-traffic-graph'>
            <h2>Site Traffic Overview</h2>
            <Bar
              data={this.state.data}
              width={2}
              height={1}
              options={{
                maintainAspectRatio: true
              }}
            />  
          </div>
        )
    }
}



export default AppDataGraph;