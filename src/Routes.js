import { Switch, Route, Redirect } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Cart from './Cart';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <ProductList />
      </Route>
      <Route path='/products/:id' exact>
        <ProductDetail />
      </Route>
      <Route path='/cart' exact>
        <Cart />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
}

export default Routes;