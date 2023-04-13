import React from "react";
import { SuitHeartFill } from "react-bootstrap-icons";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ShowModal from "./SelectedBeast";
import SelectedBeast from "./SelectedBeast";


class HornedBeast extends React.Component {
  //SECTION: Constructor and handle click are being used for event handling
  constructor(props) {
    super(props);
    this.state = {
      status: "Nay",
      count: 0,
      modalShow: false,
    };
  }

  handleButtonClick = () => {
    const newStatus = this.state.status === "Nay" ? "Yay" : "Keep Going";
    const newCount = this.state.count + 1;

    this.setState({
      status: newStatus,
      count: newCount,
    });
  };

  //SECTION: Sets modal toggle
  setModalShow(value){
    this.setState({
        modalShow:value
    });
}
  

  hideTheModal = () =>{
    const newStatus = false;
    this.setState({
        modalShow: newStatus
    })
  }

  render() {
    return (
      <div className="myCard">
        <Container bg="Dark">
          <Card
            style={{ width: "25rem" }}
            className="text-center"
            bg="dark"
            text="white"
          >
            <Card.Img src={this.props.imageSRC} variant="primary" onClick={this.props.handleOpen} />
            <Card.Header as="h5">{this.props.title}</Card.Header>
            <Card.Body>
              <Card.Text>Description: {this.props.description}</Card.Text>
              <Card.Text>Number of horns: {this.props.horns}</Card.Text>
              <Card.Text>{this.state.status}</Card.Text>
              <Card.Text>Click Button Below to Favorite:</Card.Text>

              <Button onClick={this.handleButtonClick}>
                Times Favorited: {this.state.count}
              </Button>
              <SuitHeartFill></SuitHeartFill>
              <p>{this.props.showTheModal + " "}</p>
              <p>{this.props.closeTheModal + " "}</p>
            </Card.Body>
          </Card>
        </Container>

        {/* <SelectedBeast show={modalShow} onHide={this.setModalShow(false)}  /> */}

      </div>
    );
  }
}

export default HornedBeast;
