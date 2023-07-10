import { Form, Label, Input, Button } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'Redux/contactsFetch';
import { getContacts } from 'Redux/selectors';
import Notiflix from 'notiflix';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    addContactFind({ name, number });
    form.reset();
  };

  const addContactFind = ({ name, number }) => {
    if (
      contacts.find(
        item =>
          item.name.toLowerCase() === name.toLowerCase() ||
          item.number === number
      )
    ) {
      return Notiflix.Notify.info(
        `${name} or ${number} is already in contacts`
      );
    }

    dispatch(addContact({ name, number }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        {' '}
        Name
        <Input
          type="text"
          value={contacts.name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        {' '}
        Phone number
        <Input
          type="tel"
          value={contacts.number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
