// import logo from './logo.svg';
import './App.css';

function App() {

  const theme = 'dark';

  const userName = 'Pitty';

  return (
    <div className="App">
      <Message name = {userName} theme={theme}/>
    </div>
  );
}

export default App;

const Message = ({name, theme}) =>{

 
  return(

    <div className="header" style={{background: theme === 'dark' ? "#222222" : "#fff"}}>
      <h1>Hello, {name}</h1>
    </div>
  )

}


