import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactsForm } from './ContactsForm/ContactsForm';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  }

  filteredContacts = value => {
    const filterNormalize = value.toLowerCase();

    return this.state.contacts
      .filter(contact => {
        return contact.name.toLowerCase().includes(filterNormalize);
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  formSubmit = ({ name, number }) = > {
    this.setState(prevState => {
      const { contacts } = prevState;
      const isContact = contacts.find(contact => contact.name === name);

      if (isContact) {
        alert(`${name} ia already in contact`);
        return contacts;
      } else {
        return {
          contacts: [
            {
              id: nanoid(),
              name,
              number,
            },
            ...contacts,
          ],
        };
      }
    });
  };

  contactDelete = id => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const contactsAfterDelete = contacts.filter(contact => contact.id !== id);
      return {
        contacts: [
          ...contactsAfterDelete
        ]
      };
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <h1>Phoneboo</h1>
        <ContactsForm onSubmit={this.formSubmit} />

        <h2>Contacts</h2>
        <Filter
        <Title>Find contact by name</Title>
        onChange={this.handleFilterChange}
        value={filter}
        />

        <ContactList
          filteredContacts={this.filteredContacts(filter)}
          onDelete={this.contactsDelete}
        />
      </Container>
    );
  }
}






// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };