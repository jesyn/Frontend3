
import './App.css';
import useToggle from './hooks/useToggle';

function App() {
  const [isTextChanged, setIsTextChanged] = useToggle();
    
  return (
    <div className='container'>
      <h1>using toggle</h1>
      <h2>{isTextChanged ? 'one text' : 'two text'}</h2>
      <button onClick={setIsTextChanged}>change text</button>
    </div>
  );

}

export default App;
