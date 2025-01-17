import React, { Component } from 'react';
import Navbar from './Navigation/Navbar/Navbar'
import Footer from './Navigation/Footer/Footer';
import {  i18n, withTranslation  } from '../../i18n';


class Layout extends Component {
    
    render() {
        return (
            <div>
            <Navbar changeLang={() => i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}/>
                {this.props.children}
            <Footer />
            
            <style js="true">
                {`
                    body {
                        direction: ${this.props.t('en')};
                        margin: 0;
                        font-family:  sans-serif;
                        overflow-x: hidden !important;
                    }
                `}
            </style>
        </div>
        )
    }
}





export default withTranslation('common')(Layout);