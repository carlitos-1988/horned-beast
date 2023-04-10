import React from "react";

class Header extends React.Component {

    render(){
        return <header className="App-header"> <h2>My Horned Beasts</h2> <br></br>Created by {this.props.creator}</header>
    }
}

export default Header; 