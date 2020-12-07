import React, { useContext, useState } from 'react';
import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core';
import '../Animations.css';
import header from '../img/header.png';
import footer from '../img/footer.png';
import form from '../img/form.png';
import skills from '../img/skills.png';
import about from '../img/about.png';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AppContext from '../AppContext';

export default function SystemCarousel(props) {
    const context = useContext(AppContext);

    const images = [header, about, skills, form, footer];

    const [image, setImage] = useState(images[0]);

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
                This is my website, wich you're currently visiting. Technologies that I used: React (hooks, context), Material UI (grid and components), CSS and Flexbox.
            </Typography>
            <div item style={{ display: "flex", alignItems: "center", marginTop: 10, marginBottom: 10 }}>
                <Button
                    onClick={() => previousImage(images.indexOf(image))}
                    style={{ height: 60, borderRadius: "60%", margin: 10 }}
                >
                    <ArrowLeftIcon />
                </Button>
                <div style={{ width: "100%", backgroundColor: "white" }} >
                    <img src={image} style={{ width: "100%" }} alt="" />
                </div>
                <Button
                    onClick={() => nextImage(images.indexOf(image))}
                    style={{ height: 60, borderRadius: "60%", margin: 10 }}
                >
                    <ArrowRightIcon />
                </Button>
            </div>
            <ButtonGroup style={{ display: "flex", justifyContent: "center" }}>
                <Button
                    onClick={() => props.showProjects(false)}
                >
                    <ArrowBackIcon color="primary" />
                </Button>
                <Button
                    onClick={() => window.open("https://github.com/Widoski/portfolio-app")}
                >
                    <GitHubIcon color="primary" />
                </Button>
                <Button
                    onClick={() => context.handleOpenModal(true, image)}
                >
                    <ZoomInIcon color="primary" />
                </Button>
            </ButtonGroup>
        </Grid>
    )
}
