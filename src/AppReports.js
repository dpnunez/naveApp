import React, {Component} from 'react';  
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';


function Report(props) {
    return (
        <div className='report'>
                            <div className='report-image'></div>
                            <div className='report-content'>
                                <p className='report-title'>{props.name}</p>
                                <p className='report-message'>{props.message}</p>
                                <p className='report-time'>{props.time}</p>
                            </div>    
                        </div>
    )
}


class AppReports extends React.Component{
    state = {
    }
    render(){
        return (
            <div className='App-reports sessao'>
                <h2>Reports</h2>
                    <div className='reports'>
                        {this.props.dataReport.map((report) =>(
                            <Report key={report.id} image={report.image}   name={report.user} 
                            message={report.message} 
                            time={report.time}/>
                            )    
                        )}                        
                    </div>
                    <div className='insert-report'>
                        <Input
                            placeholder='Type yout comment here' className='in'></Input>
                        <Button color='primary' className='bt'>Send</Button>
                    </div>
                    
            </div>
        )
    }
}


export default AppReports;