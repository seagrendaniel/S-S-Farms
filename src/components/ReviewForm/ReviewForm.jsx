import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ReviewForm extends Component {
    state = {
        invalidForm: true,
        formData: {
            body: ''
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddReview(this.state.formData);
    };

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };


    render() {
        console.log(this.props.history);
        return (
            <form ref={this.formRef} action="/reviews" method="POST" onSubmit={this.handleSubmit}>
                <textarea 
                    name="body" 
                    cols="50" rows="10" 
                    placeholder="Enter your review here"
                    value={this.state.formData.body}
                    onChange={this.handleChange}
                    ></textarea>
                <input type="submit" value="Submit Review" className="add-button"></input>
            </form>
        )
    }
}

export default ReviewForm;