
import { Container, Grid, List, Typography } from "@mui/material"
import Formulary from './components/Formulary'
import { NoticeProvider } from "./context/NoticeProvider"
import ListNotice from "./components/ListNotice"

function App() {
  return (
    <NoticeProvider>
     <Container>
      <header>
        <Typography component='h1' variant="h2" 
          marginY={'40px'} 
          textAlign='center' 
          sx={{'@media (max-width:500px)': {
            fontSize: '30px',
            fontWeight:  '700'
          }}}
        >
          Search News in United States
        </Typography>
      </header>
      <Grid container justifyContent='center' marginBottom={'30px'}>
        <Grid item xs={12} md={6}>
          <Formulary />
        </Grid>
      </Grid>

      <ListNotice />
     </Container>
    </NoticeProvider>
  )
}

export default App
