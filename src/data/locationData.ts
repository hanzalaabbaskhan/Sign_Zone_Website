export interface CityProject {
  img: string
  alt: string
  eyebrow: string
  title: string
  desc: string
  link: string
}

export interface CityPageData {
  title: string
  metaDesc: string
  h1City: string
  intro: string
  heroImg: string | null
  heroAlt: string | null
  sec2Eye: string
  sec2H2: string
  sec2P: string
  projects: CityProject[]
  ctaEye: string
  ctaH2: string
  ctaP: string
}

export const CITY_PAGES_DATA: Record<string, CityPageData> = {
  "allen": {
    "title": "Allen Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Allen, Texas. Channel letters, monument, pylon, storefront and interior signs.",
    "h1City": "Allen.",
    "intro": "From storefront letters and building signs to monuments and interiors, we help Allen businesses create signs that work for their space.",
    "heroImg": null,
    "heroAlt": null,
    "sec2Eye": "Allen \u00b7 Local work",
    "sec2H2": "Signs for Allen.",
    "sec2P": "Explore signage suited to local storefronts, offices and commercial properties.",
    "projects": [],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Allen?",
    "ctaP": "Share a photo of your property and tell us what you need. We\u2019ll help you find the right approach."
  },
  "arlington": {
    "title": "Arlington Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Arlington, Texas. Channel letters, monument, pylon, storefront and interior signs.",
    "h1City": "Arlington.",
    "intro": "From storefront letters and building signs to monuments and interiors, we help Arlington businesses create signs that work for their space.",
    "heroImg": "/images/locations/arlington.webp",
    "heroAlt": "Arwa Coffee signage in Arlington",
    "sec2Eye": "Arlington \u00b7 Local work",
    "sec2H2": "Work in Arlington.",
    "sec2P": "Explore signage suited to local storefronts, offices and commercial properties.",
    "projects": [
      {
        "img": "/images/locations/arlington.webp",
        "alt": "Arwa Coffee signage in Arlington",
        "eyebrow": "Arlington \u00b7 Gold dimensional storefront letters and logo",
        "title": "Arwa Coffee",
        "desc": "Gold dimensional storefront letters and logo for a local business in Arlington.",
        "link": "https://www.signexpressusa.com/projects/arwa-coffee-storefront-sign/"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Arlington?",
    "ctaP": "Share a photo of your property and tell us what you need. We\u2019ll help you find the right approach."
  },
  "carrollton": {
    "title": "Carrollton Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Carrollton, Texas. Channel letters, monument, pylon, storefront and interior signs.",
    "h1City": "Carrollton.",
    "intro": "From storefront letters and building signs to monuments and interiors, we help Carrollton businesses create signs that work for their space.",
    "heroImg": "/images/locations/carrollton.webp",
    "heroAlt": "Ozone Laundry Lab signage in Carrollton",
    "sec2Eye": "Carrollton \u00b7 Local work",
    "sec2H2": "Work in Carrollton.",
    "sec2P": "Explore signage suited to local storefronts, offices and commercial properties.",
    "projects": [
      {
        "img": "/images/locations/carrollton.webp",
        "alt": "Ozone Laundry Lab signage in Carrollton",
        "eyebrow": "Carrollton \u00b7 Dimensional storefront letters and logo",
        "title": "Ozone Laundry Lab",
        "desc": "Dimensional storefront letters and logo for a local business in Carrollton.",
        "link": "https://www.signexpressusa.com/projects/ozone-laundry-lab-channel-letters/"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Carrollton?",
    "ctaP": "Share a photo of your property and tell us what you need. We\u2019ll help you find the right approach."
  },
  "dallas": {
    "title": "Dallas Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Dallas, Texas. Channel letters, monument, pylon, storefront and interior signs.",
    "h1City": "Dallas.",
    "intro": "From storefront letters and building signs to monuments and interiors, we help Dallas businesses create signs that work for their space.",
    "heroImg": "/images/locations/dallas-amart.webp",
    "heroAlt": "A Mart Food Market signage in Dallas",
    "sec2Eye": "Dallas \u00b7 Local work",
    "sec2H2": "Work in Dallas.",
    "sec2P": "Explore signage suited to local storefronts, offices and commercial properties.",
    "projects": [
      {
        "img": "/images/locations/dallas-amart.webp",
        "alt": "A Mart Food Market signage in Dallas",
        "eyebrow": "Dallas \u00b7 Channel letters and logo cabinet",
        "title": "A Mart Food Market",
        "desc": "Channel letters and logo cabinet for a local business in Dallas.",
        "link": "https://www.signexpressusa.com/projects/a-mart-food-market-channel-letters/"
      },
      {
        "img": "/images/locations/dallas-sanjiva.webp",
        "alt": "Sanjiva Medical Spa signage in Dallas",
        "eyebrow": "Dallas \u00b7 Halo-lit dimensional letters and logo",
        "title": "Sanjiva Medical Spa",
        "desc": "Halo-lit dimensional letters and logo for a local business in Dallas.",
        "link": "https://www.signexpressusa.com/projects/sanjiva-medical-spa-interior-sign/"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Dallas?",
    "ctaP": "Share a photo of your property and tell us what you need. We\u2019ll help you find the right approach."
  },
  "fort-worth": {
    "title": "Fort Worth Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Fort Worth, Texas. Channel letters, monument, pylon, storefront and interior signs.",
    "h1City": "Fort Worth.",
    "intro": "From storefront letters and building signs to monuments and interiors, we help Fort Worth businesses create signs that work for their space.",
    "heroImg": "/images/locations/fort-worth.webp",
    "heroAlt": "All-Integrity Insurance signage in Fort Worth",
    "sec2Eye": "Fort Worth \u00b7 Local work",
    "sec2H2": "Work in Fort Worth.",
    "sec2P": "Explore signage suited to local storefronts, offices and commercial properties.",
    "projects": [
      {
        "img": "/images/locations/fort-worth.webp",
        "alt": "All-Integrity Insurance signage in Fort Worth",
        "eyebrow": "Fort Worth \u00b7 Channel letters and entry panel",
        "title": "All-Integrity Insurance",
        "desc": "Channel letters and entry panel for a local business in Fort Worth.",
        "link": "https://www.signexpressusa.com/projects/all-integrity-insurance-channel-letters/"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Fort Worth?",
    "ctaP": "Share a photo of your property and tell us what you need. We\u2019ll help you find the right approach."
  },
  "frisco": {
    "title": "Frisco Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Frisco, Texas. Channel letters, monument, pylon, storefront and interior signs.",
    "h1City": "Frisco.",
    "intro": "From storefront letters and building signs to monuments and interiors, we help Frisco businesses create signs that work for their space.",
    "heroImg": "/images/locations/frisco.webp",
    "heroAlt": "Nritya Dance signage in Frisco",
    "sec2Eye": "Frisco \u00b7 Local work",
    "sec2H2": "Work in Frisco.",
    "sec2P": "Explore signage suited to local storefronts, offices and commercial properties.",
    "projects": [
      {
        "img": "/images/locations/frisco.webp",
        "alt": "Nritya Dance signage in Frisco",
        "eyebrow": "Frisco \u00b7 Dimensional storefront letters and logo",
        "title": "Nritya Dance",
        "desc": "Dimensional storefront letters and logo for a local business in Frisco.",
        "link": "https://www.signexpressusa.com/projects/nritya-dance-storefront-sign/"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Frisco?",
    "ctaP": "Share a photo of your property and tell us what you need. We\u2019ll help you find the right approach."
  },
  "mckinney": {
    "title": "Mckinney Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Mckinney, Texas. Channel letters, monument, pylon, storefront and interior signs.",
    "h1City": "McKinney.",
    "intro": "From storefront letters and building signs to monuments and interiors, we help McKinney businesses create signs that work for their space.",
    "heroImg": "/images/locations/mckinney.webp",
    "heroAlt": "Royce Recovery signage in McKinney",
    "sec2Eye": "McKinney \u00b7 Local work",
    "sec2H2": "Work in McKinney.",
    "sec2P": "Explore signage suited to local storefronts, offices and commercial properties.",
    "projects": [
      {
        "img": "/images/locations/mckinney.webp",
        "alt": "Royce Recovery signage in McKinney",
        "eyebrow": "McKinney \u00b7 Dimensional sign panel and logo",
        "title": "Royce Recovery",
        "desc": "Dimensional sign panel and logo for a local business in McKinney.",
        "link": "https://www.signexpressusa.com/projects/royce-recovery-business-sign/"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in McKinney?",
    "ctaP": "Share a photo of your property and tell us what you need. We\u2019ll help you find the right approach."
  },
  "plano": {
    "title": "Plano Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Plano, Texas. Channel letters, monument, pylon, storefront and interior signs.",
    "h1City": "Plano.",
    "intro": "From storefront letters and building signs to monuments and interiors, we help Plano businesses create signs that work for their space.",
    "heroImg": "/images/locations/plano.webp",
    "heroAlt": "Apex Specialty Care signage in Plano",
    "sec2Eye": "Plano \u00b7 Local work",
    "sec2H2": "Work in Plano.",
    "sec2P": "Explore signage suited to local storefronts, offices and commercial properties.",
    "projects": [
      {
        "img": "/images/locations/plano.webp",
        "alt": "Apex Specialty Care signage in Plano",
        "eyebrow": "Plano \u00b7 Illuminated building letters and logo",
        "title": "Apex Specialty Care",
        "desc": "Illuminated building letters and logo for a local business in Plano.",
        "link": "https://www.signexpressusa.com/projects/apex-specialty-care-illuminated-sign/"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Plano?",
    "ctaP": "Share a photo of your property and tell us what you need. We\u2019ll help you find the right approach."
  },
  "richardson": {
    "title": "Richardson Business Signs | Sign Zone DFW",
    "metaDesc": "Commercial sign design, permits, fabrication and installation in Richardson, Texas. Channel letters, monument, pylon, storefront and interior signs.",
    "h1City": "Richardson.",
    "intro": "From storefront letters and building signs to monuments and interiors, we help Richardson businesses create signs that work for their space.",
    "heroImg": "/images/locations/richardson.webp",
    "heroAlt": "Jabil signage in Richardson",
    "sec2Eye": "Richardson \u00b7 Local work",
    "sec2H2": "Work in Richardson.",
    "sec2P": "Explore signage suited to local storefronts, offices and commercial properties.",
    "projects": [
      {
        "img": "/images/locations/richardson.webp",
        "alt": "Jabil signage in Richardson",
        "eyebrow": "Richardson \u00b7 Dimensional building letters and logo",
        "title": "Jabil",
        "desc": "Dimensional building letters and logo for a local business in Richardson.",
        "link": "https://www.signexpressusa.com/projects/jabil-building-sign/"
      }
    ],
    "ctaEye": "Let's get started",
    "ctaH2": "Planning a sign in Richardson?",
    "ctaP": "Share a photo of your property and tell us what you need. We\u2019ll help you find the right approach."
  }
};
