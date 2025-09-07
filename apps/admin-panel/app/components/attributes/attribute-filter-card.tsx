import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { FaPlus, FaTrash } from 'react-icons/fa';
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
import { Textarea } from '@/components/ui/textarea';

interface AttributeFilterCardProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedType: string;
  setSelectedType: (value: string) => void;
  selectedStatus: string;
  setSelectedStatus: (value: string) => void;
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (value: boolean) => void;
  handleCreateAttribute: () => void;
}
const AttributeFilterCard = ({
  searchTerm,
  setSearchTerm,
  selectedType,
  setSelectedType,
  selectedStatus,
  setSelectedStatus,
  isCreateModalOpen,
  setIsCreateModalOpen,
  handleCreateAttribute,
}: AttributeFilterCardProps) => {
  const [createFormData, setCreateFormData] = useState({
    name: '',
    type: '',
    description: '',
    values: [''],
    status: 'active',
  });
  const addValue = () => {
    setCreateFormData((prev) => ({ ...prev, values: [...prev.values, ''] }));
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
    <div className="bg-card-background mb-6 rounded-2xl p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col gap-4 sm:flex-row">
          <div className="flex-1">
            <Input
              placeholder="Search attributes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-[180px]">
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
        </div>
        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2" variant="primary">
              <FaPlus className="text-sm" />
              Create Attribute
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
                          type="button"
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
  );
};

export default AttributeFilterCard;
