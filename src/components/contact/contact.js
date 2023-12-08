import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import '../../static/css/contact.css'


function Contact() {
    return (
        <div className='contact-page-main-container'>
            <div className='contact-page-details-div'>
                <h2 className='contact-page-div-title'> Contact Me</h2>
                <div>
                    <span className='contact-page-details'>Please fill this form or email directly at </span><a href="mailto:ipandey08@gmail.com" className='personal-email'>ipandey08@gmail.com</a>

                </div>
            </div>
            <Container className="contact-container">
                <form noValidate autoComplete="off">
                    <div className='first-last-name-div'>
                        <TextField
                            className="contact-first-name-field"
                            label="First Name*"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            InputProps={{
                                style: {
                                    color: '#2C3E50'
                                }
                            }}
                            InputLabelProps={{
                                style: {
                                    color: '#2C3E50'
                                }
                            }}
                        />
                        <TextField
                            className="contact-last-name-field"
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            InputProps={{
                                style: {
                                    color: '#2C3E50'
                                }
                            }}
                            InputLabelProps={{
                                style: {
                                    color: '#2C3E50'
                                }
                            }}
                        />
                    </div>
                    <TextField
                        className="contact-field"
                        label="Email*"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputProps={{
                            style: {
                                color: '#2C3E50'
                            }
                        }}
                        InputLabelProps={{
                            style: {
                                color: '#2C3E50'
                            }
                        }}
                    />
                    <TextField
                        className="contact-field"
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                        InputProps={{
                            style: {
                                color: '#2C3E50'
                            }
                        }}
                        InputLabelProps={{
                            style: {
                                color: '#2C3E50'
                            }
                        }}
                    />
                    <div className='submit-button-div'>
                        <Button variant="contained" color="primary" type="submit" className='submit-button'>
                            Submit
                        </Button>
                    </div>
                </form>
                <div className="circles-container">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </Container>
        </div>
    );
}

export default Contact;
