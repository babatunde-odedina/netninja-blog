import Bloglist from './Bloglist';
import useFetch from './useFetch';
import { useState, CSSProperties, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState('#608a38');
  const [orders, setOrders] = useState(null);

  const {
    data: order,
    isLoading,
    error,
  } = useFetch('https://lorifoodappbackend.onrender.com/api/orders');

  useEffect(() => {
    setOrders(order);
  }, [order]);

  return (
    <div className='home'>
      {error && <div> {error} </div>}
      {isLoading && (
        <div>
          <ClipLoader
            color={color}
            loading={loading}
            size={150}
            aria-label='Loading Spinner'
          />
        </div>
      )}
      {orders && (
        <Bloglist orders={orders} setOrders={setOrders} title='All Orders!' />
      )}
    </div>
  );
};

export default Home;
