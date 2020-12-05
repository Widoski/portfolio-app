import React, { useState, useContext } from 'react';
import { Grid, Typography, Card, Tooltip, Button, AccordionDetails, Accordion, AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppContext from '../AppContext';
import cv from '../img/cv.jpeg';
import Projects from './Projects';

const styles = {
    skills: {
        backgroundColor: "#f1f1f1",
        padding: 60
    },
    accordion: {
        backgroundColor: "#282726",
    },
}

export default function SkillsSection() {
    const [projects, setProjects] = useState(false);

    const [backgroundColor, setBackgroundColor] = useState(false);

    const context = useContext(AppContext);

    const [zoom, setZoom] = useState({
        state: false,
        icon: ''
    });

    const showProjects = (boolean) => {
        setProjects(boolean);
    }

    return (
        <Grid
            id="skills"
            container item xs={12} style={styles.skills}
        >
            {
                projects ? (
                    <Projects showProjects={showProjects} />
                ) : <>
                        <Grid item xs={12} sm={6} xl={6} style={{ margin: 10 }}>
                            <Accordion style={{ backgroundColor: "#102641" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "#f5f5f5" }} />} style={styles.accordion}>
                                    <Typography variant="button" style={{ color: "white", fontWeight: "bold", letterSpacing: 5 }}
                                    >
                                        FRONTEND SKILLS
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails >
                                    <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
                                        <Tooltip title="HTML">
                                            <div onMouseOver={() => setZoom({ state: true, icon: 'html' })}
                                                onMouseLeave={() => setZoom(false)}
                                                style={
                                                    zoom.state && zoom.icon === 'html'
                                                        ? { transform: "scale(1.25)", overflow: "hidden" }
                                                        : { transform: "scale(1)", overflow: "hidden" }
                                                }
                                            >
                                                <i className="fab fa-html5 fa-4x" style={{ color: "#F07F21" }} />
                                            </div>
                                        </Tooltip>
                                        <Tooltip title="CSS">
                                            <div onMouseOver={() => setZoom({ state: true, icon: 'css' })}
                                                onMouseLeave={() => setZoom(false)}
                                                style={
                                                    zoom.state && zoom.icon === 'css'
                                                        ? { transform: "scale(1.25)", overflow: "hidden" }
                                                        : { transform: "scale(1)", overflow: "hidden" }
                                                }>
                                                <i className="fab fa-css3-alt fa-4x" style={{ color: "#219FF0" }} />
                                            </div>
                                        </Tooltip>
                                        <Tooltip title="JavaScript">
                                            <div onMouseOver={() => setZoom({ state: true, icon: 'js' })}
                                                onMouseLeave={() => setZoom(false)}
                                                style={
                                                    zoom.state && zoom.icon === 'js'
                                                        ? { transform: "scale(1.25)", overflow: "hidden" }
                                                        : { transform: "scale(1)", overflow: "hidden" }
                                                }>
                                                <i className="fab fa-js fa-4x" style={{ color: "#FBFF00" }} />
                                            </div>
                                        </Tooltip>
                                        <Tooltip title="React">
                                            <div onMouseOver={() => setZoom({ state: true, icon: 'react' })}
                                                onMouseLeave={() => setZoom(false)}
                                                style={
                                                    zoom.state && zoom.icon === 'react'
                                                        ? { transform: "scale(1.25)", overflow: "hidden" }
                                                        : { transform: "scale(1)", overflow: "hidden" }
                                                }>
                                                <i className="fab fa-react fa-4x" style={{ color: "#196BD5" }} />
                                            </div>
                                        </Tooltip>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion style={{ backgroundColor: "#102641" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "#f5f5f5" }} />} style={styles.accordion}>
                                    <Typography variant="button" style={{ color: "white", fontWeight: "bold", letterSpacing: 5 }}>STILL EXPLORING</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{ color: "#f5f5f5" }} variant="subtitle1" letterSpacing={1}
                                    >
                                        Node, Express, Loopback, Mongo, Firebase, React Native.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion style={{ backgroundColor: "#102641" }}>
                                <AccordionSummary style={styles.accordion} expandIcon={<ExpandMoreIcon style={{ color: "#f5f5f5" }} />}>
                                    <Typography variant="button" style={{ color: "white", fontWeight: "bold", letterSpacing: 5 }}
                                    >
                                        OTHER HABILITIES
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{ color: "#f5f5f5" }} variant="subtitle1" letterSpacing={1}
                                    >
                                        Flexbox, Grid, Material UI, Git, ECMAScript 2016.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion style={{ backgroundColor: "#102641" }}>
                                <AccordionSummary style={styles.accordion} expandIcon={<ExpandMoreIcon style={{ color: "#f5f5f5" }} />}>
                                    <Typography variant="button" style={{ color: "white", fontWeight: "bold", letterSpacing: 5 }}
                                    >
                                        MY CV
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{ display: "flex", justifyContent: "space-around" }}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => context.handleOpenModal(true, cv)}
                                    >
                                        VIEW
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                    >
                                        <a style={{ textDecoration: "none", color: "#f5f5f5" }} href={cv} download>DOWNLOAD</a>
                                    </Button>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        {
                            backgroundColor ? (
                                <Card
                                    onMouseOver={() => setBackgroundColor(true)}
                                    onMouseLeave={() => setBackgroundColor(false)}
                                    style={{ backgroundColor: "#db6400", minHeight: 180, margin: 10, flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                                    <Typography variant="button" style={{ color: "white", fontWeight: "bold", letterSpacing: 5 }}
                                    >
                                        ¿WANT TO SEE MY WORK?
                                    </Typography>
                                    <br />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => showProjects(true)}
                                    >
                                        Click here
                                    </Button>
                                </Card>
                            ) : <Card
                                onMouseOver={() => setBackgroundColor(true)}
                                onMouseLeave={() => setBackgroundColor(false)}
                                style={{
                                    backgroundColor: "#102641", minHeight: 180, margin: 10, flex: 1, display: "flex", alignItems: "center", justifyContent: "center"
                                }}>
                                    <Typography className="flash" variant="button" style={{ color: "white", fontWeight: "bold", letterSpacing: 5 }}>PROYECTS</Typography>
                                </Card>
                        }
                    </>
            }
        </Grid>
    )
}