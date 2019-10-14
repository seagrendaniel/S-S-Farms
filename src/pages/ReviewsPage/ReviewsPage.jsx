import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

import './ReviewsPage.css'

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
                </div>
                <body>
                <h1 className="review-header">Reviews of S&S Farms</h1>
            
                <div className='ReviewListPage-grid'>
                    <div>
                        {/* <h1>{props.user.name}</h1> */}
                    {props.reviews.map(review =>

                        <ReviewCard
                            user={props.user}
                            key={review._id}
                            review={review}
                            handleDeleteReview={props.handleDeleteReview}
                            handleUpdateReview={props.handleUpdateReview}
                        />
                        )}
                    </div>
                    
                </div>
                

            
            <ReviewForm
                user={props.user}
                handleAddReview={props.handleAddReview}
                handleUpdateReview={props.handleUpdateReview}
                handleDeleteReview={props.handleDeleteReview}
                history={props.history}
            />
            </body>
        </>
    )
};

export default ReviewsPage;