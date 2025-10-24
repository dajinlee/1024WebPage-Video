export interface TeamMember {
  role: string;
  name: string;
  portfolio: string;
}

export interface ExhibitionRecord {
  name: string;
  date: string;
  location: string;
  address: string;
  imageUrl: string;
}

export const project = {
  mainTitle: "RE:PERSONA",
  subTitle: "Energy's Form, My Trace",
};

export const projectIntro = {
  catchyPhrase: "When music flows and you move,\nYour energy fills the space.",
  title: "RE:PERSONA: Energy's Form, My Trace",
  description: [
    "'RE:PERSONA' is a one-person immersive experience that detects the visitor's movement and thermal energy in real-time, expanding into your own light and image in the LED space before your eyes.",
    "The experience begins with cosmic prism images, and the screen soon transforms into a unique artistic portrait by accepting your gestures, body temperature, and rhythm. Technology is not just a simple production, but a device that visually proves your invisible energy.",
    "The wonder of 'Is this what my energy looks like?' remains as an experience that makes you look at yourself in a new way, beyond simple interest.",
  ],
  experienceInfo: {
    title: "Experience Information",
    details: [
      "One-person experience",
      "Duration: About 2 minutes 30 seconds",
      "Participation: On-site participation",
      "Space composition: Screen / Real-time visualization",
    ],
  },
  qrSection: {
    title: "What image did your energy leave?",
    description: "After the experience, we provide your own RE:PERSONA video.",
  },
};

export const teamIntro = {
  title: "Our TEAM",
  description:
    "Team Dopamine is a creator group that awakens people's senses through artistic stimulation and releases positive energy from within. The dopamine we speak of is not just simple pleasure, but a creative driving force that moves body and mind. Each of us has expertise in planning, technology, design, and art, and we implement this driving force as immersive experiential art. Our goal is simple. 'Not to understand art with the head, but to feel and enjoy it with the whole body and mind.' RE:PERSONA is the first experiment to realize that philosophy.",
  membersTitle: "crews",
  contact: "teamdopamine.info@gmail.com",
  members: [
    { role: "Project Director", name: "CHOI YURI", portfolio: "#" },
    { role: "Technical Director", name: "LEE DAJIN", portfolio: "#" },
    { role: "Technical Artist", name: "AHN KWANGMIN", portfolio: "#" },
    { role: "Art Director", name: "KIM MURIM", portfolio: "#" },
  ] as TeamMember[],
};

export const exhibitions = {
  title: "EXHIBITION",
  records: [
    {
      name: "<The Oulim>",
      date: "25.10.23 - 25.10.24",
      location: "SJ Kunsthalle",
      address: "5, Eonju-ro 148-gil, Gangnam-gu, Seoul",
      imageUrl: "/images/3-oulim.png",
    },
    {
      name: "<Kal, Kal, Kal>",
      date: "25.08.27 - 25.09.02",
      location: "Space 458",
      address: "37, Donggyo-ro 17-gil, Mapo-gu, Seoul",
      imageUrl: "/images/2-kal.png",
    },
    {
      name: "<2025 NCA Long-term Course 2nd Showcase>",
      date: "25.08.21-25.08.22",
      location: "Contents Talent Campus and Contents Culture Plaza",
      address: "66, Hoegi-ro, Dongdaemun-gu, Seoul",
      imageUrl: "/images/1-nca.jpg",
    },
  ] as ExhibitionRecord[],
};
