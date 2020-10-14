import React, {Component} from 'react';
import {Nav,Navbar,NavbarBrand,NavbarToggler,Collapse,NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';
class NavComponent extends Component{
    constructor(props){
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
        
    }
    toggleNav () {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        
        return(
            <div>
                <React.Fragment>
                    <Navbar style={styles.navStyle} light  sticky='top' expand='md' >
                            <NavbarBrand className = 'mr-auto ml-4' href="/"><img height='70' width='70' src=''  alt="Hungry Dev's Tacos" /></NavbarBrand>
                            <NavbarToggler onClick={this.toggleNav}/>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav  navbar className='ml-auto mr-4 align-items-center'>
                                    <NavItem >
                                        <NavLink style={styles.navText} className='nav-link' to='/home'>
                                             Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink style={styles.navText} className='nav-link' to='/menu'>
                                            Menu
                                            </NavLink>
                                    </NavItem>
                                    <NavItem >
                                        <NavLink style={styles.navText} className='nav-link' to='/reserve'>
                                            Reserve
                                        </NavLink>
                                    </NavItem>
                                    <NavItem >
                                        <NavLink style={styles.navText} className='nav-link' to='/locations'>
                                            Locations
                                        </NavLink>
                                    </NavItem>
                                    <NavItem >
                                        <NavLink style={styles.navText} className='nav-link' to='/news'>
                                            News
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className='nav-link' to='/order'>
                                            <div style={styles.navButton}>Order</div>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>                      
                    </Navbar>
                </React.Fragment>
            </div>
        )
    }
}

 const styles ={
    navStyle:{
        backgroundColor: '#fff',
        borderBottom: '3px solid #707070',
        color:'#3057C2',
    },
    navButton:{
        backgroundColor:'#3057C2',
        color:'#fff',
        padding:10,
        paddingLeft:25,
        paddingRight:25,
        borderRadius:5,
        marginRight:30
    },
    navText:{
        color:'#3057C2'
    }
  
}

export default NavComponent;