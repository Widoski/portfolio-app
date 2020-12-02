import React, { useState } from 'react';
import { Tabs, Tab, Grid, AppBar, Button, ButtonGroup } from '@material-ui/core';
import Website from './MyWebsiteCarousel.js';
import System from './SystemCarousel.js';

export default function TabPanel(props) {
    const [value, setValue] = useState(0);

    const handleChange = (e, id) => {
        setValue(id);
    }

    return (
        <Grid item xs={12} style={{ background: "white" }}>
            <AppBar position="static" style={{ backgroundColor: "#102641" }}>
                <Tabs value={value} onChange={handleChange} centered={true}>
                    <Tab label="Project 1" value={0} />
                    <Tab label="Project 2" value={1} />
                </Tabs>
            </AppBar>
            <Projects value={value} id={0}>
                <System />
                <ButtonGroup variant="contained" color="primary" fullWidth>
                    <Button
                        onClick={() => console.log('anda')}
                    >
                        Github
                </Button>
                    <Button
                        onClick={() => props.showProjects(false)}
                    >
                        Go back
                </Button>
                </ButtonGroup>
            </Projects>
            <Projects value={value} id={1}>
                <Website />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => console.log('anda')}
                >
                    Github
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => props.showProjects(false)}
                >
                    Go back
                </Button>
            </Projects>

        </Grid>
    )
}

function Projects(props) {
    const { id, value, children } = props;

    return (
        <>
            {
                value === id ? (
                    <Grid container item xs={12} style={{ background: "white" }}>
                        {children}
                    </Grid>
                ) : null
            }
        </>
    )
}

