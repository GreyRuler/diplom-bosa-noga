import banner from '../assets/img/banner.jpg';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {Catalog} from './pages/Catalog';
import {About} from './pages/About';
import {Contacts} from './pages/Contacts';
import {CatalogList} from "./CatalogList";

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
                        <Route path='/home/*' element={<Home/>}>
                            <Route path={'items/:categoryId'} element={<CatalogList/>}/>
                        </Route>
                        <Route path='/catalog/*' element={<Catalog/>}>
                            <Route path={'items/:categoryId'} element={<CatalogList/>}/>
                        </Route>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                    </Routes>
                </div>
            </div>
        </main>
    )
}