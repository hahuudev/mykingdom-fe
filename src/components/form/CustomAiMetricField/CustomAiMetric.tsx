'use client';

import { Icons } from '@/assets/icons';
import { AlertDialogComponent } from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { HStack, VStack } from '@/components/utilities';
import type { MetricSchema } from '@/modules/AgentDetailPage/libs/validators';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AddNewMetric from './AddNewMetric';
import EditMetric from './EditMetric';

type Props = {
  className?: string;
  onChange?: (data: MetricSchema[]) => void;
  value?: MetricSchema[];
  metric_titles: string[];
};
const CustomAiMetric = ({ metric_titles = [], onChange, value }: Props) => {
  const [isOpenAdd, setIsOpenAdd] = useState<boolean>(false);

  const [metrics, setMetrics] = useState<MetricSchema[]>([]);

  const handleAddMetric = (metric: MetricSchema) => {
    const isCoincide = metrics.some((x) => x.metric === metric.metric);

    if (isCoincide) {
      toast.error('Duplicate metric name!');
      return { isValid: false };
    }

    setIsOpenAdd(false);
    const newMetrics = [metric, ...metrics];

    setMetrics(newMetrics);
    onChange?.(newMetrics);
    return { isValid: true };
  };

  const handleDeleteMetric = (metricName: string) => {
    const newMetrics = metrics.filter((x) => x.metric !== metricName);
    onChange?.(newMetrics);
    setMetrics(newMetrics);
  };

  const handleUpdateMetric = (metric: MetricSchema, index: number) => {
    const isCoincide = metrics.some((x, i) => x.metric === metric.metric && i !== index);

    if (isCoincide) {
      toast.error('Duplicate metric name!');
      return { isValid: false };
    }

    const newMetrics = metrics.map((x, i) => (i === index ? metric : x));
    setMetrics(newMetrics);

    onChange?.(newMetrics);
    return { isValid: true };
  };

  useEffect(() => {
    if (!value) return;

    setMetrics(value);
  }, [value]);

  return (
    <div className="flex flex-col rounded-md border-[#FAFAFA26] bg-[#FAFAFA26] px-4 py-3">
      <div className="font-semibold text-base text-tertiary-900">Custom AI Metrics</div>

      <VStack className="mt-4 max-h-[400px] overflow-y-auto pr-4" spacing={20}>
        {metrics?.map((metric, index) => (
          <VStack key={index}>
            <Label className="font-medium">{metric.metric}</Label>
            <HStack className="flex">
              <div className="flex-1 pl-1">
                <Input readOnly value={metric.properties} />
              </div>

              <HStack className="ml-4 h-full" spacing={20}>
                <EditMetric
                  metric_titles={metric_titles}
                  key={metric.metric}
                  value={metric}
                  onSubmit={(metric) => handleUpdateMetric(metric, index)}
                />

                <AlertDialogComponent
                  description={<>Are you sure you want to delete this metric?</>}
                  title="Delete Metric"
                  onOk={() => handleDeleteMetric(metric.metric)}
                  okText="Yes, Delete Now"
                >
                  <div className="cursor-pointer hover:opacity-75">
                    <Icons.trash />
                  </div>
                </AlertDialogComponent>
              </HStack>
            </HStack>
          </VStack>
        ))}
      </VStack>

      <AddNewMetric metric_titles={metric_titles} isOpen={isOpenAdd} setIsOpen={setIsOpenAdd} onAdd={handleAddMetric} />
    </div>
  );
};

export default CustomAiMetric;
