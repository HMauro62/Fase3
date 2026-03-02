import FilterForm from '../components/Forms/FilterForm';
import Navbar from '../components/Header/NavBar/NavBar2';
import LstView from '../components/List/LstView';
import '../index.css';

function Home() {
  return (
    <div>
        <Navbar />
        <FilterForm />
        <LstView />
    </div>
  );
}

export default Home;
