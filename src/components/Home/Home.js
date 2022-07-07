import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-s.png";
import Animated from "../Animated/Animated";
import './home.scss'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>i</span>
                    <span className={`${letterClass} _14`}>'m</span>

                    <span className={`${letterClass} _15`}>
                        <img src={LogoTitle} alt="developer" />
                    </span>


                    <Animated
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={16}
                    ></Animated>
                    <br />
                    <Animated
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={23}
                    ></Animated>
                </h1>
                <h2>
                    Frontend Developer / Javascript Beginner / React Beginner
                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    )
}

export default Home;