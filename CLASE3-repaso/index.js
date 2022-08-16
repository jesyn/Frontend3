
const title = "Personal Information:";
const cardInfo = [
    {
        Name: "Robert",
        lastName: "Downey Jr",
        Age: 57,
        Nacionality: "USA"
    }
]
const cardMovies= [
    "Pirates of the Caribbean",
    "Johnny scissor hand",
    "Transcendent"
]

const cardEducation=[
    "University of Arts",
    "University of UCLA"
]

const Bio="es un actor, actor de voz, productor y cantante estadounidense. Inició su carrera como actor a temprana edad apareciendo en varios filmes dirigidos por su padre, Robert Downey Sr., y en su infancia estudió actuación en varias academias de Nueva York. Se mudó con su padre a California, pero abandonó sus estudios para enfocarse completamente en su carrera."

const Header = () => {
    let header = ["HOME","ABOUT","CARRER","EDUCATION"]
    let headerList = header.map((item,index) =>
        <section key={index}>{item}</section>
    )
    return <section>{headerList}</section>
}

ReactDOM.render(
    <div>
        <Header/>
    </div>,
    document.getElementById("root")
)

