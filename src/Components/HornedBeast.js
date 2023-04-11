import React from "react";

class HornedBeast extends React.Component{

    
//SECTION: Constructor and handle click are being used for event hlading
    constructor(props){
        super(props);
        this.state = {
            status:"Nay"
        }
    }

    handleClick = () =>{
        const newStatus  = this.state.status === "Nay" ? "Yay" : "Nay"
        this.setState({
            status: newStatus
        })
    }

    render(){
        return (
            <div onClick={this.handleClick} >
            <title><h2>Tile {this.props.title}</h2></title>
            <img src = {this.props.imageSRC}  alt={this.props.altName} width="700" height="600" ></img>
            <p>Description: {this.props.description}</p>
            <p>number of horns: {this.props.horns}</p>
            <p>{this.state.status}</p>
            </div>
        )
    }
}

export default HornedBeast