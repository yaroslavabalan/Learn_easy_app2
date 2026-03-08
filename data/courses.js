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
        progress: 40,
        intro: 'Learn about the Earth’s major landmasses and bodies of water.',
        description: 'Earth is divided into seven large landmasses called continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia. Asia is the largest, while Australia is the smallest. Surrounding these continents are five major oceans: the Pacific, Atlantic, Indian, Southern, and Arctic Oceans. The Pacific Ocean is the largest and deepest of them all. Continents and oceans together form the physical foundation of our planet’s geography.',
        questions: [
          {
            text: 'There are seven continents and five oceans on Earth.',
            answer: true,
            type: 'true_false',
          },
          {
            text: 'Which of the following statements about oceans is correct?',
            answer: 'The Artic Ocean is the smallest ocean.',
            options: ['The Pacific Ocean is the smallest ocean.', 'The Atlantic Ocean is the coldest.', 'The Artic Ocean is the smallest ocean.', 'The Indian Ocean is the largest body of water.'],
            type: 'single_choice',
          },
          {
            text: 'Select all statements that apply to the Continent of Africa.',
            answer: ['It is located in the Northern Hemisphere.', 'It is located in the Southern Hemisphere.'],
            options: ['It is located in the Northern Hemisphere.', 'It is not located in the Eastern Hemisphere.', 'It is located in the Southern Hemisphere.', 'It is not located in the Western Hemisphere.'],
            type: 'multiple_choice',
          },
          {
            text: 'What continent does not have permanent population?',
            answer: 'Antarctica',
            type: 'free_text',
          },
        ],
      },
      {
        title: 'Countries and Capitals',
        progress: 0,
        intro: 'Explore the world’s nations and their capital cities.',
        description: 'Countries are defined political regions with their own governments, borders, and cultures. Each has a capital city, often the seat of power and administration. Capitals like Tokyo, London, and Cairo are not only political centers but also cultural hubs that shape national identity and global relations.',
        questions: [
          {
            text: 'Tokyo is the capital of South Korea.',
            answer: false,
            type: 'true_false',
          },
        ],
      },
      {
        title: 'Major World Landmarks',
        progress: 0,
        intro: 'Discover iconic landmarks that define countries and cultures.',
        description: 'Major world landmarks are symbols of historical, cultural, or architectural significance. They attract tourists and represent the identity of a place. Examples include the Great Wall of China, the Pyramids of Giza, the Eiffel Tower in France, and the Taj Mahal in India.',
        questions: [
          {
            text: 'The Eiffel Tower is located in Paris, France.',
            answer: true,
            type: 'true_false',
          },
        ],
      },
      {
        title: 'Climate Zones and Ecosystems',
        progress: 0,
        intro: 'Understand different climate zones and the ecosystems they support.',
        description: 'Earth is divided into climate zones such as tropical, temperate, and polar. These zones influence the types of ecosystems they support—from lush rainforests in tropical areas to deserts and tundra. Each ecosystem is a web of interacting life forms adapted to their specific environment.',
        questions: [
          {
            text: 'The tundra is known for its hot and humid climate.',
            answer: false,
            type: 'true_false',
          },
        ],
      },
      {
        title: 'Cartography',
        progress: 0,
        intro: 'Learn how maps are made and used to represent geography.',
        description: 'Cartography is the science and art of mapmaking. It involves designing visual representations of geographical information—such as terrain, borders, and data layers—using both traditional techniques and digital tools like GIS (Geographic Information Systems).',
        questions: [
          {
            text: 'Cartography is the study and practice of making maps.',
            answer: true,
            type: 'true_false',
          },
        ],
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
        progress: 30,
        intro: 'Examine causes and impacts of major international conflicts.',
        description: 'This module explores the root causes of global conflicts, including political, economic, and cultural tensions. You’ll also learn about the consequences of war on societies and economies, and how international efforts aim to resolve and prevent conflicts.',
        questions: [
          {
            text: 'Global conflicts never impact international trade.',
            answer: false,
            type: 'true_false',
          },
        ],
      },
      {
        title: 'International Organizations',
        progress: 0,
        intro: 'Explore the roles of global bodies like the UN and WHO.',
        description: 'Learn about key international organizations such as the United Nations (UN), the World Health Organization (WHO), and the International Monetary Fund (IMF). This module explains their roles in promoting peace, health, and economic stability around the world.',
        questions: [
          {
            text: 'The World Health Organization is part of the United Nations system.',
            answer: true,
            type: 'true_false',
          },
        ],
      },
      {
        title: 'Climate Change',
        progress: 0,
        intro: 'Understand the science and global impact of climate change.',
        description: 'Climate change is one of the most pressing global issues. This module explains the science behind global warming, the impact on ecosystems and human life, and the importance of international cooperation to reduce emissions and build a sustainable future.',
        questions: [
          {
            text: 'Climate change is mainly caused by increased greenhouse gases.',
            answer: true,
            type: 'true_false',
          },
        ],
      },
      {
        title: 'Global Health',
        progress: 0,
        intro: 'Learn how health issues are addressed around the world.',
        description: 'This module focuses on public health challenges such as pandemics, access to healthcare, and disease prevention. You’ll learn how global health efforts work to improve well-being worldwide through vaccinations, education, and emergency response.',
        questions: [
          {
            text: 'Vaccinations play no role in global health initiatives.',
            answer: false,
            type: 'true_false',
          },
        ],
      },
      {
        title: 'Migration & Refugees',
        progress: 0,
        intro: 'Study global migration patterns and humanitarian challenges.',
        description: 'Discover the reasons people migrate, including economic opportunity, war, and climate change. This module covers the challenges refugees face and how governments and organizations provide aid and work to protect human rights.',
        question: [
          {
            text: 'Refugees often leave their countries due to war or persecution.',
            answer: true,
            type: 'true_false',
          },
        ],
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
      questions: [
        {
          text: 'The ancient Egyptians built the Great Wall of China.',
          answer: false,
          type: 'true_false',
        },
      ],
    },
    {
      title: 'Middle Ages',
      progress: 0,
      intro: 'Learn about medieval times and the transformation of Europe.',
      description:
        'Explore the period between the fall of the Roman Empire and the beginning of the Renaissance. Topics include feudalism, the role of the Church, medieval warfare, and how cultural and economic shifts shaped the future of Europe.',
      questions: [
        {
          text: 'Feudalism was a dominant social system during the Middle Ages.',
          answer: true,
          type: 'true_false',
        },
      ],
    },
    {
      title: 'Colonial Period',
      progress: 0,
      intro: 'Understand the age of exploration and its global effects.',
      description:
        'This module examines the era when European powers explored and colonized large parts of the world. Learn about the motivations behind colonial expansion, its impact on indigenous peoples, and the long-term global consequences.',
      questions: [
        {
          text: 'The colonial period involved European countries establishing overseas empires.',
          answer: true,
          type: 'true_false',
        },
      ],
    },
    {
      title: 'Modern History',
      progress: 0,
      intro: 'Discover key events from the 18th century to the present.',
      description:
        'Trace the major developments from the Enlightenment through revolutions, industrialization, and global political shifts. This module highlights how science, technology, and ideologies shaped the modern world.',
      questions: [
        {
          text: 'The Industrial Revolution began in the 21st century.',
          answer: false,
          type: 'true_false',
        },
      ],
    },
    {
      title: 'World Wars',
      progress: 25,
      intro: 'Study the causes and consequences of the two World Wars.',
      description:
        'Dive into the causes, major events, and aftermath of World War I and World War II. Understand how these conflicts reshaped global politics, economies, and societies in the 20th century.',
      questions: [
        {
          text: 'World War II ended in 1945.',
          answer: true,
          type: 'true_false',
        },
      ],
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
      questions: [
        {
          text: 'The circulatory system transports oxygen and nutrients through the body.',
          answer: true,
          type: 'true_false',
        },
      ],
    },
    {
      title: 'Nutrition and Diet',
      progress: 0,
      intro: 'Learn the basics of healthy eating and balanced nutrition.',
      description:
        'Discover the essential nutrients required for the body to function properly, how to balance macronutrients and micronutrients, and the effects of poor dietary choices on overall health.',
      questions: [
        {
          text: 'A diet high in processed sugar is considered very healthy.',
          answer: false,
          type: 'true_false',
        },
      ],
    },
    {
      title: 'Diseases and Prevention',
      progress: 0,
      intro: 'Understand common diseases and how to prevent them.',
      description:
        'Examine various communicable and non-communicable diseases, their causes, symptoms, and effective prevention strategies including hygiene, vaccinations, and lifestyle choices.',
      questions: [
        {
          text: 'Washing hands regularly helps prevent the spread of disease.',
          answer: true,
          type: 'true_false',
        },
      ],
    },
    {
      title: 'Mental Health',
      progress: 0,
      intro: 'Explore emotional well-being and mental health awareness.',
      description:
        'Focus on the importance of mental health, recognizing common mental illnesses, and ways to support emotional well-being through self-care, therapy, and social support.',
      questions: [
        {
          text: 'Mental health only refers to the absence of mental illness.',
          answer: false,
          type: 'true_false',
        },
      ],
    },
    {
      title: 'Fitness & Hygiene',
      progress: 0,
      intro: 'Discover the importance of exercise and personal cleanliness.',
      description:
        'Learn how regular physical activity improves cardiovascular health, strength, and mood, alongside the role of hygiene practices in preventing illness and promoting a healthy lifestyle.',
      questions: [
        {
          text: 'Regular exercise contributes to both physical and mental well-being.',
          answer: true,
          type: 'true_false',
        },
      ],
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
      progress: 80,
      intro: 'Understand how electricity powers modern technology.',
      description:
        'This module explains the basics of electricity, how it is generated and stored, and how it powers the devices we use daily, from smartphones to household appliances.',
      questions: [
        {
          text: 'Batteries store and provide electrical energy to devices.',
          answer: true,
          type: 'true_false',
        },
      ],
    },
    {
      title: 'Forces in Action',
      progress: 0,
      intro: 'Learn how forces like gravity and friction affect motion.',
      description:
        'Explore fundamental forces such as gravity, friction, and magnetism, and understand their effects on the movement and interaction of objects in everyday life.',
      questions: [
        {
          text: 'Friction helps objects slide more easily on surfaces.',
          answer: false,
          type: 'true_false',
        },
      ],
    },
    {
      title: 'The Water Cycle',
      progress: 0,
      intro: 'Explore how water moves through Earth’s systems.',
      description:
        'Discover the stages of the water cycle, including evaporation, condensation, precipitation, and collection, and learn how these processes maintain Earth’s water balance.',
      questions: [
        {
          text: 'Evaporation is a part of the water cycle.',
          answer: true,
          type: 'true_false',
        },
      ],
    },
    {
      title: 'Simple Machines',
      progress: 0,
      intro: 'Discover tools like levers and pulleys that make work easier.',
      description:
        'Understand the different types of simple machines, such as levers, pulleys, and inclined planes, and how they reduce effort to perform tasks in everyday life.',
      questions: [
        {
          text: 'A pulley is an example of a simple machine.',
          answer: true,
          type: 'true_false',
        },
      ],
    },
    {
      title: 'Everyday Chemistry',
      progress: 100,
      intro: 'See how chemical reactions are part of daily life.',
      description:
        'Explore common chemical reactions encountered daily, such as rusting, cooking, and cleaning, and understand the role of chemistry in household and environmental processes.',
      questions: [
        {
          text: 'Rusting of iron is a chemical reaction.',
          answer: true,
          type: 'true_false',
        },
      ],
    },
  ],
},
{
  id: 6,
  title: 'Fundamentals of Mathematics',
  image: require('../assets/math.png'),
  description:
    'Build a strong foundation in mathematics by exploring numbers, operations, and basic problem-solving techniques essential for everyday math and advanced study.',
  modules: [
    {
      title: 'Number Systems',
      progress: 0,
      intro: 'Understand different types of numbers and how they relate to each other.',
      description: 'Numbers can be classified into natural numbers, whole numbers, integers, rational numbers, irrational numbers, and real numbers. Each set has unique properties and applications in math. Understanding these distinctions is key to mastering more complex mathematical concepts.',
      questions: [
        {
          text: 'Zero is a natural number.',
          answer: false,
          type: 'true_false',
        },
        {
          text: 'Which of these is an irrational number?',
          answer: '√2',
          options: ['1/2', '3', '√2', '0'],
          type: 'single_choice',
        },
        {
          text: 'Select all integers from the list below.',
          answer: ['-3', '0', '7'],
          options: ['-3', '2.5', '0', '7', '1/4'],
          type: 'multiple_choice',
        },
        {
          text: 'What type of number is 3.14159 (π approximate)?',
          answer: 'Irrational number',
          type: 'free_text',
        },
      ],
    },
    {
      title: 'Basic Arithmetic Operations',
      progress: 15,
      intro: 'Learn how to perform addition, subtraction, multiplication, and division.',
      description: 'Arithmetic operations are the building blocks of all math problems. Mastery of addition, subtraction, multiplication, and division helps solve everyday problems and prepares you for algebra and beyond.',
      questions: [
        {
          text: 'Multiplication is commutative.',
          answer: true,
          type: 'true_false',
        },
        {
          text: 'What is 15 divided by 3?',
          answer: '5',
          type: 'free_text',
        },
        {
          text: 'Select all expressions that equal 12.',
          answer: ['3 × 4', '24 ÷ 2', '6 + 6'],
          options: ['3 × 4', '24 ÷ 2', '6 + 6', '10 + 3'],
          type: 'multiple_choice',
        },
      ],
    },
    {
      title: 'Introduction to Algebra',
      progress: 0,
      intro: 'Explore variables, expressions, and simple equations.',
      description: 'Algebra introduces symbols (variables) to represent numbers and allows the formulation of equations and expressions. This module helps you understand how to manipulate these symbols and solve for unknowns.',
      questions: [
        {
          text: 'In the equation 2x + 3 = 7, x equals 2.',
          answer: true,
          type: 'true_false',
        },
        {
          text: 'Solve for x: 5x = 20',
          answer: '4',
          type: 'free_text',
        },
        {
          text: 'Which of these is a variable?',
          answer: 'x',
          options: ['5', 'x', '7', '10'],
          type: 'single_choice',
        },
      ],
    },
    {
      title: 'Geometry Basics',
      progress: 0,
      intro: 'Discover shapes, angles, and the properties of space.',
      description: 'Geometry deals with points, lines, surfaces, and solids. This module covers the basics of shapes such as triangles, circles, and polygons, along with concepts of perimeter, area, and volume.',
      questions: [
        {
          text: 'A triangle can have more than one right angle.',
          answer: false,
          type: 'true_false',
        },
        {
          text: 'What is the sum of the interior angles of a triangle?',
          answer: '180 degrees',
          type: 'free_text',
        },
        {
          text: 'Select all shapes that are polygons.',
          answer: ['Triangle', 'Rectangle', 'Circle'],
          options: ['Triangle', 'Rectangle', 'Circle', 'Ellipse'],
          type: 'multiple_choice',
        },
      ],
    },
    {
      title: 'Data and Probability',
      progress: 35,
      intro: 'Learn how to collect, analyze, and interpret data and understand basic probability.',
      description: 'Data involves collecting and organizing information. Probability measures the likelihood of events. This module covers how to read graphs, calculate averages, and understand chance in everyday contexts.',
      questions: [
        {
          text: 'Probability values range from 0 to 1.',
          answer: true,
          type: 'true_false',
        },
        {
          text: 'What is the mean of the numbers 3, 7, and 10?',
          answer: '6.67',
          type: 'free_text',
        },
        {
          text: 'Select all types of graphs.',
          answer: ['Bar graph', 'Pie chart', 'Histogram'],
          options: ['Bar graph', 'Pie chart', 'Histogram', 'Equation'],
          type: 'multiple_choice',
        },
      ],
    },
  ],
},
{
  id: 7,
  title: 'Languages',
  image: require('../assets/languages.png'),
  description:
    'Explore different languages around the world with modules covering basics, grammar, vocabulary, and conversation skills for English, Spanish, German, Japanese, Arabic, Persian, Chinese, Italian, French, and Russian.',
  modules: [
    {
      title: 'English',
      progress: 0,
      intro: 'Learn the basics of English grammar, vocabulary, and everyday conversation.',
      description:
        'English is a global language. This module covers essential grammar rules, useful vocabulary, pronunciation tips, and common phrases.',
      questions: [
        {
          text: 'The sentence "She is reading a book." is in present continuous tense.',
          answer: true,
          type: 'true_false',
        },
        {
          text: 'Choose the correct past tense of "write".',
          answer: 'wrote',
          options: ['written', 'writed', 'wrote', 'writing'],
          type: 'single_choice',
        },
      ],
    },
    {
      title: 'Spanish',
      progress: 0,
      intro: 'Introduction to Spanish grammar, vocabulary, and common phrases.',
      description:
        'Spanish is spoken by millions worldwide. This module introduces verbs, basic grammar, useful vocabulary, and conversational expressions.',
      questions: [
        {
          text: 'The sentence "Ella está cantando." is in present progressive tense.',
          answer: true,
          type: 'true_false',
        },
        {
          text: 'Select the correct Spanish translation for "apple".',
          answer: 'manzana',
          options: ['pera', 'naranja', 'manzana', 'plátano'],
          type: 'single_choice',
        },
      ],
    },
    {
      title: 'German',
      progress: 0,
      intro: 'Basic German grammar, vocabulary, and conversational skills.',
      description:
        'German is widely spoken in Europe. This module covers sentence structure, verb conjugations, essential vocabulary, and greetings.',
      questions: [
        {
          text: 'The German word "Haus" means "house" in English.',
          answer: true,
          type: 'true_false',
        },
        {
          text: 'Choose the correct German word for "book".',
          answer: 'Buch',
          options: ['Buch', 'Stuhl', 'Tisch', 'Fenster'],
          type: 'single_choice',
        },
      ],
    },
    {
      title: 'Japanese',
      progress: 0,
      intro: 'Learn basic Japanese phrases, grammar, and writing systems.',
      description:
        'Japanese uses unique scripts and has distinct grammar. This module introduces hiragana, simple phrases, and cultural tips.',
      questions: [
        {
          text: 'The Japanese writing system "Hiragana" consists of 46 basic characters.',
          answer: true,
          type: 'true_false',
        },
        {
          text: 'What is the Japanese word for "thank you"?',
          answer: 'arigatou',
          options: ['konnichiwa', 'arigatou', 'sayonara', 'ohayou'],
          type: 'single_choice',
        },
      ],
    },
    {
      title: 'Arabic',
      progress: 0,
      intro: 'Basics of Arabic alphabet, pronunciation, and everyday conversation.',
      description:
        'Arabic is a Semitic language with a unique script. This module teaches the alphabet, common greetings, and basic sentence structure.',
      questions: [
        {
          text: 'Arabic is written from right to left.',
          answer: true,
          type: 'true_false',
        },
        {
          text: 'Select the Arabic word for "peace".',
          answer: 'سلام',
          options: ['حب', 'سلام', 'نور', 'قلب'],
          type: 'single_choice',
        },
      ],
    },
    {
      title: 'Persian',
      progress: 0,
      intro: 'Learn the Persian alphabet, basic grammar, and common expressions.',
      description:
        'Persian (Farsi) is spoken in Iran and surrounding regions. This module covers its script, verbs, vocabulary, and daily conversation phrases.',
      questions: [
        {
          text: 'Persian is written from right to left.',
          answer: true,
          type: 'true_false',
        },
        {
          text: 'Select the Persian word for "book".',
          answer: 'کتاب',
          options: ['کتاب', 'مدرسه', 'خانه', 'دوست'],
          type: 'single_choice',
        },
      ],
    },
    {
      title: 'Chinese',
      progress: 0,
      intro: 'Introduction to Mandarin Chinese pronunciation, characters, and common phrases.',
      description:
        'Mandarin Chinese is the most spoken language in the world. This module covers pinyin, tones, basic characters, and simple conversations.',
      questions: [
        {
          text: 'Mandarin Chinese has four main tones.',
          answer: true,
          type: 'true_false',
        },
        {
          text: 'What is the Mandarin Chinese word for "hello"?',
          answer: 'nǐ hǎo',
          options: ['nǐ hǎo', 'zàijiàn', 'xièxie', 'qǐng'],
          type: 'single_choice',
        },
      ],
    },
    {
      title: 'Italian',
      progress: 0,
      intro: 'Basics of Italian grammar, vocabulary, and cultural phrases.',
      description:
        'Italian is known for its musicality and rich culture. This module introduces sentence structure, verbs, vocabulary, and greetings.',
      questions: [
        {
          text: 'The Italian word "ciao" means both "hello" and "goodbye".',
          answer: true,
          type: 'true_false',
        },
        {
          text: 'Choose the correct Italian word for "water".',
          answer: 'acqua',
          options: ['acqua', 'pane', 'vino', 'latte'],
          type: 'single_choice',
        },
      ],
    },
    {
      title: 'French',
      progress: 0,
      intro: 'Learn French grammar basics, vocabulary, and common conversational phrases.',
      description:
        'French is widely spoken in Europe and Africa. This module covers essential grammar, vocabulary, pronunciation, and polite expressions.',
      questions: [
        {
          text: 'The French word "merci" means "thank you".',
          answer: true,
          type: 'true_false',
        },
        {
          text: 'Select the French word for "book".',
          answer: 'livre',
          options: ['livre', 'stylo', 'chaise', 'porte'],
          type: 'single_choice',
        },
      ],
    },
    {
      title: 'Russian',
      progress: 40,
      intro: 'Basics of Russian alphabet (Cyrillic), grammar, and daily communication.',
      description:
        'Russian uses the Cyrillic alphabet and is spoken in Russia and neighboring countries. This module covers letters, common words, and simple sentences.',
      questions: [
        {
          text: 'The Russian alphabet is called Cyrillic.',
          answer: true,
          type: 'true_false',
        },
        {
          text: 'What is the Russian word for "hello"?',
          answer: 'привет',
          options: ['привет', 'пока', 'спасибо', 'да'],
          type: 'single_choice',
        },
      ],
    },
  ],
}
];
