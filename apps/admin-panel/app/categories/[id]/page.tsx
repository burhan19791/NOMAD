'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  FaEdit,
  FaTrash,
  FaArrowLeft,
  FaShoppingBag,
  FaPaw,
  FaMobile,
  FaTshirt,
  FaHome,
  FaBook,
  FaCar,
  FaUtensils,
  FaGem,
  FaEye,
  FaStore,
  FaCalendar,
  FaChartLine,
  FaFilter,
  FaPlus,
  FaToggleOn,
  FaToggleOff,
} from 'react-icons/fa';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
const CategoryDetailsPage = () => {
  const params = useParams();
  const router = useRouter();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAttributeModalOpen, setIsAttributeModalOpen] = useState(false);

  // Mock data for the category (in real app, fetch by ID)
  const category = {
    id: params.id,
    name: 'Pet Food',
    businessType: 'Pet Store',
    icon: FaPaw,
    productsCount: 1247,
    tenantsCount: 89,
    status: 'active',
    description:
      'Nutritional food for pets including dogs, cats, and other animals. This category includes dry food, wet food, treats, and supplements designed to meet the dietary needs of various pets.',
    createdAt: '2024-01-15',
    lastUpdated: '2024-01-20',
    usageTrend: '+12% this month',
    topProducts: [
      { name: 'Premium Dog Food', count: 156 },
      { name: 'Cat Treats', count: 134 },
      { name: 'Fish Food', count: 98 },
      { name: 'Bird Seed', count: 87 },
    ],
    recentTenants: [
      { name: 'Pet Paradise', joined: '2024-01-18' },
      { name: 'Furry Friends', joined: '2024-01-17' },
      { name: 'Animal Kingdom', joined: '2024-01-16' },
    ],
  };

  // Mock data for available attributes
  const availableAttributes = [
    {
      id: 'ATTR-001',
      name: 'Size',
      type: 'Size',
      description: 'Product size variations',
      values: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      isAssigned: true,
      isFilter: true,
      productsCount: 1247,
    },
    {
      id: 'ATTR-002',
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
      isAssigned: true,
      isFilter: true,
      productsCount: 892,
    },
    {
      id: 'ATTR-003',
      name: 'Material',
      type: 'Text',
      description: 'Product material type',
      values: ['Cotton', 'Polyester', 'Leather', 'Denim', 'Silk', 'Wool'],
      isAssigned: true,
      isFilter: false,
      productsCount: 567,
    },
    {
      id: 'ATTR-004',
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
      isAssigned: false,
      isFilter: false,
      productsCount: 445,
    },
    {
      id: 'ATTR-005',
      name: 'Weight',
      type: 'Number',
      description: 'Product weight in grams',
      values: ['100g', '200g', '300g', '500g', '1kg'],
      isAssigned: false,
      isFilter: false,
      productsCount: 234,
    },
  ];

  const [editFormData, setEditFormData] = useState({
    name: category.name,
    description: category.description,
    businessType: category.businessType,
    icon: 'FaPaw',
    status: category.status,
  });

  const [attributeFilters, setAttributeFilters] = useState(availableAttributes);

  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: React.ElementType } = {
      FaShoppingBag: FaShoppingBag,
      FaPaw: FaPaw,
      FaMobile: FaMobile,
      FaTshirt: FaTshirt,
      FaHome: FaHome,
      FaBook: FaBook,
      FaCar: FaCar,
      FaUtensils: FaUtensils,
      FaGem: FaGem,
    };
    return icons[iconName] || FaShoppingBag;
  };

  const handleInputChange = (field: string, value: string) => {
    setEditFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // Handle save logic here
    console.log('Saving category:', editFormData);
    setIsEditModalOpen(false);
  };

  const handleDelete = () => {
    // Handle delete logic here
    console.log('Deleting category:', category.id);
    setIsDeleteModalOpen(false);
    router.push('/categories');
  };

  const toggleAttributeAssignment = (attributeId: string) => {
    setAttributeFilters((prev) =>
      prev.map((attr) =>
        attr.id === attributeId
          ? {
              ...attr,
              isAssigned: !attr.isAssigned,
              isFilter: attr.isAssigned ? false : attr.isFilter,
            }
          : attr,
      ),
    );
  };

  const toggleAttributeFilter = (attributeId: string) => {
    setAttributeFilters((prev) =>
      prev.map((attr) =>
        attr.id === attributeId ? { ...attr, isFilter: !attr.isFilter } : attr,
      ),
    );
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'size':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'color':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'text':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'number':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="p-6 lg:ml-20 xl:ml-64">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/docs/components">Components</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/categories">
              <div className="flex items-center gap-2 font-medium">
                <FaArrowLeft className="text-sm" />
                Back to Categories
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <FaEdit className="text-sm" />
                  Edit
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Edit Category</DialogTitle>
                  <DialogDescription>
                    Update the category information
                  </DialogDescription>
                </DialogHeader>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSave();
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label
                      htmlFor="edit-name"
                      className="text-font-primary text-sm font-medium"
                    >
                      Category Name *
                    </label>
                    <Input
                      id="edit-name"
                      className="mt-2"
                      placeholder="e.g., Pet Food"
                      value={editFormData.name}
                      onChange={(e) =>
                        handleInputChange('name', e.target.value)
                      }
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="edit-description"
                      className="text-font-primary text-sm font-medium"
                    >
                      Description *
                    </label>
                    <Textarea
                      className="mt-2"
                      id="edit-description"
                      placeholder="Describe what this category is for..."
                      value={editFormData.description}
                      onChange={(e) =>
                        handleInputChange('description', e.target.value)
                      }
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="edit-businessType"
                      className="text-font-primary text-sm font-medium"
                    >
                      Business Type *
                    </label>
                    <Select
                      value={editFormData.businessType}
                      onValueChange={(value) =>
                        handleInputChange('businessType', value)
                      }
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pet Store">Pet Store</SelectItem>
                        <SelectItem value="Electronics Store">
                          Electronics Store
                        </SelectItem>
                        <SelectItem value="Fashion Store">
                          Fashion Store
                        </SelectItem>
                        <SelectItem value="Home Store">Home Store</SelectItem>
                        <SelectItem value="Bookstore">Bookstore</SelectItem>
                        <SelectItem value="Auto Store">Auto Store</SelectItem>
                        <SelectItem value="Kitchen Store">
                          Kitchen Store
                        </SelectItem>
                        <SelectItem value="Jewelry Store">
                          Jewelry Store
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor="edit-icon"
                      className="text-font-primary text-sm font-medium"
                    >
                      Category Icon
                    </label>
                    <Select
                      value={editFormData.icon}
                      onValueChange={(value) =>
                        handleInputChange('icon', value)
                      }
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select an icon" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FaShoppingBag">
                          Shopping Bag
                        </SelectItem>
                        <SelectItem value="FaPaw">Pet Paw</SelectItem>
                        <SelectItem value="FaMobile">Mobile Phone</SelectItem>
                        <SelectItem value="FaTshirt">T-Shirt</SelectItem>
                        <SelectItem value="FaHome">Home</SelectItem>
                        <SelectItem value="FaBook">Book</SelectItem>
                        <SelectItem value="FaCar">Car</SelectItem>
                        <SelectItem value="FaUtensils">Utensils</SelectItem>
                        <SelectItem value="FaGem">Gem</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="mb-4 flex items-center space-x-2">
                    <Checkbox
                      id="edit-status"
                      checked={editFormData.status === 'active'}
                      onCheckedChange={(checked) =>
                        handleInputChange(
                          'status',
                          checked ? 'active' : 'inactive',
                        )
                      }
                    />
                    <label
                      htmlFor="edit-status"
                      className="text-font-primary text-sm font-medium"
                    >
                      Active Status
                    </label>
                  </div>
                </form>

                <DialogFooter>
                  <Button
                    variant="ghost"
                    onClick={() => setIsEditModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={handleSave}>
                    Save Changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog
              open={isDeleteModalOpen}
              onOpenChange={setIsDeleteModalOpen}
            >
              <DialogTrigger asChild>
                <Button variant="destructive">Set Inactive</Button>
              </DialogTrigger>
              <DialogContent className="flex flex-col items-center justify-center sm:max-w-[400px]">
                <DialogHeader className="py-4">
                  <DialogTitle className="text-center">
                    Set Inactive
                  </DialogTitle>
                  <DialogDescription className="text-font-light text-center">
                    Are you sure you want to set &quot;{category.name}&quot;
                    inactive?
                  </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                  <Button
                    variant="ghost"
                    onClick={() => setIsDeleteModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button variant="destructive" onClick={handleDelete}>
                    Delete Category
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Attribute Selection Dialog */}
            <Dialog
              open={isAttributeModalOpen}
              onOpenChange={setIsAttributeModalOpen}
            >
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Select Attributes</DialogTitle>
                  <DialogDescription>
                    Choose which attributes to assign to this category. Uncheck
                    to remove.
                  </DialogDescription>
                </DialogHeader>

                <div className="max-h-96 space-y-3 overflow-y-auto">
                  {availableAttributes.map((attribute) => (
                    <div
                      key={attribute.id}
                      className="bg-inner-card rounded-lg p-4"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-3">
                            <Checkbox
                              id={attribute.id}
                              checked={
                                attributeFilters.find(
                                  (attr) => attr.id === attribute.id,
                                )?.isAssigned || false
                              }
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  // Add to assigned attributes
                                  setAttributeFilters((prev) => [
                                    ...prev.filter(
                                      (attr) => attr.id !== attribute.id,
                                    ),
                                    {
                                      ...attribute,
                                      isAssigned: true,
                                      isFilter: false,
                                    },
                                  ]);
                                } else {
                                  // Remove from assigned attributes
                                  setAttributeFilters((prev) =>
                                    prev.filter(
                                      (attr) => attr.id !== attribute.id,
                                    ),
                                  );
                                }
                              }}
                            />
                            <h4 className="text-font-primary font-medium">
                              {attribute.name}
                            </h4>
                            <Badge
                              variant="outline"
                              className={`text-xs ${getTypeBadgeColor(attribute.type)}`}
                            >
                              {attribute.type}
                            </Badge>
                          </div>
                          <p className="text-font-light mb-2 text-sm">
                            {attribute.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs">
                            <span className="text-font-light">
                              {attribute.values.length} values
                            </span>
                            <span className="text-font-light">
                              {attribute.productsCount} products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <DialogFooter>
                  <Button
                    variant="ghost"
                    onClick={() => setIsAttributeModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => setIsAttributeModalOpen(false)}
                  >
                    Done
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-card-background rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-font-light text-sm">Total Products</p>
              <p className="text-font-primary text-2xl font-bold">
                {category.productsCount.toLocaleString()}
              </p>
            </div>
            <div className="bg-purple-light flex h-12 w-12 items-center justify-center rounded-lg">
              <FaShoppingBag className="text-purple text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-card-background rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-font-light text-sm">Active Stores</p>
              <p className="text-font-primary text-2xl font-bold">
                {category.tenantsCount}
              </p>
            </div>
            <div className="bg-blue-light flex h-12 w-12 items-center justify-center rounded-lg">
              <FaStore className="text-blue text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-card-background rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-font-light text-sm">Usage Trend</p>
              <p className="text-success text-lg font-semibold">
                {category.usageTrend}
              </p>
            </div>
            <div className="bg-green-light flex h-12 w-12 items-center justify-center rounded-lg">
              <FaChartLine className="text-green text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-card-background rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-font-light text-sm">Created</p>
              <p className="text-font-primary text-lg font-semibold">
                {new Date(category.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="bg-yellow-light flex h-12 w-12 items-center justify-center rounded-lg">
              <FaCalendar className="text-yellow text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      {/* Content Grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Description */}
        <div className="bg-card-background rounded-2xl p-6">
          <div className="mb-4 flex items-center gap-4">
            <div className="bg-purple-light flex h-12 w-12 items-center justify-center rounded-md">
              <category.icon className="text-purple text-lg" />
            </div>
            <div>
              <h1 className="text-font-primary text-xl leading-none font-bold">
                {category.name}
              </h1>
              <div className="flex items-center gap-3">
                <div className="text-sm">{category.businessType}</div>
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${category.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}
                  ></div>
                  <span className="text-font-light text-sm capitalize">
                    {category.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-font-primary mb-2 text-lg font-semibold">
            Description
          </h3>

          <p className="text-font-light leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Category Info */}
        <div className="bg-card-background rounded-2xl p-6">
          <h3 className="text-font-primary mb-4 text-lg font-semibold">
            Category Information
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-font-light">Category ID:</span>
              <span className="text-font-primary font-medium">
                #{category.id}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-font-light">Business Type:</span>
              <div>{category.businessType}</div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-font-light">Status:</span>
              <div className="flex items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full ${category.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}
                ></div>
                <span className="text-font-primary font-medium capitalize">
                  {category.status}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-font-light">Created:</span>
              <span className="text-font-primary font-medium">
                {new Date(category.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-font-light">Last Updated:</span>
              <span className="text-font-primary font-medium">
                {new Date(category.lastUpdated).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-card-background rounded-2xl p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-font-primary text-lg font-semibold">
              Attribute Filters
            </h3>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick={() => setIsAttributeModalOpen(true)}
            >
              <FaPlus className="text-sm" />
              Add
            </Button>
          </div>

          <div className="space-y-3">
            {attributeFilters.map((attribute) => (
              <div
                key={attribute.id}
                className={`bg-inner-card rounded-lg p-4 ${
                  attribute.isAssigned ? 'border-purple border-l-4' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <h4 className="text-font-primary font-medium">
                        {attribute.name}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {attribute.type}
                      </Badge>
                    </div>
                    <span className="text-font-light text-sm">
                      {attribute.values.length} values
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleAttributeAssignment(attribute.id)}
                      className={`h-8 w-8 p-0 ${
                        attribute.isAssigned ? 'text-purple' : 'text-gray-400'
                      }`}
                    >
                      {attribute.isAssigned ? (
                        <FaToggleOn className="text-lg" />
                      ) : (
                        <FaToggleOff className="text-lg" />
                      )}
                    </Button>

                    {attribute.isAssigned && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleAttributeFilter(attribute.id)}
                        className={`h-8 w-8 p-0 ${
                          attribute.isFilter
                            ? 'text-green-500'
                            : 'text-gray-400'
                        }`}
                      >
                        <FaFilter className="text-sm" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-purple-light/20 mt-4 rounded-lg p-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-font-light">
                {attributeFilters.filter((attr) => attr.isAssigned).length}{' '}
                assigned
              </span>
              <span className="text-font-light">
                {attributeFilters.filter((attr) => attr.isFilter).length}{' '}
                filters
              </span>
            </div>
          </div>
        </div>
        {/* Recent Tenants */}
        <div className="bg-card-background rounded-2xl p-6">
          <h3 className="text-font-primary mb-4 text-lg font-semibold">
            Recent Stores
          </h3>
          <div className="space-y-3">
            {category.recentTenants.map((tenant, index) => (
              <div
                key={index}
                className="bg-inner-card flex items-center justify-between rounded-lg p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-purple-light flex h-8 w-8 items-center justify-center rounded-full">
                    <FaStore className="text-purple text-sm" />
                  </div>
                  <span className="text-font-primary font-medium">
                    {tenant.name}
                  </span>
                </div>
                <span className="text-font-light text-sm">
                  {new Date(tenant.joined).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Attribute Filters */}
      </div>
    </div>
  );
};

export default CategoryDetailsPage;
