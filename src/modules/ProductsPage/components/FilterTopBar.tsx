import SelectCustom from '@/components/ui/select-custom';
import { HStack } from '@/components/utilities';
import React from 'react';
import { FILTER_LIST } from '../libs/consts';

const FilterTopBar = () => {
  return (
    <HStack pos="apart" noWrap className="text-sm">
      <span>a</span>

      <span>40 products</span>

      <HStack>
        Filter by: <SelectCustom data={FILTER_LIST} />
      </HStack>
    </HStack>
  );
};

export default FilterTopBar;
