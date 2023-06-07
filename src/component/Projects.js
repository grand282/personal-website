import React from 'react';
import { Typography, Box, Grid, Button, Container, Stack } from '@mui/material';
import {Card,CardActions,CardContent,CardMedia} from '@mui/material';
import { Link } from 'react-router-dom';
import { apiArray } from './utilities/Utility';

function projects() {
  return (
    <div>
      <Box bgcolor='lightgrey'>
        <Typography textAlign="center" color="error" variant="h2">
          Projects
        </Typography>
        <Box mt={4} pb={6}>
        
          <Grid container gap={4} columns={{ xs: 1, sm: 1, md: 2 }}>
           <Container>
            <Stack 
            direction= 'column'
            //alignItems="center"
            columnGap={2}
            rowGap={2}>
            {apiArray.map((item, idx) =>(
              <Card key={idx} sx={{ width: "80%" }}>
              <CardMedia
                component="img"
                alt={item.name}
                image={item.img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                variant='outlined' 
                size='small'
                >
                  <Link 
                  to={item.link} 
                  style={{ textDecoration: 'none', 
                  color: 'blue'}}
                  >
                  View
                  </Link>
                </Button>
                <Button 
                variant='outlined' 
                size='small'
                >
                  <Link 
                  to={item.link2} 
                  style={{ textDecoration: 'none', 
                  color: 'blue'}}
                  >
                  Code
                  </Link>
                </Button>
              </CardActions>
             </Card>
            ))}
            </Stack>
            </Container>
          </Grid>
        
        </Box>
      </Box>
    </div>
  )
}

export default projects
