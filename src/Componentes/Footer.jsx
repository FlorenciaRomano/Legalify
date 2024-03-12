import React from 'react';
import {
  Box,
  Typography,
  Link,
  Stack,
  useMediaQuery
} from '@mui/material';

const Footer = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box
      sx={{
        bgcolor: 'black',
        py: 4,
        px: isMobile ? 2 : 4,
        textAlign: 'center',
        marginTop:10
      }}
    >
      <Typography variant="body2" color="white">
        LEGALIFY ES UNA MARCA REGISTRADA DE LEGALIFY SAS 2020
      </Typography>
    
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        my={2}
      >
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          color="white"
        >
          Instagram
        </Link>
        <Link
          href="https://www.owlo.com/"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          color="white"
        >
          OWŁO
        </Link>
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          color="white"
        >
          Facebook
        </Link>
        <Link
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          color="white"
        >
          LinkedIn
        </Link>
      </Stack>
      <Link href='/terms' target='_blank'>

      <Typography variant="body2" color="white" fontSize={12}>
        Términos y condiciones y política de cookies
      </Typography>
      </Link>
      <Typography variant="body2" color="white" mt={2} fontSize={12}>
        &copy; {new Date().getFullYear()} Legalify SAS
      </Typography>
    </Box>
  );
};

export default Footer;