import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import './contact.scss'
import Animated from '../Animated/Animated';
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                '',
                refForm.current,
                ''
            )
            .then(
                () => {
                    alert('Message succesfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <Loader type='pacman' />
            <div className='container contact-page'>
                <div className="text-zone">
                    <h1>
                        <Animated
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}>
                        </Animated>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia metus vitae
                        tortor sodales, et laoreet sapien suscipit. Pellentesque luctus varius velit eget
                        ullamcorper. Donec tempus turpis porttitor efficitur venenatis. Donec congue justo ac
                        augue tempor mollis. Morbi eget diam ac dolor sagittis euismod eget non tellus.
                        Integer ac scelerisque lorem. Curabitur euismod condimentum nulla a vestibulum.
                        Morbi ut dolor in dolor suscipit condimentum.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <li className="half">
                                <input type="text" name='name' placeholder='Name' required />
                            </li>

                            <li className="half">
                                <input type="text" name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input type="text" name='subject' placeholder='Subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Messsage' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className="flat-button" value="SEND"></input>
                            </li>
                        </form>
                    </div>
                </div>

                <div className="info-map">
                    Slobodan Gajic,
                    <br />
                    Serbia,
                    <br />
                    Branka 19, 22000
                    <br />
                    <span>slobodan@gmail.com</span>
                </div>

                <div className="map-wrap">
                    <MapContainer center={[444.96366, 19.61045]} zoom={13}>
                        <TileLayer url="https:{s}.tile.openstreetmap.org/{z}{x}{y}.png" />
                        <Marker position={[444.96366, 19.61045]}>
                            <Popup>
                                Sloba lives here
                            </Popup>
                        </Marker>
                    </MapContainer>

                </div>
            </div>
        </>
    )
}

export default Contact