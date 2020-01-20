import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';
import Begin from './components/Begin';
import Login from './components/Login';

class App extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={Begin}></Route>
                <Route path='/login' component={Login}></Route>
            </Router>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));