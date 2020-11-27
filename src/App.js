import React, { useState } from 'react';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid, Dialog, DialogContent, Snackbar, LinearProgress } from '@material-ui/core';
import AppContext from './AppContext';
import PrimarySection from './components/PrimarySection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import Media from './components/Media';
import Form from './components/Form';
import Footer from './components/Footer';
import MuiAlert from '@material-ui/lab/Alert';

const styles = {
    contactSection: {
        backgroundColor: "#0B141A",
        minHeight: 400,
    },
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export default function App() {
    const [openLinear, setOpenLinear] = useState(false);
    const [openModal, setOpenModal] = useState({
        status: false,
        fileToShow: ''
    })

    const handleOpenLinear = (boolean) => {
        setOpenLinear(boolean);
    }

    const handleOpenModal = (status, fileToShow) => {
        setOpenModal({
            ...openModal,
            status,
            fileToShow
        })
    }

    const [alert, setAlert] = useState({
        state: false,
        severity: '',
        message: ''
    });

    const handleOpenSnackbar = (state, severity, message) => {
        setAlert({
            ...alert,
            state,
            severity,
            message,
        });
    };

    const handleCloseSnackbar = () => {
        setAlert({
            ...alert,
            state: false,
            severity: '',
            message: ''
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <AppContext.Provider
                value={{
                    handleOpenModal,
                    handleOpenLinear,
                    handleOpenSnackbar
                }}
            >
                <Grid container spacing={2}>
                    <PrimarySection />
                    <AboutSection />
                    <SkillsSection />
                    <Grid container item xs={12} style={styles.contactSection}>
                        <Media />
                        <Form />
                    </Grid>
                    <Footer />
                </Grid >
                {
                    openModal.status ? (
                        <Dialog
                            open={openModal.status}
                            keepMounted
                            onClose={() => setOpenModal({ ...openModal, status: false, fileToShow: '' })}
                        >
                            <DialogContent>
                                <img alt="" style={{ width: "100%" }} src={openModal.fileToShow} />
                            </DialogContent>
                        </Dialog>
                    ) : null
                }
                {
                    alert.severity === 'success' ? (
                        <Snackbar open={alert.state} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                            <Alert severity="success">
                                {alert.message} <i class="far fa-grin-alt"></i>
                            </Alert>
                        </Snackbar>
                    ) : alert.severity === 'error' ? (
                        <Snackbar open={alert.state} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                            <Alert severity="error">
                                {alert.message}
                            </Alert>
                        </Snackbar>
                    ) : null
                }
                {
                    openLinear ? (
                        <LinearProgress color="secondary" />
                    ) : null
                }
            </AppContext.Provider >
        </ThemeProvider>
    );
}