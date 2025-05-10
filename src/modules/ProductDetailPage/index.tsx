import { getProductByIdOrSlug } from '@/api/product/requests';
import Breadcrumb from '@/components/Breadcrumb';
import Container from '@/components/wrapper/Container';
import React from 'react';
import ProductInfo from './components/ProductInfo';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const ProductDetailPage = async ({ params }: Props) => {
  const slug = (await params).slug;
  const data = await getProductByIdOrSlug(slug);

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
