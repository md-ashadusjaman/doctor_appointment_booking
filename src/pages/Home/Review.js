import React from 'react';


const Review = ({review}) => {
    return (
        <div class="card lg:max-w-lg bg-base-100  shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="flex items-center">
    <div class="avatar">
  <div class="ring-primary ring-offset-base-100 w-16 rounded-full ring mr-5">
    <img src={review.img} alt="" />
  </div>
</div>
      <div>
        <h4 className='text-xl'>{review.name}</h4>
        <p>{review.location}</p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Review;