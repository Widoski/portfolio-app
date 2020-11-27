import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Tabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (e, id) => {
        setValue(id);
    }

    return (
        <Grid container item xs={12} style={styles.skills}>
            <div>
                <AppBar position="static" style={{ backgroundColor: "#102641" }}>
                    <Tabs value={value} onChange={handleChange} centered={true}>
                        <Tab label="Skills" value={0} />
                        <Tab label="Item Two" value={1} />
                        <Tab label="Item Three" value={2} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} id={0}>

                </TabPanel>
                <TabPanel value={value} id={1}>Chau</TabPanel>
                <TabPanel value={value} id={2}>Gil</TabPanel>
            </div>
        </Grid>
    )
}

export default function TabPanel(props) {
    const { id, value, children } = props;

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

