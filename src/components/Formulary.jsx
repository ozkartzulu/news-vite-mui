
import { FormControl, InputLabel, Select, MenuItem, Button, Box} from '@mui/material'
import useNotice from '../hooks/useNotice'

const CATEGORIES = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]

const Formulary = () => {

    const {category, handleSubmitCategory} = useNotice()

    return (
        <form >
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select label='Category' value={category} onChange={handleSubmitCategory}>
                    {CATEGORIES.map( (notice) => <MenuItem key={notice.value} value={notice.value}>{notice.label}</MenuItem> )}
                </Select>
            </FormControl>
        </form>
    )
}

export default Formulary