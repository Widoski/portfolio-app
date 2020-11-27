import React, { useState } from 'react';
import { Tabs, Tab, Grid, AppBar } from '@material-ui/core';

export default function TabPanel() {
    const [value, setValue] = useState(0);

    const handleChange = (e, id) => {
        setValue(id);
    }

    return (
        <Grid item xs={12} style={{ background: "white" }}>
            <AppBar position="static" style={{ backgroundColor: "#102641" }}>
                <Tabs value={value} onChange={handleChange} centered={true}>
                    <Tab label="System" value={0} />
                    <Tab label="My Portfolio" value={1} />
                </Tabs>
            </AppBar>
            <Projects value={value} id={0}>System</Projects>
            <Projects value={value} id={1}>Portfolio</Projects>
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

