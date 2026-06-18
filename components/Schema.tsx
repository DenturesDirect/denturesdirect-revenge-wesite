import React from 'react';

type SchemaProps = {
  locale: string;
};

export default function AdvancedSchema({ locale }: SchemaProps) {
  // SEO Hooks added to knowsAbout
  const knowsAbout = [
    "Digital Dentures",
    "Intraoral Scanning",
    "CNC Milling",
    "Implant Retained Dentures",
    "Implant Overdentures",
    "Snap-On Dentures",
    "Full Digital Complete Dentures",
    "Digital Partial Dentures",
    "Acrylic Digital Partial Dentures",
    "Cast Digital Partial Dentures",
    "Flexible Digital Partial Dentures",
    "Emergency Denture Repair",
    "Denture Reline",
    "Denture Rebase",
    "Immediate Dentures",
    "Canadian Dental Care Plan (CDCP)",
    "In House Lab",
    "Denturist Near Me",
    "Denture Clinic Near Me",
    "Senior Dentures Toronto"
  ];

  const languages = [
    { name: "English", alternateName: "en" },
    { name: "French", alternateName: "fr" },
    { name: "Vietnamese", alternateName: "vi" },
    { name: "Spanish", alternateName: "es" },
    { name: "Italian", alternateName: "it" }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "Dentist"],
    "name": "Dentures Direct",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2833 Weston Rd",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "postalCode": "M9M 2S1",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.7335",
      "longitude": "-79.5255"
    },
    "description": "Premium 100% impression-free digital dentures using intraoral scanners and in-house CNC milling. Official CDCP provider serving Toronto, North York, Etobicoke, and the GTA.",
    "telephone": "+1-416-245-7474",
    "email": "info@denturesdirect.ca",
    "url": "https://www.denturesdirect.ca",
    // Google Business Profile CID: 9263902258767914897
    "sameAs": [
        "https://www.facebook.com/profile.php?id=61582079577837",
        "https://www.instagram.com/denturesdirecttoronto",
        "https://www.youtube.com/@denturesdirect-toronto",
        "https://www.linkedin.com/company/Dentures-Direct"
      ],
    "image": "https://www.denturesdirect.ca/dentures-direct-toronto-logo.png",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "description": "By Appointment"
      }
    ],
    "knowsAbout": knowsAbout,
    "availableLanguage": languages,
    "employee": [
      {
        "@type": "Person",
        "name": "Damien John Hiorth DD",
        "jobTitle": "Founder & Lead Denturist",
        "image": "https://www.denturesdirect.ca/damien-new.jpg",
        "url": "https://www.denturesdirect.ca/en/about-us"
      },
      {
        "@type": "Person",
        "name": "Luisa Gomez",
        "jobTitle": "Head Denture Technician & RDT Candidate",
        "image": "https://www.denturesdirect.ca/luisa-new.jpg",
        "url": "https://www.denturesdirect.ca/en/about-us"
      },
      {
        "@type": "Person",
        "name": "Caroline Brunelle",
        "jobTitle": "Treatment Coordinator",
        "image": "https://www.denturesdirect.ca/dentures-direct-caroline.jpg",
        "url": "https://www.denturesdirect.ca/en/about-us"
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Canadian Dental Care Plan (CDCP) Covered Services",
          "description": "Official CDCP provider for eligible Canadian seniors seeking denture care in Toronto."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "CNC-Milled Digital Dentures",
          "description": "100% impression-free digital full dentures milled in-house to 3-micron tolerance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Implant-Retained Overdentures",
          "description": "Snap-on and fixed implant-supported dentures designed and milled on-site in Toronto."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Partial Dentures",
          "description": "Acrylic, cast metal, and Digital Flexible Digital Partial Dentures custom-fitted in North York."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Denture Repair",
          "description": "Same-day emergency denture repairs in Toronto. Cracked bases, broken teeth, and relining — usually within one hour."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Denture Reline & Rebase",
          "description": "Denture relining and rebasing to restore proper fit as gums change over time."
        }
      }
    ],
    "areaServed": [
      "Toronto",
      "North York",
      "Etobicoke",
      "Weston",
      "Humber Summit",
      "Humber Heights",
      "Emery",
      "Jane and Finch",
      "Rexdale",
      "Downsview",
      "York",
      "Woodbridge",
      "Vaughan",
      "Brampton",
      "Greater Toronto Area"
    ],
    "medicalSpecialty": "Prosthodontics",
    "isAcceptingNewPatients": true,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "JM Dixon" },
        "reviewBody": "They very accommodating and helpful, very professional denturist and good receptionist. I had a good smile with their help.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Diana Nelson" },
        "reviewBody": "Damien DD is the kindest most professional denturist who is highly recommended for over 10 years of my personal experience. Thank you forever for my smile back!",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Shirley Berry" },
        "reviewBody": "Damien Hiorth DD at Dentures Direct is the best! He is professional, attentive and accommodating. I can easily see why he leads one of the top rated denture clinics in Toronto.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
