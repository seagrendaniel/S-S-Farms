import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ReviewForm extends Component {
    state = {
        invalidForm: true,
        formData: {
            body: '',
            rating: 0
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddReview(this.state.formData);
        const formData = {};
        this.setState({
            formData
        })
        e.target.children[0].value = '';
    };

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };


    render() {
        return (
            <form ref={this.formRef} action="/api/reviews" method="POST" onSubmit={this.handleSubmit} >
                <textarea 
                    className="review-box"
                    name="body" 
                    cols="50" rows="5" 
                    placeholder="Enter your review here"
                    value={this.state.formData.body}
                    onChange={this.handleChange}
                    ></textarea>
                
                <input type="submit" value="Submit Review" className="btn btn-success submit"></input>
            </form>
        )
    }
}

export default ReviewForm;