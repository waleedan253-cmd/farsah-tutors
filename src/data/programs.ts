import type { Program } from "@/types";

export const programs: Program[] = [
  {
    id: "mathematics",
    title: "Mathematics",
    category: "Mathematics",
    level: "All Levels",
    duration: "Flexible",
    description:
      "Structured support in mathematics, from foundational arithmetic to advanced problem-solving.",
    image: "/math.png",
    learningOutcomes: [
      "Build confidence with core mathematical concepts",
      "Strengthen problem-solving and reasoning skills",
      "Prepare for coursework and exams with guided practice",
    ],
  },
  {
    id: "english",
    title: "English",
    category: "English",
    level: "All Levels",
    duration: "Flexible",
    description:
      "Reading, writing, and communication support tailored to each student's level.",
    image: "/english.png",
    learningOutcomes: [
      "Improve reading comprehension and vocabulary",
      "Develop clear, structured writing",
      "Build confidence in verbal and written communication",
    ],
  },
  {
    id: "science",
    title: "Science",
    category: "Science",
    level: "All Levels",
    duration: "Flexible",
    description:
      "Guidance across core science subjects with an emphasis on understanding concepts, not memorizing.",
    image: "/science.png",
    learningOutcomes: [
      "Understand core scientific principles",
      "Apply concepts through guided examples",
      "Build a foundation for advanced coursework",
    ],
  },
  {
    id: "chemistry",
    title: "Chemistry",
    category: "Chemistry",
    level: "All Levels",
    duration: "Flexible",
    description:
      "Focused support in chemistry, covering core concepts from basic reactions to advanced problem-solving.",
    image: "/chemistry.png",
    learningOutcomes: [
      "Understand atomic structure and chemical bonding",
      "Master chemical equations and reactions",
      "Build lab and problem-solving skills for coursework",
    ],
  },
  {
    id: "physics",
    title: "Physics",
    category: "Physics",
    level: "All Levels",
    duration: "Flexible",
    description:
      "Guided support in physics, building intuition for mechanics, energy, and beyond.",
    image: "/physics.png",
    learningOutcomes: [
      "Grasp core principles of mechanics and energy",
      "Apply mathematical reasoning to physical problems",
      "Prepare confidently for physics coursework and exams",
    ],
  },
  {
    id: "computer-science",
    title: "Computer Science",
    category: "Computer Science",
    level: "All Levels",
    duration: "Flexible",
    description:
      "Support in programming fundamentals, computational thinking, and coursework preparation.",
    image: "/computer.png",
    learningOutcomes: [
      "Learn programming fundamentals and logic",
      "Practice computational and analytical thinking",
      "Prepare for computer science coursework",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    category: "Languages",
    level: "All Levels",
    duration: "Flexible",
    description:
      "Language learning support designed around real communication and steady progress.",
    image: "/languages.png",
    learningOutcomes: [
      "Build practical speaking and listening skills",
      "Strengthen grammar and vocabulary",
      "Gain confidence in everyday communication",
    ],
  },
  {
    id: "urdu",
    title: "Urdu",
    category: "Languages",
    level: "All Levels",
    duration: "Flexible",
    description:
      "Reading, writing, and comprehension support in Urdu for students at every level.",
    image: "/urdu.png",
    learningOutcomes: [
      "Improve Urdu reading and comprehension",
      "Strengthen grammar and written expression",
      "Build confidence in spoken and written Urdu",
    ],
  },
  {
    id: "quran",
    title: "Quran",
    category: "Islamic Studies",
    level: "All Levels",
    duration: "Flexible",
    description:
      "Guided Quran learning covering Nazra, Tajweed, and understanding of meanings.",
    image: "/alquran.png",
    learningOutcomes: [
      "Improve Quran recitation with correct Tajweed",
      "Build consistency in daily Quran reading",
      "Develop understanding of verses and their meanings",
    ],
  },
  {
    id: "test-preparation",
    title: "Test Preparation",
    category: "Test Preparation",
    level: "All Levels",
    duration: "Flexible",
    description:
      "Focused preparation to help students approach exams with strategy and confidence.",
    image: "/test.png",
    learningOutcomes: [
      "Understand exam structure and expectations",
      "Practice with guided, targeted exercises",
      "Build confidence and reduce exam-day stress",
    ],
  },
  {
    id: "academic-support",
    title: "Academic Support",
    category: "Academic Support",
    level: "All Levels",
    duration: "Flexible",
    description:
      "General academic support for students who need consistent, well-rounded guidance.",
    image: "/support.png",
    learningOutcomes: [
      "Stay on track with ongoing coursework",
      "Develop stronger study habits",
      "Get support across multiple subjects",
    ],
  },
  {
    id: "professional-skills",
    title: "Professional Skills",
    category: "Professional Skills",
    level: "Advanced",
    duration: "Flexible",
    description:
      "Practical skill-building for learners preparing for professional or academic transitions.",
    image: "/professoinal.png",
    learningOutcomes: [
      "Develop applicable, real-world skills",
      "Build confidence for interviews and coursework",
      "Receive guidance suited to individual goals",
    ],
  },
];

export const programCategories: string[] = [
  "All",
  ...Array.from(new Set(programs.map((program) => program.category))),
];

export const programLevels: string[] = [
  "All",
  ...Array.from(new Set(programs.map((program) => program.level))),
];
