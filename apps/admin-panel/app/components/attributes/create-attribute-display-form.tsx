'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
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
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from '@/components/ui/select';

const CreateAttributeDisplayForm = () => {
  const FormSchema = z.object({
    is_enum: z.boolean({}),
    enum_values: z.string(),
    measurement_type: z.enum(['Weight', 'Size', 'Length'], {
      message: 'Must select one data type',
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      is_enum: false,
      enum_values: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}

  return (
    <Form {...form}>
      <div className="bg-card-background dark:border-inner-card rounded-2xl p-5 px-8">
        <div className="mb-8 text-xl font-medium">3. Display Config</div>
        <div className="flex flex-col justify-center gap-8">
          <FormField
            control={form.control}
            name="measurement_type"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Filter Display Style</FormLabel>
                <FormDescription>
                  The attribute name identifies the specific property of your
                  item.
                </FormDescription>
                <FormControl>
                  <div className="flex gap-4">
                    <Select onValueChange={field.onChange}>
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
                    <Button variant="black">Preview</Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="measurement_type"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Form Display Style</FormLabel>
                <FormDescription>
                  The attribute name identifies the specific property of your
                  item.
                </FormDescription>
                <FormControl>
                  <div className="flex gap-4">
                    <Select onValueChange={field.onChange}>
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
                    <Button variant="black">Preview</Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="measurement_type"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Overview Display Style</FormLabel>
                <FormDescription>
                  The attribute name identifies the specific property of your
                  item.
                </FormDescription>
                <FormControl>
                  <div className="flex gap-4">
                    <Select onValueChange={field.onChange}>
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
                    <Button variant="black">Preview</Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </Form>
  );
};

// ✅ Close function before export
export default CreateAttributeDisplayForm;
