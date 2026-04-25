'use client'
import React from 'react'
import { Mail, SendHorizonal, Menu, X, GraduationCap } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from './ui/utils'
import { InfiniteSlider } from './ui/infinite-slider'
import { ProgressiveBlur } from './ui/progressive-blur'
import { AuroraBackground } from './ui/aurora-background'
import { EduTrackHero } from './EduTrackHero'
import heroOverlay from 'figma:asset/3abbd3cca1b28598925be4939544cf51fe71d322.png';
import { motion } from "motion/react";
import { RequestDemoDialog } from './RequestDemoDialog';

export function HeroSection() {
    return (
        <>
            <HeroHeader />

            <AuroraBackground className="h-auto min-h-screen overflow-hidden bg-gradient-to-b from-blue-50/80 to-white/80 relative">
                <div className="absolute inset-0 z-0 hidden md:flex items-center justify-center pointer-events-none overflow-hidden">
                     <motion.img 
                        src={heroOverlay} 
                        alt="" 
                        className="w-auto h-auto max-w-full object-contain opacity-90 scale-[0.8]"
                        animate={{ 
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                     />
                </div>
                <section className="w-full relative z-10">
                    <div className="relative mx-auto max-w-6xl px-6 pt-24 lg:pb-32 lg:pt-32">
                        <div className="relative z-10 mx-auto max-w-7xl">
                            <EduTrackHero />
                        </div>
                    </div>
                </section>
            </AuroraBackground>
            <LogoCloud />
        </>
    )
}

const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About', href: '#about' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed group z-20 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-white/80 max-w-4xl rounded-2xl border border-gray-200 backdrop-blur-lg lg:px-5 shadow-lg')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4 px-[0px] py-[18px]">
                        <div className="flex w-full justify-between lg:w-auto">
                            <a
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </a>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-gray-700" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-gray-700" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="text-gray-600 hover:text-blue-600 block duration-150">
                                            <span>{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-gray-200 p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-gray-600 hover:text-blue-600 block duration-150">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                                <Button
                                    size="sm"
                                    className="bg-blue-600 hover:bg-blue-700">
                                    <span>Sign In</span>
                                </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const LogoCloud = () => {
    const schoolLogos = [
        { name: "Delhi Public School", img: "https://html.tailus.io/blocks/customers/nvidia.svg" },
        { name: "Ryan International", img: "https://html.tailus.io/blocks/customers/column.svg" },
        { name: "Kendriya Vidyalaya", img: "https://html.tailus.io/blocks/customers/github.svg" },
        { name: "DAV Public School", img: "https://html.tailus.io/blocks/customers/nike.svg" },
        { name: "St. Xavier's School", img: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg" },
        { name: "Narayana Group", img: "https://html.tailus.io/blocks/customers/laravel.svg" },
        { name: "Amity International", img: "https://html.tailus.io/blocks/customers/lilly.svg" },
        { name: "Modern School", img: "https://html.tailus.io/blocks/customers/openai.svg" },
    ]

    return (
        <section className="bg-white md:pb-32 pt-[0px] pr-[0px] pb-[18px] pl-[0px]">
            <div className="group relative m-auto max-w-6xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="inline md:max-w-44 md:border-r md:border-gray-200 md:pr-6">
                        <p className="text-end text-sm text-gray-600">Trusted by 500+ schools across India</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
                            {schoolLogos.map((logo, index) => (
                                <div key={index} className="flex">
                                    <img
                                        className="mx-auto h-5 w-fit opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                                        src={logo.img}
                                        alt={logo.name}
                                        height="20"
                                        width="auto"
                                    />
                                </div>
                            ))}
                        </InfiniteSlider>

                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            <GraduationCap className="size-8 text-blue-600" />
            <span className="text-xl text-gray-900">EduTrack</span>
        </div>
    )
}
