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
  Checkbox,
} from 'flowbite-react';
import { Eye, MoreHorizontal, Pencil, Trash } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { useState } from 'react';
import { FaFilter, FaSearch, FaSlidersH, FaSort, FaStar } from 'react-icons/fa';
import CustomSearch from '@/app/components/custom-search';
import { useRouter } from 'next/navigation';

export default function ProductsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);

  const router = useRouter();

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
      category: 'Apparel',
      price: 49.99,
      rating: 4.5,
      stock: 25,
      createdAt: '20-07-2025',
      updatedAt: '07-08-2025',
    },
    {
      id: 'P1002',
      title: 'Nomad Cap',
      category: 'Accessories',
      price: 19.99,
      rating: 4.1,
      stock: 100,
      createdAt: '15-06-2025',
      updatedAt: '28-07-2025',
    },
    {
      id: 'P1003',
      title: 'Cargo Pants',
      category: 'Apparel',
      price: 59.99,
      rating: 4.7,
      stock: 0,
      createdAt: '30-05-2025',
      updatedAt: '25-07-2025',
    },
  ];

  const statusOptions = [
    { value: 'all', label: 'All' },
    { value: 'in-stock', label: 'In Stock' },
    { value: 'low-stock', label: 'Low Stock' },
    { value: 'out-of-stock', label: 'Out of Stock' },
  ];

  const categoryOptions = [
    { value: 'all', label: 'All' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'apparel', label: 'Apparel' },
    { value: 'accessories', label: 'Accessories' },
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
            <CustomSelect
              placeholder="Category"
              smIcon={<FaFilter />}
              options={categoryOptions}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table hoverable>
          <TableHead className="bg-inner-card border-inner-card-border border-b">
            <TableRow>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Image
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                <span className="flex items-center gap-2">
                  Product ID <FaSort />
                </span>
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                <span className="flex items-center gap-2">
                  Title
                  <FaSort />
                </span>
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                Category
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                <span className="flex items-center gap-2">
                  Price <FaSort />
                </span>
              </TableHeadCell>
              <TableHeadCell className="text-font-light dark:bg-inner-card bg-white whitespace-nowrap">
                <span className="flex items-center gap-2">
                  Rating <FaSort />
                </span>
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
                      className="bg-inner-card border-inner-card-border z-50 w-36 border"
                    >
                      <DropdownMenuItem
                        onClick={() => router.push('/products/overview')}
                        className="text-font-light flex items-center gap-2"
                      >
                        <Eye className="text-muted-foreground h-4 w-4" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-font-light flex items-center gap-2">
                        <Pencil className="text-muted-foreground h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-6 flex justify-end">
        <div className="flex overflow-x-auto sm:justify-center">
          <Pagination>
            <PaginationContent className="flex gap-2">
              <PaginationItem className="bg-inner-card rounded-md border border-gray-200 dark:border-stone-700">
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem className="hover:bg-inner-card rounded-md">
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="bg-inner-card dark:bg-inner-card border-gray-200 dark:border-stone-700"
                  href="#"
                  isActive
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="hover:bg-inner-card rounded-md">
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem className="hover:bg-inner-card rounded-md">
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem className="bg-inner-card rounded-md border border-gray-200 dark:border-stone-700">
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
