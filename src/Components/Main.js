import React from "react";
import HornedBeast from "./HornedBeast";


function createAnimals(animals) {
  
    return (
    <HornedBeast
      className="myAnimal"
      key={animals._id}
      imageSRC={animals.image_url}
      altName={animals.keyword}
      title={animals.title}
      description={animals.description}
      horns={animals.horns}
      data = {animals.title}
    />
  );
}


class Main extends React.Component {
  render() {

    const dataForBeasts = this.props.jsonData;

    return (
    <div> 
    {dataForBeasts.map(createAnimals)}   
    </div>);
  }
}

export default Main;
