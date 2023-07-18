import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations-auth';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Forma, Lable, Input, BtnAddContact } from './UserAuth.styled';
import { selectIsLogin } from 'redux/auth/authSelectors';
import { Section, Container } from 'components/App.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().nullable().email().required(),
  password: yup
    .string()
    .min(7, 'must be at least 7 characters long')
    .required()
    .trim(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const UserReg = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);

  const handleLogin = (values, { resetForm }) => {
    console.log(values);

    dispatch(
      register({
        name: values.name.trim(),
        email: values.email.trim(),
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <>
      {!isLogin && (
        <Section>
          <Container>
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={handleLogin}
            >
              <Forma>
                <Lable>
                  Name
                  <Input
                    type="text"
                    name="name"
                    placeholder="Adrian"
                    autoFocus
                  />
                </Lable>
                <Lable>
                  Email
                  <Input
                    type="email"
                    name="email"
                    placeholder="example@mail.com"
                  />
                </Lable>
                <Lable>
                  Password
                  <Input type="password" name="password" />
                </Lable>
                <BtnAddContact type="submit">Registration</BtnAddContact>
              </Forma>
            </Formik>
          </Container>
        </Section>
      )}
    </>
  );
};

export default UserReg;
