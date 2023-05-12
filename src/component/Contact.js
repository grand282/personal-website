import React from 'react';
import styles from './Contact.css';
import {Box,Typography, TextField, Container, Stack} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';


 function Contact() {
  const [state, handleSubmit] = useForm("xqkojpwj");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  
  return (
    <div>
       <Box pb={10} bgcolor="lightgrey">
      <Typography color="primary" mt="20px" textAlign="center" variant='h2'>
        CONTACT
      </Typography>
      <Typography mt="10px" color='secondary' textAlign="center">
        I'D LOVE TO HEAR FROM YOU
      </Typography>
      <Stack mt='10px' ml='46%' direction='row'>
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
      <form onSubmit={handleSubmit}>
      <Box mt="10px" textAlign="center">
      <Container>
      <Typography mt="10px">
        <TextField 
        type="email"
        id='email' 
        label="Email" 
        sx={{width: '50%'}} 
        variant="outlined"  
        />
      </Typography><br/>
      
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
     <Box ml="25%" sx={{width: '50%'}}>
      <textarea
      className={styles}
        id="message"
        name="message"
        cols={30}
        rows={4}
        wrap
        placeholder='Leave me a message'
        onFocus={(e) => (e.target.style.border = '3px solid royalblue')}
        onBlur={(e) => (e.target.style.border = '')}
        style={{
          boxSizing: "border-box",
          border: '2px solid #ccc',
          borderRadius: '4px',
          backgroundColor: '#f8f8f8',
          width: '100%',
          resize: 'none'
        }}
      />
      </Box><br/>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} style={{
      backgroundColor: 'royalblue',
      textDecoration: 'none',
      cursor: 'pointer', 
      width: '5.5rem', 
      height: '25px',
      borderRadius: '6px',
      marginTop: '15px',
      marginBottom: '15px'
    }}>
        Submit
      </button>

      </Container>
      </Box>
    </form>
    </Box>
    </div>
  )
}

export default Contact