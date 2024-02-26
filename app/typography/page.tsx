import { Box } from '@mui/material';
import Paragraphs from 'src/components/Typography/Paragraphs';
import Heading from 'src/components/Typography/Heading';
import Lists from 'src/components/Typography/Lists';

const Typography = () => {
  return (
    <Box sx={{margin: "auto"}}>
      <Heading />
      <Paragraphs />
      <Lists />
    </Box>
  );
};

export default Typography;
