import React from 'react';
import './Begin.css';

//Component to render the Landing Page
class Begin extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="card">
                    <div className="card-title">
                        Welcome
                    </div>
                    <div className="card-body">
                        Begin
                    </div>
                </div>
            </div>
        );
    }
}

export default Begin;