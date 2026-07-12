// Poland Images
import hero from "../assets/countries/poland/hero.jpg";

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
import gdansk from "../assets/universities/poland/gdansk.jpg";
import bialystok from "../assets/universities/poland/bialystok.jpg";

const polandData = {
  countryName: "Poland",

  pageTitles: {
    whyTitle: "Why Choose Poland for MBBS?",
    universityTitle: "Top Medical Universities in Poland",
    lifeTitle: "Student Life in Poland",
    finalStep: "Take Your Next Step Towards MBBS in Poland"
  },

  title: "Study MBBS in Poland",

  hero: {
    image: hero,
    heading: "Study MBBS In Poland",
    description:
      "Study MBBS in Poland at EU-accredited, NMC and WHO recognised universities with strong international accreditation, modern infrastructure and broad global recognition. UpBrainiacs provides complete admission, visa and travel assistance."
  },

  whyChoose: [
    {
      title: "EU Recognition",
      image: whyRecognition,
      description:
        "Universities recognised by NMC, WHO, and additional bodies such as the Medical Board of California and NCFMEA."
    },
    {
      title: "Strong Accreditation",
      image: whyAffordable,
      description:
        "Some of the most extensively accredited universities in this region, broadening options beyond India."
    },
    {
      title: "English Medium",
      image: whyEnglish,
      description:
        "Complete MBBS program taught in English language."
    },
    {
      title: "EU Member State",
      image: whySafe,
      description:
        "Study within the European Union, with the safety and standards that come with it."
    },
    {
      title: "Modern Infrastructure",
      image: whyModern,
      description:
        "Well-established teaching hospitals and modern laboratories."
    },
    {
      title: "High FMGE Success",
      image: whyFmge,
      description:
        "Strong academic foundation for FMGE/NExT preparation."
    }
  ],

  universities: [
    {
      name: "Medical University of Gdańsk",
      image: gdansk,
      seats: "Not publicly disclosed",
      fee: "~€15,000 / $16,400 per Year (~62,000 PLN cited by one source)",
      established: "1945",
      type: "Public University",
      location: "Gdańsk, Poland",
      duration: "6 Years",
      medium: "English",
      recognition:
        "NMC, WHO, WFME, Polish Ministry of Science & Higher Education, Medical Board of California & NCFMEA",
      description:
        "Located in the historic Baltic port city of Gdańsk, this is one of the most extensively accredited universities in this compilation. Its recognition profile gives graduates meaningfully broader options for licensure or further training in the US, alongside the standard India-focused FMGE/NExT pathway."
    },
    {
      name: "Medical University of Białystok",
      image: bialystok,
      seats: "~90-100/year for the English-medium General Medicine program (varies by intake)",
      fee: "~€15,100 / Year (1st year; may rise up to 30% over the course)",
      established: "1950 (roots trace to an 18th-century obstetrics institute)",
      type: "Public University",
      location: "Białystok, Poland",
      duration: "6 Years",
      medium: "English",
      recognition: "APHEA, Medical Board of California, NCFMEA & ASPIRE",
      description:
        "One of the few universities in this compilation with a publicly stated seat count. Białystok has a strong orientation toward international accreditation standards, though fees can rise notably over the six-year program — worth flagging clearly when advising a student."
    }
  ],

  admissionProcess: {},

  studentLife: [
    {
      title: "Accommodation",
      image: lifeHostel,
      description:
        "University dormitories and private apartments near campus."
    },
    {
      title: "Indian Food",
      image: lifeFood,
      description:
        "Indian restaurants and grocery stores available in major Polish cities."
    },
    {
      title: "Transportation",
      image: lifeTransport,
      description:
        "Well-developed public transport across EU cities."
    },
    {
      title: "Safe Environment",
      image: lifeSafety,
      description:
        "A safe, EU-standard environment for international students."
    },
    {
      title: "Indian Community",
      image: lifeCommunity,
      description:
        "Growing Indian student community across Polish medical universities."
    }
  ],

  enquiry: {
    image: enquiryImage
  },

  faq: [
    {
      question: "Is Poland good for MBBS?",
      answer:
        "Yes, Poland offers EU-accredited medical universities with strong international recognition, though tuition is higher than in Georgia, Russia or Nepal."
    },
    {
      question: "Is NEET required for MBBS in Poland?",
      answer:
        "Yes, qualifying NEET is mandatory for Indian students who wish to pursue MBBS abroad, including in Poland."
    },
    {
      question: "Why is MBBS in Poland more expensive than other countries?",
      answer:
        "As an EU member state with extensive international accreditation, Polish universities generally charge higher tuition than universities in Georgia, Russia or Nepal."
    },
    {
      question: "What is the duration of MBBS in Poland?",
      answer:
        "The MBBS (General Medicine) program in Poland typically runs 6 years."
    },
    {
      question: "Are Poland medical degrees valid in India?",
      answer:
        "Yes, degrees from NMC-recognised Polish universities are valid subject to NMC regulations and clearing the FMGE/NExT exam."
    }
  ]
};

export default polandData;