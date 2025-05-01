import type { FCC } from '@/types';
import type { ReactNode } from 'react';
import Header from './Header';
import TopBar from './TopBar';

interface Props {
  children: ReactNode;
}

const MainLayout: FCC<Props> = ({ children }) => {
  return (
    <div className="overflow-clip">
      <TopBar />
      <Header />
      <main className="mx-auto max-w-[1440px]">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
