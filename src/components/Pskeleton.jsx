import React from 'react'
import { Stack, Skeleton } from '@mui/material'

const Pskeleton = () => {
  return (
    <Stack spacing={0} width='100%' sx={{width:'70%', height:'100%', display:'flex',flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Skeleton variant='rectangle' width={120} height={120} sx={{borderRadius:'10px'}}/>
        <div>
        <Skeleton variant='text' width={320} height={20}/>
        <Skeleton variant='text' width={420} height={35}/>
        </div>
    </Stack>
  )
}

export default Pskeleton