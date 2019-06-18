import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import './App.css';
import axios from 'axios'


class AppDataGraph extends React.Component{
    state = {
      loading: true,
    }

    componentDidMount () {
      axios.get('http://localhost:3000/sales')
          .then(response => {
              this.setState({
                  loading: false,
                  data: {
                    labels: response.data.map((dataM) => (
                              dataM.month
                            )
                    ),
                    datasets: [
                      {
                        label: 'Views',
                        backgroundColor: '#4c84ff',
                        borderWidth: 1,
                        data: response.data.map(dataM =>(
                          dataM.sales
                        ))
                      }
                    ]
                }
              })
          })
          .catch(e => {
              console.log(e)
          })
    }

    render(){
        return (
          <div className='App-traffic-graph sessao'>
            <div className='graph-idem'>
              <h2>Site Traffic Overview</h2>
              {
                this.state.loading ?
                <p>Loading</p>
                :
                <Bar
                  data={this.state.data}
                  width={2}
                  height={1}
                  options={{
                    maintainAspectRatio: true
                  }}
                />
              }
              
              
            </div>  
          </div>
        )
    }
}



export default AppDataGraph;