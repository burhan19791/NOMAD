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
} from 'react-icons/fa';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

const CategoryDetailsPage = () => {
  const params = useParams();
  const router = useRouter();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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

  const [editFormData, setEditFormData] = useState({
    name: category.name,
    description: category.description,
    businessType: category.businessType,
    icon: 'FaPaw',
    status: category.status,
  });

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
    console.log('Saving category:', editFormData);
    setIsEditModalOpen(false);
  };

  const handleDelete = () => {
    console.log('Deleting category:', category.id);
    setIsDeleteModalOpen(false);
    router.push('/categories');
  };

  const IconComponent = getIconComponent(editFormData.icon);

  return (
    <div className="p-6 lg:ml-20 xl:ml-64">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-4">
          <Link href="/categories">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2"
            >
              <FaArrowLeft className="text-sm" />
              Back to Categories
            </Button>
          </Link>
        </div>

        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-inner-card flex h-16 w-16 items-center justify-center rounded-xl">
              <category.icon className="text-2xl text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <h1 className="text-font-primary mb-2 text-3xl font-bold">
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

          <div className="flex items-center gap-2">
            <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <FaEdit className="text-sm" />
                  Edit Category
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Edit Category</DialogTitle>
                  <DialogDescription className="text-font-light">
                    Update the category information.
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
                      id="edit-description"
                      className="mt-2"
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
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Description */}
        <div className="bg-card-background rounded-2xl p-6">
          <h3 className="text-font-primary mb-4 text-lg font-semibold">
            Description
          </h3>
          <p className="text-font-light leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Top Products */}
        <div className="bg-card-background rounded-2xl p-6">
          <h3 className="text-font-primary mb-4 text-lg font-semibold">
            Top Products
          </h3>
          <div className="space-y-3">
            {category.topProducts.map((product, index) => (
              <div
                key={index}
                className="bg-inner-card flex items-center justify-between rounded-lg p-3"
              >
                <div className="flex items-center gap-3">
                  <span className="text-font-light text-sm font-medium">
                    #{index + 1}
                  </span>
                  <span className="text-font-primary font-medium">
                    {product.name}
                  </span>
                </div>
                <Badge variant="secondary">{product.count} products</Badge>
              </div>
            ))}
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
      </div>
    </div>
  );
};

export default CategoryDetailsPage;
