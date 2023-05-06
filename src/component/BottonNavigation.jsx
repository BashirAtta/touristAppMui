import * as React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import BasicModal from "./Modal"


function ButtonNavigation() {
    return <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation >
        <BasicModal />
        </BottomNavigation>
    </Paper>


}

export default ButtonNavigation