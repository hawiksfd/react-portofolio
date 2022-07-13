import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import Animated from '../Animated/Animated';
import './about.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <Loader type="pacman" />
            <div className='container about-page' >
                <div className='text-zone'>
                    <h1>
                        <Animated
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15} />

                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia metus vitae
                        tortor sodales, et laoreet sapien suscipit. Pellentesque luctus varius velit eget
                        ullamcorper. Donec tempus turpis porttitor efficitur venenatis. Donec congue justo ac
                        augue tempor mollis. Morbi eget diam ac dolor sagittis euismod eget non tellus.
                        Integer ac scelerisque lorem. Curabitur euismod condimentum nulla a vestibulum.
                        Morbi ut dolor in dolor suscipit condimentum.
                    </p>
                    <p>
                        Donec sollicitudin aliquam egestas. Morbi pellentesque, arcu at maximus tempor, eros
                        magna iaculis sem, nec dictum justo felis ac turpis. Quisque commodo pulvinar neque ut
                        ullamcorper. Vivamus iaculis vel ante sit amet condimentum. Ut mattis turpis at pharetra
                        scelerisque. Nam id neque eget enim posuere dictum eget ac ex. Curabitur suscipit fringilla
                        urna, et volutpat nisi commodo ac. Cras vitae vestibulum metus. Aliquam eleifend leo diam.
                        Morbi eget dui quis felis luctus tincidunt facilisis quis urna. Praesent nec ultrices
                        lectus. Aenean id lacus vitae dui iaculis consectetur lobortis sed turpis. Vivamus turpis
                        arcu, aliquam a elementum nec, sollicitudin eleifend arcu. Proin dictum porta ligula at
                        pretium. Cras eget quam pretium, scelerisque turpis quis, mattis libero.
                    </p>
                    <p>
                        Donec sagittis enim ac euismod efficitur. Suspendisse lacinia nunc sed ex molestie
                        elementum. In ipsum urna, sodales sit amet ligula nec, ornare dapibus orci. Sed hendrerit
                        condimentum nisl a porta. Proin faucibus porta tincidunt. Donec porttitor eget sem a
                        vestibulum. Suspendisse potenti. Etiam sed facilisis turpis, sed ullamcorper massa.
                        Nunc semper dui vitae semper dictum. Donec mollis ullamcorper ligula, sed mattis ex dictum in.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About;