import { College } from "@/types/college";

export const MOCK_COLLEGES: College[] = [
  {
    id: "col-iit-bombay",
    slug: "iit-bombay",
    name: "Indian Institute of Technology Bombay",
    shortName: "IIT Bombay",
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      campusAreaAcres: 550,
    },
    establishedYear: 1958,
    ownership: "PUBLIC",
    nirfRank: 3,
    naacGrade: "A++",
    overallRating: 4.8,
    popularStreams: ["Engineering", "Sciences", "Design"],
    averagePackageLpa: 23.5,
    highestPackageLpa: 140.0,
    medianPackageLpa: 19.8,
    placementPercentage: 94.5,
    topRecruiters: ["Google", "Microsoft", "Goldman Sachs", "Apple", "Texas Instruments", "Qualcomm", "McKinsey"],
    yearlyPlacements: [
      { year: 2024, highestPackageLpa: 140.0, avgPackageLpa: 23.5, medianPackageLpa: 19.8, placementPercentage: 94.5, studentsPlaced: 1480 },
      { year: 2023, highestPackageLpa: 135.0, avgPackageLpa: 21.8, medianPackageLpa: 18.5, placementPercentage: 96.0, studentsPlaced: 1420 },
      { year: 2022, highestPackageLpa: 120.0, avgPackageLpa: 20.1, medianPackageLpa: 17.2, placementPercentage: 95.2, studentsPlaced: 1380 },
    ],
    feePerYearMin: 220000,
    feePerYearMax: 240000,
    feeStructure: {
      tuitionFeePerYear: 200000,
      hostelFeePerYear: 32000,
      oneTimeCautionDeposit: 10000,
      otherAcademicCharges: 8000,
      scholarshipCriteria: [
        "Institute Merit-cum-Means (MCM) Scholarship: 100% tuition waiver for family income < 5 LPA.",
        "SC/ST/PwD candidates exempted from 100% Tuition Fees.",
        "National Overseas Scholarship & Industry sponsored awards."
      ]
    },
    cutoffs: [
      { exam: "JEE_ADVANCED", category: "OPEN", branch: "Computer Science & Engineering", openingRank: 1, closingRank: 67, year: 2024 },
      { exam: "JEE_ADVANCED", category: "OBC_NCL", branch: "Computer Science & Engineering", openingRank: 1, closingRank: 35, year: 2024 },
      { exam: "JEE_ADVANCED", category: "OPEN", branch: "Electrical Engineering", openingRank: 80, closingRank: 360, year: 2024 },
      { exam: "JEE_ADVANCED", category: "OPEN", branch: "Mechanical Engineering", openingRank: 400, closingRank: 1680, year: 2024 },
      { exam: "JEE_ADVANCED", category: "OPEN", branch: "Aerospace Engineering", openingRank: 1100, closingRank: 2400, year: 2024 },
    ],
    courses: [
      { name: "B.Tech Computer Science & Engineering", durationYears: 4, totalSeats: 140, annualFee: 220000, avgPackage: 32.5 },
      { name: "B.Tech Electrical Engineering", durationYears: 4, totalSeats: 150, annualFee: 220000, avgPackage: 26.0 },
      { name: "B.Tech Mechanical Engineering", durationYears: 4, totalSeats: 160, annualFee: 220000, avgPackage: 21.0 },
      { name: "B.Des Industrial Design", durationYears: 4, totalSeats: 35, annualFee: 240000, avgPackage: 18.5 }
    ],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg",
    coverImageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&q=80"
    ],
    highlights: [
      "Ranked #3 in NIRF Overall 2023 & #1 for Engineering innovation.",
      "Powai Lakefront campus with world-class computing facilities.",
      "Active incubation cell (SINE) with 200+ tech startups launched.",
      "Global exchange partnerships with MIT, Stanford, and ETH Zurich."
    ],
    aboutText: "Indian Institute of Technology Bombay (IIT Bombay) is an autonomous public technical and research university located in Powai, Mumbai. Established in 1958, IIT Bombay is recognized as an Institute of National Importance and a premier center for engineering and research education in Asia.",
    facultyCount: 680,
    studentCount: 12500
  },
  {
    id: "col-iit-delhi",
    slug: "iit-delhi",
    name: "Indian Institute of Technology Delhi",
    shortName: "IIT Delhi",
    location: {
      city: "New Delhi",
      state: "Delhi",
      campusAreaAcres: 320,
    },
    establishedYear: 1961,
    ownership: "PUBLIC",
    nirfRank: 2,
    naacGrade: "A++",
    overallRating: 4.9,
    popularStreams: ["Engineering", "Management", "Sciences"],
    averagePackageLpa: 24.2,
    highestPackageLpa: 150.0,
    medianPackageLpa: 20.5,
    placementPercentage: 95.8,
    topRecruiters: ["Microsoft", "Google", "Bain & Co", "Jane Street", "Tower Research", "Amazon"],
    yearlyPlacements: [
      { year: 2024, highestPackageLpa: 150.0, avgPackageLpa: 24.2, medianPackageLpa: 20.5, placementPercentage: 95.8, studentsPlaced: 1520 },
      { year: 2023, highestPackageLpa: 140.0, avgPackageLpa: 22.5, medianPackageLpa: 19.0, placementPercentage: 96.5, studentsPlaced: 1490 },
      { year: 2022, highestPackageLpa: 125.0, avgPackageLpa: 21.0, medianPackageLpa: 18.0, placementPercentage: 94.8, studentsPlaced: 1410 },
    ],
    feePerYearMin: 225000,
    feePerYearMax: 250000,
    feeStructure: {
      tuitionFeePerYear: 200000,
      hostelFeePerYear: 35000,
      oneTimeCautionDeposit: 10000,
      otherAcademicCharges: 9000,
      scholarshipCriteria: [
        "Donor Scholarships for top JEE rankers.",
        "Full tuition fee waiver for Economically Weaker Section (EWS) candidates."
      ]
    },
    cutoffs: [
      { exam: "JEE_ADVANCED", category: "OPEN", branch: "Computer Science & Engineering", openingRank: 30, closingRank: 118, year: 2024 },
      { exam: "JEE_ADVANCED", category: "OPEN", branch: "Mathematics & Computing", openingRank: 120, closingRank: 315, year: 2024 },
      { exam: "JEE_ADVANCED", category: "OPEN", branch: "Electrical Engineering", openingRank: 200, closingRank: 480, year: 2024 },
      { exam: "JEE_ADVANCED", category: "OPEN", branch: "Chemical Engineering", openingRank: 1200, closingRank: 2350, year: 2024 },
    ],
    courses: [
      { name: "B.Tech Computer Science & Engineering", durationYears: 4, totalSeats: 120, annualFee: 225000, avgPackage: 34.0 },
      { name: "B.Tech Mathematics & Computing", durationYears: 4, totalSeats: 90, annualFee: 225000, avgPackage: 30.5 },
      { name: "B.Tech Electrical Engineering", durationYears: 4, totalSeats: 130, annualFee: 225000, avgPackage: 27.2 }
    ],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg",
    coverImageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
    ],
    highlights: [
      "Ranked #2 in NIRF Engineering Category.",
      "Located in South Delhi with state-of-the-art AI Research Labs.",
      "Top quantitative trading and high-frequency finance recruiting destination."
    ],
    aboutText: "IIT Delhi is a premier public research university located in Hauz Khas, Delhi. Established in 1961, it is renowned for cutting-edge engineering research and venture creation.",
    facultyCount: 620,
    studentCount: 11000
  },
  {
    id: "col-bits-pilani",
    slug: "bits-pilani",
    name: "Birla Institute of Technology and Science, Pilani",
    shortName: "BITS Pilani",
    location: {
      city: "Pilani",
      state: "Rajasthan",
      campusAreaAcres: 328,
    },
    establishedYear: 1964,
    ownership: "PRIVATE",
    nirfRank: 25,
    naacGrade: "A++",
    overallRating: 4.7,
    popularStreams: ["Engineering", "Management", "Sciences"],
    averagePackageLpa: 19.8,
    highestPackageLpa: 60.0,
    medianPackageLpa: 17.0,
    placementPercentage: 92.0,
    topRecruiters: ["Google", "Microsoft", "Uber", "DE Shaw", "NVIDIA", "Atlassian", "PhonePe"],
    yearlyPlacements: [
      { year: 2024, highestPackageLpa: 60.0, avgPackageLpa: 19.8, medianPackageLpa: 17.0, placementPercentage: 92.0, studentsPlaced: 2300 },
      { year: 2023, highestPackageLpa: 60.0, avgPackageLpa: 18.5, medianPackageLpa: 16.0, placementPercentage: 94.0, studentsPlaced: 2250 },
      { year: 2022, highestPackageLpa: 55.0, avgPackageLpa: 17.2, medianPackageLpa: 15.0, placementPercentage: 91.5, studentsPlaced: 2180 },
    ],
    feePerYearMin: 540000,
    feePerYearMax: 590000,
    feeStructure: {
      tuitionFeePerYear: 490000,
      hostelFeePerYear: 60000,
      oneTimeCautionDeposit: 30000,
      otherAcademicCharges: 15000,
      scholarshipCriteria: [
        "Merit Scholarship: 100% tuition fee waiver for top 1% BITSAT rankers.",
        "Merit-cum-Means (MCN): Up to 80% tuition waiver for families earning < 11 LPA."
      ]
    },
    cutoffs: [
      { exam: "JEE_MAIN", category: "OPEN", branch: "Computer Science (BITSAT 330+)", openingRank: 500, closingRank: 3500, year: 2024 },
      { exam: "JEE_MAIN", category: "OPEN", branch: "Electronics & Instrumentation", openingRank: 3600, closingRank: 8500, year: 2024 },
    ],
    courses: [
      { name: "B.E. Computer Science", durationYears: 4, totalSeats: 260, annualFee: 540000, avgPackage: 28.5 },
      { name: "B.E. Electrical & Electronics", durationYears: 4, totalSeats: 220, annualFee: 540000, avgPackage: 22.0 },
      { name: "B.E. Mechanical Engineering", durationYears: 4, totalSeats: 200, annualFee: 540000, avgPackage: 16.5 }
    ],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg",
    coverImageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
    ],
    highlights: [
      "Deemed University status with Institute of Eminence tag.",
      "Zero reservation policy & 100% merit-based BITSAT admission.",
      "Unique 7.5-month Practice School (PS-II) industrial internship program."
    ],
    aboutText: "BITS Pilani is a world-renowned private Institute of Eminence known for innovation, zero attendance mandate, and industry-grade Practice School curriculum.",
    facultyCount: 750,
    studentCount: 16000
  },
  {
    id: "col-nit-trichy",
    slug: "nit-trichy",
    name: "National Institute of Technology Tiruchirappalli",
    shortName: "NIT Trichy",
    location: {
      city: "Tiruchirappalli",
      state: "Tamil Nadu",
      campusAreaAcres: 800,
    },
    establishedYear: 1964,
    ownership: "PUBLIC",
    nirfRank: 9,
    naacGrade: "A++",
    overallRating: 4.6,
    popularStreams: ["Engineering", "Management", "Sciences"],
    averagePackageLpa: 16.8,
    highestPackageLpa: 52.8,
    medianPackageLpa: 14.5,
    placementPercentage: 91.2,
    topRecruiters: ["Amazon", "Cisco", "Intel", "Samsung", "L&T", "TCS", "Texas Instruments"],
    yearlyPlacements: [
      { year: 2024, highestPackageLpa: 52.8, avgPackageLpa: 16.8, medianPackageLpa: 14.5, placementPercentage: 91.2, studentsPlaced: 1210 },
      { year: 2023, highestPackageLpa: 48.0, avgPackageLpa: 15.5, medianPackageLpa: 13.2, placementPercentage: 93.0, studentsPlaced: 1180 },
      { year: 2022, highestPackageLpa: 44.0, avgPackageLpa: 14.2, medianPackageLpa: 12.0, placementPercentage: 90.5, studentsPlaced: 1120 },
    ],
    feePerYearMin: 155000,
    feePerYearMax: 175000,
    feeStructure: {
      tuitionFeePerYear: 125000,
      hostelFeePerYear: 35000,
      oneTimeCautionDeposit: 10000,
      otherAcademicCharges: 5000,
      scholarshipCriteria: [
        "100% tuition exemption for SC/ST candidates.",
        "Full tuition waiver for students with annual family income < 1 Lakh."
      ]
    },
    cutoffs: [
      { exam: "JEE_MAIN", category: "OPEN", branch: "Computer Science & Engineering", openingRank: 1200, closingRank: 4800, year: 2024 },
      { exam: "JEE_MAIN", category: "OBC_NCL", branch: "Computer Science & Engineering", openingRank: 1500, closingRank: 6200, year: 2024 },
      { exam: "JEE_MAIN", category: "OPEN", branch: "Electronics & Communication", openingRank: 4900, closingRank: 9200, year: 2024 },
      { exam: "JEE_MAIN", category: "OPEN", branch: "Mechanical Engineering", openingRank: 10000, closingRank: 22000, year: 2024 },
    ],
    courses: [
      { name: "B.Tech Computer Science & Engineering", durationYears: 4, totalSeats: 120, annualFee: 155000, avgPackage: 25.4 },
      { name: "B.Tech Electronics & Communication", durationYears: 4, totalSeats: 120, annualFee: 155000, avgPackage: 20.1 },
      { name: "B.Tech Electrical & Electronics", durationYears: 4, totalSeats: 110, annualFee: 155000, avgPackage: 17.5 }
    ],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/c/cc/NIT_Trichy_Logo.png",
    coverImageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&q=80"
    ],
    highlights: [
      "Consistently ranked #1 among all 31 NITs in NIRF Rankings.",
      "800-acre sprawling green campus with advanced supercomputing facility.",
      "High core engineering placement rate with PSU recruitment."
    ],
    aboutText: "NIT Tiruchirappalli is a public technical university located in Tamil Nadu. Founded in 1964 as Regional Engineering College Tiruchirappalli, it is recognized as an Institute of National Importance.",
    facultyCount: 380,
    studentCount: 6500
  },
  {
    id: "col-vit-vellore",
    slug: "vit-vellore",
    name: "Vellore Institute of Technology",
    shortName: "VIT Vellore",
    location: {
      city: "Vellore",
      state: "Tamil Nadu",
      campusAreaAcres: 372,
    },
    establishedYear: 1984,
    ownership: "PRIVATE",
    nirfRank: 11,
    naacGrade: "A++",
    overallRating: 4.4,
    popularStreams: ["Engineering", "Management", "Design"],
    averagePackageLpa: 9.2,
    highestPackageLpa: 102.0,
    medianPackageLpa: 8.0,
    placementPercentage: 88.5,
    topRecruiters: ["Microsoft", "Cognizant", "TCS", "Infosys", "Wipro", "Bank of America", "Deloitte"],
    yearlyPlacements: [
      { year: 2024, highestPackageLpa: 102.0, avgPackageLpa: 9.2, medianPackageLpa: 8.0, placementPercentage: 88.5, studentsPlaced: 7200 },
      { year: 2023, highestPackageLpa: 100.0, avgPackageLpa: 8.8, medianPackageLpa: 7.5, placementPercentage: 90.0, studentsPlaced: 6900 },
      { year: 2022, highestPackageLpa: 75.0, avgPackageLpa: 8.1, medianPackageLpa: 7.0, placementPercentage: 87.0, studentsPlaced: 6400 },
    ],
    feePerYearMin: 198000,
    feePerYearMax: 495000,
    feeStructure: {
      tuitionFeePerYear: 198000, // Category 1
      hostelFeePerYear: 90000,
      oneTimeCautionDeposit: 10000,
      otherAcademicCharges: 12000,
      scholarshipCriteria: [
        "GV School Development Programme (GVSDP): 100% fee waiver for State/Central Board Toppers.",
        "STARS Scheme: 100% fee waiver + free hostel for rural Tamil Nadu toppers."
      ]
    },
    cutoffs: [
      { exam: "JEE_MAIN", category: "OPEN", branch: "CSE (VITEEE Rank < 7,000)", openingRank: 1000, closingRank: 25000, year: 2024 },
      { exam: "JEE_MAIN", category: "OPEN", branch: "ECE (VITEEE Rank < 18,000)", openingRank: 7000, closingRank: 45000, year: 2024 },
    ],
    courses: [
      { name: "B.Tech Computer Science & Engineering", durationYears: 4, totalSeats: 1800, annualFee: 198000, avgPackage: 12.8 },
      { name: "B.Tech Electronics & Communication", durationYears: 4, totalSeats: 1200, annualFee: 198000, avgPackage: 9.5 },
      { name: "B.Tech Mechanical Engineering", durationYears: 4, totalSeats: 600, annualFee: 176000, avgPackage: 7.2 }
    ],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/c/c5/VIT_University_seal.svg",
    coverImageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
    ],
    highlights: [
      "Recognized as an Institute of Eminence by the Ministry of Education.",
      "Limca Book of Records for maximum campus placements by IT conglomerates.",
      "Fully Flexible Credit System (FFCS) allowing custom timetable building."
    ],
    aboutText: "Vellore Institute of Technology (VIT) is a private research university located in Katpadi, Vellore, Tamil Nadu. Established in 1984, it offers 64 undergraduate and 35 postgraduate programs.",
    facultyCount: 1650,
    studentCount: 35000
  },
  {
    id: "col-dtu-delhi",
    slug: "dtu-delhi",
    name: "Delhi Technological University",
    shortName: "DTU Delhi",
    location: {
      city: "New Delhi",
      state: "Delhi",
      campusAreaAcres: 164,
    },
    establishedYear: 1941,
    ownership: "PUBLIC",
    nirfRank: 29,
    naacGrade: "A",
    overallRating: 4.5,
    popularStreams: ["Engineering", "Management"],
    averagePackageLpa: 15.4,
    highestPackageLpa: 82.0,
    medianPackageLpa: 13.0,
    placementPercentage: 89.0,
    topRecruiters: ["Google", "Amazon", "Adobe", "Paytm", "Uber", "Qualcomm", "Sprite"],
    yearlyPlacements: [
      { year: 2024, highestPackageLpa: 82.0, avgPackageLpa: 15.4, medianPackageLpa: 13.0, placementPercentage: 89.0, studentsPlaced: 1850 },
      { year: 2023, highestPackageLpa: 70.0, avgPackageLpa: 14.8, medianPackageLpa: 12.5, placementPercentage: 91.0, studentsPlaced: 1820 },
      { year: 2022, highestPackageLpa: 64.0, avgPackageLpa: 13.5, medianPackageLpa: 11.5, placementPercentage: 88.0, studentsPlaced: 1750 },
    ],
    feePerYearMin: 219000,
    feePerYearMax: 230000,
    feeStructure: {
      tuitionFeePerYear: 180000,
      hostelFeePerYear: 39000,
      oneTimeCautionDeposit: 10000,
      otherAcademicCharges: 6000,
      scholarshipCriteria: [
        "Delhi State Government Merit-cum-Means Financial Assistance Scheme.",
        "Fee concession for Delhi Region students from low-income families."
      ]
    },
    cutoffs: [
      { exam: "JEE_MAIN", category: "OPEN", branch: "Computer Engineering (Delhi Region)", openingRank: 1500, closingRank: 11200, year: 2024 },
      { exam: "JEE_MAIN", category: "OPEN", branch: "Computer Engineering (Outside Delhi)", openingRank: 800, closingRank: 4200, year: 2024 },
      { exam: "JEE_MAIN", category: "OBC_NCL", branch: "Computer Engineering", openingRank: 12000, closingRank: 38000, year: 2024 },
      { exam: "JEE_MAIN", category: "OPEN", branch: "Software Engineering", openingRank: 4000, closingRank: 15500, year: 2024 },
    ],
    courses: [
      { name: "B.Tech Computer Engineering", durationYears: 4, totalSeats: 360, annualFee: 219000, avgPackage: 22.8 },
      { name: "B.Tech Software Engineering", durationYears: 4, totalSeats: 180, annualFee: 219000, avgPackage: 21.0 },
      { name: "B.Tech Information Technology", durationYears: 4, totalSeats: 180, annualFee: 219000, avgPackage: 20.5 }
    ],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/b/b5/DTU%2C_Delhi_official_logo.png",
    coverImageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&q=80"
    ],
    highlights: [
      "Formerly Delhi College of Engineering (DCE), established in 1941.",
      "85% quota reserved for Delhi region candidates via JAC Delhi.",
      "Vibrant entrepreneurial culture with DCE-DTU Alumni startup network."
    ],
    aboutText: "Delhi Technological University (DTU), formerly known as Delhi College of Engineering, is a premier state university located in Rohini, New Delhi.",
    facultyCount: 420,
    studentCount: 11500
  },
  {
    id: "col-iim-ahmedabad",
    slug: "iim-ahmedabad",
    name: "Indian Institute of Management Ahmedabad",
    shortName: "IIM Ahmedabad",
    location: {
      city: "Ahmedabad",
      state: "Gujarat",
      campusAreaAcres: 106,
    },
    establishedYear: 1961,
    ownership: "PUBLIC",
    nirfRank: 1,
    naacGrade: "A++",
    overallRating: 4.9,
    popularStreams: ["Management"],
    averagePackageLpa: 34.3,
    highestPackageLpa: 115.0,
    medianPackageLpa: 31.5,
    placementPercentage: 100.0,
    topRecruiters: ["McKinsey & Co", "Boston Consulting Group", "Bain", "Goldman Sachs", "Morgan Stanley", "HUL", "Tata Sons"],
    yearlyPlacements: [
      { year: 2024, highestPackageLpa: 115.0, avgPackageLpa: 34.3, medianPackageLpa: 31.5, placementPercentage: 100.0, studentsPlaced: 390 },
      { year: 2023, highestPackageLpa: 108.0, avgPackageLpa: 32.8, medianPackageLpa: 30.0, placementPercentage: 100.0, studentsPlaced: 385 },
      { year: 2022, highestPackageLpa: 95.0, avgPackageLpa: 30.1, medianPackageLpa: 28.2, placementPercentage: 100.0, studentsPlaced: 380 },
    ],
    feePerYearMin: 1250000,
    feePerYearMax: 1300000,
    feeStructure: {
      tuitionFeePerYear: 1200000,
      hostelFeePerYear: 50000,
      oneTimeCautionDeposit: 25000,
      otherAcademicCharges: 25000,
      scholarshipCriteria: [
        "Need-based Special Scholarship Scheme (NBSS) covering up to 100% fees.",
        "Scholarships sponsored by Aditya Birla, OP Jindal, and Alumni trusts."
      ]
    },
    cutoffs: [
      { exam: "CAT", category: "OPEN", branch: "MBA / PGP (Percentile 99.6+)", openingRank: 1, closingRank: 500, year: 2024 },
      { exam: "CAT", category: "OBC_NCL", branch: "MBA / PGP (Percentile 96+)", openingRank: 501, closingRank: 2500, year: 2024 },
      { exam: "CAT", category: "SC", branch: "MBA / PGP (Percentile 90+)", openingRank: 2501, closingRank: 6000, year: 2024 },
    ],
    courses: [
      { name: "Post Graduate Programme in Management (MBA)", durationYears: 2, totalSeats: 400, annualFee: 1250000, avgPackage: 34.3 },
      { name: "PGP in Food & Agribusiness Management (FABM)", durationYears: 2, totalSeats: 50, annualFee: 1100000, avgPackage: 24.5 }
    ],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/b/b3/IIM_Ahmedabad_Logo.svg",
    coverImageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
    ],
    highlights: [
      "Consistently ranked #1 MBA institute in India (NIRF & Financial Times).",
      "Louis Kahn heritage campus with world-famous brick arches architecture.",
      "100% placement track record with top global management consulting firms."
    ],
    aboutText: "Indian Institute of Management Ahmedabad (IIMA) is an autonomous business school located in Ahmedabad, Gujarat. Established in 1961, it is recognized as a center of global academic excellence in management.",
    facultyCount: 110,
    studentCount: 1100
  },
  {
    id: "col-aiims-delhi",
    slug: "aiims-delhi",
    name: "All India Institute of Medical Sciences New Delhi",
    shortName: "AIIMS Delhi",
    location: {
      city: "New Delhi",
      state: "Delhi",
      campusAreaAcres: 115,
    },
    establishedYear: 1956,
    ownership: "PUBLIC",
    nirfRank: 1,
    naacGrade: "A++",
    overallRating: 5.0,
    popularStreams: ["Medical"],
    averagePackageLpa: 18.0,
    highestPackageLpa: 35.0,
    medianPackageLpa: 16.5,
    placementPercentage: 98.0,
    topRecruiters: ["Apollo Hospitals", "Fortis Healthcare", "Max Healthcare", "Medanta", "NHS UK", "Mayo Clinic"],
    yearlyPlacements: [
      { year: 2024, highestPackageLpa: 35.0, avgPackageLpa: 18.0, medianPackageLpa: 16.5, placementPercentage: 98.0, studentsPlaced: 120 },
      { year: 2023, highestPackageLpa: 32.0, avgPackageLpa: 17.2, medianPackageLpa: 15.8, placementPercentage: 98.0, studentsPlaced: 118 },
      { year: 2022, highestPackageLpa: 30.0, avgPackageLpa: 16.0, medianPackageLpa: 15.0, placementPercentage: 97.0, studentsPlaced: 115 },
    ],
    feePerYearMin: 1628,
    feePerYearMax: 2000,
    feeStructure: {
      tuitionFeePerYear: 1350,
      hostelFeePerYear: 278,
      oneTimeCautionDeposit: 100,
      otherAcademicCharges: 100,
      scholarshipCriteria: [
        "Highly subsidized government education (Nominal token fee).",
        "Stipend of ₹30,000/month during mandatory internship year."
      ]
    },
    cutoffs: [
      { exam: "NEET", category: "OPEN", branch: "MBBS", openingRank: 1, closingRank: 57, year: 2024 },
      { exam: "NEET", category: "OBC_NCL", branch: "MBBS", openingRank: 58, closingRank: 240, year: 2024 },
      { exam: "NEET", category: "SC", branch: "MBBS", openingRank: 200, closingRank: 1200, year: 2024 },
      { exam: "NEET", category: "ST", branch: "MBBS", openingRank: 500, closingRank: 2800, year: 2024 },
    ],
    courses: [
      { name: "MBBS (Bachelor of Medicine & Bachelor of Surgery)", durationYears: 5.5, totalSeats: 132, annualFee: 1628, avgPackage: 18.0 },
      { name: "B.Sc (Hons) Nursing", durationYears: 4, totalSeats: 96, annualFee: 1500, avgPackage: 9.5 }
    ],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/b/b5/All_India_Institute_of_Medical_Sciences%2C_New_Delhi_logo.png",
    coverImageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
    ],
    highlights: [
      "Ranked #1 Medical Institute in India consistently in NIRF.",
      "Pinnacle healthcare research center handling over 3.5 million OPD patients annually.",
      "Virtually free medical education with full monthly internship stipend."
    ],
    aboutText: "AIIMS New Delhi is an autonomous public medical university and hospital based in New Delhi. Established in 1956 under an Act of Parliament, it is the most coveted medical college in South Asia.",
    facultyCount: 850,
    studentCount: 4200
  },
  {
    id: "col-iiit-hyderabad",
    slug: "iiit-hyderabad",
    name: "International Institute of Information Technology Hyderabad",
    shortName: "IIIT Hyderabad",
    location: {
      city: "Hyderabad",
      state: "Telangana",
      campusAreaAcres: 66,
    },
    establishedYear: 1998,
    ownership: "PRIVATE",
    nirfRank: 55,
    naacGrade: "A++",
    overallRating: 4.8,
    popularStreams: ["Engineering"],
    averagePackageLpa: 30.2,
    highestPackageLpa: 102.0,
    medianPackageLpa: 27.5,
    placementPercentage: 99.0,
    topRecruiters: ["Google", "Facebook", "Apple", "Uber", "Salesforce", "Bloomreach", "Rubrik"],
    yearlyPlacements: [
      { year: 2024, highestPackageLpa: 102.0, avgPackageLpa: 30.2, medianPackageLpa: 27.5, placementPercentage: 99.0, studentsPlaced: 360 },
      { year: 2023, highestPackageLpa: 85.0, avgPackageLpa: 28.5, medianPackageLpa: 25.0, placementPercentage: 100.0, studentsPlaced: 350 },
      { year: 2022, highestPackageLpa: 74.0, avgPackageLpa: 26.0, medianPackageLpa: 23.5, placementPercentage: 98.5, studentsPlaced: 340 },
    ],
    feePerYearMin: 360000,
    feePerYearMax: 400000,
    feeStructure: {
      tuitionFeePerYear: 360000,
      hostelFeePerYear: 36000,
      oneTimeCautionDeposit: 10000,
      otherAcademicCharges: 5000,
      scholarshipCriteria: [
        "ISBF Financial Assistance: Need-based loan assistance covering 100% tuition.",
        "Special Dual Degree scholarships for research publishing students."
      ]
    },
    cutoffs: [
      { exam: "JEE_MAIN", category: "OPEN", branch: "CSE (JEE Main Rank)", openingRank: 200, closingRank: 1680, year: 2024 },
      { exam: "JEE_MAIN", category: "OPEN", branch: "ECE (JEE Main Rank)", openingRank: 1700, closingRank: 4300, year: 2024 },
    ],
    courses: [
      { name: "B.Tech Computer Science & Engineering", durationYears: 4, totalSeats: 150, annualFee: 360000, avgPackage: 32.2 },
      { name: "B.Tech Electronics & Communication", durationYears: 4, totalSeats: 90, annualFee: 360000, avgPackage: 27.1 },
      { name: "Dual Degree B.Tech + M.S. in CSE", durationYears: 5, totalSeats: 60, annualFee: 360000, avgPackage: 31.0 }
    ],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/e/e1/IIIT_Hyderabad_Logo.png",
    coverImageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
    ],
    highlights: [
      "India's top research-led computer science institute.",
      "Highest placement package average (₹30.2 LPA) among all private universities.",
      "Renowned coding culture with consistent ICPC World Finals representation."
    ],
    aboutText: "IIIT Hyderabad is an autonomous research university founded in 1998 under a Public-Private Partnership model. It is celebrated for computer vision, AI, and algorithmic software engineering.",
    facultyCount: 120,
    studentCount: 2100
  }
];

export const STUDENT_REVIEWS_MOCK = [
  {
    id: "rev-1",
    authorName: "Aarav Sharma",
    batchYear: 2024,
    course: "B.Tech Computer Science",
    ratingOverall: 5,
    ratingFaculty: 5,
    ratingPlacements: 5,
    ratingInfrastructure: 4,
    ratingCampusLife: 5,
    title: "Unmatched coding culture & peer learning group",
    comment: "The competitive coding culture here is unparalleled. Professors are highly active in research, and the tech fest Mood Indigo is unbelievable. Placements for CSE are basically 100% if you put in decent effort.",
    verifiedStudent: true,
    date: "May 2024"
  },
  {
    id: "rev-2",
    authorName: "Priya Nair",
    batchYear: 2023,
    course: "B.Tech Electrical Engineering",
    ratingOverall: 4.5,
    ratingFaculty: 4.5,
    ratingPlacements: 4.8,
    ratingInfrastructure: 4.0,
    ratingCampusLife: 4.5,
    title: "Rigorous academics but immense ROI",
    comment: "Academics can feel quite intense during midterms, but the industry respect for the college degree makes every sleepless night completely worth it.",
    verifiedStudent: true,
    date: "December 2023"
  }
];
