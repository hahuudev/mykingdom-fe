import { getProductByIdOrSlug } from '@/api/product/requests';
import Breadcrumb from '@/components/Breadcrumb';
import Container from '@/components/wrapper/Container';
import React from 'react';
import ProductInfo from './components/ProductInfo';

const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getProductByIdOrSlug(params.slug);

  return (
    <div>
      <Breadcrumb breadcrumbs={[{ name: 'Home' }, { name: 'Product' }]} />

      <Container className="mt-10">
        <ProductInfo {...data} />
      </Container>
    </div>
  );
};

export default ProductDetailPage;
