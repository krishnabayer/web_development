import Link from "next/link";
import Image from 'next/image';
import classes from "./main-header.module.css";
import logoImg from '@/assets/logo.png';
import Main_header_background from './main-header-background'
// import { usePathname } from "next/navigation";
import Navlink from "./nav-link";
export default function Foodapp_header(){
    // const path = usePathname();
    return <>
    <Main_header_background/>
    <header className={classes.header}>
        <Link className={classes.logo} href='./'>
        <Image src={logoImg} alt="food image " priority />
        next elevel food app
        </Link>
        <nav className={classes.nav}>
        <ul>
            {/* <li><Link className={path.startsWith('/community') ? classes.active : undefined} href='./community'>community</Link></li>
            <li><Link className={path.startsWith('/meals') ? classes.active : undefined} href='./meals'>meals</Link></li> */}
            <li><Navlink href='./community' >community</Navlink  ></li>
            <li><Navlink href='./meals' >meals</Navlink  ></li>
            {/* <li><Link className={path.startsWith('/meals') ? classes.active : undefined} href='./meals/share'>meal_share</Link></li> */}
        </ul>
        </nav>
        

    </header>
    </>
}