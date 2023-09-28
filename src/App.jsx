import { ReactComponent as Account } from "./assets/svg/account.svg";
import { ReactComponent as Bars } from "./assets/svg/bars.svg";
import ProfileDrawer from "./components/profile/ProfileDrawer";
import AuthDrawer from "./components/registration/AuthDrawer";
import { useGlobalContext } from "./context";

function App() {
  const { showRegistration, showProfile } = useGlobalContext();

  return (
    <main className="h-screen">
      <section className="flex gap-4 items-center justify-end h-1/6 px-4">
        <Account onClick={showRegistration} />
        <Bars onClick={showProfile} />
      </section>
      <AuthDrawer />
      <ProfileDrawer />
    </main>
  );
}

export default App;
