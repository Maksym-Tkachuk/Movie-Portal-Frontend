import React from 'react';
import style from "./UserSearchForm.module.scss"
import { ErrorMessage, Field, Form, Formik, } from 'formik';
import { Alert, CircularProgress, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ButtonCircleLogin from '../../Button/ButtonCircleLogin';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../../../Redux/store';
import { login, registration } from '../../../../Redux/auth-reducer';




const TextFieldForm = ({ field, form,...props}:any) => {

  return <TextField {...field} {...props} value={field.value}  id="standard-basic" label={props.placeholder} variant="standard" />;
};

const PasswordFieldForm = ({ field, form, ...props }:any) => {
  interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
  }
  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
 
  
  return (
    <FormControl   {...field} {...props}   variant="standard">
    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
    <Input
     {...field}
      id="password"
      placeholder="password"
      type={values.showPassword ? 'text' : 'password'}
      onChange={handleChange('password')}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {values.showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
    />
  </FormControl>
  )
};
    


interface UserSearchFormType {
  status: string
  errorLogin: string
}




const UserSearchForm = (props:UserSearchFormType) => {

let auth = useSelector((state:AppStateType) => state.auth);

const dispatch = useDispatch()


type initialValuesType = { 
  email: string, 
  password: string,
  userName?: any
}


const submit = (values:initialValuesType, { setSubmitting }:{setSubmitting:(isSubmitting:boolean)=>void}) => {
  console.log(values) 
  props.status == 'SignIn'
  ? dispatch(login(values.email,values.password) ) 
  : dispatch(registration(values.email,values.password,values.userName )) 
  values.email = ''
 values.password = ''
 values.userName = ''
 setSubmitting(false);
}
const validate = (values:initialValuesType) => {
  const errors:any = {};
  if(!values.password){
    errors.password = 'Required';
  }else if(values.password.length<8 || values.password.length>20){
    errors.password = 'For password need from 8 to 20 symbols';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  if(!values.userName && props.status==="SignUp"){
    errors.userName = 'Required';
  }else if(values.userName.length>25 && props.status==="SignUp"){
    errors.userName = 'not more 25 symbols';
  }
  return errors;
}


if (auth.isLoadingLogReg) {
  return (<div className={style.CircularProgress}><CircularProgress color="secondary" /></div>)
}


return(
  <div >
       <Formik
       initialValues= {{email:'',password: '',userName:''}} 
       validate={validate}
       onSubmit={submit}
     >
       {props.status == 'SignIn'
       ?({values,isSubmitting}:any) => (
         <Form className={style.form}>
           <Field name="email"  value={values.email} placeholder="Email" component={TextFieldForm} />
           <ErrorMessage name="email" component="div" className={style.errorMessage} />
           <Field name="password"  component={PasswordFieldForm} />
           <ErrorMessage name="password" component="div" className={style.errorMessage} />
          { props.errorLogin  &&  <Alert variant="outlined" severity="error">
          {props.errorLogin }
      </Alert>}
           <button type="submit" disabled={isSubmitting}>   
              <ButtonCircleLogin text = {'Log in'}/>
              </button>
         </Form>
       )
       : ({values,isSubmitting}:any) => (
        <Form className={style.form}>
        <Field name="userName"  value={values.userName}  placeholder="Username" component={TextFieldForm} />
       <ErrorMessage name="userName" component="div" className={style.errorMessage} />
       <Field name="email"  value={values.email}  placeholder="Email" component={TextFieldForm} />
       <ErrorMessage name="email" component="div" className={style.errorMessage} />
       <Field name="password"  component={PasswordFieldForm} />
       <ErrorMessage name="password" component="div" className={style.errorMessage} />
   { auth.errorRegistration && <Alert variant="outlined" severity="error">
    {  auth.errorRegistration}
      </Alert>}    
       <button type="submit" disabled={isSubmitting}>   
          <ButtonCircleLogin text = {'Log in'}/>
          </button>
     </Form>
      )}
  </Formik>



  </div>
)
}

export default UserSearchForm