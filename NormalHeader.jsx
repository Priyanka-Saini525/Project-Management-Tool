import { Link } from "react-router-dom";

const headerStyles = {
  navbarNav: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '1rem', // Adjust as needed
    marginRight: '3rem', // Adjust as needed
  },
  navItem: {
    margin: '0 0.5rem', // Space between items
  },
  navLink: {
    color: '#007bff', // Primary text color
    fontWeight: 'normal', // No bold
    textDecoration: 'none',
    padding: '0.5rem 1rem', // Adjust padding as needed
    borderRadius: '0.25rem', // Rounded corners
    transition: 'background-color 0.3s ease', // Smooth background color transition
  },
  navLinkHover: {
    color: '#ffffff', // Text color on hover
    backgroundColor: '#0056b3', // Background color on hover
  },
};

const NormalHeader = () => {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5" style={headerStyles.navbarNav}>
      <li className="nav-item" style={headerStyles.navItem}>
        <Link
          to="/user/login"
          className="nav-link active"
          aria-current="page"
          style={headerStyles.navLink}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = headerStyles.navLinkHover.backgroundColor}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
        >
          User Login
        </Link>
      </li>
    </ul>
  );
};

export default NormalHeader;
