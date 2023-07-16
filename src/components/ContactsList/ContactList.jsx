import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selector';
import {
  List,
  ItemContact,
  InfoContact,
  BtnDelContact,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <List>
        {visibleContacts.map(item => {
          return (
            <ItemContact key={item.id}>
              <InfoContact>
                {item.name}: {item.number}
              </InfoContact>
              <BtnDelContact
                type="button"
                onClick={() => dispatch(deleteContact(item.id))}
              >
                Delete
              </BtnDelContact>
            </ItemContact>
          );
        })}
      </List>
    </>
  );
};
