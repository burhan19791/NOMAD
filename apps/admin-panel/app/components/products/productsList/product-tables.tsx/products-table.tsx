'use client';

import CardTitle from '@/app/components/card-title';
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
import { Eye, MoreHorizontal, Pencil, Trash } from 'lucide-react';

import { useState } from 'react';
import { FaSearch, FaSlidersH, FaStar } from 'react-icons/fa';
import CustomSearch from '@/app/components/custom-search';

export default function ProductsTable() {
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
      id: 'P1001',
      title: 'Black Hoodie',
      description: 'Comfortable black hoodie...',
      category: 'Apparel',
      price: 49.99,
      rating: 4.5,
      stock: 25,
      createdAt: '2025-07-20',
      updatedAt: '2025-08-01',
    },
    {
      id: 'P1002',
      title: 'Nomad Cap',
      description: 'Stylish cap for...',
      category: 'Accessories',
      price: 19.99,
      rating: 4.1,
      stock: 100,
      createdAt: '2025-06-15',
      updatedAt: '2025-07-28',
    },
    {
      id: 'P1003',
      title: 'Cargo Pants',
      description: 'Durable cargo pants...',
      category: 'Apparel',
      price: 59.99,
      rating: 4.7,
      stock: 0,
      createdAt: '2025-05-30',
      updatedAt: '2025-07-25',
    },
  ];

  const statusOptions = [
    { value: 'all', label: 'All' },
    { value: 'in-stock', label: 'In Stock' },
    { value: 'low-stock', label: 'Low Stock' },
    { value: 'out-of-stock', label: 'Out of Stock' },
  ];

  const getStockBadge = (stock: number) => {
    if (stock === 0)
      return (
        <Badge color="failure" className="w-fit rounded-md py-1.5 text-nowrap">
          Out of Stock
        </Badge>
      );
    if (stock < 10)
      return (
        <Badge color="warning" className="w-fit rounded-md py-1.5 text-nowrap">
          Low Stock
        </Badge>
      );
    return (
      <Badge color="success" className="w-fit rounded-md py-1.5 text-nowrap">
        In Stock
      </Badge>
    );
  };

  return (
    <div className="bg-card-background rounded-2xl p-5">
      {/* Header with search, status filter, and sort */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          {/* Search */}
          <CustomSearch />
          <div className="flex items-center gap-2 md:gap-4">
            {/* Stock Status Select */}
            <CustomSelect
              placeholder="Stock Status"
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
                Title
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Description
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Category
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Price
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Rating
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Stock
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Created At
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Updated At
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
                <TableCell className="text-purple cursor-pointer whitespace-nowrap underline">
                  {product.id}
                </TableCell>
                <TableCell className="text-font-light">
                  {product.title}
                </TableCell>
                <TableCell className="text-font-light">
                  {product.description}
                </TableCell>
                <TableCell className="text-font-light">
                  {product.category}
                </TableCell>
                <TableCell className="text-purple whitespace-nowrap">
                  ${product.price.toFixed(2)}
                </TableCell>
                <TableCell className="text-font-light whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    {product.rating.toFixed(1)}
                    <FaStar className="text-yellow" />
                  </span>
                </TableCell>
                <TableCell>{getStockBadge(product.stock)}</TableCell>
                <TableCell className="text-font-light whitespace-nowrap">
                  {product.createdAt}
                </TableCell>
                <TableCell className="text-font-light whitespace-nowrap">
                  {product.updatedAt}
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

      <div className="mt-4">
        <Pagination
          className="flex items-center justify-between"
          layout="table"
          itemsPerPage={10}
          totalItems={products.length}
          onPageChange={onPageChange}
          currentPage={currentPage}
          showIcons
        />
      </div>
    </div>
  );
}
