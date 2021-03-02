import React from 'react'
import { Grid } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';


const SidebarComponent = () => {
    return (
        <div>
            <ButtonGroup
                className="button"
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="contained"
                margin-top="10%">
                <Button>201</Button>
                <Button>301</Button>
                <Button>302</Button>
                <Button>+</Button>
            </ButtonGroup>
    </div>
    )
}

export default SidebarComponent
