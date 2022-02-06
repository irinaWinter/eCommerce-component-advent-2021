import { Layout, Section } from "../../layout";
import { Htag, ProductList, Cart } from "..";

const App = (): JSX.Element => (
  <Layout>
    <Section>
      <Htag tag="h2">To Go Menu</Htag>
      <ProductList />
    </Section>
    <Section>
      <Htag tag="h2">Your Cart</Htag>
      <Cart />
    </Section>
  </Layout>
);

export default App;
