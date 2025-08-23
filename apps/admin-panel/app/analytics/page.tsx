import Image from 'next/image';
import React from 'react';
import AnalyticsRevenuePage from '../components/analytics/cards/revenue-card';

const AnalyticsPage = () => {
  return (
    <div className="p-6 lg:ml-20 xl:ml-64">
      <div>
        <AnalyticsRevenuePage />
      </div>
    </div>
  );
};

export default AnalyticsPage;
