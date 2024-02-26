import { Box, Typography } from '@mui/material';
import React from 'react';

const Paragraphs = () => {
  return (
    <>
      <Box sx={{ background: 'white', padding: '10px', margin: '2rem', borderRadius: '10px' }}>
        <Typography variant="h4">Paragraphs</Typography>
        <Typography>
          Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving
          your other innovations.
        </Typography>
        <Typography>
          My favorite things in life don’t cost any money. It’s really clear that the most precious resource we all have
          is time.
        </Typography>
      </Box>
      <Box sx={{ background: 'white', padding: '10px', margin: '2rem', borderRadius: '10px' }}>
        <Typography>
          {
            '<p>Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.</p>'
          }
        </Typography>
        <Typography>
          {
            '<p>My favorite things in life don’t cost any money. It’s really clear that the most precious resource we all have is time.</p>'
          }
        </Typography>
      </Box>
    </>
  );
};

export default Paragraphs;
