import React, {Component} from 'react';
import Routes from 'routes/index';
import './App.css';
import {Provider} from 'mobx-react';
import stores from 'stores/index'

class App extends Component {
    render() {
        return (
            <div className="app" style={{height:'100%',border:'none'}}>
                <Provider {...stores}>
                    <Routes/>
                </Provider>
            </div>
        );
    }
}

export default App;