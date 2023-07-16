import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selector';
import { fetchContacts } from 'redux/contacts/operations';
import { FormContact } from 'components/FormContact/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactsList/ContactList';
import { Loader } from 'components/Loader/Loader';
import { Title, TextTitle, ErroTitle } from 'components/App.styled';
import { Container } from 'components/AppBar/AppBar.styled';
import { selectIsLogin } from 'redux/auth/authSelectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLogin ? (
        <section>
          <Container>
            <Title>Phonebook</Title>
            <FormContact />
            {loading && !error && <Loader />}
            {contacts.length > 0 ? (
              <>
                <TextTitle>Contacts</TextTitle>
                <Filter />
                <ContactList />
              </>
            ) : (
              <TextTitle>No saved contacts</TextTitle>
            )}
            {error && <ErroTitle>{error}</ErroTitle>}
          </Container>
        </section>
      ) : (
        <section>
          <Container>
            <Title>Please, login</Title>
          </Container>
        </section>
      )}
    </>
  );
};
export default Contacts;
