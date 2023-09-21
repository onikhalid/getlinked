'use client'
import { useState } from 'react'
import { montserrat } from '../layout'
import styles from './register.module.scss'
import { useWindowWidth } from '@/utils/hooks/ResponsiveHook'

const Page = () => {
    const width = useWindowWidth()
    const [teamName, setTeamName] = useState('');
    const [phone, setPhone] = useState('poss');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [category, setCategory] = useState('');
    const [size, setSize] = useState('');



    
    return (
        <main className={styles.register}>
            <section className={styles.registerimage}>
                <img src={'/images/man_registrar.png'} />
            </section>
            <section>
                <form>
                    <header>
                        {width > 719 && <h3>Register</h3>}
                        <span>Be part of this movement!</span>
                        <h5 className={montserrat.className}>CREATE YOUR ACCOUNT</h5>
                    </header>

                    <section>
                    <div className={styles.inputdiv}>
                            <label htmlFor='team-name'>Team’s Name</label>
                            <input id='team-name' type='text' placeholder='Enter the name of your group'
                                value={teamName} onChange={(e) => setTeamName(e.target.value)}
                            />
                        </div>

                        <div className={styles.inputdiv}>
                            <label htmlFor='phone-number'>Phone</label>
                            <input id='phone-number' type='number' placeholder='Enter the phone number'
                                value={phone} onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div className={styles.inputdiv}>
                            <label htmlFor='email'>Email</label>
                            <input id='email' type='emai' placeholder='Enter the email address'
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className={styles.inputdiv}>
                            <label htmlFor='topic'>Phone</label>
                            <input id='topic' type='text' placeholder='What is your group project topic'
                                value={topic} onChange={(e) => setTopic(e.target.value)}
                            />
                        </div>
                    </section>
                </form>
            </section>
        </main>
    )
}

export default Page