import React, { useState, useContext } from 'react';
import { Button, Grid, Typography, ButtonGroup } from '@material-ui/core';
import '../Animations.css';
import dash from '../img/dash.png';
import events from '../img/events.png';
import registerIncome from '../img/registerIncome.png';
import registers from '../img/registers.png';
import income from '../img/income.png';
import outcome from '../img/outcome.png';
import systemVideo from '../img/system-app.mp4';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AppContext from '../AppContext';

export default function SystemCarousel(props) {
    const context = useContext(AppContext);

    const images = [systemVideo, dash, events, income, outcome, registerIncome, registers];

    const [image, setImage] = useState(images[0])

    const nextImage = (idx) => {
        const nextImageIdx = idx + 1;

        if (nextImageIdx === images.length) {
            setImage(images[0]);
        } else {
            setImage(images[nextImageIdx]);
        }
    }

    const previousImage = (idx) => {
        const previousImageIdx = idx - 1;

        if (previousImageIdx < 0) {
            setImage(images[images.length - 1]);
        } else {
            setImage(images[previousImageIdx]);
        }
    }

    return (
        <Grid item xs={12} className="fade">
            <Typography variant="subtitle1" style={{ margin: 20, textAlign: "center" }}>
                System developed for a company in Argentina, where events can be scheduled with notifications, products can be listed, customer agenda, sales receipts can be printed. Consult sales and expense records. Technologies that I used: React (hooks, context, react router dom), Material UI, CSS and Flexbox.
            </Typography>


            <div style={{ display: "flex", alignItems: "center", marginTop: 10, marginBottom: 10 }}>
                <Button
                    onClick={() => previousImage(images.indexOf(image))}
                    style={{ height: 60, borderRadius: "60%", margin: 10 }}
                >
                    <ArrowLeftIcon />
                </Button>
                {
                    image === images[0] ? (
                        <div>
                            <video poster={dash} controls muted style={{ width: "100%" }} >
                                <source src={systemVideo} type="video/mp4" />
                            </video>
                        </div>
                    ) : <div style={{ width: "100%" }}>
                            <img src={image} style={{ width: "100%" }} alt="" />
                        </div>
                }
                <Button
                    onClick={() => nextImage(images.indexOf(image))}
                    style={{ height: 60, borderRadius: "60%", margin: 10 }}
                >
                    <ArrowRightIcon />
                </Button>
            </div>
            {
                image === images[0] ? (
                    <ButtonGroup style={{ display: "flex", justifyContent: "center" }}>
                        <Button
                            onClick={() => props.showProjects(false)}
                        >
                            <ArrowBackIcon color="primary" />
                        </Button>
                        <Button
                            onClick={() => window.open("https://github.com/Widoski/system-app")}
                        >
                            <GitHubIcon color="primary" />
                        </Button>
                    </ButtonGroup>
                ) : <ButtonGroup style={{ display: "flex", justifyContent: "center" }}>
                        <Button
                            onClick={() => props.showProjects(false)}
                        >
                            <ArrowBackIcon color="primary" />
                        </Button>
                        <Button
                            onClick={() => window.open("https://github.com/Widoski/system-app")}
                        >
                            <GitHubIcon color="primary" />
                        </Button>
                        <Button
                            onClick={() => context.handleOpenModal(true, image)}
                        >
                            <ZoomInIcon color="primary" />
                        </Button>
                    </ButtonGroup>
            }
        </Grid >
    )
}

