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
import AppContext from '../AppContext';

export default function SystemCarousel(props) {
    const context = useContext(AppContext);

    const images = [
        {
            image: "", id: 1
        },
        {
            image: dash, id: 2
        },
        {
            image: events, id: 3
        },
        {
            image: income, id: 4
        },
        {
            image: outcome, id: 5
        },
        {
            image: registerIncome, id: 6
        },
        {
            image: registers, id: 7
        }
    ]

    const [image, setImage] = useState({
        img: "",
        id: 1
    })

    const nextImage = (id) => {

        const newId = id + 1;

        if (newId === images.length + 1) {
            setImage({
                ...image,
                img: "",
                id: 1
            })
        } else {
            images.forEach(i => {
                if (newId === i.id) {
                    setImage({
                        ...image,
                        img: i.image,
                        id: i.id
                    })
                }
            })

        }
    }

    const previousImage = (id) => {

        const newId = id - 1;

        if (newId < 1) {
            setImage({
                ...image,
                img: registers,
                id: 7
            })
        } else {
            images.forEach(i => {
                if (newId === i.id) {
                    setImage({
                        ...image,
                        img: i.image,
                        id: i.id
                    })
                }
            })
        }
    }

    return (
        <Grid item xs={12}>
            <Typography variant="subtitle1" style={{ margin: 20, textAlign: "center" }}>
                System developed for a company in Argentina, where events can be scheduled with notifications, products can be listed, customer agenda, sales receipts can be printed. Consult sales and expense records. Technologies that I used: React (hooks, context, react router dom), Material UI, CSS and Flexbox.
            </Typography>

            <Button
                fullWidth
                color="primary"
                variant="contained"
                onClick={() => window.open("https://github.com/Widoski/system-app")}
            >
                See the code on github
            </Button>

            <div style={{ display: "flex", alignItems: "center", marginTop: 10, marginBottom: 10 }}>
                <Button
                    onClick={() => previousImage(image.id)}
                    style={{ height: 60, borderRadius: "60%" }}
                >
                    <ArrowLeftIcon />
                </Button>
                {
                    image.id === 1 ? (
                        <div>
                            <video poster={dash} controls muted style={{ width: "100%" }}>
                                <source src={systemVideo} type="video/mp4" />
                            </video>
                        </div>
                    ) : <div style={{ width: "100%" }} >
                            <img src={image.img} style={{ width: "100%" }} alt="" />
                        </div>
                }
                <Button
                    onClick={() => nextImage(image.id)}
                    style={{ height: 60, borderRadius: "60%" }}
                >
                    <ArrowRightIcon />
                </Button>
            </div>
            {
                image.id === 1 ? (
                    <Button
                        fullWidth
                        color="primary"
                        variant="contained"
                        onClick={() => props.showProjects(false)}
                    >
                        Go back
                    </Button>
                ) : <ButtonGroup fullWidth color="primary" variant="contained">
                        <Button
                            onClick={() => context.handleOpenModal(true, image.img)}
                        >
                            Zoom in
                        </Button>
                        <Button
                            onClick={() => props.showProjects(false)}
                        >
                            Go back
                        </Button>
                    </ButtonGroup>
            }
        </Grid >
    )
}

