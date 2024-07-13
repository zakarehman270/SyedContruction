import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FadeInAnimation = ({ children }) => {
    const FadeInAnimation = {
        hide: {
            opacity: 0,
            x: 0,
            transition: {
                duration: 1.5,
            },
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.5,
            },
        },
        exit: {
            opacity: 0,
            x: 0,
            transition: {
                duration: 1.5,
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
                variants={FadeInAnimation}
            >
                {children}
            </motion.div>
        </>
    )
}
export default FadeInAnimation