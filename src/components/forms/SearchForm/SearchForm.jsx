import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';


const SearchForm = () => {
const formik = useFormik({
    initialValues: {
        q:''
    },
    onSubmit: (values) =>{
        console.log(values);
        
    }
})


    return (
        <form onSubmit={formik.handleSubmit}>
            <input type='search' name='q' placeholder='search posts...' value={formik.values.q} onChange={formik.handleChange} />
            
            <button type='submit' > <Icon size={1} path={mdiMagnify} /> </button>
        </form>
    );
};







SearchForm.propTypes = {

};


export default SearchForm;
