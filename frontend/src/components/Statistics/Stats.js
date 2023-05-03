import React, { useEffect, useState } from 'react'
import { getStats } from '../../API-Helpers/api-helpers';
import { Box, Typography } from '@mui/material';
import Timer from './Timer'


const Stats = () => {
  const [stats, setstats] = useState();
  useEffect(() => {
    getStats().then((data) => setstats(data.stats)).catch((err) => console.log("No data found."))
  }, [])
  console.log({stats})
  return (
    <Box height={'100%'} width={'90%'} sx={{backgroundColor: "purple"}} margin={10} display={'flex'} >
      <Box height={'100%'} width={'80%'}>
        <img src='https://chandigarhmetro.com/wp-content/uploads/2020/02/how-to-create-perfect-image.jpg' alt='' height={'100%'} width={'100%'}/>
      </Box>
      <Box margin={5}>
        <Typography variant='h3' color={'white'} margin={1}>Consult us here in</Typography>
        <Typography variant='h3' color={'yellow'} margin={1}>ITSolution</Typography>
        <Typography variant='body' color={'white'} margin={1}>Far far away, behind the word mountains, far from the countries Volkalia and </Typography>
        <Typography variant='body' color={'white'} margin={1}>Consonantia</Typography>
        <Box display={'flex'} flexWrap={'wrap'} justifyContent={'flex-start'} paddingTop={5}  >
          {stats && stats.map((item, index) => 
          <Box  paddingRight={10} margin={1} >
            <Timer index={item.value} />
            <Typography variant='body' color={'white'} sx={{mt: 2, mb:4}}>{item.label}</Typography>
          </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default Stats