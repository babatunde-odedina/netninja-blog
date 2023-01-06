const Bloglist = ({ orders, title, setOrders }) => {
  console.log(orders);

  const handleClick = (order) => {
    fetch(`https://lorifoodappbackend.onrender.com/api/orders/${order._id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // windows.reload();
        const exist = orders.find((x) => x._id === order._id);
        if (exist) {
          setOrders(orders.filter((x) => x._id !== order._id));
        }
        console.log('deleted');
        console.log(orders);
      })
      .catch((err) => {
        console.log('error in deleting');
      });
  };

  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {orders.map((order) => (
        <div className='blog-preview' key={order._id}>
          <div to={`/order/${order._id}`}>
            <div className='i-flex'>
              <h2>{order.name}</h2>
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  window.confirm('Press OK to Delete') && handleClick(order);
                }}
              >
                <i className='fa-solid fa-trash-can'></i>
              </div>
            </div>
            {order.orders.map((food) => (
              <p key={food._id}>
                {food.food}: &#8358;
                {food.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </p>
            ))}
            <p>delivery: &#8358;50</p>
            <p>
              Total: &#8358;
              {order.total !== undefined
                ? order.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                : ''}
            </p>
            <p>
              Sent on: {new Date(order.createdAt).toLocaleDateString()}{' '}
              {new Date(order.createdAt).toLocaleTimeString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
