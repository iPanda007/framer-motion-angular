import React, { useLayoutEffect, useRef } from 'react'
import image from "./UIElement/photo/hero.jpg"
import './UIElement/index.css';
import { gsap } from 'gsap'

const TextAnimation = () => {
    const App = useRef();
    const text = useRef();
    useLayoutEffect(() => {
        let letters = text.current.textContent.split("");
         text.current.textContent =""
        letters.forEach(item=>{
             text.current.innerHTML += `<span class="letter">${item}</span>`
        })

      console.log(letters)
        let ctx = gsap.context(() => {
            let tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power3.out" } })
            tl.fromTo('.hero-img', { scale: 1.3, borderRadius: "0", },
                {
                    scale: 1,
                    borderRadius: "2rem",
                    delay: 0.35,
                    duration: 2.5,
                    ease:"elastic.out(1.5,1)"
                }
            )
            tl.fromTo('.cta1',{x:"100%",opacity:0},{x:0,opacity:1},"<20%")
            tl.fromTo('.cta3',{x:"-100%",opacity:0},{x:0,opacity:1},"<20%")
            tl.fromTo('.cta2',{y:"100%",opacity:0},{y:0,opacity:1},"<20%")
            tl.fromTo('.cta4',{x:"100%",opacity:0},{x:0,opacity:1},"<20%")
            tl.fromTo('.cta6',{x:"-100%",opacity:0},{x:0,opacity:1},"<20%")
            tl.fromTo('.cta5',{y:"100%",opacity:0},{y:0,opacity:1},"<20%")
            tl.fromTo('.cta-btn',{y:20,opacity:0},{y:0,opacity:1},"<")

            gsap.set('.letter',{display:"inline-block"})
            gsap.fromTo('.letter',{y:"100%",},{y:0,delay:2,stagger:0.05, ease: "back.out(3)"})
        }, App)
 
        return () => ctx.revert();
    }, [])

    return (
        <section ref={App} className="app"  >
            <nav className='nav-container'>
                <h1 ref={text} className="logo">skincare.</h1>
            </nav>
            <div

                className='hero-section'
            >
                <img src={image} className="hero-img" alt='all' />
                <div className='cta'>
                    <div className="cta-text">
                        <h2><span className='cta1'>One</span></h2>
                        <h2><span className='cta2'>One</span></h2>
                        <h2><span className='cta3'>One</span></h2>
                    </div>
                    <div className="cta-text">
                        <h2><span className='cta4'>To</span></h2>
                        <h2><span className='cta5'>Perfect</span></h2>
                        <h2><span className='cta6'>Skin</span></h2>
                    </div>
                    <button className="cta-btn">
                        Explore
                    </button>
                </div>

            </div>
        </section>
    )
}

export default TextAnimation
