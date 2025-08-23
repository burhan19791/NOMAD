'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  FileInput,
  Select,
  Textarea,
  TextInput,
} from 'flowbite-react';
import Link from 'next/link';
import { useState } from 'react';
import { FaShoppingBag, FaUpload, FaCheckCircle } from 'react-icons/fa';
import { HiArrowLeft } from 'react-icons/hi';
import { IoIosSave } from 'react-icons/io';

const CreateProduct = () => {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState('');
  const [activeTab, setActiveTab] = useState('upload');

  const imageSrc = file
    ? URL.createObjectURL(file)
    : url.startsWith('http')
      ? url
      : '';

  return (
    <>
      <div className="p-6 lg:ml-20 xl:ml-64">
        {/* Simple Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbItem href="/products" icon={FaShoppingBag}>
            Products
          </BreadcrumbItem>
          <BreadcrumbItem>Create Product</BreadcrumbItem>
        </Breadcrumb>

        {/* Main Form Container */}
        <div className="bg-card-background border-inner-card-border rounded-xl border p-8">
          {/* Simple Header */}
          <div className="mb-8">
            <h1 className="text-font-primary mb-2 text-2xl font-semibold">
              Create New Product
            </h1>
            <p className="text-font-light">
              Add a new product to your inventory
            </p>
          </div>

          <form className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h2 className="text-font-primary text-lg font-medium">
                Basic Information
              </h2>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {/* Title */}
                <div>
                  <label className="text-font-primary mb-2 block text-sm font-medium">
                    Product Title
                  </label>
                  <div className="[&_input]:bg-inner-card [&_input]:dark:bg-inner-card [&_input]:text-font-primary [&_input]:placeholder:text-font-light [&_input]:focus:ring-purple [&_input]:rounded-lg [&_input]:border-0 [&_input]:px-3 [&_input]:py-2.5 [&_input]:focus:ring-2">
                    <TextInput
                      id="title"
                      type="text"
                      placeholder="Enter product title"
                      required
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="text-font-primary mb-2 block text-sm font-medium">
                    Category
                  </label>
                  <div className="[&_select]:bg-inner-card [&_select]:dark:bg-inner-card [&_select]:text-font-primary [&_select]:focus:ring-purple [&_select]:rounded-lg [&_select]:border-0 [&_select]:px-3 [&_select]:py-2.5 [&_select]:focus:ring-2">
                    <Select id="category" required>
                      <option value="">Select category</option>
                      <option value="juices">Juices</option>
                      <option value="water">Water</option>
                      <option value="carbonated">Carbonated Drinks</option>
                      <option value="energy">Energy Drinks</option>
                      <option value="sports">Sports Drinks</option>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="text-font-primary mb-2 block text-sm font-medium">
                  Description
                </label>
                <div className="[&_textarea]:bg-inner-card [&_textarea]:dark:bg-inner-card [&_textarea]:text-font-primary [&_textarea]:placeholder:text-font-light [&_textarea]:focus:ring-purple [&_textarea]:min-h-[100px] [&_textarea]:rounded-lg [&_textarea]:border-0 [&_textarea]:px-3 [&_textarea]:py-2.5 [&_textarea]:focus:ring-2">
                  <Textarea
                    id="description"
                    placeholder="Describe your product..."
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Pricing & Stock */}
            <div className="space-y-4">
              <h2 className="text-font-primary text-lg font-medium">
                Pricing & Stock
              </h2>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {/* Price */}
                <div>
                  <label className="text-font-primary mb-2 block text-sm font-medium">
                    Price
                  </label>
                  <div className="relative">
                    <span className="text-font-light absolute top-1/2 left-3 -translate-y-1/2">
                      $
                    </span>
                    <div className="[&_input]:bg-inner-card [&_input]:dark:bg-inner-card [&_input]:text-font-primary [&_input]:placeholder:text-font-light [&_input]:focus:ring-purple [&_input]:rounded-lg [&_input]:border-0 [&_input]:px-3 [&_input]:py-2.5 [&_input]:pl-6 [&_input]:focus:ring-2">
                      <TextInput
                        type="number"
                        id="price"
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                      />
                    </div>
                  </div>
                </div>

                {/* Stock */}
                <div>
                  <label className="text-font-primary mb-2 block text-sm font-medium">
                    Stock Quantity
                  </label>
                  <div className="[&_input]:bg-inner-card [&_input]:dark:bg-inner-card [&_input]:text-font-primary [&_input]:placeholder:text-font-light [&_input]:focus:ring-purple [&_input]:rounded-lg [&_input]:border-0 [&_input]:px-3 [&_input]:py-2.5 [&_input]:focus:ring-2">
                    <TextInput
                      id="stock"
                      type="number"
                      placeholder="Enter quantity"
                      min="0"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Image */}
            <div className="space-y-4">
              <h2 className="text-font-primary text-lg font-medium">
                Product Image
              </h2>

              {/* Simple Tabs */}
              <div className="bg-inner-card border-inner-card-border flex space-x-1 rounded-lg border p-1">
                <button
                  onClick={() => setActiveTab('upload')}
                  className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'upload'
                      ? 'bg-purple text-white'
                      : 'text-font-light hover:text-font-primary'
                  }`}
                >
                  Upload File
                </button>
                <button
                  onClick={() => setActiveTab('url')}
                  className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'url'
                      ? 'bg-purple text-white'
                      : 'text-font-light hover:text-font-primary'
                  }`}
                >
                  Image URL
                </button>
              </div>

              {/* Tab Content */}
              <div>
                {activeTab === 'upload' ? (
                  <div className="border-inner-card-border hover:border-purple rounded-lg border-2 border-dashed p-6 text-center transition-colors">
                    <FaUpload className="text-font-light mx-auto mb-3 text-2xl" />
                    <p className="text-font-primary mb-1 font-medium">
                      Drop your image here
                    </p>
                    <p className="text-font-light mb-3 text-sm">
                      or click to browse files
                    </p>
                    <div className="[&_input]:cursor-pointer [&_input]:border-0 [&_input]:bg-transparent [&_input]:text-transparent">
                      <FileInput
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        accept="image/*"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="[&_input]:bg-inner-card [&_input]:dark:bg-inner-card [&_input]:text-font-primary [&_input]:placeholder:text-font-light [&_input]:focus:ring-purple [&_input]:rounded-lg [&_input]:border-0 [&_input]:px-3 [&_input]:py-2.5 [&_input]:focus:ring-2">
                    <TextInput
                      placeholder="Paste image URL here..."
                      value={url}
                      onChange={(e) => {
                        setFile(null);
                        setUrl(e.target.value);
                      }}
                    />
                  </div>
                )}

                {/* Simple Image Preview */}
                {imageSrc && (
                  <div className="mt-4">
                    <img
                      src={imageSrc}
                      alt="Product preview"
                      className="border-inner-card-border h-24 w-24 rounded-lg border object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="border-inner-card-border flex flex-col gap-3 border-t pt-6 sm:flex-row sm:justify-end">
              <Link
                href="/products"
                className="border-inner-card-border text-font-primary hover:bg-inner-card flex items-center justify-center gap-2 rounded-lg border px-4 py-2 transition-colors"
              >
                <IoIosSave className="text-sm" />
                Save As Draft
              </Link>

              <Button
                size="md"
                className="bg-purple dark:bg-purple px-6 py-2 text-white hover:bg-purple-700 focus:ring-0 focus:outline-none dark:hover:bg-purple-700"
              >
                <FaCheckCircle className="mr-2" />
                Create Product
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
