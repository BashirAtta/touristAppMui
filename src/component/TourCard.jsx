import React from "react";
import { Paper, Grid, Box, Typography, Rating } from '@mui/material';
import {createTheme,ThemeProvider} from "@mui/material"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Margin } from "@mui/icons-material";

const theme=createTheme({
    components:{
        MuiTypography:{
            variants:[
                {
                    props:{
                        variant:"body3"
                    },
                    style:{
                        fontSize:11
                    }

                },
                {
                    props:{
                        variant:"body2"
                    },
                    style:{
                        //ur style here
                    }

                },
            ],
        },
    }
});
function TourCard(props) {

  


    return (
        <Grid item xs={3}>
        <ThemeProvider theme={theme}>
            <Paper square elevation={5} onClick={()=>props.onClick(props.tour.id)}>
           
                <img className="img" src={props.tour.image}></img>
                <Box>
                    <Typography variant="subtitle1" component="h2" fontWeight={"bold"} marginLeft={1}>{props.tour.name}</Typography>
                </Box>
                <Box
                    sx={{
                        alignItems: "center",
                        display: "flex",
                        marginLeft: 1

                    }}
                >
                    <AccessTimeIcon sx={{ width: 12.5 }} ></AccessTimeIcon>
                    <Typography variant="body2" component="p" marginLeft={0.5}>

                        {props.tour.duration} hours
                    </Typography>
                </Box>
                <Box
                    sx={{
                        alignItems: "center",
                        display: "flex",
                        marginLeft: 1

                    }}
                    marginTop={1.5}>
                    <Rating name="read-only" value={props.tour.rating} precision={0.5} readOnly size="small" />
                    <Typography variant="body2" component="p" marginLeft={0.23}>{props.tour.Rating}</Typography>
                    <Typography variant="body3" component="p" marginLeft={0.75}>({props.tour.numberOfReviews} reviews)</Typography>
                </Box>
                <Box>
                    <Typography variant="h5" component="h2" marginLeft={1}>From C {props.tour.price}$</Typography>
                </Box>
            </Paper>
            </ThemeProvider>
        </Grid>
    )


}

export default TourCard;