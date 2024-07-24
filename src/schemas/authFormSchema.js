import * as Yup from 'yup';

const authFormSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name must be no more than 32 characters')
    .matches(
      /^[a-zA-Z0-9\s]*$/,
      'Name can only contain letters, numbers, and spaces'
    )
    .trim(),
  // .required(),
  userEmail: Yup.string()
    .required('Email is required')
    .email()
    .matches(
      /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
      'Invalid email format. Email must contain @'
    )
    .trim(),
  userPassword: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must be no more than 64 characters')
    .trim(),
});

export default authFormSchema;
