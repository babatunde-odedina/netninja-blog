import { Link } from 'react-router-dom';
const Error404 = () => {
  return (
    <div className="not-found">
      <h2>Ooops!!..</h2>
      <p>page not found</p>
      <Link to="/">Back to homepage</Link>
    </div>
  );
};

export default Error404;
