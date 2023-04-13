import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "bootstrap";

class SelectedBeast extends React.Component {
  // constructor(props){
  //   super(props);
  //     this.state = {
  //        moodalShow:false,
  //        setModalShow:false
  //     }
  //   };
  
  render() {
    return (

      <Modal show={this.props.show} onHide={this.props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Overdraft Warning</Modal.Title>
      </Modal.Header>
      <Modal.Body>This is the last time!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

      //   <Modal
      //  show={this.props.showTheModal} 
      //  onHide={this.props.closeTheModal} 
      //  animation={false}
      //   >
      //     <Modal.Header closeButton>
      //       <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      //     </Modal.Header>
      //     <Modal.Body>
      //       <h4>Centered Modal</h4>
      //       <p>
      //         Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
      //         dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
      //         ac consectetur ac, vestibulum at eros.
      //       </p>
      //     </Modal.Body>
      //     <Modal.Footer>
      //       <Button onClick="this.props.hideTheModal">Close</Button>
      //     </Modal.Footer>
      //   </Modal>
    );
  }
}

export default SelectedBeast;
