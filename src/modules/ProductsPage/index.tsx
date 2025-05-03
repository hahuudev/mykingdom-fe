'use client';

import { useProductsQuery } from '@/api/product/queries';
import Breadcrumb from '@/components/Breadcrumb';
import { Separator } from '@/components/ui/separator';
import Container from '@/components/wrapper/Container';
import { onMutateError } from '@/libs/common';
import { useParams } from 'next/navigation';
import React from 'react';
import FilterLeftBar from './components/FilterLeftBar';
import ProductItem from './components/ProductItem';

const ProductPage = () => {
  const { slug } = useParams();

  const { data, isFetching } = useProductsQuery({ variables: {}, onError: onMutateError });

  return (
    <section>
      <Breadcrumb breadcrumbs={[{ name: 'Home' }, { name: 'Collection' }]} />

      <Container className="mt-10 flex">
        <FilterLeftBar />

        <div className="ml-4 flex-1 lg:ml-8">
          <div className=""></div>
          <Separator className="my-6" />

          <div className="grid grid-cols-3 gap-5">
            {data?.items?.map((item) => (
              <ProductItem key={item._id} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductPage;
