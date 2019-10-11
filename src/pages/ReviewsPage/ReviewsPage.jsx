import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ReviewForm from '../../components/ReviewForm/ReviewForm';

const ReviewsPage = (props) => {
    return (
        <>
        <div>
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
                temp={props.temp}
                icon={props.icon}
            />
            Post your review here!
        </div>
            <ReviewForm
                handleAddReview={props.handleAddReview}
                handleUpdateReview={props.handleUpdateReview}
                handleDeleteReview={props.handleDeleteReview}
                history={props.history}
            />
        </>
    )
};

export default ReviewsPage;