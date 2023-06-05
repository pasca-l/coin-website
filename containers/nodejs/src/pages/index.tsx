import { useSession } from "next-auth/react";

import { Home } from "../components/templates/home";
import { Login } from "../components/templates/auth";
import { prisma } from "../lib/prisma";

const App = ({ ...props }) => {
  const { data: session } = useSession();

  return <>{session ? <Home coin_data={props} /> : <Login />}</>;
};

export default App;

export async function getStaticProps() {
  const data = await prisma.coin.findMany();
  return {
    props: { data },
  };
}
