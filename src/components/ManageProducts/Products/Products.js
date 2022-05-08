import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';
import './Products.css';


const Products = () => {

    const [products] = useProducts([]);

   

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 py-5 text-center">
                    <h2>Inventory</h2>
                </div>
            </div>
            <div className='products-mapped'>
                {
                    products.map(product => <Product
                    key={product._id}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;