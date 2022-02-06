import { FC, useState } from "react"
import { useNavigate } from "react-router"
import { AllGeners } from "../MovieCatalog/MovieCatalog"
import style from "./FilmMenu.module.scss"


const FilmMenu:FC = ()=>{
    const navigation = useNavigate()
    const [modalWindow, setModalWindow] = useState<boolean>(false)

let menu_item:Array<{key:string,title:string,url:string}> = [
    { key:"1", title:"Главная", url:"/main"},
    { key:"2", title:"Фантастика", url:"/main/Sci_Fi"},
    { key:"3", title:"Боевик", url:"/main/Action"},
    { key:"4", title:"Комедия", url:"/main/Sitcoms"},
    { key:"5", title:"Романтика", url:"/main/Romantic"},
    { key:"6", title:"Драма", url:"/main/Drama"},
]
const menu = menu_item.map(elem=><li key={elem.key} onClick={()=>navigation(elem.url)}>{elem.title}</li>)

let otherGenre:Array<{title:string,type:string}> = []

for(let elem in AllGeners){
    //@ts-ignore
    otherGenre=[...otherGenre,{title:AllGeners[elem],type:elem}]
}
const otherGenreMenu = otherGenre.map((elem,index)=>{
    return <li key={index} 
    onClick={()=>{
    navigation(`main/${elem.type}`)
    setModalWindow(true)
    setTimeout(()=>setModalWindow(false),200) }
}>{elem.title}</li>
})


    return(
        <nav className={style.menu}>
          <ul className={style.menu_items}>
              {menu}
              <li className={style.genres}>ЖАНРЫ</li>
            {modalWindow || <li className={style.other_item}> 
                  <ul >
                      {otherGenreMenu} 
                  </ul>
              </li>}  
          </ul>
        </nav>
    )
}

export default FilmMenu