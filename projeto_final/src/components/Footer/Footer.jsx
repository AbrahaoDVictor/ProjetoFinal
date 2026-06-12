import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import style from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.socials}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className={style.link} aria-label="Facebook"><FaFacebook size={20} /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className={style.link} aria-label="Instagram"><FaInstagram size={20} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={style.link} aria-label="LinkedIn"><FaLinkedin size={20} /></a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer" className={style.link} aria-label="TikTok"><FaTiktok size={20} /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className={style.link} aria-label="Twitter"><FaXTwitter size={20} /></a>
      </div>
      <span className={style.copy}>{new Date().getFullYear()} MyApp. All rights reserved.</span>
    </footer>
  )
}