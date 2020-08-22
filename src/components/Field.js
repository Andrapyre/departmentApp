import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

class Field extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt) {
        this.props.changeHandler(evt.target.name, evt.target.value)
    }
    render() {
        return(
            <Form.Row>
                <Form.Label column="lg" lg={2}>{this.props.label}</Form.Label>
                <Col>
                    <Form.Control readOnly={this.props.readOnly} name={this.props.name} onChange={this.handleChange} size="lg" type="text" value={this.props.value}/>
                </Col>
            </Form.Row>
        )      
    }
}

export default Field