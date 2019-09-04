const arr =        [
  "Provider Search",
  "Provider Directory",
  "Listings Management",
  "Self-Service Triage",
  "Price Transparency",
  "Availability Transparency",
  "Quality Transparency",
  "Ratings & Reviews Transparency",
  "Health System-driven Scheduling",
  "Appointment Backfilling",
  "Outbound Referral Scheduling",
  "Consumer-driven Scheduling",
  "Clinical Prep",
  "Wait Time Planning",
  "Patient Intake",
  "Interpretation Services",
  "Post-Encounter Planning",
  "Non-Emergent Medical Transportation",
  "Wayfinding",
  "Low-acuity Care Navigation",
  "Complex Care Navigation",
  "Scheduled Remote Care",
  "Unscheduled Remote Care - Asynchronous",
  "Low-acuity Patient Monitoring",
  "High Acuity Patient Monitoring",
  "Retail-Based Self-Service Care",
  "Managing Health at Home",
  "On-demand Concierge Care",
  "On-Demand Care",
  "Care Plan Management",
  "Medication Initiation and Adherence Management",
  "Integrated Digital Experience",
  "Pre-Visit Education",
  "Point-of-Care Education",
  "Post-Visit Education",
  "Clinical Communication ",
  "Bi-Directional Administrative Communication",
  "Second Opinions",
  "Patient Cost Estimation",
  "Patient Financing",
  "Bill Consolidation",
  "Patient Payment",
  "Provider Search"
];

const topic_list = arr
.filter((x, i) =>  i < 4 ) // only send them first 4;
.reduce((result, x) => `${result} <li>${x}</li>`, '')


const b = new Set();
b.add(44)
b.add(44)
console.log(b.size)
