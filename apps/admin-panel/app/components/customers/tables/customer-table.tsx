'use client';

import React, { useState } from 'react';
import CardTitle from '@/app/components/card-title';
import SortBySelect from '@/app/components/sort-by-select';
import CustomSelect from '@/app/components/custom-select';

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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { PiSlidersFill } from 'react-icons/pi';

import { Eye, MoreHorizontal, Pencil, Trash } from 'lucide-react';
import { FaSearch, FaSlidersH } from 'react-icons/fa';
import CustomSearch from '../../custom-search';

export default function CustomersTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);

  const onPageChange = (page: number) => setCurrentPage(page);

  // Dummy customer data
  const customers = [
    {
      id: 'C1001',
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '+123456789',
      created_at: '2024-11-01',
      last_active_at: '2025-08-10',
      total_orders: 15,
      total_spent: 1200.5,
      status: 'active',
    },
    {
      id: 'C1002',
      fullName: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+987654321',
      created_at: '2023-05-21',
      last_active_at: '2025-07-30',
      total_orders: 7,
      total_spent: 450.0,
      status: 'inactive',
    },
    {
      id: 'C1003',
      fullName: 'Alice Johnson',
      email: 'alice@example.com',
      phone: '+192837465',
      created_at: '2025-02-14',
      last_active_at: '2025-08-05',
      total_orders: 23,
      total_spent: 2750.75,
      status: 'active',
    },
  ];

  // Handle checkbox toggle
  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  // Handle select all checkbox
  const toggleSelectAll = () => {
    if (selected.length === customers.length) setSelected([]);
    else setSelected(customers.map((c) => c.id));
  };

  // Status badge helper
  const getStatusBadge = (status: string) => {
    if (status === 'active')
      return (
        <Badge color="success" className="rounded-md px-2 py-1 text-xs">
          Active
        </Badge>
      );
    if (status === 'inactive')
      return (
        <Badge color="gray" className="rounded-md px-2 py-1 text-xs">
          Inactive
        </Badge>
      );
    return null;
  };

  return (
    <div className="bg-card-background rounded-2xl p-5">
      {/* Header with search, status filter, and sort */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          {/* Search */}
          <CustomSearch />
          <div className="flex items-center gap-4">
            {/* Status filter */}
            <CustomSelect
              placeholder="Status"
              options={[
                { value: 'all', label: 'All' },
                { value: 'active', label: 'Active' },
                { value: 'inactive', label: 'Inactive' },
              ]}
              smIcon={<FaSlidersH />}
            />

            {/* Sort By Select */}
            <SortBySelect />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table hoverable>
          <TableHead className="bg-inner-card border-inner-card-border border-b">
            <TableRow>
              <TableHeadCell className="dark:bg-inner-card w-12 bg-white">
                <Checkbox
                  className="dark:bg-inner-card"
                  checked={selected.length === customers.length}
                  onChange={toggleSelectAll}
                  aria-label="Select all customers"
                />
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                ID
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Name
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Email
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Phone
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Joined
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Last Active
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Total Orders
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Total Spent
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
            {customers.map((cust) => (
              <TableRow
                key={cust.id}
                className="hover:dark:bg-inner-card transition"
              >
                <TableCell className="w-12">
                  <Checkbox
                    className="dark:bg-inner-card"
                    checked={selected.includes(cust.id)}
                    onChange={() => toggleSelect(cust.id)}
                    aria-label={`Select customer ${cust.id}`}
                  />
                </TableCell>
                <TableCell className="text-purple cursor-pointer underline">
                  {cust.id}
                </TableCell>
                <TableCell className="text-font-light">
                  <div className="flex items-center gap-3">
                    <div className="dark:bg-inner-card min-h-8 min-w-8 rounded-full bg-gray-200" />
                    {cust.fullName}
                  </div>
                </TableCell>
                <TableCell className="text-font-light">{cust.email}</TableCell>
                <TableCell className="text-font-light">{cust.phone}</TableCell>
                <TableCell className="text-font-light whitespace-nowrap">
                  {cust.created_at}
                </TableCell>
                <TableCell className="text-font-light whitespace-nowrap">
                  {cust.last_active_at}
                </TableCell>
                <TableCell className="text-font-light">
                  {cust.total_orders}
                </TableCell>
                <TableCell className="text-font-light">
                  ${cust.total_spent.toFixed(2)}
                </TableCell>
                <TableCell>{getStatusBadge(cust.status)}</TableCell>
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

      <div className="mt-4">
        <Pagination
          className="flex items-center justify-between"
          layout="table"
          itemsPerPage={10}
          totalItems={customers.length}
          onPageChange={onPageChange}
          currentPage={currentPage}
          showIcons
        />
      </div>
    </div>
  );
}
