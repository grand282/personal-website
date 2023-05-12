import { Typography, Box, Stack, Divider, Container } from '@mui/material'
import React from 'react'
import Icon1 from './images/19362653.jpg';
function About() {
  return (
    <Box pb="60px">
      <Stack
      display="flex"
      direction={{ xs: 'column', sm: 'column', md: 'row' }}
      justifyContent="space-around"
      >
      <Box>
      <Container>
      <img src={Icon1} height="100%" width="90%" alt='programer' />
      </Container>
      </Box>
      <Box>
      <Typography  color="secondary" variant='h2'>
        Hi    
      </Typography>
      <Divider/>
      <Typography  color="primary" variant='h2'>
        My
      </Typography>
      <Divider/>
      <Typography  color="secondary" variant='h2'>
        Name is
      </Typography>
      <Divider/>
      <Typography  color="error" variant='h2'>
        Grand Gize
      </Typography>
      <Divider/>
      <Typography  color="secondary" variant='h2'>
        And i 
      </Typography>
      <Divider/>
      <Typography  color="primary" variant='h2'>
        Make websites
      </Typography>
      <Divider/>
      </Box>
      </Stack>
        <Box>
        <Typography mt="35px" textAlign="center" color="error" variant='h3'>
            About Me
        </Typography>
        <Container>
        <Typography mt="30px" textAlign="center" variant='h5' sx={{fontStyle:'Sans-serif', }}>
        Experienced React front-end developer with passion for problem-solving and eagerness 
        to explore new technologies.Valuable asset to teams due to love for engineering and 
        professional development. <br/> Continuously improves skills and ideal for companies seeking 
        talented front-end web developer.
        </Typography>
        </Container>
        

        </Box>
        
    </Box>
  )
}

export default About