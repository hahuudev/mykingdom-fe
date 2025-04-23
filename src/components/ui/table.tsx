import * as React from 'react';

import { cn } from '@/libs/common';
import type { IPagination } from '@/types';
import { ChevronDown } from 'lucide-react';
import { HStack, Show } from '../utilities';
import Pagination from './pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { SkeletonWrapper } from './skeleton-wrapper';

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table ref={ref} className={cn('w-full caption-bottom text-sm', className)} {...props} />
  </div>
));
Table.displayName = 'Table';

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
);
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => <tbody ref={ref} className={cn('[&_tr:last-child]:border-0', className)} {...props} />
);
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tfoot ref={ref} className={cn('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', className)} {...props} />
  )
);
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(({ className, ...props }, ref) => (
  <tr ref={ref} className={cn('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', className)} {...props} />
));
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
      className
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn('p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className)}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, ...props }, ref) => <caption ref={ref} className={cn('mt-4 text-muted-foreground text-sm', className)} {...props} />
);
TableCaption.displayName = 'TableCaption';

type TableSkeletonProps = {
  loading?: boolean;
  row?: number;
  col?: number;
};
export const TableSkeleton = ({ loading = false, row = 5, col = 4 }: TableSkeletonProps) => {
  return (
    <Show when={loading}>
      {Array.from({ length: row }, (_, index) => (
        <TableRow key={index}>
          {Array.from({ length: col }, (__, index2) => (
            <TableCell key={index2} className="py-2">
              <SkeletonWrapper loading={loading} className="h-7 w-full min-w-[16px]"></SkeletonWrapper>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </Show>
  );
};

export type TablePaginationProps = {
  onPageChange: (page: number) => void;
  pagination: Partial<IPagination>;
  onPageSizeChange?: (pageSize: string) => void;
};
export const TablePagination = ({ onPageSizeChange, onPageChange, pagination }: TablePaginationProps) => {
  return (
    <HStack pos="apart" className="text-white">
      <HStack className="hidden lg:flex">
        <Select value={String(pagination?.limit)} onValueChange={onPageSizeChange}>
          <SelectTrigger
            className="h-9 w-fit gap-1 rounded border border-[#5832201A] bg-secondary-500 px-3 py-2 font-semibold text-xs"
            icon={<ChevronDown size={16} />}
          >
            Show <SelectValue />
          </SelectTrigger>

          <SelectContent className="font-semibold text-sm">
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
      </HStack>

      <HStack className="gap-10">
        <div className="ml-2 hidden font-semibold text-gray-800 text-sm lg:flex">
          Page&nbsp;
          {Number(pagination?.current_page) || 0}&nbsp;of&nbsp;
          <SkeletonWrapper>{pagination?.total_page || 0}</SkeletonWrapper>
        </div>

        <Pagination
          onPageChange={onPageChange}
          totalCount={pagination?.total_item || 0}
          currentPage={pagination?.current_page || 0}
          pageSize={pagination?.limit || 10}
        />
      </HStack>
    </HStack>
  );
};

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow };
