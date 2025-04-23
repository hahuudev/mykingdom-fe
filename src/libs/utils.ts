import type { IDocument } from '@/api/battle-dashboard/types';

export const formatNumber = (number?: number, fractionDigits?: number): string => {
  if (number === 0 || number === null) return '0';
  if (typeof number !== 'number' || !number) return 'N/A';

  if (Number.isInteger(number)) {
    return number.toLocaleString('en-US');
  }

  const roundedString: string = number.toFixed(fractionDigits || 2);

  const formattedNumber: string = parseFloat(roundedString).toLocaleString('en-US', {
    minimumFractionDigits: fractionDigits || 2,
    maximumFractionDigits: fractionDigits || 2,
  });

  return formattedNumber;
};

export const convertNumberToShortForm = (number?: number): string => {
  if (!number) return '0';
  const units = ['', 'K', 'M', 'B', 'T', 'P', 'E'];
  const tier = Math.floor(Math.log10(number) / 3);

  if (tier === 0) return number.toString();

  const suffix = units[tier];
  const scale = Math.pow(10, tier * 3);
  const scaledNumber = number / scale;

  return `${scaledNumber.toFixed(1)}${suffix}`;
};

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}

export function shortenAddress(str?: string, length = 4) {
  if (!str) return '';
  if (str?.length < length) return str;
  return `${str.substring(0, 6)}...${str.substring(str.length - 4)}`;
}

type DocumentCounts = {
  csv: number;
  docs: number;
  pdf: number;
  xlsx: number;
};

export function countDocumentsByType(documents: IDocument[]): DocumentCounts {
  const counts: DocumentCounts = {
    csv: 0,
    docs: 0,
    pdf: 0,
    xlsx: 0,
  };

  const typeMapping: Record<string, string> = {
    'text/csv': 'csv',
    'application/pdf': 'pdf',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
    'application/msword': 'docs',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docs',
  };

  documents.forEach((doc) => {
    const key = typeMapping[doc.document_type];
    if (key) {
      (counts as any)[key]++;
    }
  });

  return counts;
}
