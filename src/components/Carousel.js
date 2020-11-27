import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box, Typography, Grid } from '@material-ui/core';

export default function Caroussel() {
    return (
        <Carousel animation="slide" >
            <Box display="flex" justifyContent="center" textAlign="center">
                <Grid item lg={6}>
                <Typography variant="h5">
                    <Box
                        id="about"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        p={5}
                        height="200px"
                        fontWeight="bold"
                        letterSpacing={2}
                        color="##282726"
                    >
                        
                        ¡Welcome! 
                        <hr color="black" width="250px" />
                        My name is Diego Orefici and I'm a Junior Frontend Developer. I invite you to get on board and look some piece of my work and experience below. ¡Thanks for stopping by!

                    </Box>
                    </Typography>
                </Grid>
            </Box>
            <Box display="flex" justifyContent="center" textAlign="center">
                <Grid item lg={6}>
                <Typography variant="h5">
                    <Box
                        id="about"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        p={5}
                        height="200px"
                        fontWeight="bold"
                        letterSpacing={2}
                        color="##282726"
                    >
                        
                            
						
                    </Box>
                    </Typography>
                </Grid>
            </Box >
            <Box display="flex" justifyContent="center" textAlign="center" >
                <Grid item lg={6}>
                <Typography variant="h5">
                    <Box
                        id="about"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        p={5}
                        height="200px"
                        fontWeight="bold"
                        letterSpacing={2}
                        color="##282726"
                    >
                        As a front end developer, I've been working freelance with some good developers, whose guide me succesfully to take best choices at the time of learning. I considered it as a great advantage to look forward and keep going.
                        As a front end developer, I've been throught several proyects. Always working freelance with some good developers, who guide me succesfully to take best choices at the time of learning.
						
                    </Box>
                    </Typography>
                </Grid>
            </Box>
        </Carousel >

    )

}
