import { Box, Typography } from '@mui/material';

const Heading = () => {
  return (
    <Box>
      <Box sx={{ background: 'white', padding: '10px', margin: '2rem', borderRadius: '10px' }}>
        <Typography variant="h2">Typography</Typography>
        <Typography sx={{ marginTop: '2rem', fontSize: '1.3rem' }}>
          Learn more about the typography that is used in the dashboard
        </Typography>
      </Box>
      <Box sx={{ background: 'white', padding: '10px', margin: '2rem', borderRadius: '10px' }}>
        <Typography variant="h2">Headings</Typography>
        <h1>h1. Themesberg heading</h1>
        <h2>h2. Themesberg heading</h2>
        <h3>h3. Themesberg heading</h3>
        <h4>h4. Themesberg heading</h4>
        <h5>h5. Themesberg heading</h5>
        <h6>h6. Themesberg heading</h6>
      </Box>
      <Box sx={{ background: 'white', padding: '10px', margin: '2rem', borderRadius: '10px' }}>
        <Typography>{'<h1>h1. Themesberg heading</h1>'},</Typography>
        <Typography>{'<h2>h2. Themesberg heading</h2>'},</Typography>
        <Typography>{'<h3>h3. Themesberg heading</h3>'},</Typography>
        <Typography>{'<h4>h4. Themesberg heading</h4>'},</Typography>
        <Typography>{'<h5>h5. Themesberg heading</h5>'},</Typography>
        <Typography>{'<h6>h6. Themesberg heading</h6>'},</Typography>
      </Box>
    </Box>
  );
};

export default Heading;
