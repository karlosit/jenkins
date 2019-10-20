import React, { Component } from 'react';
import instagram_icon from '../../assets/img/icons/instagram_icon.png'
import facebook_icon from '../../assets/img/icons/facebook_icon.png'
import youtube_icon from '../../assets/img/icons/youtube_icon.png'

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <p className="footer-rights">Tous Droits réservés | Fatboar @2019 | Rejoignez-nous :</p>
                <ul className="footer-rs">
                    <li>
                        <a href="https://www.instagram.com/fatboarrestaurants/?hl=fr" target="_blank" rel="noopener noreferrer">
                            <img src={instagram_icon} alt="icone instagram"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/FatBoarRestaurant/" target="_blank" rel="noopener noreferrer">
                            <img src={facebook_icon} alt="icone facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <img src={youtube_icon} alt="icone youtube"/>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Footer;