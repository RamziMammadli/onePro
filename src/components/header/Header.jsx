import React from 'react'
import styles from './Header.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const navigation = useNavigate()
  return (
    <div className={styles.container}>
        <div className={styles.containerTop}>
            <div className={styles.context}>
                <div className={styles.contextText}>
                    <FaPhoneAlt/>
                    +994 55 999 99 99
                    <CiMail/>
                    ceo@global.com
                </div>
                <div className={styles.contextBtns}>
                    <button><FaFacebook/></button>
                    <button><FaFacebook/></button>
                    <button><FaFacebook/></button>
                    <button><FaFacebook/></button>
                    <button><FaFacebook/></button>
                </div>
            </div>
        </div>
        <div className={styles.containerBottom}>
            <div className={styles.context}>
                <h1 style={{fontSize:'40px'}}>OnePRO</h1>
                <div className={styles.nav}>
                    <button onClick={() => navigation('/')}>Home</button>
                    <button onClick={() => navigation('/basket')}>Basket</button>
                    <button onClick={() => navigation('/wishlist')}>Wishlist</button>
                    <button onClick={() => navigation('/panel')}>Admin Panel</button>
                    <button>Some</button>
                    <button>Some</button>
                    <button>Some</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header