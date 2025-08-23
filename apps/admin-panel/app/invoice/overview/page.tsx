'use client';

import CardTitle from '@/app/components/card-title';
import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'flowbite-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { FaFileLines } from 'react-icons/fa6';
import { IoPrint } from 'react-icons/io5';

const InvoiceOverview = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  const products = [
    {
      id: '01',
      title: "World's most expensive t shirt",
      caption: 'Graphic Print Men & Women Sweatshirt',
      rate: '$266.24',
      quantity: 3,
      amount: '$798.72',
    },
    {
      id: '02',
      title: 'Ninja Pro Max Smartwatch',
      caption:
        'large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor',
      rate: '$247.27	',
      quantity: 1,
      amount: '$247.27',
    },
    {
      id: '03',
      title: 'Girls Mint Green & Off-White Open Toe Flats',
      caption: 'Fabric:Synthetic · Colour:Green · Shoe Type:Sandals',
      rate: '$24.07',
      quantity: 5,
      amount: '$120.35',
    },
    {
      id: '04',
      title: 'Carven Lounge Chair Red',
      caption: 'Carven Fabric Lounge Chair in Red Color',
      rate: '$209.99',
      quantity: 1,
      amount: '$209.99',
    },
  ];

  return (
    <div className="p-6 lg:ml-20 xl:ml-64">
      <Breadcrumb className="mb-6">
        <BreadcrumbItem href="#" icon={FaFileLines}>
          Invoices
        </BreadcrumbItem>
        <BreadcrumbItem href="#">List View</BreadcrumbItem>
      </Breadcrumb>

      <div className="mx-auto w-full max-w-[900px]">
        <div className="col-span-12 mb-4 flex items-center justify-between">
          <CardTitle title="Invoice Overview" />
          <div className="flex items-center gap-4">
            <Button className="dark:hover:bg-inner-card dark:border-inner-card dark:bg-inner-card text-font-primary gap-2 border border-gray-300 bg-white px-3 py-2 hover:bg-gray-200 md:px-4 md:py-5">
              <FaDownload />
              <div className="hidden md:flex">Download</div>
            </Button>
            <Button className="dark:hover:bg-inner-card dark:border-inner-card dark:bg-inner-card text-font-primary gap-2 border border-gray-300 bg-white px-3 py-2 hover:bg-gray-200 md:px-4 md:py-5">
              <IoPrint className="text-lg" />
              <div className="hidden md:flex">Print</div>
            </Button>
          </div>
        </div>
        <div className="bg-card-background rounded-2xl p-10">
          <div className="flex flex-col gap-8">
            {/* Logo + Title */}
            <div className="flex items-center gap-1.5">
              <div className={`relative mt-1 h-6 w-6 ${isDark && 'h-8 w-8'}`}>
                {isDark ? (
                  <Image src={'/images/Nomad-logo-white.png'} alt="Logo" fill />
                ) : (
                  <Image src={'/images/Nomad-logo-black.png'} alt="Logo" fill />
                )}
              </div>
              <h1 className="text-font-primary text-2xl font-bold">NOMAD</h1>
            </div>

            {/* Address + Info */}
            <div className="flex flex-col justify-between gap-10 md:flex-row">
              <div className="text-font-light text-sm">
                <div className="text-lg font-semibold">Address</div>
                <div>California, United States</div>
                <div>Zip-code: 90201</div>
              </div>

              <div className="text-font-light text-sm">
                <div>
                  Legal Registration:
                  <span className="text-font-primary ml-2 font-medium">
                    987654
                  </span>
                </div>
                <div>
                  Email:
                  <span className="text-font-primary ml-2 font-medium">
                    toner@themesbrand.com
                  </span>
                </div>
                <div>
                  Website:
                  <span className="text-font-primary ml-2 font-medium">
                    www.themesbrand.com
                  </span>
                </div>
                <div>
                  Contact No:
                  <span className="text-font-primary ml-2 font-medium">
                    +(314) 234 6789
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-10 text-gray-200 dark:text-stone-700" />

          {/* Invoice Info */}
          <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4 md:text-base">
            <div>
              <div className="text-font-light">Invoice No</div>
              <div className="text-font-primary font-medium">#TTB30280001</div>
            </div>
            <div>
              <div className="text-font-light">Date</div>
              <div className="text-font-primary font-medium">14 Jan, 2023</div>
            </div>
            <div>
              <div className="text-font-light">Payment Status</div>
              <Badge color="green" className="mt-1 w-fit">
                Paid
              </Badge>
            </div>
            <div>
              <div className="text-font-light">Total Amount</div>
              <div className="text-font-primary font-medium">$1406.92</div>
            </div>
          </div>

          <hr className="my-10 text-gray-200 dark:text-stone-700" />

          <div className="flex flex-col items-start gap-10 md:flex-row md:gap-28">
            <div>
              <div className="text-font-primary font-bold">Billing Address</div>
              <div className="text-font-light mt-2 flex flex-col gap-1 text-sm">
                <div>4430 Holt Street, Miami, Florida-33169</div>
                <div>Phone: +(123) 561-238-1000</div>
                <div>Tax: 65-498700</div>
              </div>
            </div>
            <div>
              <div className="text-font-primary font-bold">
                Shipping Address
              </div>
              <div className="text-font-light mt-2 flex flex-col gap-1 text-sm">
                <div>4430 Holt Street, Miami, Florida-33169</div>
                <div>Phone: +(123) 561-238-1000</div>
              </div>
            </div>
          </div>
          <div className="mt-10 overflow-x-scroll">
            <div className="min-w-[900px]">
              <Table className="rounded-t-none" hoverable>
                <TableHead className="bg-inner-card border-inner-card-border border-b">
                  <TableRow>
                    <TableHeadCell className="text-font-light dark:bg-inner-card bg-inner-card whitespace-nowrap">
                      Product ID
                    </TableHeadCell>
                    <TableHeadCell className="text-font-light dark:bg-inner-card bg-inner-card whitespace-nowrap">
                      Product Details
                    </TableHeadCell>
                    <TableHeadCell className="text-font-light dark:bg-inner-card bg-inner-card whitespace-nowrap">
                      Rate
                    </TableHeadCell>
                    <TableHeadCell className="text-font-light dark:bg-inner-card bg-inner-card whitespace-nowrap">
                      Quantity
                    </TableHeadCell>
                    <TableHeadCell className="text-font-light dark:bg-inner-card bg-inner-card whitespace-nowrap">
                      Amount
                    </TableHeadCell>
                  </TableRow>
                </TableHead>

                <TableBody className="divide-inner-card-border divide-y">
                  {products.map((product) => (
                    <TableRow
                      key={product.id}
                      className="hover:dark:bg-inner-card transition"
                    >
                      <TableCell className="text-purple whitespace-nowrap underline">
                        {product.id}
                      </TableCell>
                      <TableCell>
                        <div className="text-font-primary font-medium">
                          {product.title}
                        </div>
                        <div>{product.caption}</div>
                      </TableCell>
                      <TableCell className="text-font-light">
                        {product.rate}
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        {product.quantity}
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        {product.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <div className="w-72 rounded-2xl p-5">
              <div className="text-font-primary flex flex-col gap-3 text-sm font-medium">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="text-font-light font-normal">$1376.33</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Estimated Tax (12.5%)</span>
                  <span className="text-font-light font-normal">$172.04</span>
                </div>
                <div className="flex items-center justify-between text-red-500">
                  <span>Discount (TONER50)</span>
                  <span className="font-normal">- $206.45</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping Charge</span>
                  <span className="text-font-light font-normal">$65.00</span>
                </div>

                {/* Divider + Total (if needed) */}
                <hr className="my-2 text-gray-200 dark:text-stone-700" />

                <div className="flex items-center justify-between text-base font-semibold">
                  <span>Total</span>
                  <span>$1406.92</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-font-light text-sm">
            <div className="mb-2 text-lg font-semibold">Payment Details</div>
            <div className="flex flex-col gap-1">
              <div>
                Payment Method:
                <span className="ml-2 font-medium">Mastercard</span>
              </div>
              <div>
                Card Holder:
                <span className="ml-2 font-medium">David Nichols</span>
              </div>
              <div>
                Card Number:
                <span className="ml-2 font-medium"> xxx xxxx xxxx 1234</span>
              </div>
              <div>
                Total Amount:
                <span className="ml-2 font-medium">$1406.92</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceOverview;
