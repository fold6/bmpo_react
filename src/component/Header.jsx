import React, { useState } from "react";
import styles from './css/Header.module.css';
import '../App.css';
import { Link } from 'react-router-dom';
import { MdLogin, MdOutlineLogout, MdOutlineAccountCircle } from "react-icons/md";
import { LuTicketCheck } from "react-icons/lu";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.header_in}>
                <div className={styles.logo}>
                    <Link to='/'><img src="/images/logo.svg" alt="" /></Link>
                </div>

                <div className={styles.nav}>
                    <ul className={styles.dept1}>
                       <Link to="/Introduce"> <li>소개</li></Link>
                        <Link to="/Concert"><li>공연/예매</li></Link>
                        <Link to="/Gallery"><li>갤러리</li></Link>
                        <Link to="/Notice"><li>공지사항</li></Link>
                    </ul>
                </div>

                {/* 로그인 & 로그아웃 토글 */}
                <ul className={styles.loginmenu}>
                    {!isLoggedIn ? (
                        <li className={styles.login} onClick={() => setIsLoggedIn(true)}>
                           <div>로그인 <MdLogin /></div>
                        </li>
                    ) : (
                        <div className={styles.login_hide_show}>
                            <li className={styles.logout} onClick={() => setIsLoggedIn(false)}>
                                <Link to='/'><div>로그아웃</div></Link>
                            </li>
                            <li className={styles.mymenu}>
                            <Link to="/MyReservation"><li>예매내역  <LuTicketCheck  /></li></Link>
                            </li>
                        </div>
                    )}
                </ul>
            </div>
        </header>
    );
}

export default Header;
