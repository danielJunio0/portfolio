'use client'
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const AosInit = () => {

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true

    })
  }, [])
  return null;
}

export default AosInit;