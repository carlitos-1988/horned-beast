import React from "react";
import HornedBeast from "./HornedBeast";
import SelectedBeast from "./SelectedBeast";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast:null
    };
  }

  setshowModal(value){
    this.setState({
        showModal:value,
       
    });
}
handleClose = () => {
  console.log('made it here');
  this.setState({showModal: false})
}

handleOpen = () => {
  console.log("atleast made it here");
  //alert('this kind of works');
  this.setState({showModal: true})
}
  
  render() {

    //data used for beast rendering
    const dataForBeasts = this.props.jsonData;
    return (
    <main>
    {
     dataForBeasts.map((createdAnimals) =>  
    <HornedBeast
      setshowModal={this.props.setshowModal}
      className="myAnimal"
      key={createdAnimals._id}
      imageSRC={createdAnimals.image_url}
      altName={createdAnimals.keyword}
      title={createdAnimals.title}
      description={createdAnimals.description}
      horns={createdAnimals.horns}
      data = {createdAnimals.title}
      handleOpen={this.handleOpen}
      showTheModal={this.state.showModal}
      closeTheModal={this.handleClose}
      />
     )
     }
    
    {
      this.state.SelectedBeast &&
      <SelectedBeast
      show={this.state.showModal}
      onClose={this.handleClose}
      />

    }
     </main> 
    )
  }
}

export default Main;
