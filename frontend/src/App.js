import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./componentes/ProductsList";
import AddProduct from "./componentes/AddProducts";
import EditProduct from "./componentes/EditProducts";
 
function App() {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Switch>
            <Route exact path="/">
              <ProductList />
            </Route>
            <Route path="/add">
              <AddProduct />
            </Route>
            <Route path="/edit/:id">
              <EditProduct />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}
 
export default App;
