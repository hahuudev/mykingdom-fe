import H1 from '@/components/text/H1';
import React from 'react';
import type { ProductInfoProps } from '.';

const Introduce = ({ name }: ProductInfoProps) => {
  return (
    <div>
      <H1 className="font-poppins lg:text-3xl">{name}</H1>
    </div>
  );
};

export default Introduce;
