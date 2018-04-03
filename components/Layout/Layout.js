import PropTypes from 'prop-types';
import css from './layout.css';

const Layout = ({ children }) => (
  <section className={css.layout}>
    <h1 className={css.title}>Main Title</h1>
    {children}
  </section>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;