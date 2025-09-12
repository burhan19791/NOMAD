'use client';
import React, { useState } from 'react';
import CardTitle from '../components/card-title';
import {
  Button,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow,
  Badge,
  Checkbox,
} from 'flowbite-react';
import { TiPlus } from 'react-icons/ti';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Eye, MoreHorizontal, Pencil, Trash } from 'lucide-react';

const coupons = [
  {
    id: 1,
    title: 'Summer Sale',
    code: 'SUMMER20',
    productType: 'Clothing',
    startDate: '2025-06-01',
    endDate: '2025-08-01',
    status: 'Active',
  },
  {
    id: 2,
    title: 'New Year Promo',
    code: 'NY2025',
    productType: 'Electronics',
    startDate: '2025-12-25',
    endDate: '2026-01-05',
    status: 'Expired',
  },
  {
    id: 3,
    title: 'Back to School',
    code: 'SCHOOL15',
    productType: 'Stationery',
    startDate: '2025-08-15',
    endDate: '2025-09-15',
    status: 'Active',
  },
  {
    id: 4,
    title: 'Black Friday',
    code: 'BLACKFRIDAY50',
    productType: 'All',
    startDate: '2025-11-20',
    endDate: '2025-11-29',
    status: 'Upcoming',
  },
  {
    id: 5,
    title: 'Weekend Special',
    code: 'WEEKEND10',
    productType: 'Groceries',
    startDate: '2025-08-22',
    endDate: '2025-08-24',
    status: 'Active',
  },
  {
    id: 6,
    title: 'Winter Clearance',
    code: 'WINTER25',
    productType: 'Clothing',
    startDate: '2025-01-01',
    endDate: '2025-02-15',
    status: 'Expired',
  },
  {
    id: 7,
    title: 'Fitness Frenzy',
    code: 'FIT30',
    productType: 'Sports',
    startDate: '2025-03-01',
    endDate: '2025-03-31',
    status: 'Expired',
  },
  {
    id: 8,
    title: 'Eid Offer',
    code: 'EID40',
    productType: 'All',
    startDate: '2025-04-10',
    endDate: '2025-04-20',
    status: 'Expired',
  },
  {
    id: 9,
    title: 'Flash Deal',
    code: 'FLASH5',
    productType: 'Accessories',
    startDate: '2025-08-19',
    endDate: '2025-08-20',
    status: 'Expired',
  },
  {
    id: 10,
    title: 'Cyber Monday',
    code: 'CYBER30',
    productType: 'Electronics',
    startDate: '2025-12-01',
    endDate: '2025-12-01',
    status: 'Upcoming',
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Active':
      return (
        <Badge className="w-fit py-1.5" color="success">
          {status}
        </Badge>
      );
    case 'Expired':
      return (
        <Badge className="w-fit py-1.5" color="failure">
          {status}
        </Badge>
      );
    case 'Upcoming':
      return (
        <Badge className="w-fit py-1.5" color="yellow">
          {status}
        </Badge>
      );
  }
};

const CouponsPage = () => {
  const [selected, setSelected] = useState<number[]>([]);

  // Handle checkbox toggle
  const toggleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  // Handle select all checkbox
  const toggleSelectAll = () =>
    setSelected(
      selected.length === coupons.length ? [] : coupons.map((c) => c.id),
    );

  return (
    <div className="p-6 lg:ml-20 xl:ml-64">
      <div className="bg-card-background rounded-2xl p-5">
        <div className="mb-6 flex items-center justify-between">
          <CardTitle title="Coupons List" />
          <Button variant="primary">
            <TiPlus className="mr-2" />
            Add Coupon
          </Button>
        </div>
        <Table hoverable>
          <TableHead className="bg-inner-card border-inner-card-border border-b">
            <TableRow>
              <TableHeadCell className="bg-inner-card dark:bg-inner-card w-12">
                <Checkbox
                  className="dark:bg-inner-card"
                  checked={selected.length === coupons.length}
                  onChange={toggleSelectAll}
                  aria-label="Select all coupons"
                />
              </TableHeadCell>
              <TableHeadCell className="text-font-light bg-inner-card dark:bg-inner-card whitespace-nowrap">
                Id
              </TableHeadCell>
              <TableHeadCell className="text-font-light bg-inner-card dark:bg-inner-card whitespace-nowrap">
                Title
              </TableHeadCell>
              <TableHeadCell className="text-font-light bg-inner-card dark:bg-inner-card whitespace-nowrap">
                Code
              </TableHeadCell>
              <TableHeadCell className="text-font-light bg-inner-card dark:bg-inner-card whitespace-nowrap">
                Type
              </TableHeadCell>
              <TableHeadCell className="text-font-light bg-inner-card dark:bg-inner-card whitespace-nowrap">
                Start Date
              </TableHeadCell>
              <TableHeadCell className="text-font-light bg-inner-card dark:bg-inner-card whitespace-nowrap">
                End Date
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
            {coupons.map((coupon) => (
              <TableRow
                key={coupon.id}
                className="hover:dark:bg-inner-card transition"
              >
                <TableCell className="w-12">
                  <Checkbox
                    className="dark:bg-inner-card"
                    checked={selected.includes(coupon.id)}
                    onChange={() => toggleSelect(coupon.id)}
                    aria-label={`Select coupon ${coupon.id}`}
                  />
                </TableCell>
                <TableCell className="text-purple cursor-pointer whitespace-nowrap underline">
                  {coupon.id}{' '}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {coupon.title}{' '}
                </TableCell>
                <TableCell className="text-purple font-medium">
                  {coupon.code}
                </TableCell>
                <TableCell className="text-font-light whitespace-nowrap">
                  {coupon.productType}
                </TableCell>

                <TableCell>{coupon.startDate}</TableCell>
                <TableCell className="text-font-light whitespace-nowrap">
                  {coupon.endDate}
                </TableCell>
                <TableCell className="text-font-light whitespace-nowrap">
                  {getStatusBadge(coupon.status)}
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
                        View Invoice
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <Pencil className="h-4 w-4" />
                        Edit Invoice
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                        <Trash className="h-4 w-4" />
                        Delete Invoice
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
  );
};

export default CouponsPage;
