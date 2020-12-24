import React from 'react';
import { Grid, Typography, Avatar } from '@material-ui/core';
import diego from '../img/diego.jpeg';

export default function Footer() {
    return (
        <Grid container item xs={12} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#282726", paddingTop: 50 }}>
            <Typography variant="h5" style={{ fontWeight: "bold", letterSpacing: 2, color: "#f5f5f5" }}
            >
                DIEGO OREFICI
			</Typography>
            <Typography variant="button" style={{ fontWeight: "bold", letterSpacing: 2, color: "#f5f5f5" }}
            >
                DEVELOPER
			</Typography>
            <Avatar src={diego} style={{ margin: 20, width: "100px", height: "100px" }} />
            <hr style={{ width: "50%" }} />
            <Typography style={{ paddingTop: 5, color: "#f5f5f5", fontWeight: "lighter" }} variant="subtitle2">
                © 2020. Developed by Diego Orefici. All rights, reserved.
            </Typography>
        </Grid>
    )
}