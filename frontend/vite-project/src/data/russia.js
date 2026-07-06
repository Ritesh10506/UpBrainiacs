// Russia Images
import hero from "../assets/countries/russia/hero.jpg";

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
import kazanFederal from "../assets/universities/russia/kazan-federal-university.jpg";
import pirogov from "../assets/universities/russia/pirogov-russian-national-research-medical-university.jpg";
import sechenov from "../assets/universities/russia/first-moscow-state-medical-university.jpg";
import bashkir from "../assets/universities/russia/bashkir-state-medical-university.jpg";
import orenburg from "../assets/universities/russia/orenburg-state-medical-university.jpg";

const russiaData = {
  countryName: "Russia",

  pageTitles: {
    whyTitle: "Why Choose Russia for MBBS?",
    universityTitle: "Top Medical Universities in Russia",
    lifeTitle: "Student Life in Russia",
    finalStep: "Take Your Next Step Towards MBBS in Russia"
  },

  title: "Study MBBS in Russia",

  hero: {
    image: hero,
    heading: "Study MBBS In Russia",
    description:
      "Study MBBS in Russia at NMC approved universities with world-class education, affordable tuition fees, modern infrastructure, international exposure and excellent career opportunities. UpBrainiacs provides complete admission, visa and travel assistance."
  },

  whyChoose: [
    {
      title: "Global Recognition",
      image: whyRecognition,
      description:
        "Universities recognised by NMC, WHO and WDOMS."
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
      name: "Kazan Federal University",
      image: kazanFederal,
      seats: "800",
      fee: "$7000 / Year",
      established: "1804",
      type: "Public / Federal University",
      location: "Kazan, Russia",
      duration: "6 Years",
      medium: "English",
      recognition: "NMC, WHO, WDOMS & Ministry of Higher Education, Russia",
      description:
        "Established in 1804, Kazan Federal University is one of Russia's oldest and most prestigious universities. Known for its world-class research facilities, experienced faculty, and advanced medical education, it attracts thousands of international students every year. The university provides excellent clinical exposure through affiliated hospitals and modern laboratories."
    },
    {
      name: "Pirogov Russian National Research Medical University",
      image: pirogov,
      seats: "500",
      fee: "$8000 / Year",
      established: "1906",
      type: "Public Medical University",
      location: "Moscow, Russia",
      duration: "6 Years",
      medium: "English",
      recognition: "NMC, WHO & WDOMS",
      description:
        "Pirogov Russian National Research Medical University is one of Russia's leading medical institutions, renowned for its research-driven curriculum and advanced clinical training. The university has a strong international reputation and produces highly skilled medical professionals."
    },
    {
      name: "First Moscow State Medical University (Sechenov University)",
      image: sechenov,
      seats: "700",
      fee: "$10000 / Year",
      established: "1758",
      type: "Public Medical University",
      location: "Moscow, Russia",
      duration: "6 Years",
      medium: "English",
      recognition: "NMC, WHO & WDOMS",
      description:
        "First Moscow State Medical University — popularly known as Sechenov University — is Russia's oldest and most prestigious medical university. It offers internationally recognised medical education, cutting-edge research opportunities, and extensive clinical training in affiliated hospitals."
    },
    {
      name: "Bashkir State Medical University",
      image: bashkir,
      seats: "600",
      fee: "$4500 / Year",
      established: "1932",
      type: "Public Medical University",
      location: "Ufa, Russia",
      duration: "6 Years",
      medium: "English",
      recognition: "NMC, WHO & WDOMS",
      description:
        "Bashkir State Medical University is one of the most preferred destinations for Indian students pursuing MBBS in Russia. It offers affordable tuition fees, experienced faculty, modern laboratories, and excellent clinical exposure through government hospitals."
    },
    {
      name: "Orenburg State Medical University",
      image: orenburg,
      seats: "500",
      fee: "$5000 / Year",
      established: "1944",
      type: "Public Medical University",
      location: "Orenburg, Russia",
      duration: "6 Years",
      medium: "English",
      recognition: "NMC, WHO & WDOMS",
      description:
        "Orenburg State Medical University is a well-established government medical university known for its quality education, affordable fee structure, and strong academic environment. It has become a popular destination for Indian students due to its English-medium MBBS programme and extensive practical training."
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
      question: "Is Russia good for MBBS?",
      answer:
        "Yes, Russia is one of the most preferred destinations for MBBS because of affordable fees, quality education and globally recognised universities."
    },
    {
      question: "Is NEET required for MBBS in Russia?",
      answer:
        "Yes, qualifying NEET is mandatory for Indian students who wish to pursue MBBS abroad."
    },
    {
      question: "Is Russia safe for Indian students?",
      answer:
        "Yes, Russia is considered a safe country for international students, with a large and supportive Indian student community."
    },
    {
      question: "What is the duration of MBBS in Russia?",
      answer:
        "The MBBS course duration is generally 6 years including clinical training."
    },
    {
      question: "Are Russia medical degrees valid in India?",
      answer:
        "Yes, degrees from NMC-approved universities are valid subject to NMC regulations."
    }
  ]
};

export default russiaData;