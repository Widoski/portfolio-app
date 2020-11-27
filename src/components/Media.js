import React, { useState } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';

import { Grid, Link, Typography } from '@material-ui/core';

export default function Media() {

    const [zoom, setZoom] = useState({
        state: false,
        icon: ''
    });

    return (
        <Grid item xs={12} sm={6} xl={6} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingBottom: 20, paddingTop: 20 }}>
            <div
                color="secondary"
                style={{ display: "flex", margin: 20, width: 200 }}
                onClick={() => window.open("https://www.linkedin.com/in/diegoorefici/")}
            >
                <LinkedInIcon fontSize="large" onMouseOver={() => setZoom({ state: true, icon: 'linkedIn' })}
                    onMouseLeave={() => setZoom(false)}
                    style={
                        zoom.state && zoom.icon === 'linkedIn'
                            ? { transform: "scale(1.25)", overflow: "hidden", color: "#0e76a8" }
                            : { transform: "scale(1)", overflow: "hidden", color: "#0e76a8" }
                    }
                />
                <Link component="button" variant="subtitle2" style={{ margin: 10, color: "#f5f5f5" }}>/diegoorefici</Link>
            </div>
            <div
                style={{ display: "flex", alignItems: "center", margin: 20, width: 200 }}
                onClick={() => window.open("https://github.com/Widoski")}
            >
                <GitHubIcon fontSize="large" onMouseOver={() => setZoom({ state: true, icon: 'gitHub' })}
                    onMouseLeave={() => setZoom(false)}
                    style={
                        zoom.state && zoom.icon === 'gitHub'
                            ? { transform: "scale(1.25)", overflow: "hidden", color: "#000" }
                            : { transform: "scale(1)", overflow: "hidden", color: "#000" }
                    }
                />
                <Link component="button" variant="subtitle2" style={{ margin: 10, color: "#f5f5f5" }}>widoski</Link>
            </div>
            <div
                style={{ display: "flex", alignItems: "center", margin: 20, width: 200 }}
            >
                <EmailIcon fontSize="large" onMouseOver={() => setZoom({ state: true, icon: 'email' })}
                    onMouseLeave={() => setZoom(false)}
                    style={
                        zoom.state && zoom.icon === 'email'
                            ? { transform: "scale(1.25)", overflow: "hidden", color: "#00acee" }
                            : { transform: "scale(1)", overflow: "hidden", color: "#00acee" }
                    }
                />
                <Typography variant="subtitle2" style={{ margin: 10, color: "#f5f5f5" }}>orefici.diego@gmail.com</Typography>
            </div>
            <div
                style={{ display: "flex", alignItems: "center", margin: 20, width: 200 }}
            >
                <WhatsAppIcon fontSize="large" onMouseOver={() => setZoom({ state: true, icon: 'whatsapp' })}
                    onMouseLeave={() => setZoom(false)}
                    style={
                        zoom.state && zoom.icon === 'whatsapp'
                            ? { transform: "scale(1.25)", overflow: "hidden", color: "green" }
                            : { transform: "scale(1)", overflow: "hidden", color: "green" }
                    }
                />
                <Typography variant="subtitle2" style={{ margin: 10, color: "#f5f5f5" }}>+54 341 3 181 724</Typography>
            </div>
        </Grid >
    )
}