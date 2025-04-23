import { parse } from 'date-fns';

export const toTimestampBigInt = (dateStr?: string | Date): bigint => {
  if (!dateStr) return BigInt(0);
  if (dateStr instanceof Date) {
    return BigInt(Math.round(dateStr.getTime() / 1000));
  }

  const [datePart] = String(dateStr).split(' (');
  const parsed = parse(datePart, "EEE MMM dd yyyy HH:mm:ss 'GMT'xx", new Date());

  return BigInt(Math.round(parsed.getTime() / 1000));
};
