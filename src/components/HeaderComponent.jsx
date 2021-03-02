import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

const headerStyles = makeStyles((theme) => ({
    root: {
        marginBottom:'30px',
    }
}));

const HeaderComponent = () => {
    const header = headerStyles();
    return (
        <Paper className={header.root}>
            <Button>Cubby Logo</Button>
            <Tabs
                value="100"
                onChange="yes"
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Dashboard" />
                <Tab label="Feedback" />
                <Tab label="Student List" />
                <Tab label="Directory" />
                <Button>Inbox</Button>
            </Tabs>
        </Paper>
    )
}

export default HeaderComponent
