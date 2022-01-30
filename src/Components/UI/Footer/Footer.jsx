import { NavLink } from 'react-router-dom';

import style from './Footer.module.scss';

const Footer = (props) => {
    return (
        <footer className={style.footer}>
            <div>
                  <div className={style.footer__links}>
                <div className={style.nameLink}>
                    Links
                </div>
                <div className={style.listLinks}>
                    <NavLink to='/main/Movies'>Movies</NavLink>
                    <NavLink to='/main/TVSeries'>TV Series</NavLink>
                    <NavLink to='/main/ShortFilms'>ShortFilms</NavLink>
                    <NavLink to='/main/MostWatched'>Most Watched</NavLink>
                    <NavLink to='/main/TopIMdb'>Top IMdb</NavLink>
                    <NavLink to='/main/F2Movies'>F2 Movies</NavLink>
                    <NavLink to='/main/Action'>Action</NavLink>
                    <NavLink to='/main/Horror'>Horror</NavLink>
                    <NavLink to='/main/SciFi'>Sci - Fi</NavLink>
                    <NavLink to='/main/KDrama'>K Drama</NavLink>
                    <NavLink to='/main/Romantic'>Romantic</NavLink>
                </div>
            </div>
            <div className={style.footer__description}>
                <div className={style.description__name}>About Us</div>
                <div className={style.description__text}>
                    <div><b>MoviePortal</b>  is free streaming website with zero ads, it allows you watch series online free, watch tv shows online in high quality for free. </div>
                    <div>This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services.</div>
                </div>
            </div>
            </div>
          
        </footer>
    )
}

export default Footer