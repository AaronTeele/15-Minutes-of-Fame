import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import Home from './Home'

class App extends Component {
    
    render(){
        return (
            
            <div className="App">
                <CssBaseline />
                <Home />
            </div>
        )
    }
}

export default App;