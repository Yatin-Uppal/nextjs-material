'use client';
import { useState, useCallback, FunctionComponent, PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';
import { Stack } from '@mui/material';
import { AppIconButton } from 'src/components';
import ErrorBoundary from '../components/ErrorBoundary';
import SideBar from './SideBar';
import TopBar from './TopBar';
import { LinkToPage } from '../utils/type';
import { useOnMobile } from '../hooks/layout';
import {
  SIDEBAR_DESKTOP_ANCHOR,
  SIDEBAR_MOBILE_ANCHOR,
  SIDEBAR_WIDTH,
  TOP_BAR_DESKTOP_HEIGHT,
  TOP_BAR_MOBILE_HEIGHT,
} from './config';
import { usePathname } from 'next/navigation';
import UserNavbar from 'src/components/user/userNavbar';
import User from 'src/components/user/User';

// TODO: change to your app name or other word
const TITLE_PRIVATE = 'Dashboard'; // Title for pages after authentication

/**
 * SideBar navigation items with links
 */
const SIDE_BAR_ITEMS: Array<LinkToPage> = [
  {
    title: 'Dashboard',
    path: '/',
    icon: 'dashboard',
  },
  {
    title: 'User Profile',
    path: '/userProfile',
    icon: 'login',
  },
  {
    title: 'Table List',
    path: '/table',
    icon: 'table',
  },
  {
    title: 'Typography',
    path: '/typography',
    icon: 'content',
  },
  // {
  //   title: 'Icons',
  //   path: '/icons',
  //   icon: 'scatter',
  // },
  {
    title: 'Forms',
    path: '/forms',
    icon: 'forms',
  },
  // {
  //   title: 'Maps',
  //   path: '/maps',
  //   icon: 'location',
  // },
  // {
  //   title: 'Notifications',
  //   path: '/notifications',
  //   icon: 'notifications',
  // },
  // {
  //   title: 'RTL Support',
  //   path: '/rtl-support',
  //   icon: 'language',
  // },
];

if (process.env.NEXT_PUBLIC_DEBUG) {
  SIDE_BAR_ITEMS.push({
    title: '[Debug Tools]',
    path: '/dev',
    icon: 'settings',
  });
}

/**
 * Renders "Private Layout" composition
 * @layout PrivateLayout
 */
const PrivateLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  console.log('pathname', pathname);
  const router = useRouter();
  const onMobile = useOnMobile();
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const shouldOpenSideBar = onMobile ? sideBarVisible : true;
  const title = TITLE_PRIVATE;

  const onLogoClick = useCallback(() => {
    // Navigate to first SideBar's item or to '/' when clicking on Logo/Menu icon when SideBar is already visible
    router.push(SIDE_BAR_ITEMS?.[0]?.path || '/');
  }, [router]);

  const onSideBarOpen = useCallback(() => {
    if (!sideBarVisible) setSideBarVisible(true); // Don't re-render Layout when SideBar is already open
  }, [sideBarVisible]);

  const onSideBarClose = useCallback(() => {
    if (sideBarVisible) setSideBarVisible(false); // Don't re-render Layout when SideBar is already closed
  }, [sideBarVisible]);

  if(pathname === '/userProfile'){
    return <><User/></>
  }

  return (
    <Stack
      direction="column"
      sx={{
        minHeight: '100vh', // Full screen height
        paddingTop: onMobile ? TOP_BAR_MOBILE_HEIGHT : TOP_BAR_DESKTOP_HEIGHT,
        paddingLeft: shouldOpenSideBar && SIDEBAR_DESKTOP_ANCHOR.includes('left') ? SIDEBAR_WIDTH : 0,
        paddingRight: shouldOpenSideBar && SIDEBAR_DESKTOP_ANCHOR.includes('right') ? SIDEBAR_WIDTH : 0,
      }}
    >
      <Stack component="header">
        <TopBar
          startNode={<AppIconButton icon="menu" onClick={shouldOpenSideBar ? onLogoClick : onSideBarOpen} />}
          title={title}
        />

        <SideBar
          anchor={onMobile ? SIDEBAR_MOBILE_ANCHOR : SIDEBAR_DESKTOP_ANCHOR}
          open={shouldOpenSideBar}
          variant={onMobile ? 'temporary' : 'persistent'}
          items={SIDE_BAR_ITEMS}
          onClose={onSideBarClose}
        />
      </Stack>

      <Stack
        component="main"
        sx={{
          flexGrow: 1, // Takes all possible space
          paddingLeft: 1,
          paddingRight: 1,
          paddingTop: 1,
        }}
      >
        <ErrorBoundary name="Content">{children}</ErrorBoundary>
      </Stack>
    </Stack>
  );
};

export default PrivateLayout;
