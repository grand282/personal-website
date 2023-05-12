import React from 'react';
import {Container, Box, Stack, Typography} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink,Link } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';



function Navbar() {
  return (
        <Box height="100px">
          <Container>
            <Stack
            display="flex"
            direction={{ xs: 'column', sm: 'column', md: 'row' }}
            justifyContent="space-between"
            >
                <NavLink style={{ textDecoration: 'none', color: 'blue'}} to="/">
                  <AdbIcon  sx={{fontSize: 50, color:'royalblue'}} />
                </NavLink>
                <Box mt="20px">
                  <Stack direction="row">
                  <Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'blue'}} to="/about">About</NavLink>
                  </Typography>
                  <Typography ml="10px">
                    <NavLink style={{ textDecoration: 'none', color: 'blue'}} to="/skills">Skills</NavLink>
                  </Typography>
                  <Typography ml="10px">
                    <NavLink style={{ textDecoration: 'none', color: 'blue'}} to="/projects">Projects</NavLink>
                  </Typography>
                  <Typography ml="10px">
                    <NavLink style={{ textDecoration: 'none', color: 'blue'}} to="/contact">Contact</NavLink>
                  </Typography>
                  <Typography ml="10px">
                  <Link style={{ textDecoration: 'none', color: 'blue'}} to="https:github.com/grand282">
                  <GitHubIcon />
                  </Link>
                  </Typography>
                  <Typography ml="10px">
                  <Link style={{ textDecoration: 'none', color: 'blue'}} to="https://www.linkedin.com/in/grand-gize-2b8127256/">
                  <LinkedInIcon />
                  </Link>
                  </Typography>
                  </Stack>
                </Box>
            </Stack>
          </Container>
        </Box>
  )
}

export default Navbar