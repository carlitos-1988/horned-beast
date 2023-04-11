import React from "react";

class Footer extends React.Component{
    
    render(){
        return<footer className="App-footer"> Author: {this.props.creator} created April 2023</footer>
    }
}

export default Footer; 

