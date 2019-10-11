import React from 'react';
import { Link } from 'react-router-dom';

function ReviewCard({ review, handleDeleteReview, props }) {
    // console.log(props.user, 'from review card')
    return (

        <div className='panel-body'>
            <dl>
                <dt>Review</dt>
                <dd>{review.body}</dd>
                {/* <dd> ->  </dd> */}
                {/* {props.user ? <dd>{props.user.name}</dd> : console.log('not')} */}
            </dl>
            <div className='panel-footer'>
                <Link
                    className='btn btn-xs btn-warning'
                    to={{
                        pathname: 'reviews/edit',
                        state: { review }
                    }}
                >
                    EDIT
        </Link>
                <button
                    className='btn btn-xs btn-danger margin-left-10'
                    onClick={() => handleDeleteReview(review._id)}
                >
                    DELETE
        </button>
            </div>
        </div>
    );
}

export default ReviewCard;