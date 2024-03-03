import { useState } from 'react'
import SalesInvoice from './assets/page/SalesInvoice'
import SupplierInvoice from './assets/page/SupplierInvoice'
import  {Box} from '@mui/material';


function App() {
  

  return (
    <>
    <Box sx={{ maxWidth: 950, margin: 'auto', mt: 4}}>
        <SalesInvoice />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <SupplierInvoice />
    </Box>
    
    </>
  )
}

export default App
