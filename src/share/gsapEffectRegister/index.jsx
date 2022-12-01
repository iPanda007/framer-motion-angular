import React, { useLayoutEffect } from 'react'
import './UIelement/index.css'
import { gsap} from 'gsap'

const MoveLeftRight = () => {

    const gsapEffects = [
        {
            id: "fadeSlideTo",
            props: { opacity: 0.5, x: 300, yoyo: true, repeat: -1 }
        },
        {
            id: "fadeSlideFrom",
            animate: 'from',
            props: { opacity: 0.25, x: 300, yoyo: true, repeat: -1 }
        },
        {
            id: "fadeSlideFromTo",
            animate: 'fromTo',
            props: { opacity: 0.1, x: 300 },
            props2: { opacity: 1, x: 600, yoyo: true, repeat: -1 }
        }
    ];

    useLayoutEffect(() => {
        let ctx = gsap.context(
            () => {
                gsapEffects.forEach(effect => {
                    gsap.registerEffect({
                        name: effect.id,
                        defaults: { duration: 1 },
                        extendTimeline: true,
                        effect(targets, config) {
                            if (effect.animate === 'from') {
                                return gsap.from(targets, { ...effect.props, ...config })
                            }
                            else if (effect.animate === 'fromTo') {
                                return gsap.fromTo(targets, { ...effect.props, ...config }, { ...effect.props2 })
                            }
                            else {
                                return gsap.to(targets, { ...effect.props, ...config })
                            }
                        }
                    });
                });


                let tl = gsap.timeline();
                tl.fadeSlideTo(".fadeSlideTo")
                    .fadeSlideFrom(".fadeSlideFrom", 0)
                    .fadeSlideFromTo(".fadeSlideFromTo", 0)


            }
        )

        return () => ctx.revert();
    }, [])

    return (
        <div>
            <div class="box fadeSlideTo">to</div>
            <div class="box fadeSlideFrom">from</div>
            <div class="box fadeSlideFromTo">fromTo</div>
        </div>
    )
}

export default MoveLeftRight
