import { useState } from 'react';
import {PropTypes} from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch} from "react-redux";
import { loginUserAuth } from "../../store/userSlice";
import styles from './Forms.module.scss';
import { mdiEyeOutline, mdiEyeOff } from '@mdi/js';
import Icon from '@mdi/react';


const LoginForm = (props) => {
    const {closeModal} = props;
    const [showPassword ,setShowPassword] = useState(false); 
      const dispatch = useDispatch();
    const onSubmit = (values) =>{
    dispatch(loginUserAuth(values))
    closeModal();
    };
    const changeShowPassword = ()=>{
        setShowPassword(!showPassword);
    }
   
    return (
        <Formik initialValues={{username:'emilys', password:'emilyspass'}} 
        onSubmit={onSubmit}> 
            {
                ()=>
                    <Form className={styles.form}>
                        <label>
                            <span>username</span>
                            <Field name ='username' />
                            <ErrorMessage name='username'/>
                        </label>
                        <label>
                            <span className={styles.password}>password</span>
                            <Field name='password' type ={showPassword? 'text' : 'password'} />
                            <span onClick={changeShowPassword} className={styles.eye}>
                                {showPassword? 
                             <Icon size = {1} path = { mdiEyeOutline }/>:
                             <Icon size= {1} path = { mdiEyeOff }/>  
                            }
                            </span>
                            <ErrorMessage name='password' />
                        </label>
                        <button type="submit"> log in </button>
                    </Form>
            }
        </Formik>
    );
}

LoginForm.propTypes = {
    closeModal: PropTypes.func,
}

export default LoginForm;
