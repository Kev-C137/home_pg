import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from "./Nav/MainNav";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
        <MainNav />
        <MainContent />
        <Footer />
    </div>
  );
}


export default App;
