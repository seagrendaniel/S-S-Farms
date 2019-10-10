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
            <ReviewsPage />
        </>
    )
};

export default ReviewsPage;