'use client'
import { useEffect, useState } from 'react'
import { montserrat } from '../layout'
import styles from './register.module.scss'
import { useWindowWidth } from '@/utils/hooks/ResponsiveHook'
import axios from 'axios'
import Image from 'next/image'
import Flare from '@/components/specialized components/flare'



const Page = () => {
    const width = useWindowWidth()
    const [teamName, setTeamName] = useState('');
    const [phone, setPhone] = useState('poss');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [category, setCategory] = useState(-1);
    const [size, setSize] = useState('');

    const [categoriesList, setCategoriesList] = useState([]);
    const [isChecked, setIsChecked] = useState(false);


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
        <main className={styles.register}>
            <section className={styles.registerimage}>
                <img className={styles.registerimageImg} src={'/images/register/man_registrar.png'} />
                <Flare
                    top={{ xs: "5%", sm: '-5%', md: '-10%', tab: '-10%', lg: '-30%', xl: '-30%', xxl: '-25%' }}
                    left={{ xs: "-20%", sm: '-20%', md: '-35%', tab: '-35%', lg: '-40%', xl: '-30%', xxl: '-20%' }}
                />
            </section>

            
            <section className={styles.container}>
                <form>
                    <header>
                        {width > 719 && <h3>Register</h3>}
                        <p className={montserrat.className}>Be part of this movement!
                            <span>
                                ...........................
                                <Image src={'/images/register/man_walk.png'} width={30} height={30} alt={'a man walking'} />
                                <Image src={'/images/register/woman_walk.png'} width={30} height={30} alt={'a woman walking'} className={styles.woman} />
                            </span>
                        </p>
                        <h5 className={montserrat.className}>CREATE YOUR ACCOUNT</h5>
                    </header>




                    <section className={styles.inputs}>
                        <div className={`${montserrat.className} ${styles.inputdiv}`}>
                            <label htmlFor='team-name'>Team’s Name</label>
                            <input id='team-name' type='text' placeholder='Enter the name of your group'
                                value={teamName} onChange={(e) => setTeamName(e.target.value)} required
                            />
                        </div>

                        <div className={`${montserrat.className} ${styles.inputdiv}`}>
                            <label htmlFor='phone-number'>Phone</label>
                            <input id='phone-number' type='number' placeholder='Enter your phone number'
                                value={phone} onChange={(e) => setPhone(e.target.value)} required
                            />
                        </div>

                        <div className={`${montserrat.className} ${styles.inputdiv}`}>
                            <label htmlFor='email'>Email</label>
                            <input id='email' type='email' placeholder='Enter the email address'
                                value={email} onChange={(e) => setEmail(e.target.value)} required
                            />
                        </div>

                        <div className={`${montserrat.className} ${styles.inputdiv}`}>
                            <label htmlFor='topic'>Project Topic</label>
                            <input id='topic' type='text' placeholder='What is your group project topic'
                                value={topic} onChange={(e) => setTopic(e.target.value)} required
                            />
                        </div>




                        <div className={styles.groupedinput}>
                            <div className={`${montserrat.className} ${styles.inputdiv}`}>
                                <label htmlFor='category'>Category</label>
                                <select id='category' type='text' placeholder='Choose a category' required
                                    value={category} onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value={-1} disabled selected>Choose  Category</option>
                                    {
                                        categoriesList.map((category, index) => {
                                            return (
                                                <option key={index} value={category.id}>{category.name}</option>
                                            )
                                        })
                                    }

                                </select>
                                <span className={styles.dropdown}><img src={'/images/register/dropdown.png'}/></span>

                            </div>

                            <div className={`${montserrat.className} ${styles.inputdiv}`}>
                                <label htmlFor='size'>Group Size</label>
                                <input id='size' type='number' placeholder='Select group size'
                                    value={size} onChange={(e) => setSize(e.target.value)} required
                                />
                            </div>
                        </div>


                    </section>





                    <small className={`${montserrat.className} ${styles.small}`}>Please review your registration details before submitting</small>

                    <article className={`${montserrat.className} ${styles.tandc}`}>
                        <label>
                            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                            I agreed with the event terms and conditions  and privacy policy
                        </label>
                        <button disabled={!isChecked}>Register Now</button>
                    </article>

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