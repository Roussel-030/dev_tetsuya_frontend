import '../assets/css/variable.css'
import '../assets/css/util.css'
import '../assets/css/mainStyle.css'
import "@fontsource/plus-jakarta-sans";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/400.css";


import { library } from '@fortawesome/fontawesome-svg-core'

import { faExchange,faShareAlt,faPlus,faEye,faEyeSlash,faTimes,faBell,faSearch,faUser,faPieChart,
    faHome, faComment, faThumbtack, faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { faHeart,faStar } from '@fortawesome/free-regular-svg-icons'
import {faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faExchange,faShareAlt,faPlus, faHeart,faLinkedinIn, faTwitter, faInstagram, 
    faEye, faEyeSlash,faTimes,faBell,faSearch,faUser,faPieChart,faHome,faComment, faThumbtack, faEnvelope, faStar)

export default{}