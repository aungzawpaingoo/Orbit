import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
}

export default function BasicBreadcrumbs({ project }) {
  return (
    <div role="presentation" onClick={handleClick} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator=">"
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& .MuiBreadcrumbs-separator': { marginLeft: '4px', marginRight: '4px' },
        }}
      >
        <Link underline="hover" color="inherit" href="/projects">
          Projects
        </Link>
        {project ? (
          <>
            <Link underline="hover" color="inherit" href={`/projects/${project.key}`}>
              {project.name}
            </Link>
          </>
        ) : (
          <Typography sx={{ display: 'inline', color: 'text.primary' }}>Project Details</Typography>
        )}
      </Breadcrumbs>
    </div>
  );
}
