// Georgia Images
import hero from "../assets/countries/georgia/hero.jpg";

// Shared / Common Images (used across all countries)
import enquiryImage from "../assets/common/enquiry-form.jpg";

import whyRecognition from "../assets/common/why/recognition.jpg";
import whyAffordable from "../assets/common/why/affordable.jpg";
import whyEnglish from "../assets/common/why/english-medium.jpg";
import whySafe from "../assets/common/why/safe-country.jpg";
import whyModern from "../assets/common/why/modern-campus.jpg";
import whyFmge from "../assets/common/why/fmge.jpg";

import lifeHostel from "../assets/common/student-life/hostel.jpg";
import lifeFood from "../assets/common/student-life/food.jpg";
import lifeTransport from "../assets/common/student-life/transport.jpg";
import lifeSafety from "../assets/common/student-life/safety.jpg";
import lifeCommunity from "../assets/common/student-life/indian-community.jpg";

// Universities
import tsmu from "../assets/universities/georgia/tsmu.jpg";
import uog from "../assets/universities/georgia/university-of-georgia.jpg";
import seu from "../assets/universities/georgia/seu.jpg";
import david from "../assets/universities/georgia/david-tvildiani.jpg";
import newVision from "../assets/universities/georgia/new-vision.jpg";

const georgiaData = {
  countryName: "Georgia",

  pageTitles: {
    whyTitle: "Why Choose Georgia for MBBS?",
    universityTitle: "Top Medical Universities in Georgia",
    lifeTitle: "Student Life in Georgia",
    finalStep: "Take Your Next Step Towards MBBS in Georgia"
  },

  title: "Study MBBS in Georgia",

  hero: {
    image: hero,
    heading: "Study MBBS In Georgia",
    description:
      "Study MBBS in Georgia at NMC approved universities with world-class education, affordable tuition fees, modern infrastructure, international exposure and excellent career opportunities. UpBrainiacs provides complete admission, visa and travel assistance."
  },

  whyChoose: [
    {
      title: "Global Recognition",
      image: whyRecognition,
      description:
        "Universities recognised by NMC, WHO, WFME and WDOMS."
    },
    {
      title: "Affordable Fees",
      image: whyAffordable,
      description:
        "Low tuition fees and affordable living expenses."
    },
    {
      title: "English Medium",
      image: whyEnglish,
      description:
        "Complete MBBS program taught in English language."
    },
    {
      title: "Safe Environment",
      image: whySafe,
      description:
        "One of the safest countries for international students."
    },
    {
      title: "Modern Infrastructure",
      image: whyModern,
      description:
        "Advanced laboratories, hospitals and practical training."
    },
    {
      title: "High FMGE Success",
      image: whyFmge,
      description:
        "Strong academic support for FMGE preparation."
    }
  ],

  universities: [
    {
      name: "Tbilisi State Medical University",
      image: tsmu,
      seats: "500+",
      fee: "$8000 / Year",
      established: "1918",
      type: "Government University",
      location: "Tbilisi, Georgia",
      duration: "6 Years",
      medium: "English",
      recognition: "NMC, WHO, WFME & WDOMS",
      description:
        "Established in 1918, Tbilisi State Medical University is one of the oldest and most prestigious government medical universities in Georgia. It attracts students from more than 80 countries and provides world-class medical education with excellent clinical exposure."
    },
    {
      name: "University of Georgia",
      image: uog,
      seats: "400+",
      fee: "$6000 / Year",
      established: "2004",
      type: "Private University",
      location: "Tbilisi, Georgia",
      duration: "6 Years",
      medium: "English",
      recognition: "NMC & WHO Recognized",
      description:
        "One of the fastest-growing private universities in Georgia known for modern infrastructure, advanced simulation labs, international collaborations and excellent clinical training."
    },
    {
      name: "SEU Georgian National University",
      image: seu,
      seats: "350+",
      fee: "$5500 / Year",
      established: "2001",
      type: "Private University",
      location: "Tbilisi, Georgia",
      duration: "6 Years",
      medium: "English",
      recognition: "NMC & WHO Recognized",
      description:
        "SEU offers internationally recognized medical education with modern teaching methodologies, practical learning opportunities, international faculty and excellent student support."
    },
    {
      name: "David Tvildiani Medical University",
      image: david,
      seats: "250+",
      fee: "$8000 / Year",
      established: "1989",
      type: "Private Medical University",
      location: "Tbilisi, Georgia",
      duration: "6 Years",
      medium: "English",
      recognition: "NMC & WHO Recognized",
      description:
        "Known for its USMLE-oriented curriculum, small batch sizes, strong research environment and outstanding academic performance among international medical students."
    },
    {
      name: "New Vision University",
      image: newVision,
      seats: "600+",
      fee: "$7000 / Year",
      established: "2013",
      type: "Private University",
      location: "Tbilisi, Georgia",
      duration: "6 Years",
      medium: "English",
      recognition: "NMC & WHO Recognized",
      description:
        "A highly preferred destination for international students offering innovative teaching methods, digital learning platforms and advanced clinical training."
    }
  ],

  admissionProcess: {},

  studentLife: [
    {
      title: "Accommodation",
      image: lifeHostel,
      description:
        "Comfortable university hostels and private apartments."
    },
    {
      title: "Indian Food",
      image: lifeFood,
      description:
        "Indian restaurants and grocery stores are easily available."
    },
    {
      title: "Transportation",
      image: lifeTransport,
      description:
        "Affordable metro, buses and public transport facilities."
    },
    {
      title: "Safe Environment",
      image: lifeSafety,
      description:
        "A safe and welcoming atmosphere for international students."
    },
    {
      title: "Indian Community",
      image: lifeCommunity,
      description:
        "Large Indian student community and support network."
    }
  ],

  enquiry: {
    image: enquiryImage
  },

  faq: [
    {
      question: "Is Georgia good for MBBS?",
      answer:
        "Yes, Georgia is one of the most preferred destinations for MBBS because of affordable fees, quality education and globally recognised universities."
    },
    {
      question: "Is NEET required for MBBS in Georgia?",
      answer:
        "Yes, qualifying NEET is mandatory for Indian students who wish to pursue MBBS abroad."
    },
    {
      question: "Is Georgia safe for Indian students?",
      answer:
        "Yes, Georgia is considered one of the safest countries for international students."
    },
    {
      question: "What is the duration of MBBS in Georgia?",
      answer:
        "The MBBS course duration is generally 6 years including clinical training."
    },
    {
      question: "Are Georgia medical degrees valid in India?",
      answer:
        "Yes, degrees from NMC-approved universities are valid subject to NMC regulations."
    }
  ]
};

export default georgiaData;