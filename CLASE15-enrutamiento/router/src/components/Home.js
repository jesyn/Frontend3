import {Link, Outlet, useNavigate, NavLink} from 'react-router-dom'


function Home (){
    const navigate = useNavigate()

    return(
        <>
        <ul>
            <li><Link to='/' > 🏠 HOME 🏠 </Link></li>
            <li><Link to='/Gatos' > 😸 GATOS 😸 </Link></li>
            <li><NavLink to='/Perros' > 🐶 PERROS 🐶 </NavLink></li>
            <li><button onClick={() => navigate(-1)}>BACK</button></li>
        </ul>
        <br></br>
        <h2>✨ TENEMOS ✨ </h2>
            <Outlet />
        </>
    )
    
}

export default Home;