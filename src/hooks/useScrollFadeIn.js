import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function useScrollFadeIn() {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [inView, controls]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return { ref, controls, variants };
}