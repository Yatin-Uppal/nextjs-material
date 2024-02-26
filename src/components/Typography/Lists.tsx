import { Box, Typography } from '@mui/material';

const Lists = () => {
  return (
    <Box>
      <Box sx={{ background: 'white', padding: '10px', margin: '2rem', borderRadius: '10px' }}>
        <Typography variant="h3">Unordered list</Typography>
        <ul style={{ marginLeft: '1.5rem' }}>
          <li>Minutes of the last meeting</li>
          <li>Do we need yet more meetings?</li>
          <li>
            Any other business
            <ul style={{ marginLeft: '1em' }}>
              <li>Programming</li>
              <li>Web Design</li>
              <li>Database</li>
            </ul>
          </li>
          <li>Something funny</li>
        </ul>
      </Box>
      <Box sx={{ background: 'white', padding: '10px', margin: '2rem', borderRadius: '10px' }}>
        <Typography variant="h3">Ordered list</Typography>
        <ol style={{ marginLeft: '1.5rem' }}>
          <li>Minutes of the last meeting</li>
          <li>Do we need yet more meetings?</li>
          <li>
            Any other business
            <ol style={{ marginLeft: '1em' }}>
              <li>Programming</li>
              <li>Web Design</li>
              <li>Database</li>
            </ol>
          </li>
          <li>Something funny</li>
        </ol>
      </Box>
    </Box>
  );
};

export default Lists;
