import React, { useState } from 'react'
import { motion } from 'framer-motion';

const LeftRightSideAnimation = ({children, x}) => {
    const SlideRightAnimation = {
        hide: {
            opacity: 0,
            x,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 2,
            },
        },
    };

    const [animationState, setAnimationState] = useState("hide");

    const handleAnimationState = () => {
        if (animationState === "hide") {
            setAnimationState("show");
        }
    };

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", handleAnimationState);
    }
    return (
        <>
            <motion.div
                className={'z-10 flex flex-col gap-4 md:-mt-36'}
                initial={animationState}
                whileInView="show"
                exit="hide"
                variants={SlideRightAnimation}
            >
                {children}
            </motion.div>

        </>
    )
}
export default LeftRightSideAnimation