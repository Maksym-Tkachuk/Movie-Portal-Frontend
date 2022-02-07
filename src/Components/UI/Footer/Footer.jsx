import { NavLink } from 'react-router-dom';
import { AllGeners } from '../MovieCatalog/MovieCatalog';

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
                { Object.entries(AllGeners).map((el,index)=>{if(index<10)return<NavLink key={`${index}`} to={`/main/${el[0]}`}>{el[1]}</NavLink>})    }
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