import { Icons } from '@/assets/icons';
import H1 from '@/components/text/H1';
import { Button } from '@/components/ui/button';
import QuantityInput from '@/components/ui/quantity-input';
import { HStack } from '@/components/utilities';
import React from 'react';
import type { ProductInfoProps } from '.';

const Introduce = ({ name }: ProductInfoProps) => {
  return (
    <div>
      <H1 className="font-poppins lg:text-3xl">{name}</H1>

      <HStack spacing={32}>
        <QuantityInput />
        <Button variant="shadow">
          <Icons.cart className="mr-2" />
          Add To Cart
        </Button>
      </HStack>
    </div>
  );
};

export default Introduce;
