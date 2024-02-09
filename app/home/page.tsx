"use client"
import { Metadata, NextPage } from 'next';
import { Stack, Typography } from '@mui/material';
import { AppLink } from 'src/components';
import DemoAppAlert from '../dev/components/DemoAppAlerts';
import DemoAppButton from '../dev/components/DemoAppButton';
import DemoAppIcon from '../dev/components/DemoAppIcon';
import DemoAppIconButton from '../dev/components/DemoAppIconButton';
import DemoAppImage from '../dev/components/DemoAppImage';
import BasicLineChart from 'src/components/charts/BasicLineChart';
import BasicBars from 'src/components/bars/BasicBars';
import Chart from 'src/components/lineChart/Chart';
import Tasks from 'src/components/tasks/Tasks';
import Employeestats from 'src/components/employeeStats/Employeestats';
import Memory from 'src/components/memory/Memory';
import Revenue from 'src/components/Revenue/Revenue';
import FixedIssues from 'src/components/FixedIssues/FixedIssues';
import Followers from 'src/components/Followers/Followers';

// export const metadata: Metadata = {
//   title: 'Dashboard',
//   description: '_DESCRIPTION_',
// };

/**
 * Main page of the Application
 * @page Home
 */
const Home: NextPage = () => {

  const accessToken = sessionStorage.getItem('access_token');

  // Check if access token is not present
  if (!accessToken) {
    return <div>Please Login through by clicking on sidebar</div>;
  }

  // const accessToken = sessionStorage.getItem('access_token');

  return (
    <div style={{display: 'flex', flexFlow: "row wrap", marginLeft: '50px', marginTop: "50px"}}>
      <Memory/>
      <Revenue/>
      <FixedIssues/>
      <Followers/>

    <BasicLineChart/>
    <BasicBars/>
    <Chart/>
    <div style={{display: 'flex', margin: '50px 50px'}}>
    <Tasks/>
    <Employeestats/>
    </div>
    </div>
    // <Stack spacing={2} padding={2}>
    //   <Stack>
    //     <Typography variant="h3">About application</Typography>
    //     <Typography variant="body1">
    //       This application is a mix of{' '}
    //       <AppLink href="https://nextjs.org/docs/api-reference/create-next-app">Create Next App</AppLink> and{' '}
    //       <AppLink href="https://mui.com/">MUI</AppLink> with set of reusable components and utilities to build
    //       professional <AppLink href="https://nextjs.org/">NextJS</AppLink> application faster.
    //     </Typography>
    //   </Stack>

    //   <Stack alignItems="center" spacing={1}>
    //     <DemoAppAlert />
    //     <DemoAppButton />
    //     <DemoAppIcon />
    //     <DemoAppIconButton />
    //     <DemoAppImage />
    //   </Stack>
    // </Stack>
  );
};

export default Home;
