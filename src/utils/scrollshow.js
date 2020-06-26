/**
 * Config file for ScrollReveal
 */

import ScrollReveal from "scrollreveal"

const isSSR = typeof window === "undefined"
const ScrollShow = isSSR ? null : ScrollReveal()

export default ScrollShow
