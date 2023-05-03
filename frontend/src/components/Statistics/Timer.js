import React, { useEffect, useState } from 'react'
// import { getStats } from '../../API-Helpers/api-helpers';
import { Typography } from '@mui/material';

const Timer = (index) => {
  // const [stats, setstats] = useState();
  // useEffect(() => {
  //   getStats().then((data) => setstats(data.stats)).catch((err) => console.log("No data found."))
  // }, [])
  const [value, setvalue] = useState(0);
  
  const deadline = index.index
  console.log(deadline)
  const limit = Math.floor(4000/deadline);
  
  const getTime = () => {
    const isOver = deadline === value || deadline < value;
    setvalue(isOver? deadline: (value+1))
  }
  useEffect(() => {
    const interval = setInterval(() => {
      getTime()
    }, limit)
    return () => clearInterval(interval)
  },)
  
  return (
    <Typography variant='h3' color={'white'} sx={{mb:1}}>{value}</Typography>
  )
}

export default Timer