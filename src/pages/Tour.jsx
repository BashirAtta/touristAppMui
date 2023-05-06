
import React,{useState} from "react";
import { Typography, Container, Box, BottomNavigation } from '@mui/material';
import ImageCollage from "../component/ImageCollage";
import ControlledAccordions from "../component/Accordian";
import ButtonNavigation from "../component/BottonNavigation";
import { useParams } from "react-router-dom";
import allData from "../component/data.json"


function Tour(props) {
    // const params = useParams();
    // const { id } = params;
    // const [tour,setTour]=useState({});
    // {
       
    //     allData.cities.map((city) => city.tours.map((tourObj) => {
            
    //         if (tourObj.id == id) {
                
    //         return setTour(tourObj);

    //         }
    //     })
    //     )
    // }
    return <> 
    <Container sx={{ width: 900 }} >
            <Typography variant="h4" component="h1" marginTop={4} >
                Explore the world in LA :)

            </Typography>
            <Box sx={{ display: "flex" }} marginTop={2} >
                <img 
                // src={tour.image}
                src="https://travelnevada.com/wp-content/uploads/2020/09/Vegas_Featured.jpg"
                 alt="" height={325} />
                <ImageCollage sx={{ marginLeft: 4 }} />
            </Box>
            <Box>
                <Typography variant="h6" component="h4" marginTop={2} >
                    About this ticket:
                </Typography>
            </Box>
            <Box>
                <Typography variant="body1" component="p" marginTop={2} >
                    Amet consectetur exercitation dolor consectetur adipisicing. Ullamco eu non sint nisi eiusmod cupidatat. Enim ut enim sit magna fugiat est eu culpa. Ut consectetur proident aute et deserunt nostrud nulla exercitation magna. Sunt nostrud pariatur quis officia anim irure non in elit veniam sit est enim. Sunt elit cillum reprehenderit dolore aliquip Lorem Lorem non irure magna et. Lorem proident proident ullamco duis nulla reprehenderit do mollit laborum mollit.
                    {/* {tour.about} */}
                </Typography>
            </Box>
            <Box>
                <Typography variant="h6" component="h4" marginTop={2} marginBottom={2} >
                    Frequently asked Questions:
                </Typography>
            </Box>
            <Box>
                <ControlledAccordions />
            </Box>
            <ButtonNavigation />
        </Container>
        

    </>
}

export default Tour;



 