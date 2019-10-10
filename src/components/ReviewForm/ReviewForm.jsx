import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ReviewForm extends Component {
    render(){
        return (
            <form action="/reviews" method="POST">
                <textarea name="" cols="50" rows="10" placeholder="Enter your review here"></textarea>
                <input type="submit" value="Submit Review" class="add-button"></input>
            </form>
        )
    }
}

export default ReviewForm;