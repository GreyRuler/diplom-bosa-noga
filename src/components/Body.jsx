import banner from '../assets/img/banner.jpg';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {Catalog} from './pages/Catalog';
import {About} from './pages/About';
import {Contacts} from './pages/Contacts';
import {CatalogList} from "./CatalogList";
import {Product} from "./Product";
import {Cart} from "./pages/cart/Cart";
import {NotFound} from "./pages/NotFound";

export const Body = () => {
    return (
        <main className='container'>
            <div className="row">
                <div className="col">
                    <div className="banner">
                        <img src={banner} className="img-fluid"
                             alt="К весне готовы!"/>
                        <h2 className="banner-header">К весне готовы!</h2>
                    </div>
                    <Routes>
                        <Route path='/' element={<Navigate to='/home/items/'/>}/>
                        <Route path='/home' element={<Navigate to='/home/items/'/>}/>
                        <Route path='/catalog' element={<Navigate to='/catalog/items/'/>}/>
                        <Route path='/home/*' element={<Home/>}>
                            <Route path={'items/:categoryId'} element={<CatalogList/>}/>
                        </Route>
                        <Route path='/catalog/*' element={<Catalog/>}>
                            <Route path={'items/:categoryId'} element={<CatalogList/>}/>
                        </Route>
                        <Route path={'/catalog/product/:id'} element={<Product/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </main>
    )
}
