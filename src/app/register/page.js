'use client'
import { useEffect, useState } from 'react'
import { montserrat } from '../layout'
import styles from './register.module.scss'
import { useWindowWidth } from '@/utils/hooks/ResponsiveHook'
import axios from 'axios'
import Image from 'next/image'
import Flare from '@/components/specialized components/flare'
import Star from '@/components/specialized components/star'
import Button from '@/components/button/button'



const Page = () => {
    const width = useWindowWidth()
    const [teamName, setTeamName] = useState('');
    const [phone, setPhone] = useState(8012345678);
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [category, setCategory] = useState(-1);
    const [size, setSize] = useState('');
    const [categoriesList, setCategoriesList] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    const [congratState, setCongratState] = useState(`${styles.congrats}`);



    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };


    useEffect(() => {
        const getCategoriesList = async () => {
            try {
                const response = await axios.get(
                    'https://backend.getlinked.ai/hackathon/categories-list'
                );
                setCategoriesList(response.data)
            } catch (error) {
                console.error('Error:', error);
            }
        };

        getCategoriesList();
    }, []);






    const handleSubmit = async (e) => {
        e.preventDefault();

        const registerData = {
            email: email,
            team_name: teamName,
            phone_number: phone,
            project_topic: topic,
            group_size: size,
            privacy_policy_accepted: true,
            category: category,
        }

        try {
            const response = await axios.post(
                'https://backend.getlinked.ai/hackathon/registration',
                registerData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );


            if (response.status >= 200 && response.status < 300) {
                setTeamName('');
                setPhone('');
                setEmail('');
                setTopic('');
                setCategory(-1);
                setSize('');
                setIsChecked(false);
                setCongratState(`${styles.congrats} ${styles.open}`)
            } else {

                console.error('Registration Failed:', response.data);
            }

            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
            console.log('Server Response:', error.response.data);
        }
    };






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
                <form onSubmit={handleSubmit}>
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
                                    onChange={(e) => setCategory(e.target.value)}
                                    value={category}
                                >
                                    <option value={-1} disabled>Choose Category</option>
                                    {
                                        categoriesList.map((category, index) => {
                                            return (
                                                <option key={index} value={category.id}>{category.name}</option>
                                            )
                                        })
                                    }

                                </select>
                                <span className={styles.dropdown}><img src={'/images/register/dropdown.png'} /></span>

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

                {
                    width > 1119 &&
                    <Flare
                        top={{ xs: "5%", sm: '5%', md: '-10%', tab: '-30%', lg: '25%', xl: '30%', xxl: '40%' }}
                        left={{ xs: "-20%", sm: '-20%', md: '-35%', tab: '-50%', lg: '50%', xl: '50%', xxl: '55%' }}
                    />
                }



            </section>


            <section className={congratState}>
                <article>
                    <img src={'/images/register/congratulation.png'} />
                    <h3 className={montserrat.className}>Congratulations<br/> you have successfully Registered!</h3>
                    <p className={montserrat.className}>Yes, it was easy and you did it!<br/> check your mail box for next step</p>
                    <Button name={'Back'} action link={() => setCongratState(`${styles.congrats} ${styles.close}`)} />
                </article>
            </section>

        </main>
    )
}

export default Page