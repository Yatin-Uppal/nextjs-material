'use client';

import { Button } from '@mui/material';
import Link from 'next/link';

const page = () => {
  return (
    <div style={{ margin: 'auto', display: 'flex', gap: '20px' }}>
      <Link href="/forms/login">
        <Button variant="contained" color="primary" type="submit">
          Login Form
        </Button>
      </Link>
      <Link href="/forms/signup">
        <Button variant="contained" color="primary" type="submit">
          Register Form
        </Button>
      </Link>
    </div>
  );
};

export default page;
