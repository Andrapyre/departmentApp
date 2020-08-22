import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Field from './Field'

const departmentFormName = 'Department Info'
const contactFormName = 'Contact Info'

const labels = {
    departmentName: "Department Name",
    apiKey: "API Key",
    email: "Email",
    contactName: "Contact Name",
    phone: "Phone",
    buttonAction: 'Create',
    formAction: 'Create'
}
const defaultState = {
    departmentName: "",
    apiKey: "Autogenerated on creation",
    contactName: "",
    email: "",
    phone: "",
    buttonAction: 'Create',
    formAction: 'Create'
}

class DepartmentForm extends Component { 
    constructor(props) {
        super(props) 
        if (props.location.isCreate) {
            this.state = {...defaultState}
        } else {
            this.state = {...props.location.department}
            labels.buttonAction = 'Update'
            labels.formAction = 'Edit'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(name, value) {
        this.setState(state=>{
            const newState = {...state}
            newState[name] = value
            return newState
        })
    }

    render() {
        return(
            <div>
                <h5>Departments {'>'} {labels.formAction}</h5>
                <Form>
                <Form.Group>
                    <fieldset className="border p-2">
                        <Form.Label as="legend" className="w-auto">{departmentFormName}</Form.Label>
                        <Field name="departmentName" changeHandler={this.handleChange} label={labels.departmentName} value={this.state.departmentName}></Field>
                        <Field readOnly name="apiKey" changeHandler={this.handleChange} label={labels.apiKey} value={this.state.apiKey}></Field>
                    </fieldset>
                </Form.Group>
                <Form.Group>
                    <fieldset className="border p-2">
                        <Form.Label as="legend" className="w-auto">{contactFormName}</Form.Label>
                        <Field name="contactName" changeHandler={this.handleChange} label={labels.contactName} value={this.state.contactName}></Field>
                        <Field name="email" changeHandler={this.handleChange} label={labels.email} value={this.state.email}></Field>
                        <Field name="phone" changeHandler={this.handleChange} label={labels.phone} value={this.state.phone}></Field>
                    </fieldset>
                </Form.Group>
                <Row>
                    <Col sm>
                        <Button href="/" variant="secondary" className="mr2" block>Cancel</Button>
                    </Col>
                    <Col sm>
                        <Button variant="success" className="mb2" block>{labels.buttonAction}</Button>
                    </Col>
                </Row>
                </Form>
            </div>
        )      
    }
}

export default DepartmentForm