
// components
import Header from "../../components/global/Header";
import Hero from "../../components/global/Hero";

// assets
import heroImage from "../../assets/imgs/hero_image.svg"

const Home: React.FC = () => {
    return <>
        <Header></Header>
        <Hero
            imageSrc={heroImage}
            altText="Descrição da imagem"
            description="
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Pellentesque efficitur porttitor porta.
                Proin bibendum ac libero et semper."
        ></Hero>
    </>;
};

export default Home;
