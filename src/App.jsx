import {useState, useEffect} from 'react';
import * as API from "./services/launcher";
import { Heading, Box} from '@chakra-ui/react';
import './assets/css/App.css';

export function App(){
  const [launches, setLaunches] = useState([]);
  
  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);


  return(
    <>
    <Heading className='title' as='h1' size='lg'>SpaceX Launches</Heading>
    <section>
      {launches.map((launch) => (
        <Box className='boxin' key={launch.flight_number} bg="gray.100" p={4} m={4} borderRadius="lg">
          <h2>Name: {launch.mission_name}</h2>
          <h2>Year: {launch.launch_year}</h2>
        </Box>
      ))}
    </section>
    </>
  );
}