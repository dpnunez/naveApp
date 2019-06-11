import React, {Component} from 'react';



import './App.css';

function AppData(props){
    const name = props.name;
    const number = props.number;
    const url = props.url;

    return(
      <div className={`data`} id={name}>
          <div className='data-image' style={{
                        backgroundImage: `url(${props.url})`
                    }}/>
          <p className='data-number pData'>{number}</p>
          <p className='data-name pData'>{name}</p>
      </div>
    );
    
}

function AppListData(props){

    return (
      <div className='AppDataBase'>
        {props.dataList.map((data, index) =>
          <AppData key={data.name} name={data.name} number={data.number} url={data.url}/>

        )}
      </div>
    )
  }



export default AppListData