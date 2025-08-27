'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

type navLinksProps = {
    name:string
    url:string
}

const navLinks: navLinksProps []= [
    {name:"home", url:'/'},
    {name:"pokemon", url:'/pokemon'},
    {name:"types", url:'/types'},
    {name:"about", url:'/about'},
]



const Navigation = () => {
    const path = usePathname()
    return (
        <nav className="menu">
            {navLinks.map((item:navLinksProps, index:number) => <Link className={`menu__item--${item.name} ${path === item.url ? "active" : ""}`} key={index} href={item.url} >{item.name}</Link>)}
        </nav>

    )
}

export default Navigation