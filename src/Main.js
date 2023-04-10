import React from "react";
import HornedBeast from "./HornedBeast";
import animals from "./HornedAnimals";

function createAnimals(animals){
    return(
        <HornedBeast className="myAnimal"
        key = {animals._id}
        imageSRC ={animals.image_url}
        altName = {animals.keyword}
        title = {animals.title}
        description = {animals.description}
        horns = {animals.horns}
        />

    )

}

class Main extends React.Component{
    render(){
        return(
            <div>
                {animals.map(createAnimals)}
            </div>

        )
    }
}

export default Main