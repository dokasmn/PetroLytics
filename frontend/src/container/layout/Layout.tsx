// react
import React from 'react';

// components
import Header from "../../components/global/Header";
import Hero from "../../components/global/Hero";
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";

// assets
import heroImage from "../../assets/imgs/hero_image.svg";

// styles
import { StyledLayout } from "./Layout.styles"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <StyledLayout>
            <Header />
            <Hero
                imageSrc={heroImage}
                altText="Descrição da imagem"
                description="
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Pellentesque efficitur porttitor porta.
                    Proin bibendum ac libero et semper."
            />
            <Navbar />
            {children}
            <Footer />
        </StyledLayout>
    );
};

export default Layout;
