'use client';

import { Icons } from '@/assets/icons';
import { TextField } from '@/components/form';
import H3 from '@/components/text/H3';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { FormWrapper } from '@/components/ui/form';
import { HStack, VStack } from '@/components/utilities';
import { type MetricSchema, metricSchema } from '@/modules/AgentDetailPage/libs/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { SelectCustomField } from '../SelectCustomField';
import { TextAreaField } from '../TextAreaField';

type Props = {
  value?: MetricSchema;
  onAdd: (data: MetricSchema) => { isValid: boolean };
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  metric_titles: string[];
};
const AddNewMetric = ({ value, onAdd, isOpen, setIsOpen, metric_titles }: Props) => {
  const form = useForm<MetricSchema>({
    defaultValues: {
      metric: '',
      properties: '',
    },
    resolver: zodResolver(metricSchema),
  });

  const handleSubmit: SubmitHandler<MetricSchema> = (formData) => {
    const { isValid } = onAdd(formData);
    if (!isValid) return;
    form.reset({ metric: '', properties: '' });
  };

  useEffect(() => {
    if (!value) return;
    form.reset({ metric: value.metric, properties: value.properties });
  }, [value]);

  return (
    <div className="mt-6">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button className="flex text-sm text-tertiary-900">
            Add Metric
            <Icons.plus className="" />
          </button>
        </DialogTrigger>

        <DialogContent>
          <HStack pos="apart">
            <H3 className="">Add Metric</H3>

            <button onClick={() => setIsOpen(false)} className="w-7 text-tertiary-900 hover:opacity-80">
              <Icons.X />
            </button>
          </HStack>
          <FormWrapper form={form} onSubmit={handleSubmit} formId="custom-ai-metric-add">
            <VStack className="my-6" spacing={20}>
              <SelectCustomField
                label="Metric Title"
                required
                placeholder="Enter metric name"
                control={form.control}
                name="title"
                data={metric_titles.map((x) => ({ label: x, value: x }))}
              />
              <TextField
                onChange={() => form.trigger('metric')}
                autoFocus
                control={form.control}
                name="metric"
                label="Metric Name"
                required
                placeholder="Enter metric name"
              />
              <TextAreaField
                control={form.control}
                onChange={() => form.trigger('properties')}
                name="properties"
                label="Metric Properties"
                required
                rows={4}
                placeholder="Enter metric properties"
              />
            </VStack>

            <Button
              className="w-full bg-primary-700"
              type="button"
              onClick={() => form.handleSubmit(handleSubmit)()}
              form="custom-ai-metric-add"
              disabled={!form.formState.isValid}
            >
              <Icons.save className="mr-2" />
              Save
            </Button>
          </FormWrapper>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewMetric;
