import React from 'react';
import axios from 'axios';
class App1 extends React.Component{
    constructor(){
        super();
        axios.get('./public/data.json')
        .then(function(response){
            console.log(response.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }
    render(){
        return(
              <h1>Hello World!</h1>
        )
    }
}
export default App1;