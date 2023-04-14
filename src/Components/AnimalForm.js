import { Component } from "react";
import { Form } from "react-bootstrap";

class AnimalForm extends Component{
    render(){
        return(
            <>
            <Form>
            <Form.Label>Search By Horns </Form.Label>
                <Form.Select className="mb-3" onChange={this.props.changeDisplayHandler}>
                    <option>Select Horn Quantity</option>
                    <option value="1">One Horn</option>
                    <option value="2">Two Horns</option>
                    <option value="3">Three Horns</option>
                    <option value="100">ALL of the Horns</option>
                </Form.Select>
            </Form> 
            </>
        )
    }
}

export default AnimalForm;