import * as yup from 'yup';


const loginSchema = yup.object({
    email:yup.string().email('invalid Email').required("Email is required"),
    password:yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(32, 'Password must be less than 32 characters')
    .required('Password is required'),
})

export default loginSchema
