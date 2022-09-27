
import '../App.css'
import useFetch from "../hooks/useFetch";

const FetchData = () => {
  // Esta URL te devuelve un array de citas, ideal para que puedas crear un custom hook
  // para paginarlas...
    const URL ="https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json";

    const { isLoading, errorMessage, apiData } = useFetch(URL);

    // Aqui puedes ver la data que viene de la API...
    console.log(apiData);

    if (isLoading)
        return (
            <div className="App">
                <p>Loading data...</p>
            </div>
        );
    // Aqui deberás adaptar el componente para mostrar una x cantidad de elementos por
    // página. Además, debes crear los botones para navegar entre dichas páginas.
    return (
        <div className="App">
            <h3>API DATA</h3>
            {errorMessage ? <p>{errorMessage}</p> : <p>{apiData}</p>}
        </div>
    );
};

export default FetchData;