import React from 'react';

const Display = (props)=>{

        return(

            <div style={{fontSize:'30px', marginBottom:'40px'}}
            id='display'>Count:{props.count}</div>
        )
}

export default Display;