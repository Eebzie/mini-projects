import logo from '../images/logo72.png';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={logo}/>
                    <h1>Gabby</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/project" activeStyle>
                        Project
                    </NavLink>
                    <NavLink to="/resume" activeStyle>
                        Resume
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/contact" activeStyle>
                        Contact
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar