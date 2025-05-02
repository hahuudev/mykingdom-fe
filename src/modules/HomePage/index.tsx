'use client';
import { VStack } from '@/components/utilities';
import Container from '@/components/wrapper/Container';
import React from 'react';
import Banner from './components/Banner';
import Brand from './components/Brand';
import Category from './components/Category';

const HomePage = () => {
  return (
    <Container>
      <VStack spacing={48}>
        <Banner />

        <Category />

        <Brand />
      </VStack>

      <div className="h-[300px]"></div>
    </Container>
  );
};

export default HomePage;
