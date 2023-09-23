'use client'

import Image from 'next/image'
import styles from './page.module.scss'
import AnimatedH3 from '@/components/specialized components/animatedH3'
import { clashDisplay, montserrat } from './layout'
import Button from '@/components/button/button'
import CountdownTimer from '@/components/specialized components/countdown'
import Dropdown from '@/components/dropdown/dropdown'
import Flare from '@/components/specialized components/flare'
import { useWindowWidth } from '@/utils/hooks/ResponsiveHook'
import Timeline from '@/components/timeline/timeline'
import Link from 'next/link'
import { useEffect } from 'react'



export default function Home() {
  const width = useWindowWidth()



  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '1px',
      threshold: 1,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animTexts);
        }
      });
    };

    const textElements = document.querySelectorAll(`.${styles.texts}`);
    const observer = new IntersectionObserver(handleIntersection, options);

    textElements.forEach((textElement) => {
      observer.observe(textElement);
    });

  }, []);






  return (
    <>
      <title>Home | Getlinked</title>
      <main className={`container ${styles.main}`}>
        <section className={`section ${styles.hero}`} aria-label="Hero Section">
          <AnimatedH3 />
          <Flare
            top={{ sm: '5%', md: '5%', tab: '5%', lg: '-10%', xl: '-10%', xxl: '-5%' }}
            left={{ sm: '-10%', md: '-10%', tab: '-10%', lg: '10%', xl: '10%', xxl: '10%' }}
          />

          <div className={styles.herocontent}>
            <div className={styles.pagetitle}>
              <h1>getlinked Tech <br />Hackathon <span>1.0</span></h1>
              <p className={montserrat.className}>
                Participate in getlinked tech Hackathon 2023 stand
                a chance to win a Big prize
              </p>
              <img src={'/images/hero/text_adorn.png'} className={styles.adornment} />

              <Button className={styles.registerbutton} name={'Register'} link={'/register'} />
              <CountdownTimer targetDate={new Date('2023-11-18T23:59:59')} />
            </div>


            <article className={styles.images}>
              <img
                src={'/images/hero/man-wearing-glasses.png'}
                className={styles.glasses}
                alt="Man wearing glasses"
              />
              <img
                src={'/images/hero/starry.png'}
                className={styles.starry}
                alt="Starry background"
              />
            </article>
          </div>
        </section>





        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////           OVERVIEW           /////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}
        <section className={`section ${styles.featured}`} id='overview'>
          <img src={'/images/featured/big_idea.png'} alt='the big idea' />

          <div className={styles.texts}>
            <h3>Introduction to getlinked<br /><span>tech Hackathon 1.0</span></h3>
            <p className={montserrat.className}>
              Our tech hackathon is a melting pot of visionaries, and its purpose is as
              clear as day: to shape the future. Whether you&apos;re a coding genius, a
              design maverick, or a concept wizard, you&apos;ll have the chance to transform
              your ideas into reality. Solving real-world problems, pushing the boundaries
              of technology, and creating solutions that can change the world,
              that&apos;s what we&apos;re all about!
            </p>
          </div>

        </section>





        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////           RULES           /////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}
        <section className={`section ${styles.featured}  ${styles.rules}`}>
          <div className={styles.rulesimage}>
            <img src={'/images/featured/sitting_woman.webp'} alt='sitting woman' />
            <Flare
              top={{ xs: "-40%", sm: '-45%', md: '-55%', tab: '-15%', lg: '20%', xl: '22%', xxl: '20%' }}
              left={{ xs: "-45%", sm: '-55%', md: '-70%', tab: '0%', lg: '30%', xl: '45%', xxl: '45%' }}
            />
          </div>

          <div className={styles.texts}>
            <h3>Rules and<br /><span>Guidelines</span></h3>
            <p className={montserrat.className}>
              Our tech hackathon is a melting pot of visionaries, and its purpose is as
              clear as day: to shape the future. Whether you&apos;re a coding genius, a
              design maverick, or a concept wizard, you&apos;ll have the chance to transform
              your ideas into reality. Solving real-world problems, pushing the boundaries
              of technology, and creating solutions that can change the world,
              that&apos;s what we&apos;re all about!
            </p>
            <Flare
              top={{ xs: "-55%", sm: '-70%', md: '-100%', tab: '-70%', lg: '-70%', xl: '-70%', xxl: '-65%' }}
              left={{ xs: "40%", sm: '40%', md: '40%', tab: '-35%', lg: '-15%', xl: '-7%', xxl: '-5%' }}
            />
          </div>

        </section>






        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////           CRITERIAS           /////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}
        <section className={`section ${styles.featured} ${styles.criterias}`}>
          <div className={styles.criteriaimage}>
            <img src={'/images/featured/statistics.png'} alt='judging and evaluating' />
            <Flare
              top={{ xs: "-15%", sm: '-35%', md: '-40%', tab: '0%', lg: '0%', xl: '25%', xxl: '25%' }}
              left={{ xs: "-45%", sm: '-75%', md: '-75%', tab: '-40%', lg: '-40%', xl: '-15%', xxl: '-10%' }}
            />
          </div>

          <div className={styles.texts}>
            <h3>Judging Criteria <br /><span>Key attributes</span></h3>
            <ul className={montserrat.className}>
              <li>
                <span>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
                solution. Consider whether it addresses a real-world problem in a novel
                way or introduces innovative features.
              </li>

              <li>
                <span>Functionality:</span> Assess how well the solution works. Does it perform its
                intended functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </li>

              <li>
                <span>Impact and Relevance:</span> Determine the potential impact of the solution
                in the real world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential social,
                economic, or environmental benefits.
              </li>

              <li>
                <span>Technical Complexity:</span> Evaluate the technical sophistication of the solution.
                Judges would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </li>

              <li>
                <span>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered
                to the rules and guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other competition-specific requirements.
              </li>
            </ul>

            <Button className={styles.registerbutton} name={'Register'} link={'/register'} />
            <Flare
              top={{ xs: "50%", sm: '35%', md: '35%', tab: '30%', lg: '60%', xl: '55%', xxl: '55%' }}
              left={{ xs: "50%", sm: '50%', md: '55%', tab: '40%', lg: '50%', xl: '50%', xxl: '50%' }}
            />
          </div>
        </section>






        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////           QUESTIONS         /////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}
        <section className={`section ${styles.featured} ${styles.faqs}`} id='faqs'>
          <img src={'/images/featured/thinking_man.png'} alt='a thinking man' />

          <div className={styles.texts}>
            <h3>Frequently Asked<br /><span>Questions</span></h3>
            <p className={`${montserrat.className} ${styles.p}`}>
              We got answers to the questions that you might want to ask about <span>getlinked Hackathon 1.0</span>
            </p>


            <Dropdown
              summary={'Can I work on a project I started before the hackathon?'}
              details={'Can I work on a project I started before the hackathon? Can I work on a project I started before the hackathon'}
            />
            <Dropdown
              summary={'What happens if I need help during the hackathon?'}
              details={'What happens if I need help during the hackathon? What happens if I need help during the hackathon?'}
            />
            <Dropdown
              summary={"What happens if I don't have an idea for a project?"}
              details={"What happens if I don't have an idea for a project? Can I work on a project I started before the hackathon"}
            />
            <Dropdown
              summary={'Can I join a team or do I have to come with one?'}
              details={'Can I join a team or do I have to come with one? What happens if I need help during the hackathon?'}
            />
            <Dropdown
              summary={'What happens after the hackathon ends'}
              details={'What happens after the hackathon ends What happens if I need help during the hackathon?'}
            />
            <Dropdown
              summary={'Can I work on a project I started before the hackathon?'}
              details={'Can I work on a project I started before the hackathon? What happens if I need help during the hackathon?'}
            />

          </div>

        </section>





        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////           TIMELINE           /////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}
        <section className={`section ${styles.featured} ${styles.timeline}`} id='timeline'>
          <header>
            <h3>Timeline</h3>
            <p>Here is the breakdown of the time we anticipate
              using for the upcoming event.</p>
          </header>

          <Timeline />
        </section>





        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////           TROPHIES           /////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}
        <section className={`section ${styles.featured} ${styles.trophiesandprizes}`}>
          <header>
            <h3>Prizes and<br /><span>Rewards</span></h3>
            <p>Highlight of the prizes or rewards for winners and for participants.</p>
          </header>

          <div className={styles.trophy}>
            <img className={styles.trophyimage} src={'/images/featured/trophy.webp'} alt="winner's trophy" />
            <Flare
              top={{ xs: "-45%", sm: '-55%', md: '-55%', tab: '-65%', lg: '-50%', xl: '-60%', xxl: '-70%' }}
              left={{ xs: "-5%", sm: '-15%', md: '-20%', tab: '-30%', lg: '-30%', xl: '-20%', xxl: '-25%' }}
            />
          </div>

          <div className={styles.prizes}>
            <img className={styles.prizesimage} src={'/images/featured/prizes.webp'} alt="winners' rewards" />
            <Flare
              top={{ xs: "-20%", sm: '-50%', md: '-50%', tab: '-50%', lg: '0%', xl: '5%', xxl: '5%' }}
              left={{ xs: "60%", sm: '60%', md: '60%', tab: '30%', lg: '60%', xl: '60%', xxl: '67%' }}
            />
          </div>
        </section>





        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////           SPONSORS           /////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}
        <section className={`section ${styles.featured} ${styles.partnersandsponsors}`}>

          <header>
            <h3>Partners and Sponsors</h3>
            <p>Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors</p>
          </header>

          <div className={styles.partners} >
            <img className={styles.partnersimage} src={'/images/featured/partners_sponsors.png'} alt='sponsors' />
            <Flare
              top={{ xs: '-200%', sm: '-170%', md: '-180%', tab: '-110%', lg: '-55%', xl: '-50%', xxl: '-45%' }}
              left={{ xs: '-30%', sm: '-30%', md: '-40%', tab: '-40%', lg: '-28%', xl: '-23%', xxl: '-20%' }} s
            />
            <Flare
              top={{ xs: '5%', sm: '5%', md: '-40%', tab: '5%', lg: '35%', xl: '40%', xxl: '40%' }}
              left={{ xs: '55%', sm: '60%', md: '50%', tab: '60%', lg: '70%', xl: '75%', xxl: '75%' }}
            />
          </div>

        </section>






        {/* /////////////////////////////////////////////////////////////////// */}
        {/* /////////////////           SECURITY           /////////////////// */}
        {/* /////////////////////////////////////////////////////////////////// */}
        <section className={`section ${styles.featured} ${styles.security}`}>

          <div className={`${montserrat.className} ${styles.texts}`}>
            <header>
              <h3 className={`${clashDisplay.className}`}>Privacy Policy and  <br /><span>Terms</span></h3>
              <small>Last updated on September 12, 2023</small>
              <p>Below are our privacy & policy, which outline a lot of goodies.it’s our aim to always take of our participant</p>
            </header>



            <article className={`${montserrat.className} ${styles.policyarticle}`}>
              <p>
                At getlinked tech Hackathon 1.0, we value your privacy
                and are committed to protecting your personal information.
                This Privacy Policy outlines how we collect, use, disclose,
                and safeguard your data when you participate in our tech
                hackathon event. By participating in our event, you consent
                to the practices described in this policy.
              </p>

              <div>
                <h4>Licensing Policy</h4>
                <h6>Here are terms of our Standard License:</h6>

                <ul className={montserrat.className}>
                  <li>The Standard License grants you a non-exclusive right tonavigate and register for our event</li>
                  <li>You are licensed to use the item available at any free source sites, for your project developement</li>
                </ul>
              </div>
              <Button className={styles.registerbutton} name={'Read More'} link={'/'} />
            </article>

            <Flare
              top={{ xs: '38%', sm: '28%', md: '28%', tab: '50%', lg: '60%', xl: '55%', xxl: '65%' }}
              left={{ xs: '-20%', sm: '-20%', md: '-15%', tab: '-15%', lg: '-5%', xl: '0%', xxl: '0%' }}
            />
          </div>

          <div className={styles.securityimage}>
            <img src={'/images/featured/man_lock.webp'} alt='Security Man with a Lock' />
          </div>
        </section>


      </main>




      <footer className={`${styles.footer} ${montserrat.className}`}>
        <div className={styles.content}>
          <section className={styles.about}>
            <Link aria-label="Company Logo" href={'/'} className={`${styles.logo} ${clashDisplay.className}`}>
              <article>get<span>linked</span></article>
            </Link>
            <p>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>

            <div><Link href={'/'}>Terms of Use</Link> <span>|</span> <Link href={'/'}>Privacy Policy</Link></div>
          </section>


          <section className={styles.links}>
            <h6>Useful Links</h6>
            <ul className={styles.permalinks}>
              <li><Link href={'#overview'}>Overview</Link></li>
              <li><Link href={'#timeline'}>Timeline</Link></li>
              <li><Link href={'#faqs'}>FAQs</Link></li>
              <li><Link href={'/register'}>Register</Link></li>
            </ul>

            <span>Follow us
              <ul>
                <li><Link href={'https://www.instagram.com'}><Image src={'/images/logos/insta.svg'} width={22} height={22} alt="Instagram" /></Link></li>
                <li><Link href={'https://www.twitter.com'}><Image src={'/images/logos/tweet.svg'} width={20} height={20} alt="Twitter/X" /></Link></li>
                <li><Link href={'https://www.facebook.com'}><Image src={'/images/logos/book.svg'} width={20} height={20} alt="Facebook" /></Link></li>
                <li><Link href={'https://www.linkedin.com'}><Image src={'/images/logos/linkedin.svg'} width={26} height={26} alt="LinkedIn" /></Link></li>
              </ul>

            </span>
          </section>



          <section className={styles.contact}>
            <h6>Contact Us</h6>
            <ul>
              <li><Link href={'tel:+23467981819'}><Image src={'/images/svg/phone.svg'} width={20} height={20} alt="Phone Icon" /> +234 679 81819</Link></li>
              <li><Link href={"https://www.google.com/maps?q=27+Alara+Street,+Yaba,+100012,+Lagos+State"} target="_blank"><Image src={'/images/svg/map.svg'} width={20} height={20} alt="Map Icon" /> 27,Alara Street Yaba 100012 Lagos State</Link></li>
            </ul>
          </section>

        </div>

        <small>All rights reserved. © getlinked Ltd.</small>

      </footer>
    </>
  )
}
