import './header.css'
import HeaderMiddle from './HeaderMiddle'
import HeaderTop from './HeaderTop'

export const Header = () => {
    return (
        <header className="header">
            <HeaderTop />
            <HeaderMiddle />
        </header>
    )
}
