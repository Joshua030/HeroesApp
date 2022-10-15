
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../componentes"
import { getHeroesByName } from "../helpers";

export const SearchHero = () => {

  const navigate = useNavigate();
  
  const location = useLocation();

  const query = queryString.parse (location.search);
  const {q=''} = query;

  const heroes = getHeroesByName(q);
  const showSearch =(q.length ===0);
  const showError = (q.length >0) && heroes.length ===0;
  const {searchText,onInputChange} = useForm ({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
  //  if (searchText.trim().length <= 1) return;
   navigate(`?q=${searchText.toLowerCase().trim()}`)
  }
  return (
    <>
    <h1>SearchHero</h1>
    <hr />

<div className="row">
    <div className="col-5">
      <h4>Searching</h4>
      <hr />
      <form onSubmit={onSearchSubmit} >
<input 
type="text" 
placeholder = "Search a hero"
className="form-control"
name= "searchText"
autoComplete="off"
value={searchText}
onChange={onInputChange}
/>
<button className="btn btn-outline-primary mt-1">
  Search
</button>
      </form>
    </div>

    <div className="col-7">
      <h4>Results</h4>
      <hr />
<div className="alert alert-primary animate__animated animate__fadeInRight" style={{display: showSearch ? '':'none'}}>
Search a hero
</div>

<div className="alert alert-danger animate__animated  animate__jackInTheBox" style={{display: showError ? '':'none'}}>
There's not results with <strong>{q}</strong>
</div>
{
  heroes.map (hero => (
<HeroCard 
key={hero.id}
{...hero}
/>
  ))

}

    </div>

</div>

    </>
    )
    
}
