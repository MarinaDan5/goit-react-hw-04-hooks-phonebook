import PropTypes from 'prop-types';

export default function Contacts({ contacts, onDelete }) {
  console.log(contacts);
  return (
    <ul className="contact-list">
      {contacts.map(({ id, name, number }) => {
        return (
          <li className="contact-list__item" key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button className="button" onClick={onDelete} id={id}>
              Delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
};
