import './App.css';

const saludos=["HOLA", "HOLA","HOLA", "MUNDO"]



function App() {
  const h1Style = {color:"blue"}
  return (
    <div>
        {saludos.map((saludo, index) => {
          return <h1 style={{textAlign:"center"}}key={index}
          className="titulo">{saludo}</h1>
        })}
    </div>
  );
}

export default App;
