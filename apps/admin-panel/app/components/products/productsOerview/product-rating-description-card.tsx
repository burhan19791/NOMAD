'use cleint';

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ProductRatingDescriptionCard = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="bg-card-background rounded-2xl p-5">
      <div>
        <div className="flex">
          <button
            onClick={() => setActiveTab('description')}
            className={`relative px-6 py-4 text-sm font-medium transition-all duration-300 ${
              activeTab === 'description'
                ? 'rounded-t-xl text-purple-600'
                : 'text-font-light hover:text-purple rounded-t-x rounded-t-2xl hover:bg-gray-100 dark:hover:bg-stone-800'
            }`}
          >
            Description
            {activeTab === 'description' && (
              <div className="absolute right-0 bottom-0 left-0 h-0.5 bg-purple-600"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('rating')}
            className={`relative px-6 py-4 text-sm font-medium transition-all duration-300 ${
              activeTab === 'rating'
                ? 'rounded-t-xl text-purple-600'
                : 'text-font-light hover:text-purple rounded-t-x rounded-t-2xl hover:bg-gray-100 dark:hover:bg-stone-800'
            }`}
          >
            Rating & Reviews
            {activeTab === 'rating' && (
              <div className="absolute right-0 bottom-0 left-0 h-0.5 bg-purple-600"></div>
            )}
          </button>
        </div>
      </div>
      {activeTab === 'description' && (
        <div className="mt-8 flex flex-col gap-10">
          {/* Product Details */}
          <div className="space-y-3">
            <h2 className="text-font-primary text-2xl font-semibold">
              Product Details
            </h2>
            <p className="text-font-light text-sm leading-relaxed md:w-4/5 md:text-base">
              Experience everyday comfort with the Nomad Cotton Hoodie. Crafted
              from premium, sustainable cotton, it offers a soft, cozy feel
              while keeping you stylish. Designed for outdoor adventures and
              casual wear, this hoodie features a modern fit, durable
              construction, and subtle details that elevate your wardrobe
              effortlessly.
            </p>
          </div>

          {/* Key Features */}
          <div className="flex flex-col gap-10 md:flex-row md:gap-30 lg:gap-64">
            <div className="space-y-3">
              <h3 className="text-font-primary text-lg font-medium">
                Key Features
              </h3>
              <ul className="text-font-light grid list-inside list-disc">
                <li>Premium sustainable cotton</li>
                <li>Soft & cozy interior</li>
                <li>Modern relaxed fit</li>
                <li>Durable stitching</li>
                <li>Minimalist design</li>
                <li>Perfect for layering</li>
              </ul>
            </div>

            {/* Material & Care */}
            <div className="space-y-3">
              <h3 className="text-font-primary text-lg font-medium">
                Material & Care
              </h3>
              <ul className="text-font-light list-inside list-disc space-y-1">
                <li>100% Premium Organic Cotton</li>
                <li>Machine wash cold with like colors</li>
                <li>Tumble dry low or hang dry</li>
                <li>Do not bleach</li>
                <li>Iron on low heat, avoid prints</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {activeTab === 'rating' && (
        <div className="mt-8">
          <div className="flex flex-col items-start justify-between">
            <div className="mt-4 flex items-start gap-10">
              <div className="flex flex-col items-center">
                <div className="text-[150px] leading-none font-medium">4.3</div>
                <div className="text-font-light mt-2 text-sm">
                  Based On 443 Reviews
                </div>
              </div>
              <div className="mt-4 flex w-64 flex-col gap-1">
                {[
                  { label: '5', percent: 65 },
                  { label: '4', percent: 41 },
                  { label: '3', percent: 31 },
                  { label: '2', percent: 13 },
                  { label: '1', percent: 10 },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-font-light w-4 text-sm">
                      {item.label}
                    </span>
                    <div className="bg-inner-card h-2.5 flex-1 overflow-hidden rounded-full">
                      <div
                        className="bg-yellow h-full"
                        style={{ width: `${item.percent}%` }}
                      ></div>
                    </div>
                    <span className="text-font-light w-8 text-right text-sm">
                      {item.percent}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 rounded-lg">
              <div className="grid gap-6 md:grid-cols-2">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="bg-inner-card rounded-xl p-5 shadow transition-shadow duration-200 hover:shadow-lg"
                  >
                    {/* Reviewer Info */}
                    <div className="mb-3 flex items-center gap-3">
                      <div className="relative">
                        <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-600" />
                        <span className="border-inner-card absolute -right-1 -bottom-1 inline-block h-3 w-3 rounded-full border-2 bg-green-500"></span>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-font-primary flex items-center gap-2 text-sm font-semibold">
                          John Doe
                        </div>
                        <div className="text-font-light text-xs">
                          JohnDoe@gmail.com
                        </div>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="mb-3 flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-sm ${
                            i < 5
                              ? 'text-yellow'
                              : 'text-gray-300 dark:text-gray-500'
                          }`}
                        />
                      ))}
                      <span className="text-font-light ml-2 text-xs">5/5</span>
                    </div>

                    {/* Divider */}
                    <div className="mb-3 border-b border-gray-300 dark:border-gray-700"></div>

                    {/* Review Text */}
                    <div className="text-font-light text-sm leading-relaxed">
                      Absolutely love this hoodie! Super soft, fits perfectly,
                      and the quality is top-notch. I’ve been wearing it
                      everywhere—it’s my go-to for both casual outings and
                      chilly evenings. Totally worth it!
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductRatingDescriptionCard;
