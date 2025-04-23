import { validationMessages } from '@/libs/validation.utility';
import { z } from 'zod';

export const setBattleSchema = z
  .object({
    agent1_id: z.string().min(1, validationMessages.required('Debater 1')),
    agent2_id: z.string().min(1, validationMessages.required('Debater 2')),
    topic: z.string().min(1, validationMessages.required('Topic for Battle')).max(1200, validationMessages.max(1200, 'Topic for Battle')),
    public_at: z.date().refine(
      (date) => {
        const today = new Date();
        const minDate = new Date(today.getTime() + 15 * 60 * 1000);
        return date instanceof Date && !isNaN(date.getTime()) && date > today;
      },
      {
        message: 'The time must be in the future!',
      }
    ),
    start_at: z.date().refine(
      (date) => {
        const today = new Date();
        const minDate = new Date(today.getTime() + 15 * 60 * 1000);
        return date instanceof Date && !isNaN(date.getTime()) && date > today;
      },
      {
        message: 'The time must be in the future!',
      }
    ),
    duration: z
      .string()
      .min(1, validationMessages.required('Duration'))
      .regex(/^\d+$/, 'The Duration field must be a valid number!')
      .refine((value) => Number(value) >= 6 && Number(value) <= 360, {
        message: 'The Duration field must be between 6 and 360!',
      }),
    platform_fee: z
      .string()
      .min(1, validationMessages.required('Platform Fee'))
      .regex(/^\d+(\.\d{1,2})?$/, 'The Platform Fee field must be a valid number with two decimal places!'),
    content: z.string().min(1, validationMessages.required('Description')).max(5000, validationMessages.max(5000, 'Description')),
    documents: z.array(z.any()).max(20, 'You can upload a maximum of 20 documents!').optional(),
  })
  .superRefine((data, ctx) => {
    if (data.start_at < data.public_at) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['start_at'],
        message: 'The Start Time must be later than the Public Time!',
      });
    }

    if (data.documents && data.documents.length > 0) {
      const minStartAt = new Date(data.public_at.getTime() + 24 * 60 * 60 * 1000);

      if (data.start_at < minStartAt) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['start_at'],
          message: 'In order to upload files, the Start Time must be at least 24 hours after the Public Time!',
        });
      }
    }
  });

export type SetBattleSchema = z.infer<typeof setBattleSchema>;
