import React from 'react'
import Header from '../components/Header'
import { Container, Box, Typography, Button, TextField} from '@mui/material'
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Payment = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <div>
    <Header />

    <Container maxWidth ="xl" sx={{width: '100%', height:'90vh', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
    <Box sx={{height: '80vh', width:'90%', padding:'20px', background: '#F8F9FA',
            borderradius: '15px', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center',}}>

            <Typography variant='h6'>Confirm Payment Details for GHC <span className='amount'>1200</span></Typography>

            {/* debit card */}
            <Box sx={{height: '200px',width:"30%",borderRadius:'15px',color:'#fff', bgcolor:'#505168', display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center', marginTop:'50px'}}>
            <div className='visa'><h2>VISA</h2></div>
            <div className='cardId'><h4>... ... ...  ...   4576</h4></div>
            <div><h6>User Name</h6></div>
            </Box>
            <Box sx={{height: '70px',width:"60%", display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', marginTop:'50px'}}>
            <TextField id="outlined-basic" label="Card Number" variant="outlined" sx={{width:"45%"}} />
            <TextField id="outlined-basic" label="CVC" variant="outlined" sx={{width:"45%"}}/>
            </Box>

            <Button onClick={handleOpen} variant='contained' size='large' sx={{marginTop:'50px', bgcolor:'#505168'}}>Make Payment </Button>

            {/* modal */}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Payment successful
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Your flights are booked and ready to go.
                    </Typography>
                    {/* <Button variant="contained" sx={{marginTop: "20px"}}>view boarding pass</Button> */}
                   

                    <Box sx={{height: '410px',width:"100%",borderRadius:'15px',color:'#fff', bgcolor:'#505168', display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center', marginTop:'10px'}}>
                    
                    <div>
                      <h2>kumasi to Tamale</h2>
                    </div>
                    <div><h4 className='flightNumber'>Flight:Bl256</h4></div>
                    <div><h4 className='seatNumber'>Seat:42B</h4></div>
                    <div><h4 className='DepartureDate'>Date: 28/05/22</h4></div>
                    <div><h4 className='BoardingTime'>Boarding: 10:30pm</h4></div>
                    
                    </Box>




                    


                  </Box>
                </Modal>
              </Box>
         </Container>
    </div>

  )
}

export default Payment