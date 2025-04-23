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
import React, { useEffect, useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { SelectCustomField } from '../SelectCustomField';
import { TextAreaField } from '../TextAreaField';

type Props = {
  value?: MetricSchema;
  onSubmit: (data: MetricSchema) => { isValid: boolean };
  metric_titles: string[];
};
const EditMetric = ({ metric_titles, value, onSubmit }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const form = useForm<MetricSchema>({
    defaultValues: {
      metric: '',
      properties: '',
      title: '',
    },
    resolver: zodResolver(metricSchema),
  });

  const handleSubmit: SubmitHandler<MetricSchema> = (formData) => {
    const { isValid } = onSubmit(formData);

    if (!isValid) return;
    setIsOpen(false);
    form.reset({ metric: '', properties: '' });
  };

  useEffect(() => {
    if (!value || !isOpen) return;
    form.reset({ title: value.title, metric: value.metric, properties: value.properties });
  }, [value, isOpen]);

  return (
    <div className="">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button className="flex text-sm text-tertiary-900">
            <Icons.pen className="" />
          </button>
        </DialogTrigger>

        <DialogContent>
          <HStack pos="apart">
            <H3 className="">Update Metric</H3>

            <button onClick={() => setIsOpen(false)} className="w-7 text-tertiary-900 hover:opacity-80">
              <Icons.X />
            </button>
          </HStack>
          <FormWrapper key={value?.metric} formId="custom-ai-metric-edit" form={form} onSubmit={handleSubmit}>
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
                control={form.control}
                name="metric"
                label="Metric Name"
                required
                placeholder="Enter metric name"
              />
              <TextAreaField
                control={form.control}
                name="properties"
                label="Metric Properties"
                onChange={() => form.trigger('properties')}
                rows={4}
                required
                placeholder="Enter metric properties"
              />
            </VStack>

            <Button
              className="w-full bg-primary-700"
              type="button"
              onClick={() => form.handleSubmit(handleSubmit)()}
              form="custom-ai-metric-edit"
              disabled={!form.formState.isValid}
            >
              <Icons.save className="mr-2" />
              Update
            </Button>
          </FormWrapper>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditMetric;
