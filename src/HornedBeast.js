import React from "react";

class HornedBeast extends React.Component{
    render(){
        return (
            <div >
            <title><h2>Tile {this.props.title}</h2></title>
            <img src = {this.props.imageSRC}  alt={this.props.altName} width="700" height="600" ></img>
            <p>Description: {this.props.description}</p>
            <p>number of horns: {this.props.horns}</p>
            </div>
        )
    }
}

export default HornedBeast