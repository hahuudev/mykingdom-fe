'use client';

import { type Control, type FieldPath, type FieldPathValue, type FieldValues, useFormContext } from 'react-hook-form';

import { cn } from '@/libs/common';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Show } from '../../utilities';
import CustomAiMetric from './CustomAiMetric';

interface Props<T extends FieldValues = FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: string;
  labelClassName?: string;
  className?: string;
  required?: boolean;
  placeholder?: string;
}

const CustomAiMetricField = <T extends FieldValues>({
  className,
  labelClassName,
  control,
  defaultValue,
  label,
  required,
  ...props
}: Props<T>) => {
  const form = useFormContext();

  return (
    <FormField
      defaultValue={defaultValue}
      control={control}
      name={props.name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormControl>
            <div className="space-y-1">
              <Show when={!!label}>
                <FormLabel className={labelClassName}>
                  {label} {required && <span className="text-red-500">*</span>}
                </FormLabel>
              </Show>
              <CustomAiMetric
                {...field}
                {...props}
                className={cn(className, {
                  'border-red-500 outline-red-500': !!fieldState.error,
                })}
                metric_titles={form.watch('metric_titles') || []}
              />
              <FormMessage className="mt-1 text-xs" />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export { CustomAiMetricField };
