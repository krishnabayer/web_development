"use client"
import Link from "next/link";
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";
export default function Navlink({href,children}){
    const path = usePathname();
    return <Link className={path.startsWith(href) ? `${classes.link} ${classes.active}` : undefined} href={href}>{children}</Link>
}