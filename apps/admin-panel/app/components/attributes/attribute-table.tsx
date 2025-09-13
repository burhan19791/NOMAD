'use client';

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
import { CiViewList } from 'react-icons/ci';

import { MdOutlineScreenshotMonitor, MdVpnKey } from 'react-icons/md';
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '@/components/ui/pagination';
import { HiOutlinePuzzlePiece, HiPencil } from 'react-icons/hi2';
import {
  DrawerContent,
  DrawerFooter,
  DrawerDescription,
  Drawer,
  DrawerHeader,
  DrawerTrigger,
  DrawerTitle,
  DrawerClose,
} from '@/components/ui/drawer';
import { LuChevronsUpDown, LuMessageSquareMore } from 'react-icons/lu';
import { FiList } from 'react-icons/fi';
import { TbRulerMeasure2 } from 'react-icons/tb';
import { useState } from 'react';

const AttributesTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  // Mock data
  const attributes = [
    {
      name: 'Size',
      title: 'Product size variations wadawdawdawdawd',
      type: 'Size',
      attribute_key: 'size',
      description:
        'Specifies the different size options that a product can be offered in, such as small, medium, or large. This attribute is commonly used for clothing, shoes, and other items where fit and proportions matter to the customer.',
      createdAt: '2024-01-15',
      updatedAt: '2024-02-01',
      active: true,
      isEnum: true,
      enum_values: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      isMeasurement: true,
      measurementType: 'length',
      min: 0,
      max: 200,
      overview_display: 'pills',
      filter_display_style: 'dropdown',
      form_display_style: 'dropdown',
    },
    {
      name: 'Color',
      title: 'Product color options',
      type: 'Color',
      attribute_key: 'color',
      description:
        'Defines the range of colors in which a product is available. This helps customers easily filter and choose products based on their personal color preference or to match with other items they own.',
      createdAt: '2024-01-16',
      updatedAt: '2024-02-03',
      active: true,
      isEnum: true,
      enum_values: ['Red', 'Blue', 'Green', 'Black', 'White', 'Yellow'],
      isMeasurement: false,
      measurementType: null,
      min: null,
      max: null,
      overview_display: 'pills',
      filter_display_style: 'dropdown',
      form_display_style: 'dropdown',
    },
    {
      name: 'Material',
      title: 'Product material type',
      type: 'Text',
      attribute_key: 'material',
      description:
        'Describes the fabric, substance, or material composition of a product. Customers often rely on this attribute to understand durability, comfort, and overall product quality, such as cotton, leather, or polyester.',
      createdAt: '2024-01-17',
      updatedAt: '2024-02-05',
      active: true,
      isEnum: true,
      enum_values: ['Cotton', 'Polyester', 'Leather', 'Denim', 'Silk', 'Wool'],
      isMeasurement: false,
      measurementType: null,
      min: null,
      max: null,
      overview_display: 'text',
      filter_display_style: 'dropdown',
      form_display_style: 'text',
    },
    {
      name: 'Brand',
      title: 'Product brand name',
      type: 'Text',
      attribute_key: 'brand',
      description:
        'Indicates the brand or manufacturer associated with the product. This attribute is key for brand-conscious shoppers who trust certain companies for their quality, design, or reputation.',
      createdAt: '2024-01-18',
      updatedAt: '2024-02-07',
      active: true,
      isEnum: true,
      enum_values: ['Nike', 'Adidas', 'Apple', 'Samsung', 'Sony', 'LG'],
      isMeasurement: false,
      measurementType: null,
      min: null,
      max: null,
      overview_display: 'dropdown',
      filter_display_style: 'dropdown',
      form_display_style: 'dropdown',
    },
    {
      name: 'Weight',
      title: 'Product weight in grams',
      type: 'Number',
      attribute_key: 'weight',
      description:
        'Represents the weight of the product, usually measured in grams or kilograms. This is especially important for shipping calculations, fitness products, and any item where weight influences usability.',
      createdAt: '2024-01-19',
      updatedAt: '2024-02-09',
      active: false,
      isEnum: false,
      enum_values: [],
      isMeasurement: true,
      measurementType: 'weight',
      min: 50,
      max: 10000,
      overview_display: 'text',
      filter_display_style: 'dropdown',
      form_display_style: 'text',
    },
    {
      name: 'Style',
      title: 'Product style category',
      type: 'Text',
      attribute_key: 'style',
      description:
        'Categorizes the overall design, fashion, or aesthetic of the product. Customers can use this attribute to shop by taste or occasion, for example casual, sporty, formal, or vintage styles.',
      createdAt: '2024-01-20',
      updatedAt: '2024-02-11',
      active: true,
      isEnum: true,
      enum_values: ['Casual', 'Formal', 'Sporty', 'Vintage', 'Modern'],
      isMeasurement: false,
      measurementType: null,
      min: null,
      max: null,
      overview_display: 'pills',
      filter_display_style: 'pills',
      form_display_style: 'pills',
    },
  ];
  return (
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
                <div className="flex items-center gap-2">
                  Name
                  <LuChevronsUpDown />
                </div>
              </TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  Created At
                  <LuChevronsUpDown />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  Updated At
                  <LuChevronsUpDown />
                </div>
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Edit</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {attributes.map((attribute) => (
              <Drawer key={attribute.name}>
                {/* row becomes the trigger */}
                <DrawerTrigger asChild>
                  <TableRow className="hover:bg-inner-card cursor-pointer">
                    <TableCell>
                      <div>
                        <div className="text-font-primary">
                          {attribute.name}
                        </div>
                        <div className="line-clamp-1">{attribute.title}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-sm">
                        {attribute.type}
                        {attribute.isEnum === true && (
                          <div>
                            <FiList className="text-xs" />
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="line-clamp-2">
                        {attribute.description}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-nowrap">{attribute.createdAt}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-nowrap">{attribute.updatedAt}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            attribute.active === true
                              ? 'bg-green-500'
                              : 'bg-gray-400'
                          }`}
                        />
                        <span className="text-font-light text-sm capitalize">
                          {attribute.active === true ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {/* separate edit button so it doesn’t trigger row drawer */}
                      <button
                        className="hover:text-primary p-2"
                        onClick={(e) => {
                          e.stopPropagation(); // prevent row trigger
                          console.log('edit clicked');
                        }}
                      >
                        <HiPencil />
                      </button>
                    </TableCell>
                  </TableRow>
                </DrawerTrigger>

                {/* the drawer itself */}
                <DrawerContent side="right">
                  <DrawerHeader>
                    <div>
                      <div className="flex items-center gap-3">
                        <DrawerTitle className="text-font-primary mb-1 text-xl font-semibold">
                          {attribute.name}
                        </DrawerTitle>
                        <div className="text-yellow flex items-center gap-1 leading-none">
                          <MdVpnKey />
                          {attribute.attribute_key}
                        </div>
                      </div>
                      <DrawerDescription className="text-font-light">
                        {attribute.title}
                      </DrawerDescription>
                    </div>
                  </DrawerHeader>
                  <hr className="dark:border-inner-card mt-6 border-t-1 border-dashed border-gray-300" />
                  <div className="flex-1 overflow-y-scroll">
                    {/* Description */}
                    <div className="px-6 pt-6">
                      <h3 className="text-font-light mb-4 flex items-center gap-2 text-sm tracking-wide uppercase">
                        <LuMessageSquareMore className="text-base" />
                        Description
                      </h3>
                      <p className="text-font-primary text-sm leading-relaxed">
                        {attribute.description}
                      </p>
                    </div>
                    <hr className="dark:border-inner-card my-6 border-t-1 border-dashed border-gray-300" />
                    {/* Details */}
                    <div className="px-6">
                      <h3 className="text-font-light mb-4 flex items-center gap-2 text-sm tracking-wide uppercase">
                        <HiOutlinePuzzlePiece className="text-base" />
                        Attribute Details
                      </h3>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <span className="text-font-primary text-sm">
                            Data Type
                          </span>
                          <span className="text-font-primary text-sm">
                            {attribute.type}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-font-primary text-sm">
                            Status
                          </span>
                          <span className="text-font-primary text-sm">
                            {attribute.active === true ? (
                              <Badge variant="success">Active</Badge>
                            ) : (
                              <Badge variant="destructive">Inactive</Badge>
                            )}
                          </span>
                        </div>
                        {attribute.min != null && (
                          <div className="flex items-center justify-between">
                            <span className="text-font-primary text-sm">
                              Min Value
                            </span>
                            <span className="text-font-primary text-sm">
                              {attribute.min}
                            </span>
                          </div>
                        )}
                        {attribute.max && (
                          <div className="flex items-center justify-between">
                            <span className="text-font-primary text-sm">
                              Max Value
                            </span>
                            <span className="text-font-primary text-sm">
                              {attribute.max}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    {attribute.isEnum && (
                      <>
                        <hr className="dark:border-inner-card my-6 border-t-1 border-dashed border-gray-300" />

                        <div className="px-6">
                          <h3 className="text-font-light mb-4 flex items-center gap-2 text-sm tracking-wide uppercase">
                            <CiViewList className="text-base" />
                            Enum Configuration
                          </h3>
                          <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                              <span className="text-font-primary text-sm">
                                Is Enum
                              </span>
                              <span className="text-success text-sm">Yes</span>
                            </div>
                            <div className="flex items-start justify-between">
                              <span className="text-font-primary text-sm">
                                Enum Values
                              </span>
                              <div className="flex max-w-[60%] flex-wrap justify-end gap-1.5">
                                {attribute.enum_values.map((value, idx) => (
                                  <Badge variant="default" key={idx}>
                                    {value}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {attribute.isMeasurement && (
                      <>
                        <hr className="dark:border-inner-card my-6 border-t-1 border-dashed border-gray-300" />
                        <div className="px-6">
                          <h3 className="text-font-light mb-4 flex items-center gap-2 text-sm tracking-wide uppercase">
                            <TbRulerMeasure2 className="text-base" />
                            Measurement Configuration
                          </h3>
                          <div className="flex flex-col gap-4">
                            <>
                              <div className="flex items-center justify-between">
                                <span className="text-font-primary text-sm">
                                  Is Measurement
                                </span>
                                <span className="text-success text-sm">
                                  Yes
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-font-primary text-sm">
                                  Measurement Type
                                </span>
                                <span className="text-font-primary text-sm">
                                  {attribute.measurementType}
                                </span>
                              </div>
                            </>
                          </div>
                        </div>
                      </>
                    )}
                    <hr className="dark:border-inner-card my-6 border-t-1 border-dashed border-gray-300" />
                    <div className="mb-6 px-6">
                      <h3 className="text-font-light mb-4 flex items-center gap-2 text-sm tracking-wide uppercase">
                        <MdOutlineScreenshotMonitor className="text-base" />
                        Display Styles
                      </h3>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <span className="text-font-primary text-sm">
                            Product Overview Display Style
                          </span>
                          <span className="text-font-primary text-sm">
                            {attribute.overview_display}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-font-primary text-sm">
                            Form Display Style
                          </span>
                          <span className="text-font-primary text-sm">
                            {attribute.form_display_style}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-font-primary text-sm">
                            Filter Display Style
                          </span>
                          <span className="text-font-primary text-sm">
                            {attribute.filter_display_style}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <DrawerFooter className="border-t border-gray-100 pt-4 dark:border-gray-800">
                    <DrawerClose asChild>
                      <Button variant="outline" className="w-full">
                        Close
                      </Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            ))}
          </TableBody>
        </Table>

        {/* {filteredAttributes.length === 0 && (
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
          )} */}
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
  );
};

export default AttributesTable;
