import Layout from '../../layout/Layout';
import Section from '../../layout/Section/Section';
import { Htag } from '..';

const App = (): JSX.Element => (
  <Layout>
    <Section>
      <Htag tag="h2">To Go Menu</Htag>
    </Section>
    <Section>
      <Htag tag="h2">Your Cart</Htag>
    </Section>
  </Layout>
);

export default App;