import React from 'react'
import Navbar from './Navbar'
import TermCS1 from './Terms1'
import TermsCS2 from './Terms2'
import TermsCS3 from './Terms3'
import TermsCS4 from './terms4'
import TermsCS5 from './Terms5'
import TermsCS6 from './Terms6'
import TermsCS7 from './terms7'
import TermsCS8 from './terms8'
import TermsCS9 from './Terms9'
import TermsCS10 from './terms10'
import TermsCS11 from './Terms11'
import TermsCS12 from './Terms12'
import TermsCS13 from './Terms13'
import TermsCS14 from './Terms14'
import TermsCS15 from './Terms15'
import TermsCS16 from './Terms16'
import TermsCS17 from './Terms17'
import { Box } from '@mui/material'





export default function Terms() {
  return (
    <>
      <Navbar />
      <Box sx={{width: {md: '100%', xs: '100vw', display:'flex', flexDirection:'column', alignItems:'center'}}}>
        <TermCS1 />
        <TermsCS2 />
        <TermsCS3 />
        <TermsCS4 />
        <TermsCS5 />
        <TermsCS6 />
        <TermsCS7 />
        <TermsCS8 />
        <TermsCS9 />
        <TermsCS10 />
        <TermsCS11 />
        <TermsCS12 />
        <TermsCS13 />
        <TermsCS14 />
        <TermsCS15 />
        <TermsCS16 />
        <TermsCS17 />
      </Box>
    </>
  )
}
