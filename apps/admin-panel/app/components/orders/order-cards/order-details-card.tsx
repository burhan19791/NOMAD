import React from "react";
import CardTitle from "../../card-title";
import { IoPersonSharp } from "react-icons/io5";
import { FaHome, FaLocationArrow } from "react-icons/fa";

const OrderDetailsCard = () => {
  return (
    <div className="bg-card-background p-5 rounded-2xl">
      <CardTitle title="Order Details" />
      <div className="flex flex-wrap gap-4 mt-4">
        <div className="bg-gray-50 dark:bg-inner-card p-4 rounded-md flex-1 min-w-[220px]">
          <div className="text-font-primary mb-3 flex items-center gap-2 font-semibold text-base">
            <IoPersonSharp className="text-purple text-lg" />
            Customer Info
          </div>
          <div className="flex flex-col gap-1 text-sm text-font-light">
            <div>Burhan Shah</div>
            <div>BurhanShah@gmail.com</div>
            <div>056 2089192</div>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-inner-card p-4 rounded-md flex-1 min-w-[220px]">
          <div className="text-font-primary mb-3 flex items-center gap-2 font-semibold text-base">
            <FaLocationArrow className="text-purple text-lg" />
            Shipping Address
          </div>
          <div className="flex flex-col gap-1 text-sm text-font-light">
            <div>UAE, Sharjah</div>
            <div>Al Khan St.</div>
            <div>Al Falah Tower</div>
            <div>Flat No. 123</div>
            <div>065 8374911</div>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-inner-card p-4 rounded-md flex-1 min-w-[220px]">
          <div className="text-font-primary mb-3 flex items-center gap-2 font-semibold text-base">
            <FaHome className="text-purple text-lg" />
            Delivery Address
          </div>
          <div className="flex flex-col gap-1 text-sm text-font-light">
            <div>UAE, Dubai</div>
            <div>Palm Jumeirah</div>
            <div>14 St.</div>
            <div>Villa No. 72</div>
            <div>054 1298312</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsCard;
