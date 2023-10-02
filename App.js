import './App.css'
import Movie from './Movie'
import Header from './Header'
import data from './data.json'
function App(){
    return(
    <div className='App'>
        <Header/>
        <div className='main'>
            {
                data.map((element)=>{
                    return(
                    <Movie title={element.Title}
                    Year={element.Year}
                    img={element.Poster}/>)
                })
            }
        </div>
        </div>
        
        );
}
export default App;
