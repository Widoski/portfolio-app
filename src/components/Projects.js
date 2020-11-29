import React, { useState } from 'react';
import { Tabs, Tab, Grid, AppBar, Button } from '@material-ui/core';
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
            </Projects>
            <Projects value={value} id={1}>
                <Website />
            </Projects>
            <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => props.showProjects(false)}
            >
                Go back
                </Button>
        </Grid>
    )
}

function Projects(props) {
    const { id, value, children } = props;
    console.log(id, value, children)

    return (
        <div style={{ width: "100%" }}>
            {
                value === id ? (
                    <p>
                        {children}
                    </p>
                ) : null
            }
        </div>
    )
}

