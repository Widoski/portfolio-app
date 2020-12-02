import React, { useState } from 'react';
import { Typography, Button, Grid, ButtonGroup } from '@material-ui/core';
import '../Animations.css';
import dash from '../img/dash.png';
import events from '../img/events.png';
import registerIncome from '../img/registerIncome.png';
import registers from '../img/registers.png';
import income from '../img/income.png';
import outcome from '../img/outcome.png';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const styles = {
    zoom: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#102641"
    }
}

export default function SystemCarousel() {
    const images = [
        {
            image: dash, id: 1
        },
        {
            image: events, id: 2
        },
        {
            image: income, id: 3
        },
        {
            image: outcome, id: 4
        },
        {
            image: registerIncome, id: 5
        },
        {
            image: registers, id: 6
        }
    ]

    const [image, setImage] = useState({
        img: dash,
        id: 1
    })

    const nextImage = (id) => {

        const newId = id + 1;

        if (newId === images.length + 1) {
            setImage({
                ...image,
                img: dash,
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
                id: 6
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


        <Grid item xs={12} style={{ display: "flex" }}>
            <Grid item xs={1}>
                <Button
                    onClick={() => previousImage(image.id)}
                >
                    <ArrowLeftIcon />
                </Button>
            </Grid>

            <Grid xs={8}>
                <img src={image.img} style={{ width: "100%" }} />
            </Grid>

            <Grid item xs={1}>
                <Button
                    onClick={() => nextImage(image.id)}
                >
                    <ArrowRightIcon />
                </Button>
            </Grid>
        </Grid>

    )
}

