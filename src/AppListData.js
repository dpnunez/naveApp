import React, {Component} from 'react';
import axios from 'axios'



import './App.css';

function AppData(props){
    const name = props.name;
    const number = props.number;
    const url = props.url;

    return(
      <div className={`data`} id={name}>
          <div className='data-image' style={{
                        backgroundImage: `url(/assets/${name}.png)`
                    }}/>
          <div className='data-content'>
            <p className='data-number pData'>{number}</p>
            <p className='data-name pData'>{name}</p>
          </div>
          
      </div>
    );
    
}

class AppListData extends React.Component {
  state = {
    loading: true,
    information: []
  }

  componentDidMount () {
    axios.get('http://localhost:3000/information')
        .then(response => {
            this.setState({
                loading: false,
                information: response.data
            })
            console.log(Object.keys(response.data))
        })
        .catch(e => {
            console.log(e)
        })
  }

  render () {
    return (
      <div className='AppDataBase'>
        {Object.keys(this.state.information).map((data, index) =>
          <AppData key={data} name={data} number={this.state.information[data]} />

        )}
      </div>
    )
  }
}

export default AppListData