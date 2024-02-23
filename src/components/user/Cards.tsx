import React from 'react';
import PublicIcon from '@mui/icons-material/Public';
import PaymentsIcon from '@mui/icons-material/Payments';
import AppsIcon from '@mui/icons-material/Apps';
import ThreePIcon from '@mui/icons-material/ThreeP';
import { Box, Button, Card, IconButton, Typography } from '@mui/material';
import Image from 'next/image';

const Cards = () => {
  const data = [
    {
      icon: <PublicIcon />,
      heading: 'Fully Integrated',
      para1: 'We get insulted by others, lose trust',
      para2: 'for We get back freezes',
    },
    {
      icon: <PaymentsIcon />,
      heading: 'Payment functionality',
      para1: 'We get insulted by others, lose trust',
      para2: 'for We get back freezes',
    },
    {
      icon: <AppsIcon />,
      heading: 'Prebuilt components',
      para1: 'We get insulted by others, lose trust',
      para2: 'for We get back freezes',
    },
    {
      icon: <ThreePIcon />,
      heading: 'Improved Platform',
      para1: 'We get insulted by others, lose trust',
      para2: 'for We get back freezes',
    },
  ];

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
        <Box sx={{ width: '65%', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {data.map((item) => {
            return (
              <Card
                sx={{
                  width: '45%',
                  background: 'inherit',
                  boxShadow: 'none',
                  marginTop: '50px',
                  '&:hover': {
                    background: "#00000025",
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    cursor: "pointer"
                  },
                }}
              >
                <IconButton color="primary">{item.icon}</IconButton>
                <Box sx={{ marginLeft: '8px' }}>
                  <Typography sx={{ fontWeight: 'bold' }}>{item.heading}</Typography>
                  <Typography>{item.para1}</Typography>
                  <Typography>{item.para2}</Typography>
                </Box>
              </Card>
            );
          })}
        </Box>
        <Box sx={{ maxWidth: '45%', justifyContent: 'center', alignItems: 'center' }}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '30px',
              borderRadius: '20px',
            }}
          >
            <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image src="/img/images.jpeg" alt="photo" width={320} height={180} />
            </Card>
            <Typography
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '1.8rem',
              }}
            >
              <Typography sx={{ color: 'black', fontWeight: 'bold' }}>Get Insights On Search</Typography>
              <Typography sx={{ color: '#00000087', fontSize: '15px' }}>
                Website visitors today demand a frictionless user
              </Typography>
              <Typography sx={{ color: '#00000087', fontSize: '15px' }}>
                experience - especially when using search
              </Typography>
              <Typography sx={{ color: '#00000087', fontSize: '15px' }}>Because of high standards</Typography>
              <Button variant="contained" color="primary" sx={{ marginTop: '10px', color: 'white' }}>
                FIND OUT MORE
              </Button>
            </Typography>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Cards;
