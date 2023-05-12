import React from 'react';
import { Box,Container,Divider,List,ListItem,Stack,Typography  } from '@mui/material';
import Icon2 from './images/971.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
function Skills() {
  return (
    <Box mt="25px">
      <Box>
        <Container>
        <img src={Icon2} height="350px" width="90%" alt='tools' />
        </Container>
      </Box>
        <Box pt={10} pb={10} className='skills'>
      <Divider />
      <Typography mt="20px" textAlign="center" variant="h2" color='error'>Skills</Typography>
      <Typography textAlign="center" variant='h5' mt={3} sx={{fontStyle:'Sans-serif '}}>
        As far as skills go am specialised in the following <br/>technologies
        which i believe are important to a <br/>front-end developer;
      </Typography>
      <Typography color="secondary" mt="20px" textAlign="center" variant='h4'>
        TECHNOLOGIES
      </Typography>
      <Stack 
      justifyContent="space-evenly"
      direction={{ xs: 'column', sm: 'column', md: 'row' }}
      >
        <Box>
          <List>
          <ListItem>
          <Typography variant='h5' color="primary">Javascript</Typography>
        </ListItem>
        <Divider/>
        <ListItem>
          <Typography variant='h5' color="primary">React js</Typography>
        </ListItem>
        <Divider/>
        <ListItem>
          <Typography variant='h5' color="primary">Next js</Typography>
        </ListItem>
        <Divider/>
        <ListItem>
          <Typography variant='h5' color="primary">Python</Typography>
        </ListItem>
        <Divider/>
          </List>
        </Box>
        <Box>
          <List>
          <ListItem>
          <Typography variant='h5' color="primary">Express js</Typography>
        </ListItem>
        <Divider/>
        <ListItem>
          <Typography variant='h5' color="primary">Node js</Typography>
        </ListItem>
        <Divider/>
        <ListItem>
          <Typography variant='h5' color="primary">React Router</Typography>
        </ListItem>
        <Divider/>
          </List>
        </Box>
        <Box>
          <List> 
        <ListItem>
          <Typography variant='h5' color="primary">Material ui</Typography>
        </ListItem>
        <Divider/>
        <ListItem>
          <Typography variant='h5' color="primary">SQL</Typography>
        </ListItem>
        <Divider/>
        <ListItem>
          <Typography variant='h5' color="primary">Bootstrap</Typography>
        </ListItem>
        <Divider/>
        <ListItem>
          <Typography variant='h5' color="primary">HTML/CSS</Typography>
        </ListItem>
        <Divider/>
          </List>
        </Box>
      </Stack>
      
      <Typography color="error" mt="20px" textAlign="center" variant='h4'>
        TECH TOOLS
      </Typography>
      <List>
      <ListItem>
          <Typography variant='h5' color="secondary">Postman</Typography>
        </ListItem>
        <Divider/>
        <ListItem>
          <Typography variant='h5' color="secondary"><GitHubIcon/>GitHub</Typography>
        </ListItem>
        <Divider/>
      </List>
    </Box>
    </Box>
  )
}

export default Skills