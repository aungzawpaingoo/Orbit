import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function TitleBreadCrump({ titleOne, titleTwo, titleThree }) {
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link sx={{ color: 'text.primary', fontSize: '0.875rem' }} underline="hover" color="inherit" href="#" className="text-sm">
          {titleOne}
        </Link>
        <Link sx={{ color: 'text.primary', fontSize: '0.875rem' }} underline="hover" color="inherit" href="#" className="text-sm">
          {titleTwo}
        </Link>
        <Typography sx={{ color: 'text.primary', fontSize: '0.875rem' }} className="text-sm">
          {titleThree}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
