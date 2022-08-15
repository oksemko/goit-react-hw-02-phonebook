import PropTypes from 'prop-types';

export const ContactsItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <ContactsElement>
      <span>{name}: {number}</span>
      <Button type="button"
        id={id}
        onClick={event => {
          onDelete(event.target.id);
        }}
      >
        Delete
      </Button>
    </ContactsElement>
  );
};

ContactsItem.proptypes = {
  contact: propTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
}
