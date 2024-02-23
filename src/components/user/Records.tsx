import { Box, Typography } from '@mui/material';
import React from 'react';

const Records = () => {
  const recordData = [
    {
      number: '5234',
      type: 'Projects',
      description: 'of high performing level are led by a',
      description1: 'certified project manager',
    },
    {
      number: '3400+',
      type: 'Hours',
      description: 'That meets quality standards required by',
      description1: 'our users',
    },
    {
      number: '24/7',
      type: 'Support',
      description: 'Actively engage team members that',
      description1: 'finishes on time',
    },
  ];

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '2rem' }}>
        {recordData.map((item) => {
          return (
            // <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h4" sx={{ margin: '0.8rem', color: '#009eff', fontWeight: 'bold' }}>
                {item.number}
              </Typography>
              <Typography sx={{ fontWeight: 'bold' }}>{item.type}</Typography>
              <Typography sx={{ color: '#00000066' }}>{item.description}</Typography>
              <Typography sx={{ color: '#00000066' }}>{item.description1}</Typography>
            </Box>
            // </Box>
          );
        })}

        {/* <Box>
          <Typography>5234</Typography>
          <Typography>Projects</Typography>
          <Typography>high performance level</Typography>
          <Typography>high performance level</Typography>
        </Box>
        <Box>
          <Typography>5234</Typography>
          <Typography>Projects</Typography>
          <Typography>high performance level</Typography>
          <Typography>high performance level</Typography>
        </Box>
        <Box>
          <Typography>5234</Typography>
          <Typography>Projects</Typography>
          <Typography>high performance level</Typography>
          <Typography>high performance level</Typography>
        </Box> */}
      </Box>
    </>
  );
};

export default Records;
