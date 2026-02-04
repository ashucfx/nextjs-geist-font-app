// src/fontawesome.ts

import { config, library } from '@fortawesome/fontawesome-svg-core';
// 1. Import the specific icons (LinkedIn, Twitter, Instagram)
import { faLinkedin, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Tells Font Awesome to skip adding CSS automatically since Next.js handles it globally.
config.autoAddCss = false;

// 2. Add the icons to the global library so they can be used anywhere.
library.add(faLinkedin, faTwitter, faInstagram, faFacebook, faBars, faTimes, faChevronDown);