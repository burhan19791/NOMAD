'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { FaPlus, FaEye, FaFilter, FaSort, FaDownload } from 'react-icons/fa';
import CardTitle from '../components/card-title';
import { MdPrint } from 'react-icons/md';
import {
  DrawerContent,
  DrawerDescription,
  Drawer,
  DrawerHeader,
  DrawerTrigger,
  DrawerTitle,
} from '@/components/ui/drawer';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import AttributesTable from '../components/attributes/attribute-table';
import { cn } from '@/lib/utils';

const AttributesPage = () => {
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

  const FormSchema = z.object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}
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
                {attributes.filter((attr) => attr.active === true).length}
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
              <p className="text-font-primary text-2xl font-bold">15</p>
            </div>
            <div className="bg-orange-light bg-error-light flex h-12 w-12 items-center justify-center rounded-xl">
              <FaSort className="text-error text-xl" />
            </div>
          </div>
        </div>
      </div>
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
          <Drawer>
            <DrawerTrigger asChild>
              <Button className="flex items-center gap-2" variant="primary">
                <FaPlus className="text-sm" />
                <div className="hidden md:flex">Create Attribute</div>
              </Button>
            </DrawerTrigger>
            <DrawerContent side="bottom">
              <div className="mx-auto w-full max-w-lg">
                <div className="bg-inner-card mx-auto mb-6 h-2 w-32 rounded-full" />
                <DrawerHeader className="flex flex-col items-center text-center">
                  <DrawerTitle>Create An Attribute</DrawerTitle>
                  <DrawerDescription>
                    Fill in the details to create a new attribute
                  </DrawerDescription>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="w-2/3 space-y-6"
                    >
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field, fieldState }) => (
                          <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="shadcn"
                                {...field}
                                className={
                                  fieldState.error
                                    ? 'border-red-500 bg-red-50'
                                    : ''
                                }
                              />
                            </FormControl>
                            <FormDescription>
                              This is your public display name.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit">Submit</Button>
                    </form>
                  </Form>
                </DrawerHeader>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      <AttributesTable />
    </div>
  );
};

export default AttributesPage;
