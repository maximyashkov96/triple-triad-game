import s from './Header.module.scss'
import Container from '../Container'

import logo from '../../assets/logo.png'

const Header = () => {

    const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];
    return (
        <header className={s.root}>
            <div className={s.header}>
                <Container>
                    <div className={s.headerWrap}>
                        <div className={s.logo}>
                            <img src={logo} alt='logo' className={s.image}/>
                        </div>
                        <ul className={s.nav}>
                            {MENU.map((item, index) => <li key={index}><a href="https://it-course.online/course/react/lesson-01">{item}</a></li>)}
                        </ul>
                    </div>
                </Container>
            </div>
        </header>
    )
}

export default Header