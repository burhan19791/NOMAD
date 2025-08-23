'use client';

import SortBySelect from '@/app/components/sort-by-select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
  Eye,
  MoreHorizontal,
  Pencil,
  Trash,
  Clock,
  AlertCircle,
} from 'lucide-react';

import { useState } from 'react';
import { FaSlidersH, FaCalendarAlt, FaMoneyBillWave } from 'react-icons/fa';
import CustomSearch from '@/app/components/custom-search';

export default function InvoicesTable() {
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
      selected.length === invoices.length ? [] : invoices.map((i) => i.id),
    );

  const invoices = [
    {
      id: 'INV-001',
      customer: 'Ahmed Al Mansouri',
      amount: 1250.0,
      status: 'paid',
      dueDate: '2025-01-15',
      issueDate: '2025-01-01',
      paymentMethod: 'Credit Card',
      invoiceNumber: 'INV-2025-001',
      daysUntilDue: -5,
    },
    {
      id: 'INV-002',
      customer: 'Fatima Al Zahra',
      amount: 890.5,
      status: 'pending',
      dueDate: '2025-01-20',
      issueDate: '2025-01-05',
      paymentMethod: 'Bank Transfer',
      invoiceNumber: 'INV-2025-002',
      daysUntilDue: 0,
    },
    {
      id: 'INV-003',
      customer: 'Omar Al Rashid',
      amount: 2100.0,
      status: 'overdue',
      dueDate: '2024-12-30',
      issueDate: '2024-12-15',
      paymentMethod: 'Cash',
      invoiceNumber: 'INV-2024-003',
      daysUntilDue: -16,
    },
    {
      id: 'INV-004',
      customer: 'Aisha Al Qasimi',
      amount: 675.25,
      status: 'paid',
      dueDate: '2025-01-10',
      issueDate: '2024-12-28',
      paymentMethod: 'Credit Card',
      invoiceNumber: 'INV-2024-004',
      daysUntilDue: -10,
    },
    {
      id: 'INV-005',
      customer: 'Khalid Al Falasi',
      amount: 1500.0,
      status: 'pending',
      dueDate: '2025-01-25',
      issueDate: '2025-01-08',
      paymentMethod: 'Bank Transfer',
      invoiceNumber: 'INV-2025-005',
      daysUntilDue: 5,
    },
    {
      id: 'INV-006',
      customer: 'Layla Al Suwaidi',
      amount: 3200.0,
      status: 'draft',
      dueDate: '2025-02-01',
      issueDate: '2025-01-12',
      paymentMethod: 'Pending',
      invoiceNumber: 'INV-2025-006',
      daysUntilDue: 12,
    },
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'paid', label: 'Paid' },
    { value: 'pending', label: 'Pending' },
    { value: 'overdue', label: 'Overdue' },
    { value: 'draft', label: 'Draft' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return (
          <Badge
            color="success"
            className="w-fit rounded-md py-1.5 text-nowrap"
          >
            Paid
          </Badge>
        );
      case 'pending':
        return (
          <Badge
            color="warning"
            className="w-fit rounded-md py-1.5 text-nowrap"
          >
            Pending
          </Badge>
        );
      case 'overdue':
        return (
          <Badge
            color="failure"
            className="w-fit rounded-md py-1.5 text-nowrap"
          >
            Overdue
          </Badge>
        );
      case 'draft':
        return (
          <Badge color="gray" className="w-fit rounded-md py-1.5 text-nowrap">
            Draft
          </Badge>
        );
      default:
        return (
          <Badge color="gray" className="w-fit rounded-md py-1.5 text-nowrap">
            Unknown
          </Badge>
        );
    }
  };

  const getDueDateDisplay = (dueDate: string, daysUntilDue: number) => {
    const isOverdue = daysUntilDue < 0;
    const isDueToday = daysUntilDue === 0;
    const isDueSoon = daysUntilDue <= 3 && daysUntilDue > 0;

    let className = 'text-font-light';
    let icon = null;

    if (isOverdue) {
      className = 'text-red-600 font-semibold';
      icon = <AlertCircle className="mr-1 inline h-4 w-4" />;
    } else if (isDueToday) {
      className = 'text-orange-600 font-semibold';
      icon = <Clock className="mr-1 inline h-4 w-4" />;
    } else if (isDueSoon) {
      className = 'text-yellow-600 font-semibold';
      icon = <Clock className="mr-1 inline h-4 w-4" />;
    }

    return (
      <span className={`whitespace-nowrap ${className}`}>
        {icon}
        {dueDate}
        {isOverdue && (
          <span className="ml-2 text-xs text-red-500">
            ({Math.abs(daysUntilDue)} days overdue)
          </span>
        )}
        {isDueToday && (
          <span className="ml-2 text-xs text-orange-500">(Due today!)</span>
        )}
        {isDueSoon && (
          <span className="ml-2 text-xs text-yellow-500">
            (Due in {daysUntilDue} days)
          </span>
        )}
      </span>
    );
  };

  const getPaymentMethodIcon = (method: string) => {
    switch (method.toLowerCase()) {
      case 'credit card':
        return (
          <FaMoneyBillWave className="mr-2 inline h-4 w-4 text-green-600" />
        );
      case 'bank transfer':
        return (
          <FaMoneyBillWave className="mr-2 inline h-4 w-4 text-blue-600" />
        );
      case 'cash':
        return (
          <FaMoneyBillWave className="mr-2 inline h-4 w-4 text-purple-600" />
        );
      default:
        return <FaCalendarAlt className="mr-2 inline h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="bg-card-background rounded-2xl p-5">
      {/* Header with search, status filter, and sort - EXACTLY like products table */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          {/* Search */}
          <CustomSearch />
          <div className="flex items-center gap-2 md:gap-4">
            {/* Status Filter Select */}
            <CustomSelect
              placeholder="Invoice Status"
              smIcon={<FaSlidersH />}
              options={statusOptions}
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
                  checked={selected.length === invoices.length}
                  onChange={toggleSelectAll}
                  aria-label="Select all invoices"
                />
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Id
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Customer
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Amount
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Payment Method
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Status
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Issue Date
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Due Date
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Actions
              </TableHeadCell>
            </TableRow>
          </TableHead>

          <TableBody className="divide-inner-card-border divide-y">
            {invoices.map((invoice) => (
              <TableRow
                key={invoice.id}
                className="hover:dark:bg-inner-card transition"
              >
                <TableCell className="w-12">
                  <Checkbox
                    className="dark:bg-inner-card"
                    checked={selected.includes(invoice.id)}
                    onChange={() => toggleSelect(invoice.id)}
                    aria-label={`Select invoice ${invoice.id}`}
                  />
                </TableCell>
                <TableCell className="text-purple cursor-pointer whitespace-nowrap underline">
                  {invoice.invoiceNumber}
                </TableCell>
                <TableCell className="text-font-light font-medium">
                  {invoice.customer}
                </TableCell>
                <TableCell className="text-purple font-semibold whitespace-nowrap">
                  {invoice.amount.toLocaleString('en-AE', {
                    style: 'currency',
                    currency: 'AED',
                  })}
                </TableCell>
                <TableCell className="text-font-light whitespace-nowrap">
                  {getPaymentMethodIcon(invoice.paymentMethod)}
                  {invoice.paymentMethod}
                </TableCell>
                <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                <TableCell className="text-font-light whitespace-nowrap">
                  {invoice.issueDate}
                </TableCell>
                <TableCell>
                  {getDueDateDisplay(invoice.dueDate, invoice.daysUntilDue)}
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

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          Showing 1 to {invoices.length} of {invoices.length} results
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(invoices.length / 10)}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
}
