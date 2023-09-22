'use client'
import { useEffect, useState } from 'react'
import { montserrat } from '../layout'
import styles from './contact.module.scss'
import { useWindowWidth } from '@/utils/hooks/ResponsiveHook'
import axios from 'axios'
import Flare from '@/components/specialized components/flare'



const Page = () => {
    const width = useWindowWidth()
    const [firstName, setFirstName] = useState('First Name');
    const [email, setEmail] = useState('Mail');
    const [Message, setMessage] = useState('Message');


    const [categoriesList, setCategoriesList] = useState([]);


    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://backend.getlinked.ai/hackathon/categories-list'
                );
                console.log(response.data);
                setCategoriesList(response.data)
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);






    return (
        <main className={styles.contact}>
            <section className={styles.contactdetails}>
                <h2>Get in touch</h2>
                <Flare
                    top={{ xs: "5%", sm: '-5%', md: '-10%', tab: '-10%', lg: '-30%', xl: '-30%', xxl: '-25%' }}
                    left={{ xs: "-20%", sm: '-20%', md: '-35%', tab: '-35%', lg: '-40%', xl: '-30%', xxl: '-20%' }}
                />
            </section>


            <section className={styles.container}>
                <form>

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
                                value={Message} onChange={(e) => setMessage(e.target.value)} required rows={5}
                            />
                        </div>

                    </section>






                    <button >Submit</button>

                </form>

                {
                    width > 1119 &&
                    <Flare
                        top={{ xs: "5%", sm: '5%', md: '-10%', tab: '-30%', lg: '25%', xl: '30%', xxl: '40%' }}
                        left={{ xs: "-20%", sm: '-20%', md: '-35%', tab: '-50%', lg: '50%', xl: '50%', xxl: '55%' }}
                    />
                }


            </section>
        </main>
    )
}

export default Page