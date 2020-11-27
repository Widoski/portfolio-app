import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';

const styles = {
    about: {
        height: 500,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#0B141A",
        color: "#f4f4f4",
    },
}

export default function AboutSection() {
    return (
        <Grid
            id="about"
            container item xs={12} style={styles.about}>
            <Grid item xs={12} sm={9} xl={9}>
                <Typography variant="h5" style={{ paddingBottom: 40, fontWeight: "bold", letterSpacing: 5 }}>
                    LET ME TELL YOU ABOUT ME
			    </Typography>
                <Typography variant="subtitle1" style={{ letterSpacing: 1 }}>
                    I've been studying and working freelance for about two years. Part of me, recognize this as luck, beyond the big effort that I've made.
                    This is, cause, over the years, a friend, colleague and great developer helped me a lot to achieve some professionals skills.
                    Also, I considered it a great advantage. As a mentor, he has guided me and pointed me out the right way to make decisions and start this way.
				</Typography>
                <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
                    <Divider style={{ backgroundColor: "white", width: "20%", border: "1px solid white" }} />
                </div>
            </Grid>
        </Grid>
    )
}