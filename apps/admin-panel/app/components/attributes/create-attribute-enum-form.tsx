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

const CreateAttributeEnumCard = () => {
  const FormSchema = z.object({
    is_enum: z.boolean({}),
    enum_values: z.string(),
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
        <div className="mb-8 text-xl font-medium">2. Enum Config</div>
        <div className="flex flex-col justify-center gap-8">
          <FormField
            control={form.control}
            name="is_enum"
            render={({ field }) => (
              <FormItem className="m-0">
                <FormLabel>Is Enum</FormLabel>
                <FormDescription>
                  The attribute name identifies the specific property of your
                  item.
                </FormDescription>
                <FormControl>
                  <Switch />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="enum_values"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="!text-font-light">Enum Values</FormLabel>
                <FormDescription>
                  The attribute name identifies the specific property of your
                  item.
                </FormDescription>
                <FormControl>
                  <Input
                    disabled
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
    </Form>
  );
};

// ✅ Close function before export
export default CreateAttributeEnumCard;
