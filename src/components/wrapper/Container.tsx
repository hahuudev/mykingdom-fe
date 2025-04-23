import { cn } from '@/libs/common';
import React from 'react';

const Container = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('mx-auto max-w-[1400px] px-4 py-10 ', className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
