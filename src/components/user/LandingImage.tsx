import React from 'react';
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import './User.css';
import { FacebookOutlined } from '@mui/icons-material';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import Link from 'next/link';

const LandingImage = () => {
  return (
    <>
      <div className="user_page_upper_div">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '500px',
            color: 'white',
          }}
        >
          <Typography sx={{ fontWeight: '700', fontSize: '36px' }}>Work with an amazing team|</Typography>
          <Typography sx={{ marginTop: '-100px', width: '40%', fontSize: '18px' }}>
            We are constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play
            this game
          </Typography>
          <Link href="/">
            <Button variant="contained" sx={{ background: 'white' }}>
              CREATE ACCOUNT
            </Button>
          </Link>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              marginBottom: '-28px',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Typography>Find us on</Typography>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <FacebookOutlined />
              <InstagramIcon />
              <TwitterIcon />
              <GoogleIcon />
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default LandingImage;
