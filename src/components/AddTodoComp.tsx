import { Box, Button, TextField } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';

const AddTodoComp = () => {
  return (
    <Box>
      <TextField
          id="outlined-disabled"
          label="New Todo"
          variant="outlined"

        />
        <Button variant="contained" color="success" startIcon={<SaveIcon/>}>
          Save Todo
        </Button>
    </Box>
  )
}

export default AddTodoComp