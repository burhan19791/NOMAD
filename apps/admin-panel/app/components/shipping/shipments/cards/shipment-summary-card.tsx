import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import {
  MdOutlineCalendarToday,
  MdOutlineLocalPhone,
  MdOutlineMailOutline,
  MdPersonOutline,
} from 'react-icons/md';
import { TbLocation } from 'react-icons/tb';
import { FiTruck } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { BsBoxSeam } from 'react-icons/bs';

const ShipmentSummaryCard = () => {
  return (
    <div className="bg-card-background rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-font-primary text-lg font-bold">
            Order 123456
          </div>
          <div className="text-font-light text-sm">Tracking: FXSF129129</div>
        </div>
        <div>
          <div className="bg-purple rounded-full px-3 py-2 text-sm font-semibold text-white">
            In Transit
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col md:flex-row md:items-center gap-6 md:justify-between">
        <div>
          <div className="text-font-primary font-medium">Customer</div>
          <div className="mt-1 space-y-0.5">
            <div className="text-font-light flex items-center gap-1 text-sm">
              <MdPersonOutline />
              John Smith
            </div>
            <div className="text-font-light flex items-center gap-1 text-sm">
              <MdOutlineCalendarToday />
              John@gmail.com
            </div>
            <div className="text-font-light flex items-center gap-1 text-sm">
              <MdOutlineLocalPhone />
              056 2089192
            </div>
          </div>
        </div>
        <div>
          <div className="text-font-primary font-medium">Delivery</div>
          <div className="mt-1 space-y-0.5">
            <div className="text-font-light flex items-center gap-1 text-sm">
              <GrLocation />
              Sharjah, Al Khan 123 Tower
            </div>
            <div className="text-font-light flex items-center gap-1 text-sm">
              <FaRegCalendar />
              Expected: 18-10-25
            </div>
            <div className="text-font-light flex items-center gap-1 text-sm">
              <FiTruck />
              Carrier: FedEx
            </div>
          </div>
        </div>
        <div>
          <div className="text-font-primary font-medium">Order Details</div>
          <div className="mt-1 space-y-0.5">
            <div className="text-font-light flex items-center gap-1 text-sm">
              <BsBoxSeam />
              Sharjah, Al Khan 123 Tower
            </div>
            <div className="text-purple font-bold">$123.99</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentSummaryCard;
