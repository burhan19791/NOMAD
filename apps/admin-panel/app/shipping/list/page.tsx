'use client';

import CardTitle from '@/app/components/card-title';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableRow,
  TableHeadCell,
  TableHead,
  TableBody,
  TableCell,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Checkbox,
} from 'flowbite-react';
import { Eye, MoreHorizontal, Pencil, Trash } from 'lucide-react';
import React from 'react';
import { FaTruckMoving } from 'react-icons/fa';
import { TiPlus } from 'react-icons/ti';

const shipmentsData = [
  {
    orderId: 'ORD-001',
    shipmentNo: 'SHP-001',
    customer: 'John Doe',
    supplier: 'FedEx',
    location: 'New York',
    orderDate: '10 August 2025',
    arrivalDate: '13 August 2025',
    status: 'In Transit',
  },
  {
    orderId: 'ORD-002',
    shipmentNo: 'SHP-002',
    customer: 'Jane Smith',
    supplier: 'DHL',
    location: 'Los Angeles',
    orderDate: '7 August 2025',
    arrivalDate: '10 August 2025',
    status: 'Delivered',
  },
  {
    orderId: 'ORD-003',
    shipmentNo: 'SHP-003',
    customer: 'Michael Lee',
    supplier: 'UPS',
    location: 'Chicago',
    orderDate: '12 August 2025',
    arrivalDate: '15 August 2025',
    status: 'Pending',
  },
  {
    orderId: 'ORD-004',
    shipmentNo: 'SHP-004',
    customer: 'Alice Brown',
    supplier: 'FedEx',
    location: 'Houston',
    orderDate: '11 August 2025',
    arrivalDate: '14 August 2025',
    status: 'In Transit',
  },
  {
    orderId: 'ORD-005',
    shipmentNo: 'SHP-005',
    customer: 'Bob Martin',
    supplier: 'DHL',
    location: 'Miami',
    orderDate: '9 August 2025',
    arrivalDate: '12 August 2025',
    status: 'Delivered',
  },
];

const ShipmentsListPage = () => {
  const [selected, setSelected] = React.useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selected.length === shipmentsData.length) {
      setSelected([]);
    } else {
      setSelected(shipmentsData.map((shipment) => shipment.orderId));
    }
  };

  const toggleSelectOne = (orderId: string) => {
    setSelected((prev) => {
      if (prev.includes(orderId)) {
        return prev.filter((id) => id !== orderId);
      } else {
        return [...prev, orderId];
      }
    });
  };

  return (
    <div className="p-6 lg:ml-20 xl:ml-64">
      <Breadcrumb className="mb-6">
        <BreadcrumbItem href="#" icon={FaTruckMoving}>
          Invoices
        </BreadcrumbItem>
        <BreadcrumbItem href="#">List View</BreadcrumbItem>
      </Breadcrumb>
      <div className="bg-card-background rounded-2xl p-5">
        <div className="mb-6 flex items-center justify-between">
          <CardTitle title="Shipments List" />
          <Button className="bg-purple dark:bg-purple hover:bg-purple-700 dark:hover:bg-purple-700">
            <TiPlus className="mr-2" />
            Add Shipment
          </Button>
        </div>
        <div className="overflow-x-scroll">
          <Table hoverable>
            <TableHead className="bg-inner-card dark:bg-inner-card border-inner-card-border border-b">
              <TableRow>
                <TableHeadCell className="bg-inner-card dark:bg-inner-card w-12">
                  <Checkbox
                    className="dark:bg-inner-card"
                    checked={selected.length === shipmentsData.length}
                    onChange={toggleSelectAll}
                    aria-label="Select all shipments"
                  />
                </TableHeadCell>
                <TableHeadCell className="text-font-light bg-inner-card dark:bg-inner-card whitespace-nowrap">
                  Order ID
                </TableHeadCell>
                <TableHeadCell className="text-font-light bg-inner-card dark:bg-inner-card whitespace-nowrap">
                  Shipment No
                </TableHeadCell>
                <TableHeadCell className="text-font-light bg-inner-card dark:bg-inner-card whitespace-nowrap">
                  Customer
                </TableHeadCell>
                <TableHeadCell className="text-font-light bg-inner-card dark:bg-inner-card whitespace-nowrap">
                  Supplier
                </TableHeadCell>
                <TableHeadCell className="text-font-light bg-inner-card dark:bg-inner-card whitespace-nowrap">
                  Location
                </TableHeadCell>
                <TableHeadCell className="text-font-light bg-inner-card dark:bg-inner-card whitespace-nowrap">
                  Order Date
                </TableHeadCell>
                <TableHeadCell className="text-font-light bg-inner-card dark:bg-inner-card whitespace-nowrap">
                  Arrival Date
                </TableHeadCell>
                <TableHeadCell className="text-font-light bg-inner-card dark:bg-inner-card whitespace-nowrap">
                  Status
                </TableHeadCell>
                <TableHeadCell className="text-font-light bg-inner-card dark:bg-inner-card whitespace-nowrap">
                  Actions
                </TableHeadCell>
              </TableRow>
            </TableHead>

            <TableBody className="divide-inner-card-border divide-y">
              {shipmentsData.map((shipment) => (
                <TableRow
                  key={shipment.orderId}
                  className="hover:dark:bg-inner-card transition"
                >
                  <TableCell className="w-12">
                    <Checkbox
                      checked={selected.includes(shipment.orderId)}
                      onChange={() => toggleSelectOne(shipment.orderId)}
                      aria-label={`Select shipment ${shipment.orderId}`}
                    />
                  </TableCell>
                  <TableCell className="text-purple cursor-pointer whitespace-nowrap underline">
                    {shipment.orderId}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {shipment.shipmentNo}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {shipment.customer}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {shipment.supplier}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {shipment.location}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {shipment.orderDate}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {shipment.arrivalDate}
                  </TableCell>
                  <TableCell className="text-font-light whitespace-nowrap">
                    {shipment.status}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="hover:bg-muted rounded-md p-2 transition">
                          <MoreHorizontal className="h-5 w-5" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="bg-inner-card border-inner-card-border w-36 border"
                      >
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Pencil className="h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                          <Trash className="h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ShipmentsListPage;
