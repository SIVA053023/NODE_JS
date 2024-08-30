import {Link} from 'react'

let Nav=()=>{
    return <>
             <nav  className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="#" className="navbar-brand">Logo</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/Admin">Admin</Link></li>
                        <li><Link to="/test">Test</Link></li>
                    </ul>
                </div>
             </nav>
           </>
}
export default Nav