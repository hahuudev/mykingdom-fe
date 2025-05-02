'use client';
import { HStack } from '@/components/utilities';
import { useMobile } from '@/hooks/breakpoint';
import { cn } from '@/libs/common';
import { ROUTER } from '@/libs/router';
import { useAppStore } from '@/stores/AppStore';
import { useUserStore } from '@/stores/UserStore';
import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Cart from './Cart';
import SearchComponent from './SearchComponent';
import UserInfo from './UserInfo';

const Header = () => {
  const isMobile = useMobile();
  const queryClient = useQueryClient();

  const openSideBar = useAppStore.use.openSideBar();
  const router = useRouter();
  const { user, setUser } = useUserStore();

  const handleLogout = () => {
    setUser({} as any);
    queryClient.clear();
    router.replace(ROUTER.SIGN_IN);
    toast.success('Logout successfully!');
  };

  return (
    <header
      className={cn(
        'sticky top-0 right-0 z-40 w-full bg-primary-600 px-4 py-4 text-white shadow-header lg:px-8',
        !isMobile && ' h-header '
      )}
    >
      <HStack className="mx-auto max-w-[1440px]" pos="apart" spacing={isMobile ? 20 : 48}>
        <Link href={ROUTER.HOME}>
          <Image src="/images/logo.png" alt="logo" width={200} height={60} />
        </Link>

        <HStack className="flex-1">
          <SearchComponent />
        </HStack>

        <HStack pos="right" spacing={isMobile ? 8 : 48} className="">
          <Cart />
          <UserInfo />
        </HStack>
      </HStack>
    </header>
  );
};

export default Header;
