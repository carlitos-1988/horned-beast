import React from "react";
import { SuitHeartFill } from "react-bootstrap-icons";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Nay",
      count: 0,
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

  //NOTE: prop passed from Main handleprop attribute
  handleClick = () => {
    this.props.handleOpen();
  };

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
            <Card.Img
              src={this.props.imageSRC}
              variant="primary"
              //click event for modal
              onClick={this.handleClick}
            />
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
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default HornedBeast;
