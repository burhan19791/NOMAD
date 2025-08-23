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
import { TiStar } from 'react-icons/ti';
import CustomSearch from '../../custom-search';

export default function StockReportTable() {
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
      selected.length === products.length ? [] : products.map((p) => p.id),
    );

  const products = [
    {
      id: '#1001',
      name: 'Black Hoodie',
      updated_at: '2025-08-05',
      amount: '$120.99',
      rating: '4.5',
      status: 'In Stock',
      quantity: '41',
    },

    {
      id: '#1003',
      name: 'Eyes On You Hoodie',
      updated_at: '2025-10-29',
      amount: '$109.50',
      rating: '4.9',
      status: 'Out of Stock',
      quantity: '0',
    },
    {
      id: '#1002',
      name: 'T-Shirt',
      updated_at: '2025-06-09',
      amount: '$89.99',
      rating: '4.5',
      status: 'In Stock',
      quantity: '50',
    },
    {
      id: '#1004',
      name: 'Jacket',
      updated_at: '2025-12-15',
      amount: '$34.99',
      rating: '3.7',
      status: 'Low Stock',
      quantity: '13',
    },
  ];

  const statusOptions = [
    { value: 'all', label: 'All' },
    { value: 'processing', label: 'In Stock' },
    { value: 'Low Stock', label: 'Low Stock' },
    { value: 'Out of Stock', label: 'Out of Stock' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'In Stock':
        return (
          <Badge className="bg-success-light text-success dark:bg-success-light hover:bg-success-light dark:text-success w-fit rounded-md py-1.5">
            {status}
          </Badge>
        );
      case 'Low Stock':
        return (
          <Badge className="bg-yellow-light text-yellow dark:bg-yellow-light hover:bg-yellow-light dark:text-yellow w w-fit rounded-md py-1.5">
            {status}
          </Badge>
        );
      case 'Out of Stock':
        return (
          <Badge className="bg-error-light text-error dark:bg-error-light dark:text-error hover:bg-error-light w-fit rounded-md py-1.5">
            {status}
          </Badge>
        );

      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="bg-card-background rounded-2xl p-5">
      {/* Header stays fixed */}
      <div className="mb-6 flex items-center justify-between">
        <CardTitle title="Stock Report" />
        <div className="flex items-center gap-2 md:gap-4">
          {/* Search */}
          <CustomSearch />

          {/* Status Select */}
          <CustomDropdown
            placeholder="Status"
            options={statusOptions}
            smIcon={<FaSlidersH />}
          />

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
                    checked={selected.length === products.length}
                    onChange={toggleSelectAll}
                    aria-label="Select all products"
                  />
                </TableHeadCell>
                <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                  Image
                </TableHeadCell>
                <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                  Product ID
                </TableHeadCell>
                <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                  Product Name
                </TableHeadCell>
                <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                  Quantity
                </TableHeadCell>
                <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                  Amount
                </TableHeadCell>
                <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                  Rating
                </TableHeadCell>
                <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                  Status
                </TableHeadCell>
                <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                  Updated Date
                </TableHeadCell>
                <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                  Actions
                </TableHeadCell>
              </TableRow>
            </TableHead>

            <TableBody className="divide-inner-card-border divide-y">
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  className="hover:dark:bg-inner-card transition"
                >
                  <TableCell className="w-12">
                    <Checkbox
                      className="dark:bg-inner-card"
                      checked={selected.includes(product.id)}
                      onChange={() => toggleSelect(product.id)}
                      aria-label={`Select product ${product.id}`}
                    />
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <div className="dark:bg-inner-card min-h-8 min-w-8 rounded bg-gray-200"></div>
                  </TableCell>
                  <TableCell className="text-blue whitespace-nowrap underline">
                    {product.id}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {product.name}
                  </TableCell>
                  <TableCell className="text-purple whitespace-nowrap">
                    {product.quantity}
                  </TableCell>
                  <TableCell className="text-font-light">
                    {product.amount}
                  </TableCell>
                  <TableCell className="text-font-light whitespace-nowrap">
                    <span className="flex items-center gap-1">
                      {product.rating}
                      <TiStar className="text-yellow text-lg" />
                    </span>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {getStatusBadge(product.status)}
                  </TableCell>
                  <TableCell className="text-font-light">
                    {product.updated_at}
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
