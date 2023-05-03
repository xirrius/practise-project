import React, { useEffect, useState } from 'react'
import { getTestimonials } from '../../API-Helpers/api-helpers'
import { Box, Typography } from '@mui/material'
import { motion } from "framer-motion";

const Testimonials = () => {
  const [testimony, settestimony] = useState()
  useEffect(() => {
    getTestimonials().then((data) => settestimony(data.test)).catch((err) => console.log(err))
    }, [])
    console.log({testimony});
  return (
    <Box margin={5} >
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100%'} width={'100%'} >
      {testimony && testimony.map((data) => 
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} margin={5}  height={'360px'} width={'279px'}>
        <motion.div whileHover={{ scale: 1.2 }}>
          <img src={data.picture} alt='card'  borderRadius={'20px'} height={'100%'} width='100%' />
          </motion.div>
          <Typography variant='body' color={'grey'} align={'center'} paddingTop={3}>{data.category}</Typography>
          <Typography variant='h6' color={'primary'} align={'center'} paddingTop={2} paddingBottom={2}>{data.title}</Typography>
        </Box>
      )}
      </Box>
    </Box>
  )
}

export default Testimonials