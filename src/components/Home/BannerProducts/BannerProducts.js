import useProducts from '../../Hooks/useProducts';
import Product from '../../ManageProducts/Product/Product';


const BannerProducts = () => {

    const [products] = useProducts([]);


    return (
        <div className='container'>
            <h2 className='text-center py-4'>Our Inventory</h2>
            <div className='products-mapped-custom-banner'>
                {
                    products.slice(0,6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            
        </div>
    );
};

export default BannerProducts;