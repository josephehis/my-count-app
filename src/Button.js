import React from 'react';
class Button extends React.Component{

    

    
    render(){
        const{increaseCount, decreaseCount}=this.props;

        return(
            <div style={{width:'30%', display:'flex', justifyContent:'space-around', backgroundColor:'pink'}}>
            <button onClick={increaseCount} style={{padding:'10px', cursor:'pointer', borderRadius:'15px', backgroundColor:'white'}}>Increase</button>
             <button onClick={decreaseCount} style={{padding:'10px', cursor:'pointer', borderRadius:'15px', backgroundColor:'white'}}>Decrease</button>
             </div>
        )
    }
}

export default Button;