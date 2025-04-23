'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { Icons } from '@/assets/icons';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { HStack, VStack } from '@/components/utilities';
import { useMobile } from '@/hooks/breakpoint';
import { cn } from '@/libs/common';
import { ROUTER } from '@/libs/router';
import { useAppStore } from '@/stores/AppStore';
import { useUserStore } from '@/stores/UserStore';
import { toast } from 'react-toastify';

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
        'sticky top-0 right-0 z-40 flex w-full items-center justify-between bg-primary-600 px-4 py-4 shadow-header lg:px-8',
        !isMobile && ' h-header '
      )}
    >
      <HStack className="w-full" pos="apart">
        <HStack spacing={48}>
          <Separator orientation="vertical" className="hidden h-9 lg:block" />
        </HStack>

        <HStack pos="right" spacing={isMobile ? 8 : 48} className="">
          <Popover>
            <PopoverTrigger asChild>
              <HStack className="cursor-pointer hover:opacity-90" spacing={0}>
                <Avatar>
                  <AvatarImage src="/images/no-avatar-user.png" />
                </Avatar>

                {/* <h4 className="mx-4 hidden max-w-[110px] font-semibold text-base text-primary lg:line-clamp-1">{user?.user_name} &nbsp;</h4> */}

                <div className="hidden lg:block">{/* <Icons.menu className="h-8 w-8" /> */}</div>
              </HStack>
            </PopoverTrigger>

            <PopoverContent className="w-[content]">
              <VStack spacing={4}>
                <Separator />

                <HStack className="h-9 cursor-pointer px-4 text-sm hover:bg-grey-100" onClick={handleLogout}>
                  <Icons.logout className="mr-3 h-5 w-5" />
                  <span className="ml-1">Logout</span>
                </HStack>
              </VStack>
            </PopoverContent>
          </Popover>
        </HStack>
      </HStack>
    </header>
  );
};

export default Header;
