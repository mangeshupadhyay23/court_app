import React from 'react';
import ReactDOM from 'react-dom';
import Begin from './components/Begin';

class App extends React.Component{
    render(){
        return(
            <Begin />
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));