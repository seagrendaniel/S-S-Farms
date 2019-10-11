import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

import './EditReviewPage.css';

class EditReviewPage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.review
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateReview(this.state.formData);
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
            <>
                <NavBar
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                    temp={this.props.temp}
                    icon={this.props.icon}
                />
                <h1>Edit Review</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Review</label>
                        <textarea
                            className="form-control"
                            name="body"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        >
                            {this.props.location.state.review.body}
                        </textarea>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-xs"
                        disabled={this.state.invalidForm}
                    >
                        SAVE REVIEW
          </button>&nbsp;&nbsp;
          <Link to='/reviews'>CANCEL</Link>
                </form>
            </>
        )
    }
}

export default EditReviewPage;