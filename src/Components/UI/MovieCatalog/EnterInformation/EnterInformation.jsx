import s from './EnterInformation.module.scss';

const EnterInformation = (props) => {
    return (
        <section className={s.enterInformation}>
                <div className={s.blockInformation}>
                    <div className={s.blockInformation__top}>TV Shows</div>
                    <div className={s.blockInformation__bottom}>Enjoy online streaming of the best Action, Comedy, and Romantic tv series from all over the world</div>
                </div>
        </section>
    )
}

export default EnterInformation