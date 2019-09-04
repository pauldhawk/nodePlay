module.exports = {
  "1": {
    "id": 1,
    "name": "Consumer Experience",
    "benchmark": {
      "score_mean": 1.55,
      "score_percent": 52,
      "sample_size": 0
    },
    "children": [2, 18, 53],
    "parent_id": null,
    "parents": [],
    "scoring": {
      "score_mean": 1.19,
      "score_percent": 40,
      "sample_size": 16
    },
    "type": "module",
    "description": null
  },
  "2": {
    "id": 2,
    "name": "Acquisition & Growth",
    "benchmark": {
      "score_mean": 1.53,
      "score_percent": 51,
      "sample_size": 0
    },
    "children": [3, 8, 13],
    "parent_id": 1,
    "parents": [1],
    "scoring": {
      "score_mean": 1,
      "score_percent": 33,
      "sample_size": 4
    },
    "type": "module",
    "description": null
  },
  "3": {
    "id": 3,
    "name": "Discovery & Navigation",
    "benchmark": {
      "score_mean": 1.54,
      "score_percent": 51,
      "sample_size": 0
    },
    "children": [4, 5, 6, 7],
    "parent_id": 2,
    "parents": [2, 1],
    "scoring": {
      "score_mean": 1,
      "score_percent": 33,
      "sample_size": 1
    },
    "type": "module",
    "description": null
  },
  "4": {
    "id": 4,
    "name": "Provider Search",
    "benchmark": {
      "score_mean": 1.54,
      "score_percent": 51
    },
    "parent_id": 3,
    "parents": [3, 2, 1],
    "score": 1,
    "topic_id": 72,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/72",
    "type": "question"
  },
  "5": {
    "id": 5,
    "name": "Provider Directory",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 3,
    "parents": [3, 2, 1],
    "score": null,
    "topic_id": 1392,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1392",
    "type": "question"
  },
  "6": {
    "id": 6,
    "name": "Listings Management",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 3,
    "parents": [3, 2, 1],
    "score": null,
    "topic_id": 1393,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1393",
    "type": "question"
  },
  "7": {
    "id": 7,
    "name": "Self-Service Triage",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 3,
    "parents": [3, 2, 1],
    "score": null,
    "topic_id": 367,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/367",
    "type": "question"
  },
  "8": {
    "id": 8,
    "name": "Search & Transparency",
    "benchmark": {
      "score_mean": 1.53,
      "score_percent": 51,
      "sample_size": 0
    },
    "children": [9, 10, 11, 12],
    "parent_id": 2,
    "parents": [2, 1],
    "scoring": {
      "score_mean": 1,
      "score_percent": 33,
      "sample_size": 2
    },
    "type": "module",
    "description": null
  },
  "9": {
    "id": 9,
    "name": "Price Transparency",
    "benchmark": {
      "score_mean": 1.56,
      "score_percent": 52
    },
    "parent_id": 8,
    "parents": [8, 2, 1],
    "score": 0,
    "topic_id": 360,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/360",
    "type": "question"
  },
  "10": {
    "id": 10,
    "name": "Availability Transparency",
    "benchmark": {
      "score_mean": 1.5,
      "score_percent": 50
    },
    "parent_id": 8,
    "parents": [8, 2, 1],
    "score": 2,
    "topic_id": 1394,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1394",
    "type": "question"
  },
  "11": {
    "id": 11,
    "name": "Quality Transparency",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 8,
    "parents": [8, 2, 1],
    "score": null,
    "topic_id": 361,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/361",
    "type": "question"
  },
  "12": {
    "id": 12,
    "name": "Ratings & Reviews Transparency",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 8,
    "parents": [8, 2, 1],
    "score": null,
    "topic_id": 362,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/362",
    "type": "question"
  },
  "13": {
    "id": 13,
    "name": "Scheduling",
    "benchmark": {
      "score_mean": 1.5,
      "score_percent": 50,
      "sample_size": 0
    },
    "children": [14, 15, 16, 17],
    "parent_id": 2,
    "parents": [2, 1],
    "scoring": {
      "score_mean": 1,
      "score_percent": 33,
      "sample_size": 1
    },
    "type": "module",
    "description": null
  },
  "14": {
    "id": 14,
    "name": "Health System-driven Scheduling",
    "benchmark": {
      "score_mean": 1.5,
      "score_percent": 50
    },
    "parent_id": 13,
    "parents": [13, 2, 1],
    "score": 1,
    "topic_id": 1395,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1395",
    "type": "question"
  },
  "15": {
    "id": 15,
    "name": "Appointment Backfilling",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 13,
    "parents": [13, 2, 1],
    "score": null,
    "topic_id": 486,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/486",
    "type": "question"
  },
  "16": {
    "id": 16,
    "name": "Outbound Referral Scheduling",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 13,
    "parents": [13, 2, 1],
    "score": null,
    "topic_id": 1397,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1397",
    "type": "question"
  },
  "17": {
    "id": 17,
    "name": "Consumer-driven Scheduling",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 13,
    "parents": [13, 2, 1],
    "score": null,
    "topic_id": 103,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/103",
    "type": "question"
  },
  "18": {
    "id": 18,
    "name": "Experience & Engagement",
    "benchmark": {
      "score_mean": 1.56,
      "score_percent": 52,
      "sample_size": 0
    },
    "children": [19, 29, 41, 48],
    "parent_id": 1,
    "parents": [1],
    "scoring": {
      "score_mean": 1.25,
      "score_percent": 42,
      "sample_size": 12
    },
    "type": "module",
    "description": null
  },
  "19": {
    "id": 19,
    "name": "Seamless Encounter",
    "benchmark": {
      "score_mean": 1.51,
      "score_percent": 50,
      "sample_size": 0
    },
    "children": [20, 21, 22, 23, 24, 25, 26, 27, 28],
    "parent_id": 18,
    "parents": [18, 1],
    "scoring": {
      "score_mean": 0.5,
      "score_percent": 17,
      "sample_size": 2
    },
    "type": "module",
    "description": null
  },
  "20": {
    "id": 20,
    "name": "Clinical Prep",
    "benchmark": {
      "score_mean": 1.59,
      "score_percent": 53
    },
    "parent_id": 19,
    "parents": [19, 18, 1],
    "score": 0,
    "topic_id": 1417,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1417",
    "type": "question"
  },
  "21": {
    "id": 21,
    "name": "Wait Time Planning",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 19,
    "parents": [19, 18, 1],
    "score": null,
    "topic_id": 487,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/487",
    "type": "question"
  },
  "22": {
    "id": 22,
    "name": "Patient Intake",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 19,
    "parents": [19, 18, 1],
    "score": null,
    "topic_id": 131,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/131",
    "type": "question"
  },
  "23": {
    "id": 23,
    "name": "Interpretation Services",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 19,
    "parents": [19, 18, 1],
    "score": null,
    "topic_id": 244,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/244",
    "type": "question"
  },
  "24": {
    "id": 24,
    "name": "Post-Encounter Planning",
    "benchmark": {
      "score_mean": 1.43,
      "score_percent": 48
    },
    "parent_id": 19,
    "parents": [19, 18, 1],
    "score": 1,
    "topic_id": 1453,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1453",
    "type": "question"
  },
  "25": {
    "id": 25,
    "name": "Non-Emergent Medical Transportation",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 19,
    "parents": [19, 18, 1],
    "score": null,
    "topic_id": 368,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/368",
    "type": "question"
  },
  "26": {
    "id": 26,
    "name": "Wayfinding",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 19,
    "parents": [19, 18, 1],
    "score": null,
    "topic_id": 127,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/127",
    "type": "question"
  },
  "27": {
    "id": 27,
    "name": "Low-acuity Care Navigation",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 19,
    "parents": [19, 18, 1],
    "score": null,
    "topic_id": 1414,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1414",
    "type": "question"
  },
  "28": {
    "id": 28,
    "name": "Complex Care Navigation",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 19,
    "parents": [19, 18, 1],
    "score": null,
    "topic_id": 213,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/213",
    "type": "question"
  },
  "29": {
    "id": 29,
    "name": "Remote & Personalized Care",
    "benchmark": {
      "score_mean": 1.52,
      "score_percent": 51,
      "sample_size": 0
    },
    "children": [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    "parent_id": 18,
    "parents": [18, 1],
    "scoring": {
      "score_mean": 1.25,
      "score_percent": 42,
      "sample_size": 4
    },
    "type": "module",
    "description": null
  },
  "30": {
    "id": 30,
    "name": "Scheduled Remote Care",
    "benchmark": {
      "score_mean": 1.05,
      "score_percent": 35
    },
    "parent_id": 29,
    "parents": [29, 18, 1],
    "score": 1,
    "topic_id": 165,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/165",
    "type": "question"
  },
  "31": {
    "id": 31,
    "name": "Unscheduled Remote Care - Asynchronous",
    "benchmark": {
      "score_mean": 1.65,
      "score_percent": 55
    },
    "parent_id": 29,
    "parents": [29, 18, 1],
    "score": 3,
    "topic_id": 370,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/370",
    "type": "question"
  },
  "32": {
    "id": 32,
    "name": "Low-acuity Patient Monitoring",
    "benchmark": {
      "score_mean": 1.73,
      "score_percent": 58
    },
    "parent_id": 29,
    "parents": [29, 18, 1],
    "score": 0,
    "topic_id": 1399,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1399",
    "type": "question"
  },
  "33": {
    "id": 33,
    "name": "High Acuity Patient Monitoring",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 29,
    "parents": [29, 18, 1],
    "score": null,
    "topic_id": 1400,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1400",
    "type": "question"
  },
  "34": {
    "id": 34,
    "name": "Retail-Based Self-Service Care",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 29,
    "parents": [29, 18, 1],
    "score": null,
    "topic_id": 97,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/97",
    "type": "question"
  },
  "35": {
    "id": 35,
    "name": "Managing Health at Home",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 29,
    "parents": [29, 18, 1],
    "score": null,
    "topic_id": 1401,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1401",
    "type": "question"
  },
  "36": {
    "id": 36,
    "name": "On-demand Concierge Care",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 29,
    "parents": [29, 18, 1],
    "score": null,
    "topic_id": 185,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/185",
    "type": "question"
  },
  "37": {
    "id": 37,
    "name": "On-Demand Care",
    "benchmark": {
      "score_mean": 1.66,
      "score_percent": 55
    },
    "parent_id": 29,
    "parents": [29, 18, 1],
    "score": 1,
    "topic_id": 108,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/108",
    "type": "question"
  },
  "38": {
    "id": 38,
    "name": "Care Plan Management",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 29,
    "parents": [29, 18, 1],
    "score": null,
    "topic_id": 46,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/46",
    "type": "question"
  },
  "39": {
    "id": 39,
    "name": "Medication Initiation and Adherence Management",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 29,
    "parents": [29, 18, 1],
    "score": null,
    "topic_id": 166,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/166",
    "type": "question"
  },
  "40": {
    "id": 40,
    "name": "Integrated Digital Experience",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 29,
    "parents": [29, 18, 1],
    "score": null,
    "topic_id": 1415,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1415",
    "type": "question"
  },
  "41": {
    "id": 41,
    "name": "Education & Communication",
    "benchmark": {
      "score_mean": 1.61,
      "score_percent": 54,
      "sample_size": 0
    },
    "children": [42, 43, 44, 45, 46, 47],
    "parent_id": 18,
    "parents": [18, 1],
    "scoring": {
      "score_mean": 1.5,
      "score_percent": 50,
      "sample_size": 6
    },
    "type": "module",
    "description": null
  },
  "42": {
    "id": 42,
    "name": "Pre-Visit Education",
    "benchmark": {
      "score_mean": 1.73,
      "score_percent": 58
    },
    "parent_id": 41,
    "parents": [41, 18, 1],
    "score": 0,
    "topic_id": 1449,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1449",
    "type": "question"
  },
  "43": {
    "id": 43,
    "name": "Point-of-Care Education",
    "benchmark": {
      "score_mean": 1.75,
      "score_percent": 58
    },
    "parent_id": 41,
    "parents": [41, 18, 1],
    "score": 3,
    "topic_id": 1357,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1357",
    "type": "question"
  },
  "44": {
    "id": 44,
    "name": "Post-Visit Education",
    "benchmark": {
      "score_mean": 1.68,
      "score_percent": 56
    },
    "parent_id": 41,
    "parents": [41, 18, 1],
    "score": 0,
    "topic_id": 1451,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1451",
    "type": "question"
  },
  "45": {
    "id": 45,
    "name": "Clinical Communication ",
    "benchmark": {
      "score_mean": 1.3,
      "score_percent": 43
    },
    "parent_id": 41,
    "parents": [41, 18, 1],
    "score": 1,
    "topic_id": 1611,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1611",
    "type": "question"
  },
  "46": {
    "id": 46,
    "name": "Bi-Directional Administrative Communication",
    "benchmark": {
      "score_mean": 1.61,
      "score_percent": 54
    },
    "parent_id": 41,
    "parents": [41, 18, 1],
    "score": 3,
    "topic_id": 243,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/243",
    "type": "question"
  },
  "47": {
    "id": 47,
    "name": "Second Opinions",
    "benchmark": {
      "score_mean": 1.57,
      "score_percent": 52
    },
    "parent_id": 41,
    "parents": [41, 18, 1],
    "score": 2,
    "topic_id": 120,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/120",
    "type": "question"
  },
  "48": {
    "id": 48,
    "name": "Billing & Payment",
    "benchmark": {
      "score_mean": 1.58,
      "score_percent": 53,
      "sample_size": 0
    },
    "children": [49, 50, 51, 52],
    "parent_id": 18,
    "parents": [18, 1],
    "scoring": {
      "score_mean": 1.25,
      "score_percent": 42,
      "sample_size": 4
    },
    "type": "module",
    "description": null
  },
  "49": {
    "id": 49,
    "name": "Patient Cost Estimation",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 48,
    "parents": [48, 18, 1],
    "score": null,
    "topic_id": 77,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/77",
    "type": "question"
  },
  "50": {
    "id": 50,
    "name": "Patient Financing",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 48,
    "parents": [48, 18, 1],
    "score": null,
    "topic_id": 395,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/395",
    "type": "question"
  },
  "51": {
    "id": 51,
    "name": "Bill Consolidation",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 48,
    "parents": [48, 18, 1],
    "score": null,
    "topic_id": 1422,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1422",
    "type": "question"
  },
  "52": {
    "id": 52,
    "name": "Patient Payment",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 48,
    "parents": [48, 18, 1],
    "score": null,
    "topic_id": 1423,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1423",
    "type": "question"
  },
  "53": {
    "id": 53,
    "name": "Enduring Relationships",
    "benchmark": {
      "score_mean": 1.53,
      "score_percent": 51,
      "sample_size": 0
    },
    "children": [54, 59, 63, 72],
    "parent_id": 1,
    "parents": [1],
    "scoring": {
      "score_mean": 1.42,
      "score_percent": 47,
      "sample_size": 24
    },
    "type": "module",
    "description": null
  },
  "54": {
    "id": 54,
    "name": "Life Phase Specific Care",
    "benchmark": {
      "score_mean": 1.64,
      "score_percent": 55,
      "sample_size": 0
    },
    "children": [55, 56, 57, 58],
    "parent_id": 53,
    "parents": [53, 1],
    "scoring": {
      "score_mean": 1.5,
      "score_percent": 50,
      "sample_size": 4
    },
    "type": "module",
    "description": null
  },
  "55": {
    "id": 55,
    "name": "Maternity Care",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 54,
    "parents": [54, 53, 1],
    "score": null,
    "topic_id": 71,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/71",
    "type": "question"
  },
  "56": {
    "id": 56,
    "name": "Pediatrics",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 54,
    "parents": [54, 53, 1],
    "score": null,
    "topic_id": 31,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/31",
    "type": "question"
  },
  "57": {
    "id": 57,
    "name": "Aging in Place",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 54,
    "parents": [54, 53, 1],
    "score": null,
    "topic_id": 98,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/98",
    "type": "question"
  },
  "58": {
    "id": 58,
    "name": "Caregiver Engagement",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 54,
    "parents": [54, 53, 1],
    "score": null,
    "topic_id": 155,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/155",
    "type": "question"
  },
  "59": {
    "id": 59,
    "name": "Service Excellence",
    "benchmark": {
      "score_mean": 1.56,
      "score_percent": 52,
      "sample_size": 0
    },
    "children": [60, 61, 62],
    "parent_id": 53,
    "parents": [53, 1],
    "scoring": {
      "score_mean": 1.67,
      "score_percent": 56,
      "sample_size": 3
    },
    "type": "module",
    "description": null
  },
  "60": {
    "id": 60,
    "name": "Real-time Service Recovery",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 59,
    "parents": [59, 53, 1],
    "score": null,
    "topic_id": 1427,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1427",
    "type": "question"
  },
  "61": {
    "id": 61,
    "name": "Customer Service",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 59,
    "parents": [59, 53, 1],
    "score": null,
    "topic_id": 1429,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1429",
    "type": "question"
  },
  "62": {
    "id": 62,
    "name": "Discovery & Navigation",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 59,
    "parents": [59, 53, 1],
    "score": null,
    "topic_id": 479,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/479",
    "type": "question"
  },
  "63": {
    "id": 63,
    "name": "Consumer Insights",
    "benchmark": {
      "score_mean": 1.39,
      "score_percent": 46,
      "sample_size": 0
    },
    "children": [64, 65, 66, 67, 68, 69, 70, 71],
    "parent_id": 53,
    "parents": [53, 1],
    "scoring": {
      "score_mean": 1.13,
      "score_percent": 38,
      "sample_size": 8
    },
    "type": "module",
    "description": null
  },
  "64": {
    "id": 64,
    "name": "Customer Relationship Management (CRM)",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 63,
    "parents": [63, 53, 1],
    "score": null,
    "topic_id": 374,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/374",
    "type": "question"
  },
  "65": {
    "id": 65,
    "name": "Social Listening",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 63,
    "parents": [63, 53, 1],
    "score": null,
    "topic_id": 1385,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1385",
    "type": "question"
  },
  "66": {
    "id": 66,
    "name": "Loyalty Building",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 63,
    "parents": [63, 53, 1],
    "score": null,
    "topic_id": 1386,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1386",
    "type": "question"
  },
  "67": {
    "id": 67,
    "name": "Consumer Analytics",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 63,
    "parents": [63, 53, 1],
    "score": null,
    "topic_id": 1432,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1432",
    "type": "question"
  },
  "68": {
    "id": 68,
    "name": "Ratings & Reviews Transparency",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 63,
    "parents": [63, 53, 1],
    "score": null,
    "topic_id": 362,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/362",
    "type": "question"
  },
  "69": {
    "id": 69,
    "name": "Biometrics Screening",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 63,
    "parents": [63, 53, 1],
    "score": null,
    "topic_id": 1438,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1438",
    "type": "question"
  },
  "70": {
    "id": 70,
    "name": "Quantified Self",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 63,
    "parents": [63, 53, 1],
    "score": null,
    "topic_id": 1439,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1439",
    "type": "question"
  },
  "71": {
    "id": 71,
    "name": "Personal Health Records (PHR)",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 63,
    "parents": [63, 53, 1],
    "score": null,
    "topic_id": 498,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/498",
    "type": "question"
  },
  "72": {
    "id": 72,
    "name": "Personalized Wellness",
    "benchmark": {
      "score_mean": 1.61,
      "score_percent": 54,
      "sample_size": 0
    },
    "children": [73, 74, 75, 76, 77, 78, 79, 80, 81],
    "parent_id": 53,
    "parents": [53, 1],
    "scoring": {
      "score_mean": 1.56,
      "score_percent": 52,
      "sample_size": 9
    },
    "type": "module",
    "description": null
  },
  "73": {
    "id": 73,
    "name": "Alternative Medicine",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 72,
    "parents": [72, 53, 1],
    "score": null,
    "topic_id": 1389,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1389",
    "type": "question"
  },
  "74": {
    "id": 74,
    "name": "Health Coaching",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 72,
    "parents": [72, 53, 1],
    "score": null,
    "topic_id": 1435,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1435",
    "type": "question"
  },
  "75": {
    "id": 75,
    "name": "Restorative Medicine",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 72,
    "parents": [72, 53, 1],
    "score": null,
    "topic_id": 1437,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1437",
    "type": "question"
  },
  "76": {
    "id": 76,
    "name": "Sleep Management",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 72,
    "parents": [72, 53, 1],
    "score": null,
    "topic_id": 1434,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1434",
    "type": "question"
  },
  "77": {
    "id": 77,
    "name": "Nutrition Management",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 72,
    "parents": [72, 53, 1],
    "score": null,
    "topic_id": 1433,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1433",
    "type": "question"
  },
  "78": {
    "id": 78,
    "name": "Fitness & Weight Management",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 72,
    "parents": [72, 53, 1],
    "score": null,
    "topic_id": 1387,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1387",
    "type": "question"
  },
  "79": {
    "id": 79,
    "name": "Emotional Wellness Management",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 72,
    "parents": [72, 53, 1],
    "score": null,
    "topic_id": 1388,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1388",
    "type": "question"
  },
  "80": {
    "id": 80,
    "name": "Cosmetic Medicine",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 72,
    "parents": [72, 53, 1],
    "score": null,
    "topic_id": 1436,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1436",
    "type": "question"
  },
  "81": {
    "id": 81,
    "name": "Personalized Wellness",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 72,
    "parents": [72, 53, 1],
    "score": null,
    "topic_id": 141,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/141",
    "type": "question"
  },
  "82": {
    "id": 82,
    "name": "Digital Front Door",
    "benchmark": {
      "score_mean": 1.6,
      "score_percent": 53,
      "sample_size": 0
    },
    "children": [83, 84, 85, 86, 87, 88, 89, 90],
    "parent_id": null,
    "parents": [],
    "scoring": {
      "score_mean": 2,
      "score_percent": 67,
      "sample_size": 2
    },
    "type": "module",
    "description": "As health systems compete for the commercial consumer against new entrants and big tech that are increasingly entering the marketplace, there is a heightened need to deliver a convenient route for a person who is searching online for care to schedule and access same day care. Key use cases center around consumers searching for symptoms, searching for symptoms online, trying to make an appointment online, and wanting to access same day or virtual care. In order to address this collective set of use cases health systems need modern, convenient interactive capabilities (e.g. voice, web, mobile, chat) as well as an integrated set of transaction-ready capabilities - a Digital Front Door. To compete, protect their market share, build deeper patient engagement and loyalty to drive growth, health systems must turn their focus on creating an integrated, transaction-ready experience across eight capabilities that comprise their digital front door"
  },
  "83": {
    "id": 83,
    "name": "Provider Search",
    "benchmark": {
      "score_mean": 1.54,
      "score_percent": 51
    },
    "parent_id": 82,
    "parents": [82],
    "score": 1,
    "topic_id": 72,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/72",
    "type": "question"
  },
  "84": {
    "id": 84,
    "name": "Provider Directory",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 82,
    "parents": [82],
    "score": null,
    "topic_id": 1392,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1392",
    "type": "question"
  },
  "85": {
    "id": 85,
    "name": "Consumer-driven Scheduling",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 82,
    "parents": [82],
    "score": null,
    "topic_id": 103,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/103",
    "type": "question"
  },
  "86": {
    "id": 86,
    "name": "Ratings & Reviews Transparency",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 82,
    "parents": [82],
    "score": null,
    "topic_id": 362,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/362",
    "type": "question"
  },
  "87": {
    "id": 87,
    "name": "Self-Service Triage",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 82,
    "parents": [82],
    "score": null,
    "topic_id": 367,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/367",
    "type": "question"
  },
  "88": {
    "id": 88,
    "name": "Low-acuity Care Navigation",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 82,
    "parents": [82],
    "score": null,
    "topic_id": 1414,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1414",
    "type": "question"
  },
  "89": {
    "id": 89,
    "name": "Unscheduled Remote Care - Asynchronous",
    "benchmark": {
      "score_mean": 1.65,
      "score_percent": 55
    },
    "parent_id": 82,
    "parents": [82],
    "score": 3,
    "topic_id": 370,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/370",
    "type": "question"
  },
  "90": {
    "id": 90,
    "name": "Unscheduled Remote Care - Synchronous",
    "benchmark": {
      "score_mean": null,
      "score_percent": null
    },
    "parent_id": 82,
    "parents": [82],
    "score": null,
    "topic_id": 1798,
    "owner_id": null,
    "url": "/pulse/hs/2866/question/1798",
    "type": "question"
  }
};
