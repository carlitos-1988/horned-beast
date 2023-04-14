import React from "react";
import HornedBeast from "./HornedBeast";
import SelectedBeast from "./SelectedBeast";
import AnimalForm from "./AnimalForm";
import dataBeast from "./jsonListAnimals.json";

class Main extends React.Component {
  //NOTE: constructor with props passed to initiate state
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      //NOTE: selected beast for object reference
      selectedBeast: null,
      dataForBeasts: dataBeast,
      myChageableBeasts: dataBeast,
    };
  }

  handleClose = () => {
    this.setState({ showModal: false });
  };

  //NOTE: brings in the selected beast object and sets it to the state and sets showmodal to true
  handleOpen = (selectedBeast) => {
    this.setState({
      selectedBeast: selectedBeast,
      showModal: true,
    });
  };

  resetJsonData = () =>{
    //console.log(this.state.myChageableBeasts)
    // let myLocalUnchageable = this.state.myChageableBeasts;
    this.setState({
      dataForBeasts:dataBeast
    })
  }

  handleFormChange = (event) => {
    event.preventDefault();
    //this.resetJsonData();
    //console.log("my handle change local data" + this.state.dataForBeasts);

    const filterAnimal = Number(event.target.value);

    let filteredBeasts;
    if(Number(event.target.value) === -1) {
      //console.log("Made it here");
      filteredBeasts = dataBeast;
      
    }else{
     // console.log("also made it here");
      filteredBeasts = this.state.myChageableBeasts.filter(beast => beast.horns === filterAnimal);
    };
    // console.log(typeof filterAnimal);
    // console.log(filteredBeasts);
    this.setState({dataForBeasts: filteredBeasts});
  }




  render() {
    return (
      <main>

        {
          <AnimalForm 
          changeDisplayHandler={ this.handleFormChange}

          />
        }
        {this.state.dataForBeasts.map((createdAnimals) => (
          <HornedBeast
            className="myAnimal"
            key={createdAnimals._id}
            imageSRC={createdAnimals.image_url}
            altName={createdAnimals.keyword}
            title={createdAnimals.title}
            description={createdAnimals.description}
            horns={createdAnimals.horns}
            data={createdAnimals.title}
            //NOTE:need funtion below to set hanfle open to the current Animal by using the arrow function here you can wait untill the onClick event occurs if no arrow function is there then the function will be called at time of creation causing last element to pop up and get stuck there
            handleOpen={() => this.handleOpen(createdAnimals)}
          />
        ))}

        {this.state.selectedBeast && (
          <SelectedBeast
            show={this.state.showModal}
            onClose={this.handleClose} //sets showModal to False
            selectedBeast={this.state.selectedBeast}
          />
        )}
      </main>
    );
  }
}

export default Main;
