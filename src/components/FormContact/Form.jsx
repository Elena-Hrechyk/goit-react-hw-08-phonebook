import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selector';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Forma, Lable, Input, BtnAddContact } from './Form.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const FormContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const nameUser = values.name.toLowerCase().trim();

    const checkContact = contacts.some(
      item => item.name.toLowerCase() === nameUser
    );

    if (checkContact) {
      return alert(`${values.name.trim()} is already in contacts`);
    }

    dispatch(
      addContacts({
        name: values.name.trim(),
        number: values.number.trim(),
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Forma>
        <Lable>
          Name
          <Input type="text" name="name" placeholder="Adrian" autoFocus />
        </Lable>
        <Lable>
          Number
          <Input type="tel" name="number" placeholder="380671234567" />
        </Lable>
        <BtnAddContact type="submit">Add contact</BtnAddContact>
      </Forma>
    </Formik>
  );
};
