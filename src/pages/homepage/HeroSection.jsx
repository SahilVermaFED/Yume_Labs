import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import _ScrollTrigger from 'gsap/ScrollTrigger';

import { bgGridLines, heroPoster } from '../../assets';

const Poster = () => {
    const posterImage = useRef();
    gsap.registerPlugin(_ScrollTrigger);

    useGSAP(() => {
        gsap.to(posterImage.current, {
            clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: posterImage.current,
                start: 'top 50% ',
                end: 'bottom bottom',
                scrub: true
            }
        });
    });

    return (
        <section className="px-6 md:px-16 lg:px-20 xl:px-28 2xl:px-36 pb-24">
            <div
                style={{
                    clipPath: 'polygon(35% 0%, 35% 80%, 65% 80%, 65% 0%)',
                    backgroundImage: `url(${heroPoster})`
                }}
                ref={posterImage}
                className="md:items-end items-center md:justify-center bg-cover bg-no-repeat rounded-md gsap-animation-hero h-150 w-full overflow-hidden object-cover bg-bottom-left flex bg-center ">
                <div className="flex md:flex-row flex-col-reverse md:mb-20 md:items-end w-10/12 mx-auto md:mt-0 mt-56 gap-28 md:gap-0">
                    <div className="flex-1">
                        <h3 className="md:text-5xl lg:text-7.5xl italic  lg:leading-22.5 font-serif text-white  text-5xl leading-10">
                            Dreams
                            <br /> Delivered
                        </h3>
                    </div>
                    <div className="flex items-center gap-8 flex-1 justify-center">
                        <p className="md:text-2xl text-brand-blue hidden md:block">Play Showreel</p>
                        <button className="bg-brand-blue h-16 w-16 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-pink text-white">
                            &#x25B6;
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const HeroSection = () => {
    return (
        <>
            <section className="py-24 px-6 md:px-16 lg:px-20 xl:px-28 2xl:px-36 overflow-x-clip">
                <div className="h-0 relative -top-[66px] md:-top-[97px] -left-32 md:left-[108px]">
                    <img
                        className="h-80 scale-x-[.91] scale-y-110 max-w-none md:scale-x-[1.5] md:scale-y-[1.8]"
                        src={`${bgGridLines}`}
                        alt="hero grid image"
                        loading="lazy"
                    />
                </div>

                <div className="flex-col flex items-start md:items-center md:flex-row gap-8 md:gap-1">
                    <div className="flex-1">
                        <h2 className="md:text-7.5xl text-4.5xl leading-15 md:leading-22.5 font-[500] tracking-wide mb-3.5 md:mb-6">
                            Simplifying the Next.
                        </h2>
                        <h3 className="font-serif italic md:text-4xl text-lg bg-accent-blue inline px-4 text-white">
                            for Dreamers who do.
                        </h3>
                    </div>
                    <div className="flex-1 ">
                        <p className="md:text-2xl text-lg mt-6 md:mt-0">
                            High-potential global brands trust Yume Labs for better customer advocacy, stronger investor
                            trust, and higher media love.
                        </p>
                    </div>
                </div>
            </section>
            <Poster />
        </>
    );
};

export default HeroSection;
