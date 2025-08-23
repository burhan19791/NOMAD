'use client';

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
import CardTitle from '../../card-title';
import { FaSearch, FaSlidersH } from 'react-icons/fa';
import CustomDropdown from '../../custom-select';
import SortBySelect from '../../sort-by-select';
import { useState } from 'react';
import CustomTextSelect from '../../custom-text-select';
import CustomSearch from '../../custom-search';

export default function RecentOrdersTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);

  const onPageChange = (page: number) => setCurrentPage(page);

  const orders = [
    {
      id: '#1001',
      products: 'Black Hoodie, Nomad Cap',
      customer: 'Alex Johnson',
      amount: '$89.99',
      orderDate: '2025-08-05',
      deliveryDate: '2025-08-09',
      paymentMethod: 'Credit Card',
      status: 'Processing',
    },
    {
      id: '#1002',
      products: 'Oversized Tee',
      customer: 'Samantha Lee',
      amount: '$39.99',
      orderDate: '2025-08-06',
      deliveryDate: '2025-08-10',
      paymentMethod: 'PayPal',
      status: 'Out for Delivery',
    },
    {
      id: '#1003',
      products: 'Nomad Cargo Pants',
      customer: 'David Kim',
      amount: '$59.99',
      orderDate: '2025-08-02',
      deliveryDate: '2025-08-07',
      paymentMethod: 'Cash on Delivery',
      status: 'Delivered',
    },
    {
      id: '#1004',
      products: 'Graphic Hoodie',
      customer: 'Emily Carter',
      amount: '$74.99',
      orderDate: '2025-08-01',
      deliveryDate: '2025-08-05',
      paymentMethod: 'Credit Card',
      status: 'Canceled',
    },
  ];

  const statusOptions = [
    { value: 'all', label: 'All' },
    { value: 'processing', label: 'Processing' },
    { value: 'out-for-delivery', label: 'Out for Delivery' },
    { value: 'delivered', label: 'Delivered' },
    { value: 'canceled', label: 'Canceled' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Processing':
        return (
          <Badge className="bg-yellow-light text-yellow dark:bg-yellow-light hover:bg-yellow-light dark:text-yellow w-fit rounded-md py-1.5">
            {status}
          </Badge>
        );
      case 'Out for Delivery':
        return (
          <Badge className="bg-green-light text-green dark:bg-green-light hover:bg-green-light dark:text-green w-fit rounded-md py-1.5">
            {status}
          </Badge>
        );
      case 'Delivered':
        return (
          <Badge className="bg-success-light text-success dark:bg-success-light hover:bg-success-light dark:text-success w-fit rounded-md py-1.5">
            {status}
          </Badge>
        );
      case 'Canceled':
        return (
          <Badge className="bg-error-light text-error dark:bg-error-light hover:bg-error-light dark:text-error w-fit rounded-md py-1.5">
            {status}
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const toggleSelectAll = () => {
    if (selected.length === orders.length) {
      setSelected([]);
    } else {
      setSelected(orders.map((order) => order.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="bg-card-background rounded-2xl p-5">
      {/* Header stays fixed */}
      <div className="mb-6 flex items-center justify-between">
        <CardTitle title="Recent Orders" />
        <div className="flex items-center gap-2 md:gap-4">
          {/* Search */}
          <CustomSearch />

          {/* Status Select */}
          <div>
            <CustomDropdown
              placeholder="Status"
              smIcon={<FaSlidersH />}
              options={statusOptions}
            />
          </div>

          {/* Sort By Select */}
          <SortBySelect />
        </div>
      </div>

      {/* Only table scrolls horizontally */}
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          <Table className="rounded-t-none" hoverable>
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
                  Customer
                </TableHeadCell>
                <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                  Products
                </TableHeadCell>
                <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                  Amount
                </TableHeadCell>
                <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                  Payment Method
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
                  <TableCell className="text-blue whitespace-nowrap underline">
                    {order.id}
                  </TableCell>
                  <TableCell className="text-font-light whitespace-nowrap">
                    {order.customer}
                  </TableCell>
                  <TableCell className="text-font-light">
                    {order.products}
                  </TableCell>
                  <TableCell className="text-purple whitespace-nowrap">
                    {order.amount}
                  </TableCell>
                  <TableCell className="text-font-light whitespace-nowrap">
                    {order.paymentMethod}
                  </TableCell>
                  <TableCell className="text-font-light whitespace-nowrap">
                    {order.orderDate}
                  </TableCell>
                  <TableCell className="text-font-light whitespace-nowrap">
                    {order.deliveryDate}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {getStatusBadge(order.status)}
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
                        <DropdownMenuItem className="text-font-light flex items-center gap-2">
                          <Eye className="text-muted-foreground h-4 w-4" /> View
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-font-light flex items-center gap-2">
                          <Pencil className="text-muted-foreground h-4 w-4" />{' '}
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 text-red-600 focus:text-red-600">
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
      </div>
      <div className="mt-4">
        <Pagination
          className="flex items-center justify-between"
          layout="table"
          itemsPerPage={10}
          totalItems={100}
          onPageChange={onPageChange}
          currentPage={currentPage}
          showIcons
        />
      </div>
    </div>
  );
}
