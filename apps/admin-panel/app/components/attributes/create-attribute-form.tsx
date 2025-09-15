'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsTrigger, TabsList, TabsContent } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import CreateAttributeEnumCard from './create-attribute-enum-form';
import CreateAttributeMeasurementForm from './create-attribute-measurement-form';
import CreateAttributeDisplayForm from './create-attribute-display-form';

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(20, { message: 'Name cannot excede 20 letters' }),
  key: z
    .string()
    .min(1, { message: 'Key is required' })
    .max(20, { message: 'Key cannot exceed 20 letters' })
    .regex(/^[a-z0-9_-]+$/, {
      message:
        'Key must be lowercase and cannot contain spaces (use letters, numbers, - or _)',
    }),
  description: z
    .string()
    .max(250, { message: 'Description cannot exceed 250 characters' })
    .optional(),
  data_type: z.enum(['string', 'number', 'boolean'], {
    message: 'Must select one data type',
  }),
  is_active: z.boolean({}),
});

const CreateAttributeForm = function () {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', key: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto space-y-6 py-10"
      >
        <div className="grid grid-cols-12 justify-start gap-4">
          <div className="bg-card-background dark:border-inner-card col-span-12 rounded-2xl p-5 px-8 md:col-span-7">
            <div className="mb-8 text-xl font-medium">1. Attribute Info</div>
            <div className="flex flex-col justify-center gap-8">
              <div className="flex grid-cols-12 flex-col gap-4 sm:grid sm:items-start">
                <div className="sm:col-span-6">
                  <FormLabel>Name*</FormLabel>
                  <FormDescription>
                    The attribute name identifies the specific property of your
                    item.
                  </FormDescription>
                </div>
                <div className="sm:col-span-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Attribute display name"
                            type="text"
                            {...field}
                            className={cn(
                              fieldState.error &&
                                'border-error bg-red-50/30 text-red-800 focus:ring-transparent',
                            )}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex grid-cols-12 flex-col gap-4 sm:grid sm:items-start">
                <div className="sm:col-span-6">
                  <FormLabel>Key*</FormLabel>
                  <FormDescription>
                    The attribute key is a unique identifier used internally to
                    reference this attribute.
                  </FormDescription>
                </div>
                <div className="sm:col-span-6">
                  <FormField
                    control={form.control}
                    name="key"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Attribute Key"
                            type="text"
                            {...field}
                            className={cn(
                              fieldState.error &&
                                'border-error bg-red-50/30 text-red-800 focus:ring-transparent',
                            )}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex grid-cols-12 flex-col gap-4 sm:grid sm:items-start">
                <div className="sm:col-span-6">
                  <FormLabel>Description</FormLabel>
                  <FormDescription>
                    The attribute description provides additional details or
                    context about the item&apos;s property.
                  </FormDescription>
                </div>
                <div className="sm:col-span-6">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Attribute Description"
                            {...field}
                            className={cn(
                              'h-20',
                              fieldState.error &&
                                'border-error bg-red-50/30 text-red-800 focus:ring-transparent',
                            )}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex grid-cols-12 flex-col gap-4 sm:grid sm:items-start">
                <div className="sm:col-span-6">
                  <FormLabel>Data Type*</FormLabel>
                  <FormDescription>
                    The attribute description provides additional details or
                    context about the item&apos;s property.
                  </FormDescription>
                </div>
                <div className="sm:col-span-6">
                  <FormField
                    control={form.control}
                    name="data_type"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger
                              className={cn(
                                fieldState.error &&
                                  'border-error bg-red-50/30 text-red-800 focus:ring-transparent',
                              )}
                            >
                              <SelectValue placeholder="Select a data type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="string">String</SelectItem>
                              <SelectItem value="number">Number</SelectItem>
                              <SelectItem value="boolean">Boolean</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex grid-cols-12 flex-col gap-4 sm:grid sm:items-start">
                <div className="sm:col-span-6">
                  <FormLabel>Key*</FormLabel>
                  <FormDescription>
                    The attribute key is a unique identifier used internally to
                    reference this attribute.
                  </FormDescription>
                </div>
                <div className="sm:col-span-6">
                  <FormField
                    control={form.control}
                    name="key"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormControl>
                          <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-6">
                              <Input
                                placeholder="Attribute Key"
                                type="number"
                                {...field}
                                className={cn(
                                  fieldState.error &&
                                    'border-error bg-red-50/30 text-red-800 focus:ring-transparent',
                                )}
                              />
                            </div>
                            <div className="col-span-6">
                              <Input
                                placeholder="Attribute Key"
                                type="number"
                                {...field}
                                className={cn(
                                  fieldState.error &&
                                    'border-error bg-red-50/30 text-red-800 focus:ring-transparent',
                                )}
                              />
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex grid-cols-12 flex-col gap-4 sm:grid sm:items-center">
                <div className="sm:col-span-6">
                  <FormLabel>Active</FormLabel>
                  <FormDescription>
                    Toggle whether this attribute is active or not.
                  </FormDescription>
                </div>
                <div className="flex items-center sm:col-span-6">
                  <FormField
                    control={form.control}
                    name="is_active" // or whatever your field name is
                    render={({ field }) => (
                      <FormItem className="m-0">
                        <FormControl>
                          <Switch />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 space-y-4 md:col-span-5">
            <div>
              <CreateAttributeEnumCard />
            </div>
            <div>
              <CreateAttributeMeasurementForm />
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <CreateAttributeDisplayForm />
          </div>
        </div>
        <Button type="submit" variant="black">
          Submit
        </Button>
      </form>
    </Form>
  );
};
export default CreateAttributeForm;
