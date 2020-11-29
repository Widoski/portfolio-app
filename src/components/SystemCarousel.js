import React, { useState, useContext } from 'react';
import { Typography, Grid, Tooltip } from '@material-ui/core';
import AppContext from '../AppContext';
import '../Animations.css';
import dash from '../img/dash.png';
import events from '../img/events.png';
import registerIncome from '../img/registerIncome.png';
import registers from '../img/registers.png';
import income from '../img/income.png';
import outcome from '../img/outcome.png';
import ZoomInIcon from '@material-ui/icons/ZoomIn';

const styles = {
    images: {
        width: "100%",
        height: "100%"
    },
    box: {
        width: "50%",
    },
    zoom: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#102641"
    }
}

export default function SystemCarousel() {
    const [zoom, setZoom] = useState({
        state: false,
        id: ""
    });

    const handleZoomImage = (state, picToShow) => {
        setZoom({
            ...state,
            state,
            picToShow
        })
    }

    const context = useContext(AppContext);

    return (
        <>
            <Typography style={{ margin: 30 }}>
                This was a development for a company in Rosario, Argentina. The client needs, were: listing products, have a client's agenda, set events with notifications, monthly control of sales and losses, print payment vouchers, etc.
            </Typography>
            <Grid container item xs={12}>
                <Grid item xs={12} sm={6} xl={6}
                    onClick={() => context.handleOpenModal(true, outcome)}
                    onMouseOver={() => handleZoomImage(true, "outcome")}
                    onMouseLeave={() => handleZoomImage(false, "")}
                >
                    {
                        zoom.state && zoom.picToShow === "outcome" ? (
                            <div style={styles.zoom}>
                                <Tooltip title="Zoom">
                                    <ZoomInIcon style={{ background: "grey", borderRadius: 40, padding: 20, color: "black", border: "2px solid black", size: "100px" }} />
                                </Tooltip>
                            </div>
                        ) : <img style={styles.images} src={`${outcome}`} alt="" />
                    }
                </Grid>
                <Grid item xs={12} sm={6} xl={6}
                    onClick={() => context.handleOpenModal(true, dash)}
                    onMouseOver={() => handleZoomImage(true, "dash")}
                    onMouseLeave={() => handleZoomImage(false, "")}
                >
                    {
                        zoom.state && zoom.picToShow === "dash" ? (
                            <div style={styles.zoom}>
                                <Tooltip title="Zoom">
                                    <ZoomInIcon style={{ background: "grey", borderRadius: 40, padding: 20, color: "black", border: "2px solid black", size: "100px" }} />
                                </Tooltip>
                            </div>
                        ) : <img style={styles.images} src={`${dash}`} alt="" />
                    }
                </Grid>
                <Grid item xs={12} sm={6} xl={6}
                    onClick={() => context.handleOpenModal(true, registers)}
                    onMouseOver={() => handleZoomImage(true, "registers")}
                    onMouseLeave={() => handleZoomImage(false, "")}
                >
                    {
                        zoom.state && zoom.picToShow === "registers" ? (
                            <div style={styles.zoom}>
                                <Tooltip title="Zoom">
                                    <ZoomInIcon style={{ background: "grey", borderRadius: 40, padding: 20, color: "black", border: "2px solid black", size: "100px" }} />
                                </Tooltip>
                            </div>
                        ) : <img style={styles.images} src={`${registers}`} alt="" />
                    }
                </Grid>
                <Grid item xs={12} sm={6} xl={6}
                    onClick={() => context.handleOpenModal(true, income)}
                    onMouseOver={() => handleZoomImage(true, "income")}
                    onMouseLeave={() => handleZoomImage(false, "")}
                >
                    {
                        zoom.state && zoom.picToShow === "income" ? (
                            <div style={styles.zoom}>
                                <Tooltip title="Zoom">
                                    <ZoomInIcon style={{ background: "grey", borderRadius: 40, padding: 20, color: "black", border: "2px solid black", size: "100px" }} />
                                </Tooltip>
                            </div>
                        ) : <img style={styles.images} src={`${income}`} alt="" />
                    }
                </Grid>
                <Grid item xs={12} sm={6} xl={6}
                    onClick={() => context.handleOpenModal(true, events)}
                    onMouseOver={() => handleZoomImage(true, "events")}
                    onMouseLeave={() => handleZoomImage(false, "")}
                >
                    {
                        zoom.state && zoom.picToShow === "events" ? (
                            <div style={styles.zoom}>
                                <Tooltip title="Zoom">
                                    <ZoomInIcon style={{ background: "grey", borderRadius: 40, padding: 20, color: "black", border: "2px solid black", size: "100px" }} />
                                </Tooltip>
                            </div>
                        ) : <img style={styles.images} src={`${events}`} alt="" />
                    }
                </Grid>
                <Grid item xs={12} sm={6} xl={6}
                    onClick={() => context.handleOpenModal(true, registerIncome)}
                    onMouseOver={() => handleZoomImage(true, "registerIncome")}
                    onMouseLeave={() => handleZoomImage(false, "")}
                >
                    {
                        zoom.state && zoom.picToShow === "registerIncome" ? (
                            <div style={styles.zoom}>
                                <Tooltip title="Zoom">
                                    <ZoomInIcon style={{ background: "grey", borderRadius: 40, padding: 20, color: "black", border: "2px solid black", size: "100px" }} />
                                </Tooltip>
                            </div>
                        ) : <img style={styles.images} src={`${registerIncome}`} alt="" />
                    }
                </Grid>

            </Grid>
        </>
    )
}