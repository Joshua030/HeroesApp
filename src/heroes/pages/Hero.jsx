import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const Hero = () => {

  const {heroId} = useParams();

  const hero = useMemo(() =>getHeroById({heroId}), [heroId]);
  const navigate = useNavigate();

  const {id,superhero,alter_ego,publisher,first_appearance,characters} = hero;
  const onNavigateBack =() => {
    // if (publisher === 'Marvel Comics' ){
    // navigate('/marvel')
    // } else {
    // navigate('/dc')
    // }
    navigate(-1);
  }
  if(!hero){
    return <Navigate to="/marvel" />
  }
  
  console.log(hero)
  return (
   <div className="row mt-5">
    <div className="col-4">
      <img 
      src={`/assets/heroes/${id}.jpg`}
      alt={superhero}
      className="img-thumbnail animate__animated animate__fadeInLeft"
      />
    </div>

    <div className="col-8">
      <h3>{superhero}</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"> <strong className="mr-1">Alter ego: </strong>{alter_ego}</li>
        <li className="list-group-item"> <strong>Publisher: </strong>{publisher }</li>
        <li className="list-group-item"> <strong>First appearance: </strong>{first_appearance }</li>
      </ul>

    <h5 className="card-title mt-3 mb-1"> Characters</h5>
    <p>{characters}</p>

    <button 
    className="btn btn-outline-primary"
    onClick={onNavigateBack}>
      Back
    </button>
    </div>
   </div>
  )
}
