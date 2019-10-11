import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

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
                <h1>Reviews of S&S Farms</h1>
                <div className='PuppyListPage-grid'>
                    {props.reviews.map(review =>
                        <ReviewCard
                            key={review._id}
                            review={review}
                            handleDeleteReview={props.handleDeleteReview}
                        />
                    )}
                </div>

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