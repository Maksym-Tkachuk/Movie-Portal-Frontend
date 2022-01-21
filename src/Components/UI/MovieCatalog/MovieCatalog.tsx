import { FC, useEffect, useMemo } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { FilmResponce } from "../../../models/response/FilmGenreResponce"
import { getFilms } from "../../../Redux/filmCatalog-reducer"
import Loader from "../../Elements/Loader/Loader"
import Movie from "../FilmProfile/MoviesYouLike/Movie/Movie"
import { Geners } from "../UploadFilms/GenreFiled/GenreFiled"
import EnterInformation from "./EnterInformation/EnterInformation"
import FilmContent from "./FilmContent/FilmContent"



const MovieCatalog:FC = ()=>{


 
const {isAuth} = useTypedSelector(state=>state.auth)
const {films,loading}= useTypedSelector(state=>state.filmsCatalog)


const GenresForDispatch = useMemo(()=>{
return Geners.map(elem=>elem.title)
},[])

    useEffect(()=>{
     dispatch(getFilms([...GenresForDispatch]))
 },[])

 const dispatch = useDispatch()

 if(loading){
    return <Loader/>
}
 
 const filmFilter=(movies:Array<FilmResponce>,genre:string)=>{ 
   return movies.filter((e)=>{return e.genre.includes(genre)})
 }


const Movies:Array<{id:string,title:string,films:Array<FilmResponce>,isAuth:boolean,type:string}> = [
        {id:"1",title:"Фантастика", films:  filmFilter(films,"Фантастика"), isAuth:isAuth,type:"Sci_Fi"},
        {id:"2",title:"Боевик", films:filmFilter(films,"Боевик"), isAuth:isAuth,type:"Action"},
        {id:"3",title:"Комедия", films:filmFilter(films,"Комедия"), isAuth:isAuth,type:"Sitcoms"},
        {id:"4",title:"Романтика", films: filmFilter(films,"Романтика"), isAuth:isAuth,type:"Romantic"},
        {id:"5",title:"Драма", films: filmFilter(films,"Драма"), isAuth:isAuth,type:"Drama"},
    ]
   
const filmDepartments = Movies.map(elem=> <FilmContent key={elem.id} title={elem.title} films={elem.films} type={elem.type} />)


if (loading) {
    return <Loader />;
  }

return (
        <div>
            {isAuth ||  <EnterInformation/>}
               {filmDepartments}
        </div>
    )
}


export default MovieCatalog