import React from "react";
import { Modal, Button } from "react-bootstrap";

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* NOTE:need to select subelements of props because React does not know what to render */}
          <img src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.title} style={{width: "100%"}} />
          <p>{this.props.selectedBeast.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
