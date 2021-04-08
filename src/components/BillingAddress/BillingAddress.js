import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '40ch',
        },
    },
}));

const BillingAddress = () => {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Name" variant="outlined" /><br />
            <TextField id="outlined-basic" label="Phone Number" variant="outlined" /><br />
            <TextField id="outlined-basic" label="State" variant="outlined" /><br />
            <TextField id="outlined-basic" label="City" variant="outlined" /><br />
            <TextField id="outlined-basic" label="Street" variant="outlined" /><br />
            <TextField id="outlined-basic" label="House" variant="outlined" /><br />
            <Button variant="contained" color="primary">submit</Button>
        </form>
    );
}

export default BillingAddress;


