
import useNotice from "../hooks/useNotice"
import { Typography, Grid, Pagination, Stack } from "@mui/material"
import Notice from "./Notice"

const ListNotice = () => {

    const {notices, totalPages, handleSubmitPage, page} = useNotice()

    const pagination = Math.ceil(totalPages / 20)

    return (
        <>
            <Typography component='h2' variant='h4' 
                marginBottom={'25px'}
                sx={{'@media (max-width:500px)': {
                    fontSize: '25px',
                }}}
            >
                Last News
            </Typography>
            <Grid container spacing={2}>
                {notices.map( (notice) => <Notice key={notice.url} notice={notice} /> )}
            </Grid>

            <Stack spacing={2} justifyContent='center' alignItems='center' sx={{margin: '42px 0'}}>    
                <Pagination count={pagination} color="primary" page={page} onChange={handleSubmitPage} />
            </Stack>
        </>
    )
}

export default ListNotice