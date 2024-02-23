import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box sx={{ background: '#135890', paddingTop: '3rem', color: 'white' }}>
      <Grid container justifyContent="center">
        <Grid item xs={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Typography>
              <CategoryIcon />
            </Typography>
            <Typography>Otis Kit Pro</Typography>
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <Typography>
                <FacebookIcon />
              </Typography>
              <Typography>
                <TwitterIcon />
              </Typography>
              <Typography>
                <GitHubIcon />
              </Typography>
              <Typography>
                <YouTubeIcon />
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={{ fontWeight: 'bolder' }}>Company</Typography>
          <Typography sx={{ color: '#ffffffa1', marginTop: '1rem' }}>
            <Typography>About Us</Typography>
            <Typography>Freebies</Typography>
            <Typography>Premium Tools</Typography>
            <Typography>Blog</Typography>
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={{ fontWeight: 'bolder' }}>Resources</Typography>
          <Typography sx={{ color: '#ffffffa1', marginTop: '1rem' }}>
            <Typography>Illustrations</Typography>
            <Typography>Bits & Snippets</Typography>
            <Typography>Affiliate Program</Typography>
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={{ fontWeight: 'bolder' }}>Help & Support</Typography>
          <Typography sx={{ color: '#ffffffa1', marginTop: '1rem' }}>
            <Typography>Contact Us</Typography>
            <Typography>Knowledge Center</Typography>
            <Typography>Custom Development</Typography>
            <Typography>Sponsorships</Typography>
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={{ fontWeight: 'bolder' }}>Legal</Typography>
          <Typography sx={{ color: '#ffffffa1', marginTop: '1rem' }}>
            <Typography>Terms & Conditions</Typography>
            <Typography>Privacy Policy</Typography>
            <Typography>Licences (EULA)</Typography>
          </Typography>
        </Grid>
        <Box sx={{ marginTop: '2rem', fontWeight: '600' }}>All Rights reserved. Copyright &#169; Yatin Uppal</Box>
      </Grid>
    </Box>
  );
};

export default Footer;
