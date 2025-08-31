'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye,
  FaShoppingBag,
  FaPaw,
  FaTshirt,
  FaMobile,
  FaHome,
  FaBook,
  FaCar,
  FaUtensils,
  FaGem,
  FaDumbbell,
  FaBaby,
  FaHeart,
  FaLeaf,
  FaPalette,
  FaTools,
} from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
import { IconType } from 'react-icons/lib';
import { Checkbox } from '@/components/ui/checkbox';

const CategoriesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBusinessType, setSelectedBusinessType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    businessType: '',
    icon: 'FaShoppingBag',
    status: 'active',
  });

  // Mock data for categories
  const categories = [
    {
      id: 1,
      name: 'Pet Food',
      businessType: 'Pet',
      icon: FaPaw,
      productsCount: 1247,
      tenantsCount: 89,
      status: 'active',
      description:
        'Nutritional food for pets including dogs, cats, and other animals',
      createdAt: '2024-01-15',
    },
    {
      id: 2,
      name: 'Electronics',
      businessType: 'Electronics',
      icon: FaMobile,
      productsCount: 2156,
      tenantsCount: 156,
      status: 'active',
      description: 'Electronic devices and gadgets for daily use',
      createdAt: '2024-01-10',
    },
    {
      id: 3,
      name: 'Clothing',
      businessType: 'Fashion',
      icon: FaTshirt,
      productsCount: 1893,
      tenantsCount: 234,
      status: 'active',
      description: 'Apparel and fashion accessories for all ages',
      createdAt: '2024-01-08',
    },
    {
      id: 4,
      name: 'Home & Garden',
      businessType: 'Home',
      icon: FaHome,
      productsCount: 987,
      tenantsCount: 67,
      status: 'active',
      description: 'Home improvement and garden supplies',
      createdAt: '2024-01-05',
    },
    {
      id: 5,
      name: 'Books',
      businessType: 'Books',
      icon: FaBook,
      productsCount: 654,
      tenantsCount: 45,
      status: 'active',
      description: 'Books, magazines, and educational materials',
      createdAt: '2024-01-03',
    },
    {
      id: 6,
      name: 'Automotive',
      businessType: 'Auto',
      icon: FaCar,
      productsCount: 432,
      tenantsCount: 23,
      status: 'inactive',
      description: 'Automotive parts and accessories',
      createdAt: '2024-01-01',
    },
    {
      id: 7,
      name: 'Kitchen & Dining',
      businessType: 'Kitchen',
      icon: FaUtensils,
      productsCount: 765,
      tenantsCount: 78,
      status: 'active',
      description: 'Kitchen appliances and dining accessories',
      createdAt: '2023-12-28',
    },
    {
      id: 8,
      name: 'Jewelry',
      businessType: 'Jewelry',
      icon: FaGem,
      productsCount: 321,
      tenantsCount: 34,
      status: 'active',
      description: 'Fine jewelry and accessories',
      createdAt: '2023-12-25',
    },
  ];

  const businessTypes = [
    'Pet',
    'Electronics',
    'Fashion',
    'Home',
    'Boo',
    'Auto',
    'Kitchen',
    'Jewelry',
  ];

  // Filter categories based on search and filters
  const filteredCategories = categories.filter((category) => {
    const matchesSearch =
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBusinessType =
      selectedBusinessType === 'all' ||
      category.businessType === selectedBusinessType;
    const matchesStatus =
      selectedStatus === 'all' || category.status === selectedStatus;

    return matchesSearch && matchesBusinessType && matchesStatus;
  });

  // Calculate stats
  const totalCategories = categories.length;
  const activeCategories = categories.filter(
    (c) => c.status === 'active',
  ).length;
  const mostUsedCategory = categories.reduce((prev, current) =>
    prev.tenantsCount > current.tenantsCount ? prev : current,
  );
  const recentlyAdded = categories.slice(0, 3);

  const getIconComponent = (iconName: IconType) => {
    return iconName;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your API
    console.log('Creating category:', formData);
    setIsCreateModalOpen(false);
    setFormData({
      name: '',
      description: '',
      businessType: '',
      icon: 'FaShoppingBag',
      status: 'active',
    });
  };

  const handleCancel = () => {
    setIsCreateModalOpen(false);
    setFormData({
      name: '',
      description: '',
      businessType: '',
      icon: 'FaShoppingBag',
      status: 'active',
    });
  };

  return (
    <div className="p-6 lg:ml-20 xl:ml-64">
      {/* Header */}

      {/* Quick Stats */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-card-background rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-font-light text-sm">Total Categories</p>
              <p className="text-font-primary text-2xl font-bold">
                {totalCategories}
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
              <p className="text-font-light text-sm">Active Categories</p>
              <p className="text-font-primary text-2xl font-bold">
                {activeCategories}
              </p>
            </div>
            <div className="bg-green-light flex h-12 w-12 items-center justify-center rounded-lg dark:bg-green-900/20">
              <div className="bg-green h-3 w-3 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-card-background rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-font-light text-sm">Most Used</p>
              <p className="text-font-primary text-lg font-semibold">
                {mostUsedCategory.name}
              </p>
              <p className="text-font-light text-sm">
                {mostUsedCategory.tenantsCount} stores
              </p>
            </div>
            <div className="bg-blue-light flex h-12 w-12 items-center justify-center rounded-lg dark:bg-blue-900/20">
              <FaEye className="text-blue text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-card-background rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-font-light text-sm">Recently Added</p>
              <p className="text-font-primary text-lg font-semibold">
                {recentlyAdded.length}
              </p>
              <p className="text-font-light text-sm">in last 30 days</p>
            </div>
            <div className="bg-yellow-light flex h-12 w-12 items-center justify-center rounded-lg dark:bg-yellow-900/20">
              <FaPlus className="text-yellow text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-card-background mb-8 rounded-2xl p-6">
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <div className="max-w-md flex-1">
            <Input
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64"
            />
          </div>

          <div className="flex items-center gap-4">
            <Select
              value={selectedBusinessType}
              onValueChange={setSelectedBusinessType}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Business Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Business Types</SelectItem>
                {businessTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>

            <Dialog
              open={isCreateModalOpen}
              onOpenChange={setIsCreateModalOpen}
            >
              <DialogTrigger asChild>
                <Button variant="primary" className="flex items-center gap-2">
                  <FaPlus className="text-sm" />
                  Create Category
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Create New Category</DialogTitle>
                  <DialogDescription className="text-font-light">
                    Add a new product category for business owners to use.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-font-primary text-sm font-medium"
                    >
                      Category Name *
                    </label>
                    <Input
                      id="name"
                      className="mt-2"
                      placeholder="e.g., Pet Food"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange('name', e.target.value)
                      }
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="text-font-primary text-sm font-medium"
                    >
                      Description *
                    </label>
                    <Textarea
                      className="mt-2"
                      id="description"
                      placeholder="Describe what this category is for..."
                      value={formData.description}
                      onChange={(e) =>
                        handleInputChange('description', e.target.value)
                      }
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="businessType"
                      className="text-font-primary text-sm font-medium"
                    >
                      Business Type *
                    </label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) =>
                        handleInputChange('businessType', value)
                      }
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        {businessTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor="icon"
                      className="text-font-primary text-sm font-medium"
                    >
                      Category Icon
                    </label>
                    <Select
                      value={formData.icon}
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
                      id="status"
                      checked={formData.status === 'active'}
                      onCheckedChange={(checked) =>
                        handleInputChange(
                          'status',
                          checked ? 'active' : 'inactive',
                        )
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
                  <Button variant="ghost" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={handleSubmit}>
                    Create Category
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCategories.map((category) => {
          const IconComponent = getIconComponent(category.icon);
          return (
            <div
              key={category.id}
              className="bg-card-background group flex h-full flex-col rounded-2xl p-6 transition-all duration-200"
            >
              {/* Category Header */}
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="dark:bg-inner-card bg-innr-card flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 transition-colors group-hover:bg-purple-100 dark:group-hover:bg-purple-900/20">
                    <IconComponent className="text-xl text-gray-600 group-hover:text-purple-600 dark:text-gray-400 dark:group-hover:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-font-primary text-lg font-semibold">
                      {category.name}
                    </h3>
                    <div className="text-font-light text-xs tracking-widest uppercase">
                      {category.businessType}
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Description */}
              <p className="text-font-light mb-4 line-clamp-2 flex-1 text-sm">
                {category.description}
              </p>

              {/* Stats */}
              <div className="mb-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-font-light">Products:</span>
                  <span className="text-font-primary font-medium">
                    {category.productsCount.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-font-light">Stores:</span>
                  <span className="text-font-primary font-medium">
                    {category.tenantsCount}
                  </span>
                </div>
              </div>

              {/* Status and Actions */}
              <div className="mt-auto flex items-center justify-between pt-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${category.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}
                  ></div>
                  <span className="text-font-light text-xs capitalize">
                    {category.status}
                  </span>
                </div>
                <Link href={`/categories/${category.id}`}>
                  <div className="hover:text-purple cursor-pointer text-xs font-medium underline transition-colors">
                    View Details
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredCategories.length === 0 && (
        <div className="py-12 text-center">
          <div className="bg-inner-card mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
            <FaSearch className="text-font-light text-2xl" />
          </div>
          <h3 className="text-font-primary mb-2 text-lg font-semibold">
            No categories found
          </h3>
          <p className="text-font-light mb-6">
            Try adjusting your search or filters
          </p>
          <Button
            variant="primary"
            onClick={() => {
              setSearchTerm('');
              setSelectedBusinessType('all');
              setSelectedStatus('all');
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
