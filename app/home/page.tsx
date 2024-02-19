'use client';
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
import Todo from 'src/components/todo/Todo';
import Employeestats from 'src/components/employeeStats/Employeestats';
import Memory from 'src/components/memory/Memory';
import Revenue from 'src/components/Revenue/Revenue';
import FixedIssues from 'src/components/FixedIssues/FixedIssues';
import Followers from 'src/components/Followers/Followers';
import Footer from 'src/components/footer/Footer';

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
    <>
      <div style={{ display: 'flex', flexFlow: 'row wrap', marginLeft: '50px', marginTop: '50px' }}>
        <Memory />
        <Revenue />
        <FixedIssues />
        <Followers />
      </div>

      <div style={{ display: 'flex', flexFlow: 'row wrap', marginLeft: '50px', marginTop: '50px' }}>
        <BasicLineChart />
        <BasicBars />
        <Chart />
      </div>
      {/* <div style={{ display: 'flex', flexFlow: 'row wrap', marginLeft: '50px', marginTop: '50px' }}> */}
      <div style={{ maxWidth: '100%', display: 'flex', margin: '50px 50px', flexWrap: 'wrap' }}>
        <Todo />
        <Employeestats />
      </div>
      <Footer />
    </>
  );
};

export default Home;
