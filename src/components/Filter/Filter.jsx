import PropTypes from 'prop-types';

export const Filter = ({ title, value, onChange }) => {
  return (
    <Label>
      <span>{title}</span>
      <Input type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </Label>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
}
