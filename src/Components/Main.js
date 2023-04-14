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
      dataForBeasts:dataBeast
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

  handleFormChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const filterAnimal = Number(event.target.value);

    // function filterMyBeasts(horns){
    //   return horns === 
    // }

    let filteredBeasts = this.state.dataForBeasts.filter(beast => beast.horns === filterAnimal);
    console.log(typeof filterAnimal);
    console.log(filteredBeasts);
    this.setState({dataForBeasts: filteredBeasts});
  }

  render() {
    // const dataForBeasts = this.props.jsonData;
    return (
      <main>

        {
          <AnimalForm changeDisplayHandler={this.handleFormChange}/>
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
