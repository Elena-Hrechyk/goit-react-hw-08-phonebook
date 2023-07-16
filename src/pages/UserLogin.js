import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations-auth';
import { selectIsLogin } from 'redux/auth/authSelectors';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Forma, Lable, Input, BtnAddContact } from './UserAuth.styled';

const schema = yup.object().shape({
  email: yup.string().nullable().email().required(),
  password: yup
    .string()
    .min(7, 'must be at least 7 characters long')
    .required(),
});

const initialValues = {
  email: '',
  password: '',
};

const UserLogin = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);

  const handleLogin = (values, { resetForm }) => {
    console.log(values);

    dispatch(
      logIn({
        email: values.email.trim(),
        password: values.password.trim(),
      })
    );
    resetForm();
  };

  return (
    <>
      {!isLogin && (
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleLogin}
        >
          <Forma>
            <Lable>
              Number
              <Input type="email" name="email" placeholder="example@mail.com" />
            </Lable>
            <Lable>
              Password
              <Input type="password" name="password" />
            </Lable>
            <BtnAddContact type="submit">Login</BtnAddContact>
          </Forma>
        </Formik>
      )}
    </>
  );
};

export default UserLogin;
