import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// styles
import { StyledNavbarBackground, StyledNavbarPageOption, StyledNavbarSection } from "./Navbar.styles";

const Navbar: React.FC = () => {
    const pages = [
        { name: 'HOME', path: '/' },
        { name: 'DASHBOARD', path: '/graphics' },
        { name: 'OILMAP', path: '/oilmap' }
    ];

    const location = useLocation();

    return (
        <StyledNavbarSection>
            <StyledNavbarBackground>
                {pages.map((page) => (
                    <NavLink
                        to={page.path}
                        key={page.name}
                        style={{ textDecoration: 'none' }}
                    >
                        <StyledNavbarPageOption
                            page={location.pathname === page.path}
                        >
                            {page.name}
                        </StyledNavbarPageOption>
                    </NavLink>
                ))}
            </StyledNavbarBackground>
        </StyledNavbarSection>
    );
};

export default Navbar;
