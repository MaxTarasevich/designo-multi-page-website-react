import React from 'react'
import Nav from '../navigation/Nav';
import Wrapper from '../wrapper/Wrapper';

import {IconFacebook,IconInstagram,IconPinterest,IconTwitter,IconYoutube} from '../../constants/Icons'

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
        <Wrapper>
            <Nav dark/>

            <div className="footer__info">
                <ul className="footer__office">
                        <li>Designo Central Office</li>
                        <li>3886 Wellington Street</li>
                        <li>Toronto, Ontario M9C 3J5</li>
                </ul>

                <ul className="footer__contacts">
                    <li>Contact Us (Central Office)</li>
                    <li>P : +1 253-863-8967</li>
                    <li>M : contact@designo.co</li>
                </ul>

                <ul className="footer__social">
                    <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><IconFacebook /></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><IconYoutube /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><IconTwitter /></a>
                    </li>
                    <li>
                        <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><IconPinterest /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><IconInstagram /></a>
                    </li>
                </ul>
            </div>
        </Wrapper>
    </footer>
  )
}

export default Footer