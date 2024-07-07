import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header";
import { ListPerson } from "./components/ListPerson";
import { UserList } from "./components/UserList";
import '../src/components/UserList/User.css'

export const App = () => {
  return (
    <>
      <Header message="Lista de Usuarios"/>
      <UserList />
      {/*<ListPerson />*/}
      <Footer />
    </>
  );
};
