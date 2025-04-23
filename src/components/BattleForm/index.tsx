import { useParentAgent } from '@/api/agent/queries';
import type { SetBattleSchema } from '@/components/BattleForm/libs/validators';
import { onMutateError } from '@/libs/common';
import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { TextField, UploadButtonField } from '../form';
import { DatePickerField } from '../form/DatePickerField';
import { SelectCustomField } from '../form/SelectCustomField';
import { TextAreaField } from '../form/TextAreaField';
import { TextMaskField } from '../form/TextMaskField';
import { Avatar, AvatarImage } from '../ui/avatar';
import { HStack, VStack } from '../utilities';

const BattleForm = () => {
  const form = useFormContext<SetBattleSchema>();
  const { data: agents, isFetching } = useParentAgent({ onError: onMutateError });

  const disableDayStartTime = useMemo(() => {
    const documents = form.watch('documents');
    const publicAt = form.watch('public_at');
    const startAt = form.watch('start_at');

    const minStartAt = new Date(publicAt);
    minStartAt.setHours(minStartAt.getHours() + 24);

    if (documents && documents.length > 0) {
      if (startAt && startAt < minStartAt) {
        // form.setValue('start_at', minStartAt);
        // form.setError('start_at', { message: 'hh' });
      }
      return minStartAt;
    } else {
      return publicAt;
    }
  }, [form]);

  return (
    <VStack spacing={20}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <SelectCustomField
          height="40px"
          label="Debater 1"
          control={form.control}
          name="agent1_id"
          data={
            agents
              ?.filter((x) => String(x.id) !== form.watch('agent2_id'))
              .map((agent) => {
                return {
                  label: (
                    <HStack spacing={12}>
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={agent.image_url || ''} />
                      </Avatar>

                      <span className="font-semibold text-primary-700 text-sm">{agent.name}</span>
                    </HStack>
                  ),
                  value: String(agent.id),
                };
              }) || []
          }
          required
          placeholder="Select debater 1..."
        />
        <SelectCustomField
          height="40px"
          label="Debater 2"
          control={form.control}
          required
          name="agent2_id"
          data={
            agents
              ?.filter((x) => String(x.id) !== form.watch('agent1_id'))
              .map((agent) => {
                return {
                  label: (
                    <HStack spacing={12}>
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={agent.image_url || ''} />
                      </Avatar>

                      <span className="font-semibold text-primary-700 text-sm">{agent.name}</span>
                    </HStack>
                  ),
                  value: String(agent.id),
                };
              }) || []
          }
          placeholder="Select debater 2..."
        />
      </div>

      <TextField required label="Topic for the Battle" control={form.control} name="topic" placeholder="Enter a topic for the battle" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <DatePickerField
          disableDay={{
            before: new Date(new Date().setMinutes(new Date().getMinutes() + 15)),
          }}
          label="Public Time"
          control={form.control}
          name="public_at"
          placeholder="Select public time..."
          required
          onChange={(date) => {
            if (date && form.watch('start_at') < date) {
              form.setValue('start_at', date);
            }
          }}
        />

        <DatePickerField
          disableDay={{
            before: disableDayStartTime,
          }}
          label="Start Time"
          control={form.control}
          name="start_at"
          placeholder="Select start time..."
          required
        />

        <TextMaskField
          options={{
            mask: '###',
            replacement: { '#': /\d/ },
          }}
          label="Duration (min)"
          control={form.control}
          name="duration"
          placeholder="Enter the duration (6-360)..."
          required
          min={6}
          max={360}
        />

        <TextMaskField
          label="Platform Fee (%)"
          control={form.control}
          name="platform_fee"
          placeholder="Enter the platform fee..."
          required
        />
      </div>
      <TextAreaField
        label="Description"
        required
        control={form.control}
        name="content"
        placeholder="Type the description of the question here..."
      />

      <UploadButtonField
        accept={['PDF', 'docx', 'doc', 'xlsx', 'csv']}
        required
        control={form.control}
        name="documents"
        placeholder=""
        maxFiles={20}
      />
    </VStack>
  );
};

export default BattleForm;
