'use client';

import { useCategoriesQuery } from '@/api/category/queries';
import H3 from '@/components/text/H3';
import { Separator } from '@/components/ui/separator';
import { VStack } from '@/components/utilities';
import { ROUTER } from '@/libs/router';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const FilterLeftBar = () => {
  const { data, isFetching } = useCategoriesQuery({ variables: { limit: 1000 } });
  return (
    <VStack className="w-[280px]" spacing={36}>
      <VStack spacing={32}>
        <H3 className="text-primary-600">Categories</H3>

        <VStack spacing={20}>
          {data?.items?.map((item) => (
            <Link
              href={`/${ROUTER.COLLECTIONS}/${item.slug}`}
              key={item._id}
              className="flex items-center justify-between rounded px-2 py-1 text-sm hover:bg-primary-200"
            >
              <span>{item.name}</span>

              <ChevronRight className="w-5" />
            </Link>
          ))}
        </VStack>
      </VStack>

      <Separator />

      <VStack spacing={32}>
        <H3 className="text-primary-600">Price (VND)</H3>
      </VStack>
    </VStack>
  );
};

export default FilterLeftBar;
