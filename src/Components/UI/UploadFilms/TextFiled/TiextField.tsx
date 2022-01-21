import { TextField } from "@mui/material";

export const TextFieldForm = ({ field, form,...props}:any) => {
    return <TextField {...field} {...props} value={field.value}  id="standard-basic" label={props.placeholder} variant="standard" />;
  };
  
 export  const TextFieldMultilineForm = ({ field, form,...props}:any) => {
    return <TextField {...field} {...props}  value={field.value}  id="standard-multiline-static" label={props.placeholder} variant="standard" multiline rows={4} inputProps={{ style: {maxWidth:"100%"}}}/>;
  };
  