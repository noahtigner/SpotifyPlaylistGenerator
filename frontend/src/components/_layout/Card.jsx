import React from 'react';
import { Paper } from '@mui/material';

const Card = (props) => {
    return (
        <Paper 
            variant="outlined"
            sx={{
                // width: '95%',
                margin: '12px',
                padding: '12px',
            }}
        >
            {props.content}
        </Paper>
    )
}

export default Card;
