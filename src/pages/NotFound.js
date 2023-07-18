import { Container, Section } from 'components/App.styled';

const NotFound = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      <Section>
        <Container>
          <b style={{ fontSize: 64 }}>404</b>
          <h3>Sorry, we couldn't find that page :(</h3>
        </Container>
      </Section>
    </main>
  );
};

export default NotFound;
