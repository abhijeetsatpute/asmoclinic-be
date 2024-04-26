const doctorsData = [
  {
    fullname: "Mukhamedov Bakhrom Ilamanovich",
    occupation:
      "Candidate of Medical Sciences, Associate Professor, doctor of the highest category dermatovenerologist",
    image: "/uploads/doctor/team-1.jpg",
    info: {
      "Personal Information": [{ Birthday: "October 27, 1969" }],
      Education: [
        {
          "1986-1993":
            "2-Tashkent State Medical Institute, Faculty: General Medicine",
        },
        {
          "1993-1995":
            "Clinical residency - dermatovenerology at the Department of Skin and Venereal Diseases of the 2nd Tashkent State Medical Institute",
        },
        {
          "1995-2001":
            "Assistant at the Department of Skin and Venereal Diseases of the 2nd Tashkent State Medical Institute",
        },
        {
          "2001-2002":
            "Senior Lecturer at the Department of Skin and Venereal Diseases of the 2nd Tashkent State Medical Institute",
        },
        {
          "2002-2003":
            "Associate Professor of the Department of Skin and Venereal Diseases of the 2nd Tashkent State Medical Institute",
        },
        {
          "2003-2005":
            "Doctoral student at the Department of Skin and Venereal Diseases of the 2nd Tashkent State Medical Institute",
        },
        {
          "2006-2007":
            "Associate Professor, Department of Dermatology and Venereal Diseases, TMA",
        },
        {
          2007: "Resident doctor at the Republican Dermatovenerological Clinical Hospital",
        },
        {
          2012: "Doctor of the outpatient department of the Republican Dermatovenerological Clinical Hospital",
        },
        {
          2013: "Head of the inpatient department of the Republican Dermatovenerological Clinical Hospital",
        },
        {
          "2017 - 2021":
            "Deputy Chief Physician of the Republican Dermatovenerological Clinical Hospital",
        },
        { "2021-": 'Chief physician of "Asmo clinic"' },
      ],
      Degree: [
        {
          1999: `defense of a candidate's thesis on the topic "The use of extantilin in early forms of syphilis"`,
        },
        { 2007: `Assistant professor` },
      ],
      Category: ["Higher"],
      Publications: [
        `Author of more than 70 scientific articles, 4 methodological recommendations, 3 methodological manuals, 3 teaching aids, 2 methodological recommendations`,
      ],
      "Language skills": [
        `Uzbek - native language`,
        `Russian - fluent`,
        `English - intermediate`,
      ],
    },
  },
  {
    fullname: "Pulatov Murad Abdujabborovich",
    occupation: "Doctor of the highest category, dermatovenerologist",
    image: "/uploads/doctor/team-2.jpg",
    info: {
      "Personal Information": [
        {
          Birthday: "November 18, 1983",
        },
      ],
      Education: [
        { "2000-2007": "Tashkent Medical Academy, Faculty: General Medicine" },
        {
          "2007-2010":
            "Master's degree in dermatovenerology at the Department of Skin and Venereal Diseases of the Tashkent Medical Academy",
        },
        {
          "2010-2021":
            "Doctor of the inpatient department of the Republican Dermatovenerological Clinical Hospital",
        },
        { "2021-": `Dermatovenerologist "Asmo clinic"` },
      ],
      Training: [
        { 2015: `New methods of laboratory diagnosis of skin diseases.` },
        { 2018: `Modern methods of diagnosis and treatment of psoriasis` },
        {
          null: `Participant in international conferences, congresses, forums - Tashkent, Russia, Türkiye`,
        },
      ],
      Category: ["Higher"],
      Publications: [`Author of 11 scientific articles, 6 theses`],
      "Language skills": [
        `Uzbek - native language`,
        `Russian - fluent`,
        `English - intermediate`,
      ],
    },
  },
  {
    fullname: "Mamatkobulov Zhavokhir Sharobidinovich",
    occupation: "Dermotovenerologist",
    image: "/uploads/doctor/team-3.jpg",
    info: {
      "Personal Information": [
        {
          Birthday: "February 1, 1993",
        },
      ],
      Education: [
        {
          "2012-2018": "Tashkent Medical Academy, Faculty - General Medicine",
        },
        {
          "2018-2021":
            "Master's degree in dermatovenerology, at the Department of Skin and Venereological Diseases of the Tashkent Medical Academy",
        },
        {
          "2021-": 'Dermatologist "Asmo clinic"',
        },
      ],
      Publications: ["Author of 3 scientific articles, 2 theses"],
      "Language skills": [
        "Uzbek - native language",
        "Russian - intermediate",
        "English - intermediate",
      ],
    },
  },
  {
    fullname: "Marupova Barno Yuldashevna",
    occupation: "Doctor of the highest categories, pediatrician",
    image: "/uploads/doctor/team-4.jpg",
    info: {
      "Personal Information": [
        {
          Birthday: "August 7, 1976",
        },
      ],
      Education: [
        {
          "1993-2000": "Tashkent Pediatric Medical Institute",
        },
        {
          "2001-2004":
            "Infectious disease doctor at the central hospital at the regional medical association of the Khamza district of Tashkent",
        },
        {
          "2005-2020":
            "District doctor of the children's department of the 29th family clinic of the Yashnabad district of Tashkent",
        },
        {
          2021: "Head of the children's department of the 29th family clinic of the Yashnabad district of Tashkent",
        },
        {
          "2022-": 'Pediatrician "Asmo clinic"',
        },
      ],
      Training: [
        {
          2011: '"Modern issues in pediatrics"',
        },
        {
          2017: '"Vaccine-controlled infectious diseases and safe immunization - World Health Organization"',
        },
        {
          2017: '"Valeology is the basic principle of healthcare medicine"',
        },
        {
          2020: '"Taxological diagnosis of anemia and pathology of the hemostatic system"',
        },
      ],
      Publications: [
        '"Properties of breastfeeding in children under 1 year of age"',
      ],
      "Language skills": [
        "Uzbek - native language",
        "Russian - fluent",
        "English - with dictionary",
      ],
    },
  },
  {
    fullname: "Pyagai Grigory Borisovich",
    occupation: "Doctor of the highest category, dermatovenerologist",
    image: "/uploads/doctor/team-5.jpg",
    info: {
      "Personal Information": [
        {
          Birthday: "________",
        },
      ],
      Education: [
        {
          2002: "Nukus branch of the Tashkent Pediatric Medical Institute, Faculty of Pediatrics",
        },
        {
          "2002-2005":
            "On the basis of the Research Institute of Dermatovenerology of the Ministry of Health of the Republic of Uzbekistan, postgraduate study in the specialty “Skin and venereal diseases”",
        },
        {
          "2005-2020": "Dermatovenerologist 8-KVD",
        },
        {
          "2020-":
            "Associate Professor, Department of Dermato-Oncopathology, Tashkent State Dental Institute",
        },
        {
          "2021-": 'Dermatovenerologist "Asmo clinic"',
        },
      ],
      Degree: [
        {
          2007: "Candidate's dissertation for the degree of Candidate of Sciences _____",
        },
        {
          2021: "Highest qualification category in the specialty “Dermatovenereology”.",
        },
        {
          _______: "Assistant professor",
        },
      ],
      Category: ["Higher"],
      Training: [
        {
          ____: "_______________________",
        },
      ],
      Publications: [
        "Author of 57 scientific articles, 11 journal articles, 4 _______ dissertations, monographs and textbooks.",
      ],
      "Language skills": [
        "Russian - native language",
        "Uzbek - intermediate",
        "English - ______",
      ],
    },
  },
  {
    fullname: "Ibragimdzhanova Malika Akhmadzhonova",
    occupation: "Ultrasound doctor",
    image: "/uploads/doctor/team-6.jpg",
    info: {
      "Personal Information": [
        {
          Birthday: "April 15, 1992",
        },
      ],
      Education: [
        {
          "2010-2018":
            "Tashkent Periatric Medical Institute, Faculty of Pediatrics",
        },
        {
          "2018-2020":
            "Clinical residency Tashkent Periatric Medical Institute, Department of Neonatology",
        },
        {
          "2020-2021":
            "On-duty and neonatologist doctor at the department of obstetrics and gynecology in Chirchik RMO",
        },
      ],
      Training: [
        {
          2021: "Organization of safe immunization by the Ministry of Health of the Republic of Uzbekistan",
        },
      ],
      "Science articles": [
        "Proper organization of first aid for premature babies.",
      ],
      "Language skills": [
        "Uzbek - native language",
        "Russian - fluent",
        "English - intermediate",
      ],
    },
  },
  {
    fullname: "Hamrakulov Sukhrob Saitakhmatovich",
    occupation: "First category doctor, dermatovenerologist",
    image: "/uploads/doctor/default.jpg",
    info: {
      "Personal Information": [
        {
          Birthday: "October 26, 1985",
        },
      ],
      Education: [
        {
          "2002-2009": "Tashkent Medical Academy, Faculty - General Medicine",
        },
        {
          "2009-2012":
            "Master's degree in dermatovenereology at the Department of Dermatovenereology of the Tashkent Medical Academy",
        },
        {
          "2012-2022":
            "Intern at the inpatient department of the Republican Dermatovenerological Clinical Hospital",
        },
        {
          "2013-2021":
            "Spiritual and educational work at the Republican Dermatovenerological Clinical Hospital.",
        },
        {
          "2022-": 'Dermatovenerologist "Asmo clinic"',
        },
      ],
      Training: [],
      Publications: [
        "Author of more than 13 abstracts and 3 theses on the results of various scientific fields.",
      ],
      "Language skills": [
        "Uzbek - native language",
        "Russian - fluent",
        "English - intermediate",
      ],
    },
  },
  {
    fullname: "Koldarova Evelina Vladimirovna",
    occupation: "Category 2 doctor, dermatovenerologist, dermatoscopist",
    image: "/uploads/doctor/team-8.jpg",
    info: {
      "Personal Information": [
        {
          Birthday: "June 10, 1990",
        },
      ],
      Education: [
        {
          "2008-2015": "Tashkent Medical Academy, Faculty - General Medicine",
        },
        {
          "2015-2017":
            "Clinical residency in dermatovenerology with prof. Molochkova A.V. Peoples' Friendship University of Russia, Moscow",
        },
        {
          2016: "“Basics of dermatoscopy” under the guidance of Ustinov M.V., Sergeev Yu.Yu., Sergeev V.Yu.",
        },
        {
          2017: "“Melanocytic nevi” under the guidance of Professor Mordovtseva V.V., Sergeev Yu.Yu.",
        },
        {
          "2017-2019":
            "Dermatovenerologist of the outpatient department of the Republican Dermatovenerological Clinical Hospital of the Ministry of Health of the Republic of Uzbekistan",
        },
        {
          "2020-2022": "Junior Researcher, RSSPCDiK",
        },
        {
          2021: "Dermatovenerologist at the private dermatological clinic Asmo Clinic.",
        },
      ],
      Training: [
        {
          2015: "Member of the Moscow Society of Dermatovenerologists. A.I. Pospelov",
        },
        {
          2016: "Member of the Society of Dermatoscopy and Optical Skin Diagnostics.",
        },
        {
          2018: "New technologies and methods of therapy in medicine",
        },
        {
          2019: "Diagnosis, treatment and prevention of sexually transmitted diseases",
        },
        {
          2019: "Member of the International Society of Dermatoscopy. (IDS)",
        },
        {
          2021: "Modern methods of laboratory diagnostics in dermatovenerology",
        },
        {
          2021: "Modern methods of diagnosis and treatment of dermatomycosis",
        },
        {
          2022: "one-month advanced training course in the “Dermatovenereology” program at the Faculty of Continuing Medical Education, Medical Institute of RUDN University, Moscow",
        },
      ],
      Publications: [
        "Author of more than 20 scientific articles, 2 monographs and textbooks.",
      ],
      "Language skills": [
        "Russian - native language",
        "Uzbek - intermediate",
        "English - fluent",
        "Spanish - intermediate",
        "Turkish - with dictionary",
      ],
    },
  },
  {
    fullname: "Khalitov Imil Ilnurovich",
    occupation: "Dermatovenerologist",
    image: "/uploads/doctor/default.jpg",
    info: {
      "Personal Information": [
        {
          Birthday: "_____",
        },
      ],
      Education: [
        {
          "2010-2013":
            "P.F. Borovsky Medical College, Faculty - General Medicine",
        },
        {
          "2013-2019": "Tashkent Medical Academy, Faculty - General Medicine",
        },
        {
          2019: "Yashnabad district of Tashkent city 30-MFU SE",
        },
        {
          "2019-2022":
            "Tashkent Medical Academy, master's degree in dermatovenerology",
        },
        {
          "2022-": 'Dermatovenerologist "Asmo clinic"',
        },
      ],
      Publications: ["Author of 9 scientific publications"],
      "Language skills": [
        "Russian - native language",
        "Uzbek - intermediate",
        "English - intermediate",
      ],
    },
  },
  {
    fullname: "Azimova Shakhrizoda Bakhadirovna",
    occupation: "Pediatric gynecologist",
    image: "/uploads/doctor/team-10.jpg",
    info: {
      "Personal Information": [
        {
          Birthday: "November 9, 1990",
        },
      ],
      Education: [
        {
          "2008-2015":
            "Tashkent Pediatric Medical Institute, Faculty of Pediatrics",
        },
        {
          "2017-2019":
            "Clinical residency at the Tashkent Pediatric Medical Institute, Faculty of Pediatric Gynecology",
        },
        {
          2020: 'Tashkent Institute for Advanced Training of Doctors in the course "Obstetrics and Gynecology"',
        },
        {
          "2018-2021": "RMO of Yashnobad district - Pediatric gynecologist",
        },
      ],
      "Language skills": [
        "Uzbek - native language",
        "Russian - fluent",
        "English - intermediate",
      ],
    },
  },
  {
    fullname: "Kurbonov Obid Jumanalievich",
    occupation: "Dermatovenerologist",
    image: "/uploads/doctor/default.jpg",
    info: {
      "Personal Information": [
        {
          Birthday: "December 26, 1990",
        },
      ],
      Education: [
        {
          "2008-2015": "TashPMI Faculty of Pediatrics",
        },
        {
          "2015-2017": "TashPMI Department of Dermatovenereology",
        },
        {
          "2017-2022": "RKVKB dermatovenerologist",
        },
        {
          "2022-": "Assistant at the Department of Dermato-Oncopathology",
        },
        {
          "2022-": 'Dermatologist "Asmo clinic"',
        },
      ],
      "Science articles": ["Author of more than 30 scientific articles"],
      Category: ["Doctor 1st category"],
      "Language skills": [
        "Uzbek - native language ",
        "Russian - intermediate ",
        "English - intermediate",
      ],
    },
  },
];

module.exports = doctorsData;
