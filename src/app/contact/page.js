'use client'
import { useEffect, useState } from 'react'
import { montserrat } from '../layout'
import styles from './contact.module.scss'
import { useWindowWidth } from '@/utils/hooks/ResponsiveHook'
import axios from 'axios'
import Flare from '@/components/specialized components/flare'
import Link from 'next/link'
import Image from 'next/image'
import Star from '@/components/specialized components/star'



const Page = () => {
    const width = useWindowWidth()
    const [firstName, setFirstName] = useState('First Name');
    const [email, setEmail] = useState('Mail');
    const [message, setMessage] = useState('Message');





    const handleSubmit = async (e) => {
        e.preventDefault();

        const registerData = {
            first_name: firstName,
            email,
            message
        }

        try {
            const response = await axios.post(
                'https://backend.getlinked.ai/hackathon/contact-form',
                registerData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );


            if (response.status >= 200 && response.status < 300) {

                setFirstName('');
                setMessage('');
                setEmail('');
            } else {

                console.error('Registration Failed:', response.data);
            }

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };








    return (
        <>
            <title>Contact Us | Gelinked</title>

            <main className={styles.contact}>
                {
                    width > 1019 &&
                    <section className={styles.contactdetails}>
                        <h2>Get in touch</h2>
                        <ul className={`${montserrat.className}`}>
                            <li>Contact Information</li>
                            <li><Link href={"https://www.google.com/maps?q=27+Alara+Street,+Yaba,+100012,+Lagos+State"} target="_blank">27,Alara Street Yaba 100012 Lagos State</Link></li>
                            <li>Call us :<Link href={'tel:+23467981819'}> +234 679 81819</Link></li>
                            <li>we are open from Monday-Friday 08:00am - 05:00pm</li>
                            <li>
                                <span>Follow us</span>
                                <ul>
                                    <li><Link href={'https://www.instagram.com'}><Image src={'/images/logos/insta.svg'} width={22} height={22} alt="Instagram" /></Link></li>
                                    <li><Link href={'https://www.twitter.com'}><Image src={'/images/logos/tweet.svg'} width={20} height={20} alt="Twitter/X" /></Link></li>
                                    <li><Link href={'https://www.facebook.com'}><Image src={'/images/logos/book.svg'} width={20} height={20} alt="Facebook" /></Link></li>
                                    <li><Link href={'https://www.linkedin.com'}><Image src={'/images/logos/linkedin.svg'} width={26} height={26} alt="LinkedIn" /></Link></li>
                                </ul>
                            </li>
                        </ul>
                        <Flare
                            top={{ xs: "5%", sm: '-5%', md: '-10%', tab: '-10%', lg: '-45%', xl: '-30%', xxl: '-25%' }}
                            left={{ xs: "-20%", sm: '-20%', md: '-35%', tab: '-35%', lg: '-55%', xl: '-30%', xxl: '-20%' }}
                        />

                    </section>

                }




                <section className={styles.container}>
                    <form onSubmit={handleSubmit}>

                        <aside>
                            <h3>Questions or need assistance?</h3>
                            <h3>Let us know it!</h3>
                        </aside>
                        {
                            width < 1020 && <small>Email us below to any question related to our event</small>
                        }




                        <section className={styles.inputs}>
                            <div className={`${montserrat.className} ${styles.inputdiv}`}>
                                <input id='first-name' type='text' placeholder='First Name'
                                    value={firstName} onChange={(e) => setFirstName(e.target.value)} required
                                />
                            </div>


                            <div className={`${montserrat.className} ${styles.inputdiv}`}>
                                <input id='email' type='email' placeholder='Mail'
                                    value={email} onChange={(e) => setEmail(e.target.value)} required
                                />
                            </div>

                            <div className={`${montserrat.className} ${styles.inputdiv}`}>
                                <textarea id='Message' type='text' placeholder='Message'
                                    value={message} onChange={(e) => setMessage(e.target.value)} required rows={width < 1080 ? 7 : 5}
                                />
                            </div>

                        </section>

                        <button >Submit</button>


                        {
                            width < 1020 &&
                            <div className={styles.footer}>
                                <span>Share on</span>
                                <div>
                                    <Link href={'https://www.instagram.com'}><Image src={'/images/logos/insta.svg'} width={22} height={22} alt="Instagram" /></Link>
                                    <Link href={'https://www.twitter.com'}><Image src={'/images/logos/tweet.svg'} width={20} height={20} alt="Twitter/X" /></Link>
                                    <Link href={'https://www.facebook.com'}><Image src={'/images/logos/book.svg'} width={20} height={20} alt="Facebook" /></Link>
                                    <Link href={'https://www.linkedin.com'}><Image src={'/images/logos/linkedin.svg'} width={26} height={26} alt="LinkedIn" /></Link>
                                </div>
                            </div>
                        }
                    </form>



                    <Flare
                        top={{ xs: "-10%", sm: '-10%', md: '-10%', tab: '-10%', lg: '36%', xl: '30%', xxl: '40%' }}
                        left={{ xs: "0%", sm: '0%', md: '10%', tab: '5%', lg: '55%', xl: '50%', xxl: '55%' }}
                    />
                    {
                        width < 1020 &&
                        <Star color={'purple'} delay={7}
                            top={{ xs: "-4%", sm: '-4%', md: '-4%', tab: '-4%', lg: '-8%', xl: '-8%', xxl: '-8%' }}
                            left={{ xs: "40%", sm: '40%', md: '40%', tab: '40%', lg: '85%', xl: '85%', xxl: '85%' }}
                        />
                    }

                    <Star color={'grey'} delay={0}
                        top={{ xs: "10%", sm: '10%', md: '10%', tab: '10%', lg: '-8%', xl: '-8%', xxl: '-8%' }}
                        left={{ xs: "80%", sm: '80%', md: '80%', tab: '85%', lg: '85%', xl: '85%', xxl: '85%' }}
                    />
                    <Star color={'white'} delay={2}
                        top={{ xs: "100%", sm: '100%', md: '100%', tab: '100%', lg: '100%', xl: '100%', xxl: '100%' }}
                        left={{ xs: "100%", sm: '100%', md: '100%', tab: '105%', lg: '115%', xl: '115%', xxl: '115%' }}
                    />
                    <Star color={'purple'} delay={6}
                        top={{ xs: "70%", sm: '70%', md: '70%', tab: '70%', lg: '70%', xl: '70%', xxl: '70%' }}
                        left={{ xs: "-2%", sm: '-2%', md: '-2%', tab: '-2%', lg: '-2%', xl: '-2%', xxl: '-2%' }}
                    />


                </section>
            </main>
        </>
    )
}

export default Page