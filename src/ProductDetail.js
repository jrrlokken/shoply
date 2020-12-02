import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartIcons from './CartIcons';

const ProductDetail = () => {
  const { id } = useParams();
  const { image_url, name, price, description } = useSelector(st => ({
    ...st.products[id]
  }));

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <img
          className="card-img-top"
          src={image_url}
          alt={name}
        />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5>{name}</h5>
            <p>${price}</p>
          </div>
          <p className="text-center">{description}</p>
          <CartIcons id={id} />
        </div>
        <Link to='/' className='btn btn-block btn-link'>
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;