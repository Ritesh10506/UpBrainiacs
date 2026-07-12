// Nepal hero image lives in /public/countries, referenced directly (not imported)
const hero = "/countries/nepal.jpg";

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
import mcoms from "../assets/universities/nepal/mcoms.jpg";
import chitwan from "../assets/universities/nepal/chitwan.jpg";
import lumbini from "../assets/universities/nepal/lumbini.jpg";
import kist from "../assets/universities/nepal/kist.jpg";

const nepalData = {
  countryName: "Nepal",

  pageTitles: {
    whyTitle: "Why Choose Nepal for MBBS?",
    universityTitle: "Top Medical Colleges in Nepal",
    lifeTitle: "Student Life in Nepal",
    finalStep: "Take Your Next Step Towards MBBS in Nepal"
  },

  title: "Study MBBS in Nepal",

  hero: {
    image: hero,
    heading: "Study MBBS In Nepal",
    description:
      "Study MBBS in Nepal at Nepal Medical Council and NMC recognised colleges, with a shorter 5.5-year duration, cultural familiarity for Indian students, and easy accessibility. UpBrainiacs provides complete admission, visa and travel assistance."
  },

  whyChoose: [
    {
      title: "Global Recognition",
      image: whyRecognition,
      description:
        "Colleges recognised by the Nepal Medical Council, NMC (India) and WHO/WDOMS."
    },
    {
      title: "Shorter Duration",
      image: whyAffordable,
      description:
        "Most MBBS programs run 5.5 years, slightly shorter than Georgia or Russia."
    },
    {
      title: "English Medium",
      image: whyEnglish,
      description:
        "Complete MBBS program taught in English language."
    },
    {
      title: "Cultural Familiarity",
      image: whySafe,
      description:
        "Close cultural and geographic proximity to India, with easy travel access."
    },
    {
      title: "Modern Infrastructure",
      image: whyModern,
      description:
        "Established teaching hospitals with hands-on clinical exposure."
    },
    {
      title: "High FMGE Success",
      image: whyFmge,
      description:
        "Strong academic support for FMGE/NExT preparation."
    }
  ],

  universities: [
    {
      name: "Manipal College of Medical Sciences (MCOMS), Pokhara",
      image: mcoms,
      seats: "~100-200/year (varies by source and intake year)",
      fee: "~$7,000-13,000 / Year (total course ~$35,000-65,000)",
      established: "1994",
      type: "Private (part of Manipal Education & Medical Group)",
      location: "Pokhara, Nepal",
      duration: "5.5 Years (4.5 academic + 1 year internship)",
      medium: "English",
      recognition: "Nepal Medical Council, NMC (India) & WHO/WDOMS",
      description:
        "Part of the well-known Manipal Education & Medical Group, MCOMS is located in Pokhara, one of Nepal's most scenic cities set beside a lake with Himalayan views. It offers a 5.5-year MBBS program, slightly shorter than the standard six-year format."
    },
    {
      name: "Chitwan Medical College (CMC), Bharatpur",
      image: chitwan,
      seats: "~100-125/year (varies by source)",
      fee: "Total course ~₹55-60 lakh",
      established: "2006",
      type: "Private",
      location: "Bharatpur, Chitwan, Nepal",
      duration: "5.5 Years",
      medium: "English",
      recognition:
        "Nepal Medical Council, NMC (India), WHO, Medical Council of Sri Lanka, GMC (UK) & ECFMG (USA)",
      description:
        "CMC stands out for the breadth of its international recognition, spanning Sri Lanka, the UK's GMC and the US's ECFMG in addition to the standard Nepal Medical Council, NMC and WHO baseline, giving graduates a wider set of pathways after graduation."
    },
    {
      name: "Lumbini Medical College (LMC), Tansen/Palpa",
      image: lumbini,
      seats: "Not publicly fixed",
      fee: "Total course ~₹60-65 lakh",
      established: "2009",
      type: "Private",
      location: "Tansen, Palpa District, Nepal",
      duration: "5.5 Years",
      medium: "English",
      recognition: "Nepal Medical Council, NMC (India) & WHO",
      description:
        "Located in Tansen within Nepal's Palpa district, LMC offers a 5.5-year, English-medium MBBS program. Fee figures vary across sources, so current tuition should be confirmed directly with the college before advising a student."
    },
    {
      name: "KIST Medical College & Teaching Hospital, Lalitpur",
      image: kist,
      seats: "~110-150/year (varies by source)",
      fee: "Total course ~$65,000 (~₹50-60 lakh)",
      established: "2006",
      type: "Private",
      location: "Imadol, Lalitpur, Nepal",
      duration: "5.5 Years (4.5 academic + 1 year internship)",
      medium: "English",
      recognition:
        "Nepal Medical Council, NMC (India), WHO & Sri Lanka Medical Council",
      description:
        "Located in Imadol near Kathmandu, KIST offers a 5.5-year MBBS program with a recognition profile that includes the Sri Lanka Medical Council alongside the standard Nepal Medical Council, NMC and WHO listings."
    }
  ],

  admissionProcess: {},

  studentLife: [
    {
      title: "Accommodation",
      image: lifeHostel,
      description:
        "College hostels and private apartments near campus."
    },
    {
      title: "Indian Food",
      image: lifeFood,
      description:
        "Indian cuisine is widely and easily available across Nepal."
    },
    {
      title: "Transportation",
      image: lifeTransport,
      description:
        "Affordable local transport and easy travel access to and from India."
    },
    {
      title: "Safe Environment",
      image: lifeSafety,
      description:
        "A culturally familiar and welcoming atmosphere for Indian students."
    },
    {
      title: "Indian Community",
      image: lifeCommunity,
      description:
        "Large Indian student community across Nepal's medical colleges."
    }
  ],

  enquiry: {
    image: enquiryImage
  },

  faq: [
    {
      question: "Is Nepal good for MBBS?",
      answer:
        "Yes, Nepal is a popular choice for Indian students due to its shorter 5.5-year duration, cultural familiarity, and Nepal Medical Council and NMC recognised colleges."
    },
    {
      question: "Is NEET required for MBBS in Nepal?",
      answer:
        "Yes, qualifying NEET is mandatory for Indian students who wish to pursue MBBS abroad, including in Nepal."
    },
    {
      question: "How long is the MBBS program in Nepal?",
      answer:
        "Most Nepal MBBS programs run 5.5 years, comprising 4.5 years of academic coursework plus a one-year internship."
    },
    {
      question: "Is Nepal safe for Indian students?",
      answer:
        "Yes, Nepal's cultural and geographic proximity to India makes it a familiar and comfortable environment for Indian students."
    },
    {
      question: "Are Nepal medical degrees valid in India?",
      answer:
        "Yes, degrees from Nepal Medical Council and NMC-recognised colleges are valid subject to NMC regulations and clearing the FMGE/NExT exam."
    }
  ]
};

export default nepalData;