'use client';

import { useProductsQuery } from '@/api/product/queries';
import type { IProductQuery } from '@/api/product/types';
import Breadcrumb from '@/components/Breadcrumb';
import { Separator } from '@/components/ui/separator';
import { TablePagination } from '@/components/ui/table';
import Container from '@/components/wrapper/Container';
import { onMutateError } from '@/libs/common';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import FilterLeftBar from './components/FilterLeftBar';
import FilterTopBar from './components/FilterTopBar';
import ProductItem from './components/ProductItem';

const ProductPage = () => {
  const [paramsQuery, setParamsQuery] = useState<Partial<IProductQuery>>({
    page: 1,
    limit: 20,
  });
  const { slug } = useParams();

  const { data, isFetching } = useProductsQuery({ variables: paramsQuery, onError: onMutateError });

  return (
    <section>
      <Breadcrumb breadcrumbs={[{ name: 'Home' }, { name: 'Collection' }]} />

      <Container className="mt-10">
        <div className=" flex">
          <FilterLeftBar />

          <div className="ml-4 flex-1 lg:ml-8">
            <FilterTopBar />

            <Separator className="my-6" />

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              {data?.items?.map((item) => (
                <ProductItem key={item._id} {...item} />
              ))}
            </div>

            <div className="mt-10">
              <TablePagination
                pagination={data?.meta}
                onPageSizeChange={(limit) => setParamsQuery((prev) => ({ ...prev, limit }))}
                onPageChange={(page) => setParamsQuery((prev) => ({ ...prev, page }))}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductPage;
