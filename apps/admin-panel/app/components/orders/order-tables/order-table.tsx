'use client';

import CardTitle from '@/app/components/card-title';
import SortBySelect from '@/app/components/sort-by-select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  Table,
  TableRow,
  TableHead,
  TableHeadCell,
  TableBody,
  TableCell,
  Badge,
  Pagination,
  Checkbox,
} from 'flowbite-react';
import { Eye, MoreHorizontal, Pencil, Trash } from 'lucide-react';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import CustomSearch from '../../custom-search';

export default function OrdersTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);

  const onPageChange = (page: number) => setCurrentPage(page);

  // Handle checkbox toggle
  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  // Handle select all checkbox
  const toggleSelectAll = () =>
    setSelected(
      selected.length === orders.length ? [] : orders.map((o) => o.id),
    );

  // Sample order data, replace with real data later
  const orders = [
    {
      id: 'O20250801',
      customerName: 'Sarah Khan',
      orderDate: '2025-08-01',
      status: 'Pending',
      paymentMethod: 'Credit Card',
      totalAmount: 149.99,
      deliveryDate: '2025-08-05',
    },
    {
      id: 'O20250730',
      customerName: 'Ali Raza',
      orderDate: '2025-07-30',
      status: 'Completed',
      paymentMethod: 'PayPal',
      totalAmount: 89.5,
      deliveryDate: '2025-08-02',
    },
    {
      id: 'O20250729',
      customerName: 'Hina Malik',
      orderDate: '2025-07-29',
      status: 'Refunded',
      paymentMethod: 'Cash on Delivery',
      totalAmount: 49.99,
      deliveryDate: '2025-08-03',
    },
  ];

  const statusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'warning';
      case 'completed':
        return 'success';
      case 'refunded':
        return 'failure';
      case 'cancelled':
        return 'dark';
      default:
        return 'info';
    }
  };

  return (
    <div className="bg-card-background rounded-2xl p-5">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <CustomSearch />
        <SortBySelect />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table hoverable>
          <TableHead className="bg-inner-card border-inner-card-border border-b">
            <TableRow>
              <TableHeadCell className="dark:bg-inner-card w-12 bg-white">
                <Checkbox
                  className="dark:bg-inner-card"
                  checked={selected.length === orders.length}
                  onChange={toggleSelectAll}
                  aria-label="Select all orders"
                />
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Order ID
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Customer Name
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Payment Method
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Total Amount
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Order Date
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Delivery Date
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Status
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Actions
              </TableHeadCell>
            </TableRow>
          </TableHead>

          <TableBody className="divide-inner-card-border divide-y">
            {orders.map((order) => (
              <TableRow
                key={order.id}
                className="hover:dark:bg-inner-card transition"
              >
                <TableCell className="w-12">
                  <Checkbox
                    className="dark:bg-inner-card"
                    checked={selected.includes(order.id)}
                    onChange={() => toggleSelect(order.id)}
                    aria-label={`Select order ${order.id}`}
                  />
                </TableCell>
                <TableCell className="text-purple cursor-pointer whitespace-nowrap underline">
                  {order.id}
                </TableCell>
                <TableCell className="text-font-light">
                  {order.customerName}
                </TableCell>
                <TableCell className="text-font-light whitespace-nowrap">
                  {order.paymentMethod}
                </TableCell>
                <TableCell className="text-purple whitespace-nowrap">
                  ${order.totalAmount.toFixed(2)}
                </TableCell>
                <TableCell className="text-font-light whitespace-nowrap">
                  {order.orderDate}
                </TableCell>
                <TableCell className="text-font-light whitespace-nowrap">
                  {order.deliveryDate}
                </TableCell>
                <TableCell>
                  <Badge
                    color={statusColor(order.status)}
                    className="w-fit rounded-md py-1.5"
                  >
                    {order.status}
                  </Badge>
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
                      <DropdownMenuItem className="text-font-light flex cursor-pointer items-center gap-2">
                        <Eye className="text-muted-foreground h-4 w-4" /> View
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-font-light flex cursor-pointer items-center gap-2">
                        <Pencil className="text-muted-foreground h-4 w-4" />{' '}
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex cursor-pointer items-center gap-2 text-red-600 focus:text-red-600">
                        <Trash className="h-4 w-4 text-red-600" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination
          className="flex items-center justify-between"
          layout="table"
          itemsPerPage={10}
          totalItems={orders.length}
          onPageChange={onPageChange}
          currentPage={currentPage}
          showIcons
        />
      </div>
    </div>
  );
}
