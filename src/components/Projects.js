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
        <Grid item xs={12} style={{ background: "#f5f5f5" }}>
            <AppBar position="static" color="primary">
                <Tabs value={value} onChange={handleChange} centered={true} indicatorColor="inherit">
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
        </Grid>
    )
}

function Projects(props) {
    const { id, value, children } = props;

    return (
        <>
            {
                value === id ? (
                    <Grid container item xs={12}>
                        {children}
                    </Grid>
                ) : null
            }
        </>
    )
}

