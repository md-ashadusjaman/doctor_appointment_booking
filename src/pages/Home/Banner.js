import React from 'react';
import chair from '../../assets/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div class="hero bg-base-400 min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img
      src={chair}
      class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Your Total Health Service</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <PrimaryButton>Get Started</PrimaryButton>
      
    </div>
  </div>
</div>
    );
};

export default Banner;