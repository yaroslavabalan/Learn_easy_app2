// all of the courses, their modules, and their progress
export const courses = [
  {
    id: 1,
    title: 'World Geography',
    image: require('../assets/geography.png'),
    description:
      'Explore the diverse features of our planet, from continents to ecosystems, and learn how geography shapes cultures, economies, and daily life.',
    modules: [
      {
        title: 'Continents and Oceans',
        progress: 0,
        intro: 'Learn about the Earth’s major landmasses and bodies of water.',
        description: 'Earth is divided into seven large landmasses called continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia. Asia is the largest, while Australia is the smallest. Surrounding these continents are five major oceans: the Pacific, Atlantic, Indian, Southern, and Arctic Oceans. The Pacific Ocean is the largest and deepest of them all. Continents and oceans together form the physical foundation of our planet’s geography.',
        question: {
          text: 'There are seven continents and five oceans on Earth.',
          answer: true,
        },
      },
      {
        title: 'Countries and Capitals',
        progress: 0,
        intro: 'Explore the world’s nations and their capital cities.',
        description: 'Countries are defined political regions with their own governments, borders, and cultures. Each has a capital city, often the seat of power and administration. Capitals like Tokyo, London, and Cairo are not only political centers but also cultural hubs that shape national identity and global relations.',
        question: {
          text: 'Tokyo is the capital of South Korea.',
          answer: false,
        },
      },
      {
        title: 'Major World Landmarks',
        progress: 0,
        intro: 'Discover iconic landmarks that define countries and cultures.',
        description: 'Major world landmarks are symbols of historical, cultural, or architectural significance. They attract tourists and represent the identity of a place. Examples include the Great Wall of China, the Pyramids of Giza, the Eiffel Tower in France, and the Taj Mahal in India.',
        question: {
          text: 'The Eiffel Tower is located in Paris, France.',
          answer: true,
        },
      },
      {
        title: 'Climate Zones and Ecosystems',
        progress: 0,
        intro: 'Understand different climate zones and the ecosystems they support.',
        description: 'Earth is divided into climate zones such as tropical, temperate, and polar. These zones influence the types of ecosystems they support—from lush rainforests in tropical areas to deserts and tundra. Each ecosystem is a web of interacting life forms adapted to their specific environment.',
        question: {
          text: 'The tundra is known for its hot and humid climate.',
          answer: false,
        },
      },
      {
        title: 'Cartography',
        progress: 0,
        intro: 'Learn how maps are made and used to represent geography.',
        description: 'Cartography is the science and art of mapmaking. It involves designing visual representations of geographical information—such as terrain, borders, and data layers—using both traditional techniques and digital tools like GIS (Geographic Information Systems).',
        question: {
          text: 'Cartography is the study and practice of making maps.',
          answer: true,
        },
      },
    ],
  },
  {
    id: 2,
    title: 'Current Affairs and Global Issues',
    image: require('../assets/global.png'),
    description:
      'Understand major global challenges including health, migration, and environmental change, and how the world responds through organizations and diplomacy.',
    modules: [
      {
        title: 'Global Conflicts',
        progress: 0,
        intro: 'Examine causes and impacts of major international conflicts.',
        description: 'This module explores the root causes of global conflicts, including political, economic, and cultural tensions. You’ll also learn about the consequences of war on societies and economies, and how international efforts aim to resolve and prevent conflicts.',
        question: {
          text: 'Global conflicts never impact international trade.',
          answer: false,
        },
      },
      {
        title: 'International Organizations',
        progress: 0,
        intro: 'Explore the roles of global bodies like the UN and WHO.',
        description: 'Learn about key international organizations such as the United Nations (UN), the World Health Organization (WHO), and the International Monetary Fund (IMF). This module explains their roles in promoting peace, health, and economic stability around the world.',
        question: {
          text: 'The World Health Organization is part of the United Nations system.',
          answer: true,
        },
      },
      {
        title: 'Climate Change',
        progress: 0,
        intro: 'Understand the science and global impact of climate change.',
        description: 'Climate change is one of the most pressing global issues. This module explains the science behind global warming, the impact on ecosystems and human life, and the importance of international cooperation to reduce emissions and build a sustainable future.',
        question: {
          text: 'Climate change is mainly caused by increased greenhouse gases.',
          answer: true,
        },
      },
      {
        title: 'Global Health',
        progress: 0,
        intro: 'Learn how health issues are addressed around the world.',
        description: 'This module focuses on public health challenges such as pandemics, access to healthcare, and disease prevention. You’ll learn how global health efforts work to improve well-being worldwide through vaccinations, education, and emergency response.',
        question: {
          text: 'Vaccinations play no role in global health initiatives.',
          answer: false,
        },
      },
      {
        title: 'Migration & Refugees',
        progress: 0,
        intro: 'Study global migration patterns and humanitarian challenges.',
        description: 'Discover the reasons people migrate, including economic opportunity, war, and climate change. This module covers the challenges refugees face and how governments and organizations provide aid and work to protect human rights.',
        question: {
          text: 'Refugees often leave their countries due to war or persecution.',
          answer: true,
        },
      },
    ],
  },
  {
  id: 3,
  title: 'History and Civilisation',
  image: require('../assets/history.png'),
  description:
    'Dive into the human past, from ancient societies to modern history, and discover the events that shaped civilizations and global cultures.',
  modules: [
    {
      title: 'Ancient Civilisations',
      progress: 0,
      intro: 'Explore the rise and achievements of early human societies.',
      description:
        'Learn about the development of ancient civilizations such as Mesopotamia, Egypt, the Indus Valley, and China. This module covers their contributions in writing, architecture, governance, and trade, laying the foundation for modern societies.',
      question: {
        text: 'The ancient Egyptians built the Great Wall of China.',
        answer: false,
      },
    },
    {
      title: 'Middle Ages',
      progress: 0,
      intro: 'Learn about medieval times and the transformation of Europe.',
      description:
        'Explore the period between the fall of the Roman Empire and the beginning of the Renaissance. Topics include feudalism, the role of the Church, medieval warfare, and how cultural and economic shifts shaped the future of Europe.',
      question: {
        text: 'Feudalism was a dominant social system during the Middle Ages.',
        answer: true,
      },
    },
    {
      title: 'Colonial Period',
      progress: 0,
      intro: 'Understand the age of exploration and its global effects.',
      description:
        'This module examines the era when European powers explored and colonized large parts of the world. Learn about the motivations behind colonial expansion, its impact on indigenous peoples, and the long-term global consequences.',
      question: {
        text: 'The colonial period involved European countries establishing overseas empires.',
        answer: true,
      },
    },
    {
      title: 'Modern History',
      progress: 0,
      intro: 'Discover key events from the 18th century to the present.',
      description:
        'Trace the major developments from the Enlightenment through revolutions, industrialization, and global political shifts. This module highlights how science, technology, and ideologies shaped the modern world.',
      question: {
        text: 'The Industrial Revolution began in the 21st century.',
        answer: false,
      },
    },
    {
      title: 'World Wars',
      progress: 0,
      intro: 'Study the causes and consequences of the two World Wars.',
      description:
        'Dive into the causes, major events, and aftermath of World War I and World War II. Understand how these conflicts reshaped global politics, economies, and societies in the 20th century.',
      question: {
        text: 'World War II ended in 1945.',
        answer: true,
      },
    },
  ],
},
 {
  id: 4,
  title: 'Human Body & Health',
  image: require('../assets/health.png'),
  description:
    'Learn how the human body works, how to maintain health through good habits, and how diseases affect the body and mind.',
  modules: [
    {
      title: 'Body Systems Overview',
      progress: 0,
      intro: 'Explore the major systems that keep the body functioning.',
      description:
        'This module covers the key systems of the human body, including the circulatory, respiratory, digestive, nervous, and musculoskeletal systems. Understand how these systems work together to maintain life and health.',
      question: {
        text: 'The circulatory system transports oxygen and nutrients through the body.',
        answer: true,
      },
    },
    {
      title: 'Nutrition and Diet',
      progress: 0,
      intro: 'Learn the basics of healthy eating and balanced nutrition.',
      description:
        'Discover the essential nutrients required for the body to function properly, how to balance macronutrients and micronutrients, and the effects of poor dietary choices on overall health.',
      question: {
        text: 'A diet high in processed sugar is considered very healthy.',
        answer: false,
      },
    },
    {
      title: 'Diseases and Prevention',
      progress: 0,
      intro: 'Understand common diseases and how to prevent them.',
      description:
        'Examine various communicable and non-communicable diseases, their causes, symptoms, and effective prevention strategies including hygiene, vaccinations, and lifestyle choices.',
      question: {
        text: 'Washing hands regularly helps prevent the spread of disease.',
        answer: true,
      },
    },
    {
      title: 'Mental Health',
      progress: 0,
      intro: 'Explore emotional well-being and mental health awareness.',
      description:
        'Focus on the importance of mental health, recognizing common mental illnesses, and ways to support emotional well-being through self-care, therapy, and social support.',
      question: {
        text: 'Mental health only refers to the absence of mental illness.',
        answer: false,
      },
    },
    {
      title: 'Fitness & Hygiene',
      progress: 0,
      intro: 'Discover the importance of exercise and personal cleanliness.',
      description:
        'Learn how regular physical activity improves cardiovascular health, strength, and mood, alongside the role of hygiene practices in preventing illness and promoting a healthy lifestyle.',
      question: {
        text: 'Regular exercise contributes to both physical and mental well-being.',
        answer: true,
      },
    },
  ],
},
  {
  id: 5,
  title: 'Science in Everyday Life',
  image: require('../assets/science.png'),
  description:
    'See how science explains the everyday world—from electricity and weather to basic machines and the chemistry of daily life.',
  modules: [
    {
      title: 'Electricity and Gadgets',
      progress: 0,
      intro: 'Understand how electricity powers modern technology.',
      description:
        'This module explains the basics of electricity, how it is generated and stored, and how it powers the devices we use daily, from smartphones to household appliances.',
      question: {
        text: 'Batteries store and provide electrical energy to devices.',
        answer: true,
      },
    },
    {
      title: 'Forces in Action',
      progress: 0,
      intro: 'Learn how forces like gravity and friction affect motion.',
      description:
        'Explore fundamental forces such as gravity, friction, and magnetism, and understand their effects on the movement and interaction of objects in everyday life.',
      question: {
        text: 'Friction helps objects slide more easily on surfaces.',
        answer: false,
      },
    },
    {
      title: 'The Water Cycle',
      progress: 0,
      intro: 'Explore how water moves through Earth’s systems.',
      description:
        'Discover the stages of the water cycle, including evaporation, condensation, precipitation, and collection, and learn how these processes maintain Earth’s water balance.',
      question: {
        text: 'Evaporation is a part of the water cycle.',
        answer: true,
      },
    },
    {
      title: 'Simple Machines',
      progress: 0,
      intro: 'Discover tools like levers and pulleys that make work easier.',
      description:
        'Understand the different types of simple machines, such as levers, pulleys, and inclined planes, and how they reduce effort to perform tasks in everyday life.',
      question: {
        text: 'A pulley is an example of a simple machine.',
        answer: true,
      },
    },
    {
      title: 'Everyday Chemistry',
      progress: 0,
      intro: 'See how chemical reactions are part of daily life.',
      description:
        'Explore common chemical reactions encountered daily, such as rusting, cooking, and cleaning, and understand the role of chemistry in household and environmental processes.',
      question: {
        text: 'Rusting of iron is a chemical reaction.',
        answer: true,
      },
    },
  ],
}
];
