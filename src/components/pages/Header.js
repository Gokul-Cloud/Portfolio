import React, {useEffect, useState} from 'react';
import HeaderButton from '../layouts/HeaderButton'
import { header } from '../../profile'

const Header = () => {

    const scrollTo = () => {
        window.scrollTo({
            top: 100000,
            left: 0,
            behavior: "smooth"
        })
    }

    const toggleDarkMode = () =>  {
        document.documentElement.classList.toggle('dark-mode')
        document.getElementById('not-dark').classList.toggle('inverse-dark')
        document.getElementById('not').classList.toggle('inverse-dark')
        var x = document.getElementsByClassName('img-pro')
        for(let i = 0; i < x.length; i += 1) {
          x.item(i).classList.toggle("inverse-dark");
        }
        
        if (document.documentElement.classList.contains('dark-mode'))
          localStorage.setItem('mode', 'Dark')
        else
          localStorage.setItem('mode', 'Light')
        }

        const Expire = props => {
            const [visible, setVisible] = useState(false);
          
            useEffect(() => {
              setTimeout(() => {
                setVisible(true);
              }, props.delay);
            }, [props.delay]);
          
            return visible ? <div>{props.children}</div> : <div />;
          };

    return (
        <div>
            <div className="Header">
            <div>
                <p className="Left lcolor">gokul@root~:$</p>
            <p className="line-1 anim-typewriter Left l1color" >cat portfolio.txt</p>


            <br/><br/><br/>
            <Expire delay="3000">
            <p  className="presentazione l1color">
                Hello, I'm {header.name}. This is my portfolio
                <br/>
                           ᐁᐁᐁ scroll down for more info!!! ᐁᐁᐁ
      </p></Expire>
            </div>
            <label className="switch">
                <input id="mode-switch" onClick={toggleDarkMode} type="checkbox"/>
                <span className="slider round"></span>
            </label>
            <HeaderButton/>
            </div>
            <img id="not-dark" onClick={scrollTo} alt="Contact Me" title="Contact Me" className="gtp" src="profile.png"></img>
        </div>
    )
    
}

export default Header;