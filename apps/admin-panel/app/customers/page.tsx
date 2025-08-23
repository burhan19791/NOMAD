import React from "react";
import FloatingNumberClouds from "../components/customers/cards/diagonal-customer-summary";
import DiagonalSliceStats from "../components/customers/cards/diagonal-customer-summary";
import CustomerGrowthCard from "../components/customers/cards/customer-growth-card";
import { BsGraphUpArrow } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";
import InactiveActiveCustomersCard from "../components/customers/cards/inactive-active-customers-card";
import CustomersTable from "../components/customers/tables/customer-table";

const CustomersPage = () => {
  return (
    <div className="lg:ml-20 xl:ml-64 p-6">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <DiagonalSliceStats />
        </div>
        <div className="col-span-12 lg:col-span-7">
          <CustomerGrowthCard />
        </div>
        <div className="col-span-12 lg:col-span-5">
          <InactiveActiveCustomersCard />
        </div>
        <div className="col-span-12">
          <CustomersTable />
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;
