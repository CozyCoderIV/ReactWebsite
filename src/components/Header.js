import PropTypes from 'prop-types';

// Header Object
const Header = ({ title }) => {
  return(
    <header>
        <h1>{title}</h1>
        <button> Add </button>
    </header>
    )
};

// Header Methods (Properties)
Header.defaultProps = {
    title: "Task Tracker",
}
Header.protoTypes = {
    title: PropTypes.string.isRequired,
}
export default Header;

// Header Style Object (CSS)
const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
}
