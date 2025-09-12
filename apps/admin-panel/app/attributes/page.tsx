'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import {
  FaPlus,
  FaSearch,
  FaEye,
  FaFilter,
  FaSort,
  FaDownload,
  FaArchive,
  FaTrash,
} from 'react-icons/fa';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { DropdownMenuContent } from '@/components/ui/dropdown-menu';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Eye } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { MoreHorizontal } from 'lucide-react';
import { LuArchive } from 'react-icons/lu';
import CardTitle from '../components/card-title';
import { MdPrint } from 'react-icons/md';
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '@/components/ui/pagination';
import { IoEye, IoPencil } from 'react-icons/io5';
import { HiPencil } from 'react-icons/hi2';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

const AttributesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selected, setSelected] = useState<number[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [createFormData, setCreateFormData] = useState({
    name: '',
    type: '',
    description: '',
    values: [''],
    status: 'active',
  });

  // Mock data
  const attributes = [
    {
      id: 1,
      name: 'Size',
      type: 'Size',
      description: 'Product size variations',
      values: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      productsCount: 1247,
      status: 'active',
      createdAt: '2024-01-15',
    },
    {
      id: 2,
      name: 'Color',
      type: 'Color',
      description: 'Product color options',
      values: [
        'Red',
        'Blue',
        'Green',
        'Black',
        'White',
        'Yellow',
        'Purple',
        'Orange',
      ],
      productsCount: 892,
      status: 'active',
      createdAt: '2024-01-16',
    },
    {
      id: 3,
      name: 'Material',
      type: 'Text',
      description: 'Product material type',
      values: ['Cotton', 'Polyester', 'Leather', 'Denim', 'Silk', 'Wool'],
      productsCount: 567,
      status: 'active',
      createdAt: '2024-01-17',
    },
    {
      id: 4,
      name: 'Brand',
      type: 'Text',
      description: 'Product brand name',
      values: [
        'Nike',
        'Adidas',
        'Apple',
        'Samsung',
        'Sony',
        'LG',
        'Dell',
        'HP',
      ],
      productsCount: 445,
      status: 'active',
      createdAt: '2024-01-18',
    },
    {
      id: 5,
      name: 'Weight',
      type: 'Number',
      description: 'Product weight in grams',
      values: ['100g', '200g', '300g', '500g', '1kg'],
      productsCount: 234,
      status: 'inactive',
      createdAt: '2024-01-19',
    },
    {
      id: 6,
      name: 'Style',
      type: 'Text',
      description: 'Product style category',
      values: ['Casual', 'Formal', 'Sporty', 'Vintage', 'Modern'],
      productsCount: 189,
      status: 'active',
      createdAt: '2024-01-20',
    },
  ];

  const typeOptions = [
    { value: 'all', label: 'All Types' },
    { value: 'size', label: 'Size' },
    { value: 'color', label: 'Color' },
    { value: 'text', label: 'Text' },
    { value: 'number', label: 'Number' },
    { value: 'boolean', label: 'Boolean' },
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
  ];

  const filteredAttributes = attributes.filter((attribute) => {
    const matchesSearch =
      attribute.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attribute.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      selectedType === 'all' || attribute.type.toLowerCase() === selectedType;
    const matchesStatus =
      selectedStatus === 'all' || attribute.status === selectedStatus;

    return matchesSearch && matchesType && matchesStatus;
  });

  const toggleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const toggleSelectAll = () => {
    if (selected.length === filteredAttributes.length) {
      setSelected([]);
    } else {
      setSelected(filteredAttributes.map((attr) => attr.id));
    }
  };

  const handleCreateAttribute = () => {
    // Handle create logic here
    console.log('Creating attribute:', createFormData);
    setIsCreateModalOpen(false);
    setCreateFormData({
      name: '',
      type: '',
      description: '',
      values: [''],
      status: 'active',
    });
  };

  const addValue = () => {
    setCreateFormData((prev) => ({
      ...prev,
      values: [...prev.values, ''],
    }));
  };

  const removeValue = (index: number) => {
    setCreateFormData((prev) => ({
      ...prev,
      values: prev.values.filter((_, i) => i !== index),
    }));
  };

  const updateValue = (index: number, value: string) => {
    setCreateFormData((prev) => ({
      ...prev,
      values: prev.values.map((v, i) => (i === index ? value : v)),
    }));
  };

  return (
    <div className="p-6 lg:ml-20 xl:ml-64">
      {/* Header */}

      {/* Quick Stats */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="bg-card-background rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-font-light text-sm">Total Attributes</p>
              <p className="text-font-primary text-2xl font-bold">
                {attributes.length}
              </p>
            </div>
            <div className="bg-purple-light flex h-12 w-12 items-center justify-center rounded-xl">
              <FaPlus className="text-purple text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-card-background rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-font-light text-sm">Active Attributes</p>
              <p className="text-font-primary text-2xl font-bold">
                {attributes.filter((attr) => attr.status === 'active').length}
              </p>
            </div>
            <div className="bg-green-light flex h-12 w-12 items-center justify-center rounded-xl">
              <FaEye className="text-green text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-card-background rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-font-light text-sm">Attribute Types</p>
              <p className="text-font-primary text-2xl font-bold">
                {new Set(attributes.map((attr) => attr.type)).size}
              </p>
            </div>
            <div className="bg-blue-light flex h-12 w-12 items-center justify-center rounded-xl">
              <FaFilter className="text-xl text-blue-500" />
            </div>
          </div>
        </div>
        <div className="bg-card-background rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-font-light text-sm">Products Using</p>
              <p className="text-font-primary text-2xl font-bold">
                {attributes.reduce((sum, attr) => sum + attr.productsCount, 0)}
              </p>
            </div>
            <div className="bg-orange-light bg-error-light flex h-12 w-12 items-center justify-center rounded-xl">
              <FaSort className="text-error text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Actions */}
      {/* <AttributeFilterCard
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        isCreateModalOpen={isCreateModalOpen}
        setIsCreateModalOpen={setIsCreateModalOpen}
        handleCreateAttribute={handleCreateAttribute}
      /> */}

      {/* Table */}
      <div className="mb-6 flex items-center justify-between">
        <CardTitle title="Attributes" />
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <MdPrint />
          </Button>
          <Button variant="outline">
            <FaDownload />
          </Button>
          <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2" variant="primary">
                <FaPlus className="text-sm" />
                <div className="hidden md:flex">Create Attribute</div>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Create Attribute</DialogTitle>
                <DialogDescription>
                  Add a new product attribute with its values
                </DialogDescription>
              </DialogHeader>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCreateAttribute();
                }}
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="text-font-primary text-sm font-medium"
                  >
                    Attribute Name *
                  </label>

                  <Input
                    id="name"
                    placeholder="e.g., Size, Color, Material"
                    value={createFormData.name}
                    onChange={(e) =>
                      setCreateFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="text-font-primary text-sm font-medium"
                  >
                    Attribute Type *
                  </label>
                  <Select
                    value={createFormData.type}
                    onValueChange={(value) =>
                      setCreateFormData((prev) => ({ ...prev, type: value }))
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select attribute type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Size">Size</SelectItem>
                      <SelectItem value="Color">Color</SelectItem>
                      <SelectItem value="Text">Text</SelectItem>
                      <SelectItem value="Number">Number</SelectItem>
                      <SelectItem value="Boolean">Boolean</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="text-font-primary text-sm font-medium"
                  >
                    Description
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Describe what this attribute is for..."
                    value={createFormData.description}
                    onChange={(e) =>
                      setCreateFormData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    rows={3}
                  />
                </div>

                <div>
                  <label className="text-font-primary text-sm font-medium">
                    Attribute Values *
                  </label>
                  <div className="mt-2 space-y-2">
                    {createFormData.values.map((value, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Input
                          placeholder={`Value ${index + 1}`}
                          value={value}
                          onChange={(e) => updateValue(index, e.target.value)}
                          required
                        />
                        {createFormData.values.length > 1 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeValue(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FaTrash className="text-sm" />
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addValue}
                      className="mt-2"
                    >
                      <FaPlus className="mr-2 text-sm" />
                      Add Value
                    </Button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="status"
                    checked={createFormData.status === 'active'}
                    onCheckedChange={(checked) =>
                      setCreateFormData((prev) => ({
                        ...prev,
                        status: checked ? 'active' : 'inactive',
                      }))
                    }
                  />
                  <label
                    htmlFor="status"
                    className="text-font-primary text-sm font-medium"
                  >
                    Active Status
                  </label>
                </div>
              </form>

              <DialogFooter>
                <Button
                  variant="ghost"
                  onClick={() => setIsCreateModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleCreateAttribute}>
                  Create Attribute
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="bg-card-background overflow-hidden rounded-2xl p-5">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex-1 md:max-w-md">
            <Input
              placeholder="Search attributes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="size">Size</SelectItem>
                <SelectItem value="color">Color</SelectItem>
                <SelectItem value="text">Text</SelectItem>
                <SelectItem value="number">Number</SelectItem>
                <SelectItem value="boolean">Boolean</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="size">Active</SelectItem>
                <SelectItem value="text">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Checkbox
                    checked={
                      selected.length === filteredAttributes.length &&
                      filteredAttributes.length > 0
                    }
                    onCheckedChange={toggleSelectAll}
                  />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Values</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAttributes.map((attribute) => (
                <TableRow key={attribute.id} className="hover:bg-inner-card">
                  <TableCell>
                    <Checkbox
                      checked={selected.includes(attribute.id)}
                      onCheckedChange={() => toggleSelect(attribute.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="text-font-primary">{attribute.name}</div>
                      <div className="text-font-light text-sm">
                        {attribute.description}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-sm">
                      {attribute.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      {attribute.values.slice(0, 3).map((value, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {value}
                        </Badge>
                      ))}
                      {attribute.values.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{attribute.values.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-font-primary font-medium">
                      {attribute.productsCount}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-2 w-2 rounded-full ${attribute.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}
                      ></div>
                      <span className="text-font-light text-sm capitalize">
                        {attribute.status}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="hover:bg-muted rounded-md p-2 transition">
                          <MoreHorizontal className="h-5 w-5" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="text-font-light w-36"
                        align="end"
                      >
                        <DropdownMenuItem>
                          <IoEye className="text-xl" /> View
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <HiPencil className="text-xl" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FaArchive className="text-xl text-red-600" /> Set
                          Inactive
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {filteredAttributes.length === 0 && (
            <div className="py-12 text-center">
              <div className="bg-inner-card mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <FaSearch className="text-font-light text-2xl" />
              </div>
              <h3 className="text-font-primary mb-2 text-lg font-semibold">
                No attributes found
              </h3>
              <p className="text-font-light">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
          <div className="mt-6 flex justify-end">
            <div className="flex overflow-x-auto sm:justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttributesPage;
