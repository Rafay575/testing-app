import logo from './logo.svg';
import './App.css';
import Top from './Components/Top';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  const myStyle = {
    // backgroundImage: `url(${
    //     process.env.PUBLIC_URL + "images/bg.png"
    // })`,
    // backgroundSize: "cover",
    // background
    // minHeight: "100vh",
    // backgroundRepeat: "no-repeat",
    // backgroundAttachment: 'fixed',
};
return (
    <div style={myStyle} className='app'>
      <Top />
      <Main/>
      <Footer/>
    </div>
);
}

export default App;
