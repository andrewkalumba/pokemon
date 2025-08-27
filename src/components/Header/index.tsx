import Image from "next/image"
import Logo from '../../../public/poke.png'
import PokeBall from '../../../public/poke1.jpg'
const Header = () => {
    return (
        <header className="header">
            <div className="header__icon">
                <Image src={PokeBall} alt="Pokeball"/>
            </div>
            <div className="header__logo">
                <Image src={Logo} alt="Pokemon Logo"/>
            </div>
              <div className="header__avatar">
                <Image src={PokeBall} alt="Pokeball"/>
            </div>
        </header>

    )

}

export default Header