import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Search = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={6}>
          <Box sx={{ padding: '3rem' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Be the first to see the news
            </Typography>
            <Typography sx={{ marginBottom: '2rem', color: '#00000078' }}>
              <Typography>
                Your company may not be in the software businees, but eventually, a software company will
              </Typography>
              <Typography>be in your business.</Typography>
            </Typography>
            <Typography>
              <TextField id="outlined-basic" label="Email here..." variant="outlined" sx={{ width: '60%' }} />
              <Button
                variant="contained"
                sx={{ marginLeft: '27px', color: 'white', padding: '15px', marginTop: '2px', background: '#009eff' }}
              >
                SUBSCRIBE
              </Button>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex' }}>
          <Box sx={{ marginLeft: 'auto', padding: '3rem' }}>
            <Image src="/img/lap.jpeg" alt="laptop" width={340} height={250} style={{ borderRadius: '20px' }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
