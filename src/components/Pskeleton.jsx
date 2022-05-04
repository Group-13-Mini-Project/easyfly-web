import React from 'react'
import { Stack, Skeleton } from '@mui/material'

const Pskeleton = () => {
  return (
    <Stack spacing={0} width='100%' sx={{width:'100%', height:'100%', display:'flex',flexDirection:'column', justifyContent:'center',}}>
        <Skeleton variant='rectangle' width={1150} height={120}/>
    </Stack>
  )
}

export default Pskeleton