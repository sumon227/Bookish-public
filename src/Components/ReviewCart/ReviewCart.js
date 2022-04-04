import React from 'react';

const ReviewCart = ({ review }) => {
    const { name, comment, img, ratings } = review;
    return (
        <div >
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-80">
                <div className="flex flex-col items-center pb-10">
                    <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={img} alt="" />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{comment}</span>

                </div>
            </div>

        </div>
    );
};

export default ReviewCart;