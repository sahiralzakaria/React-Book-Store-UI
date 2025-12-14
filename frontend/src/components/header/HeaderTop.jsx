import './header.css';

const HeaderTop = () => {
    return (
        <div className="header-top">
            <div className="header-top-menu">
                <i class="bi bi-list"></i>
            </div>
            <div className="header-top-phone">
                <i className="bi bi-telephone-fill"></i>
                0552666666
            </div>
            <div className="header-top-text">
                Welcome to our book store
            </div>
            <div className="header-top-link">
                <i className="bi bi-person-fill"></i>
                Login
            </div>
        </div>
    )
}

export default HeaderTop