import { Home } from "../components/templates/home";
import { prisma } from "../lib/prisma";

const App = ({ ...props }) => {
  return (
    <>
      <Home coin_data={props} />
    </>
  );
};

export default App;

export async function getStaticProps() {
  const data = await prisma.coin.findMany();
  return {
    props: { data },
  };
}
