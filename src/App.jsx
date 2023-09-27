import { ReactComponent as Account } from "./assets/svg/account.svg";
import { ReactComponent as Bars } from "./assets/svg/bars.svg";
import Hero from "./components/Hero";
import { useGlobalContext } from "./context";

function App() {
  const { showDrawer } = useGlobalContext();

  return (
    <main className="h-screen">
      <section className="flex gap-4 items-center justify-end h-1/6 px-4">
        <Account onClick={showDrawer} />
        <Bars />
      </section>
      <Hero />
    </main>
  );
}

export default App;
