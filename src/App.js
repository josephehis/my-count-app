import React from 'react';

import Display from './Display';
import Button from './Button';

class App extends React.Component{

    
    count = 0;

    countValue=(countValue)=>{
         this.count = countValue;
    }
    
    state={
        count:0
    }
       increaseCount=()=>{
        this.setState({count:this.state.count +1})
        
           
       }

       decreaseCount=()=>{
        this.setState({count:(this.state.count -1<=0)?
        0:this.state.count-1})
       }


    render(){
    return(
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'20px'}}>

    <Display count={this.state.count}/>
    <Button increaseCount={this.increaseCount}
    decreaseCount={this.decreaseCount}/>

    </div>

             
    )

    }

}

export default App;
