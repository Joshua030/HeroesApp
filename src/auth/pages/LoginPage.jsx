import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../context";
import styles from './LoginPage.module.css'

export const LoginPage = () => {
    const {login,user}=useContext(AuthContext)

    const navigate = useNavigate();

    const {nickName,onInputChange} = useForm ({
        nickName: ''
      });

    const onLogin = () => {
const lastPath = localStorage.getItem('lastPath') || '/';
if(nickName.length < 1) return;
        login(nickName);
        navigate(lastPath,{
            replace: true
        });
    }
  return (
   <div className="container mt-5">
    <h1 
    className={styles.mainTitle}>
      HeroesApp</h1>
    <hr />
    <form onSubmit={onLogin} >
<input 
type="text" 
placeholder = "Your Name Here"
className="form-control"
name= "nickName"
autoComplete="off"
value={nickName}
onChange={onInputChange}
/>
{/* <button className="btn btn-outline-primary mt-1">
  Login
</button> */}
      </form>

      <img 
      src="/assets/mainPicture/Injustice-3-Should-Just-Be-Marvel-Vs-DC.jpg"
      alt="Heroes"
      className={`${styles.heroeImage} animate__animated animate__zoomIn `}
      />

    {/* <button 
    className="btn btn-primary"
    onClick={onLogin}
    >
        Login
    </button> */}
   </div>
  )
}

{/* <form onSubmit={onSearchSubmit} >
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
      </form> */}