import React from 'react';
import { Link } from 'react-router-dom';

function ReviewCard({ review, handleDeleteReview }) {
    return (

        <div className='panel-body'>
            <dl>
                <dt>Review</dt>
                <dd>{review.body}</dd>
            </dl>
            <div className='panel-footer'>
                {/* 
          The following is another approach to provide 
          data to a different route that's different
          from the Star Wars lab's solution code.
          The state object can be accessed in the new
          route via the location.state object
        */}
                <Link
                    className='btn btn-xs btn-warning'
                    to={{
                        pathname: '/edit',
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