import React from "react";
import { SuitHeartFill } from "react-bootstrap-icons";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

class HornedBeast extends React.Component {
  //SECTION: Constructor and handle click are being used for event handling
  constructor(props) {
    super(props);
    this.state = {
      status: "Nay",
      count: 0,
      showModal: false,
    };
  }

  handleClick = () => {
    const newStatus = this.state.status === "Nay" ? "Yay" : "Keep Going";
    const newCount = this.state.count + 1;

    this.setState({
      status: newStatus,
      count: newCount,
    });
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
            <Card.Img src={this.props.imageSRC} variant="primary" onClick={() => setModalShow(true)} />
            <Card.Header as="h5">{this.props.title}</Card.Header>
            <Card.Body>
              <Card.Text>Description: {this.props.description}</Card.Text>
              <Card.Text>Number of horns: {this.props.horns}</Card.Text>
              <Card.Text>{this.state.status}</Card.Text>
              <Card.Text>Click Button Below to Favorite:</Card.Text>

              <Button onClick={this.handleClick}>
                Times Favorited: {this.state.count}
              </Button>
              <SuitHeartFill></SuitHeartFill>
            </Card.Body>
          </Card>

          <Modal>
            <Modal.title id="contained-modal-title-vcenter">
              <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
              </Modal.Body>
            </Modal.title>
            <Modal.Footer>
              <Button onClick="">Close</Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </div>
    );
  }
}

export default HornedBeast;
