import HomeImage from '../img/home-img.webp';
import { Container } from 'components/App.styled';
import { Section, HomeTitle, HomeImg } from 'components/App.styled';

const Home = () => {
  return (
    <Section>
      <Container>
        <HomeTitle>Welcome to Phonebook APP!</HomeTitle>
        <HomeImg src={HomeImage} alt="Title image" />
      </Container>
    </Section>
  );
};

export default Home;
