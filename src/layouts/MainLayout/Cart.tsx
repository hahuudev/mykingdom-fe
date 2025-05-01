'use client';

import { Icons } from '@/assets/icons';
import H3 from '@/components/text/H3';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { VStack } from '@/components/utilities';
import React from 'react';

const Cart = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="transparent">
          <Icons.cart className="text-white" />
          <span className="ml-3">Cart</span>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full max-w-[400px]">
        <VStack spacing={32} className="px-10">
          <H3 className="text-center font-semibold text-primary-600">My cart is empty</H3>

          <Button className="flex w-full items-center gap-2 rounded-full">Go to shopping</Button>
        </VStack>
      </PopoverContent>
    </Popover>
  );
};

export default Cart;
