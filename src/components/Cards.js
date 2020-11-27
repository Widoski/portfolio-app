import React, { useContext } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import '../Animations.css';
import Carousel from 'react-material-ui-carousel';
import dashboard from '../img/dashboard.png';
import registerOk from '../img/registerOk.png';
import listOfProducts from '../img/listOfProducts.png';
import eventNotification from '../img/eventNotification.png';
import agenda from '../img/agenda.png';
import AppContext from '../AppContext';

const styles = {
    images: {
        width: "65%",
    },
    boxes: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center"
    }
}

export default function Cards() {

    const context = useContext(AppContext);

    return (
        <Box>
            <Carousel animation="fade" indicators={false} navButtonsAlwaysInvisible={true} autoPlay={true} interval={5000}>
                <Box style={styles.boxes}>
                    <Box width={400}>
                        <Typography variant="h5">
                            <Box style={{ fontWeight: "bold" }}>
                                DASHBOARD
                        </Box>
                        </Typography>
                        <br />

                        <Typography variant="h6">
                            See the grow of your company.
                        <br />

                        This dashboard, represents the accounts status of sales and egress, monthly.
                    </Typography>
                    </Box>
                    <img style={styles.images} src={`${dashboard}`} alt="" />
                </Box>
                <Box style={styles.boxes}>
                    <Box>
                        <Typography variant="button">
                            <Box style={{ fontWeight: "bold" }}>
                                REGISTER OF SALES
                        </Box>
                        </Typography>
                        <Typography>
                            Where you can add differents products and offer the posibility to generate a ticket to a client.
                    </Typography>
                    </Box>
                    <img style={styles.images} src={`${registerOk}`} alt="" />
                </Box>
                <Box style={styles.boxes}>
                    <Box>
                        <Typography variant="button">
                            <Box style={{ fontWeight: "bold" }}>
                                AGENDA
                        </Box>
                        </Typography>
                        <Typography>
                            To add a new client or check some information about them. Also, you can choose to see the history of each client with the company.
                    </Typography>
                    </Box>
                    <img style={styles.images} src={`${agenda}`} alt="" />
                </Box>
                <Box style={styles.boxes}>
                    <Box>
                        <Typography variant="button">
                            <Box style={{ fontWeight: "bold" }}>
                                PRODUCTS
                        </Box>
                        </Typography>
                        <Typography>
                            Create, edit, delete and organize your own list of products.
                    </Typography>
                    </Box>
                    <img style={styles.images} src={`${listOfProducts}`} alt="" />
                </Box>
                <Box style={styles.boxes}>
                    <Box>
                        <Typography variant="button">
                            <Box style={{ fontWeight: "bold" }}>
                                EVENTS WITH PUSH NOTIFICATIONS
                        </Box>
                        </Typography>
                        <Typography>
                            Manage your schedule as you like by setting events with clients, employees or people related to the company.
                    </Typography>
                    </Box>
                    <img style={styles.images} src={`${eventNotification}`} alt="" />
                </Box>
            </Carousel>
            <Box display="flex" justifyContent="flex-end">
                <Button onClick={() => context.showWork(false)} variant="contained">Go back</Button>
            </Box>
        </Box>
    )
}
