import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: order, error, isLoading } = useFetch(`/api/orders/${id}`);
  const history = useHistory();

  const handleClick = () => {
    fetch(`/order/${order.id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div className='blog-details'>
      {isLoading && <div> Loading...</div>}
      {error && <div>{error}</div>}
      {order && (
        <article>
          <h2> {order.title}</h2>
          <p>written by {order.author}</p>
          <div>{order.body}</div>
          <button onClick={handleClick}>delete post</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
