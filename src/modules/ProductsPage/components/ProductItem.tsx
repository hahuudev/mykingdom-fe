import type { IProduct } from '@/api/product/types';
import H4 from '@/components/text/H4';
import { HStack, VStack } from '@/components/utilities';
import { ROUTER } from '@/libs/router';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  loading?: boolean;
} & Partial<IProduct>;

const ProductItem = ({ loading, name, slug, images }: Props) => {
  return (
    <Link href={`${ROUTER.PRODUCTS}/${slug}`}>
      <VStack className="group relative h-full rounded-lg border p-4">
        <div className="flex-1 overflow-hidden">
          <Image
            alt=""
            src={images?.[0] || '/images/no-image.svg'}
            width={300}
            height={300}
            className="w-full object-cover transition-all duration-300 group-hover:scale-105"
          />
        </div>

        <H4 className="font-poppins text-[#041675] lg:text-base">{name}</H4>

        <HStack pos="apart">
          <span className="text-base text-primary-700">223.000 vnd</span>
          <span className="text-sm underline">300.000 vnd</span>
        </HStack>

        <HStack>
          <span className="p-1 hover:text-primary-500 ">
            <Heart className="hover:fill-primary-500" />
          </span>
        </HStack>
      </VStack>
    </Link>
  );
};

export default ProductItem;
