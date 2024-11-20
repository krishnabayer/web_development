import Link from "next/link";
import Image from 'next/image';
import classes from "./main-header.module.css";
import logoImg from '@/assets/logo.png';
import Main_header_background from './main-header-background'

export default function Foodapp_header(){
    return <>
    <Main_header_background/>
    <header className={classes.header}>
        <Link className={classes.logo} href='./'>
        <Image src={logoImg} alt="food image " priority />
        next elevel food app
        </Link>
        <nav className={classes.nav}>
        <ul>
            <li><Link href='./community'>community</Link></li>
            <li><Link href='./meals'>meals</Link></li>
            <li><Link href='./meals/share'>meal_share</Link></li>
        </ul>
        </nav>
        

    </header>
    </>
}