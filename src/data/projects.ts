export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
  slug?: string;
  eyebrow?: string;
  cover?: string;
  status?: string;
  role?: string;
  sections?: { title: string; text: string }[];
}

export const projects: Project[] = [
    {
      id: 10, slug: 'health-assistant', title: 'HEALTH Assistant',
      eyebrow: '01 / Applied AI', cover: 'Knowledge into practice.',
      description: 'At WashU’s DI2 Accelerator, I build RAG workflows for a Parents as Teachers HEALTH assistant, connecting curriculum materials with structured program data for home visitors.',
      tags: ['RAG', 'Python', 'PostgreSQL', 'Data Pipelines'],
      link: '/projects/health-assistant', status: 'Ongoing · DI2 Accelerator · May 2026–present',
      role: 'Machine Learning Developer Intern',
      sections: [
        { title: 'The problem', text: 'Home visitors need useful information from program materials and structured data. This work brings those sources together to support an AI assistant for the Parents as Teachers HEALTH program.' },
        { title: 'My contribution', text: 'I build retrieval workflows and Python pipelines that convert SAS datasets and load them into PostgreSQL. My work includes cleaning, analyzing, and integrating program data for retrieval and analysis.' },
        { title: 'Engineering focus', text: 'The project connects data engineering with an AI application: organizing source information so it can support useful answers. Development of the assistant and its supporting data workflows is ongoing.' }
      ]
    },
    {
      id: 11, slug: 'autonomous-submarine', title: 'Autonomous Submarine',
      eyebrow: '02 / Robotics', cover: 'From sensing to movement.',
      description: 'On WashU Robotics’ autonomous submarine team, I develop ROS nodes for onboard sensor data and work on integrating a Jetson Nano with the submarine’s propulsion system.',
      tags: ['ROS', 'Jetson Nano', 'Sensors', 'Control Systems'],
      link: '/projects/autonomous-submarine', status: 'Ongoing · WashU Robotics',
      role: 'Software Engineer · Sensor integration',
      sections: [
        { title: 'The system', text: 'Our team is developing an autonomous underwater vehicle. Its software has to connect measurements from the physical environment with the submarine’s control and propulsion systems.' },
        { title: 'My contribution', text: 'I develop ROS nodes that process onboard sensor data using an NVIDIA Jetson Nano. I collaborate with the team on integrating sensor inputs and thruster controls into the broader system.' },
        { title: 'What I’m exploring', text: 'This work connects my interests in embedded computing, control systems, and safe autonomy. I am especially interested in how unreliable sensor inputs affect decisions in a physical system. Sensor and control integration is ongoing.' }
      ]
    },
    {
      id: 12, slug: 'safe-reinforcement-learning', title: 'Safety in Reinforcement Learning',
      eyebrow: '03 / Ongoing study', cover: 'Learning to act safely.',
      description: 'An ongoing Deep Reinforcement Learning course project exploring safety for generalist robots, with an interest in uncertainty, safety filters, and embodied AI.',
      tags: ['Deep RL', 'Safe Autonomy', 'Embodied AI'],
      link: '/projects/safe-reinforcement-learning', status: 'In progress · Deep Reinforcement Learning course',
      role: 'Course project team member',
      sections: [
        { title: 'The question', text: 'How can a robot act safely when it encounters a situation its training did not prepare it for? That question motivates my interest in safe autonomous systems and embodied AI.' },
        { title: 'Current work', text: 'I am working with a three-person course team on safety in reinforcement learning for generalist robots. My current reading explores uncertainty quantification, safety filters, and evaluation of embodied systems.' },
        { title: 'Project status', text: 'The project is in the reading and exploration stage. I’m investigating how uncertainty and safety constraints can inform a robot’s decisions in unfamiliar situations.' }
      ]
    },
    {
      id: 13, slug: 'mini-cpu', title: 'Mini CPU on FPGA',
      eyebrow: '04 / Computer engineering', cover: 'Building from the bits up.',
      description: 'Built and tested a CPU in SystemVerilog, connecting an ALU, register file, program counter, instruction memory, and control unit.',
      tags: ['SystemVerilog', 'FPGA', 'Digital Logic'],
      link: '/projects/mini-cpu', status: 'Academic project', role: 'Implementation and testing',
      sections: [
        { title: 'The project', text: 'A CPU built from its core digital components: an arithmetic logic unit, register file, program counter, instruction memory, and control unit.' },
        { title: 'My contribution', text: 'I implemented and tested the CPU in SystemVerilog, connecting the datapath with the control logic. The project gave me hands-on experience translating computer architecture concepts into hardware description code.' }
      ]
    },

    {
      id: 1,
      title: 'Fitted: Virtual Fitting Room',
      description: 'A computer vision prototype for estimating body measurements and exploring virtual clothing try-ons. This project brings together my interests in AI, fashion technology, and the challenges of working with limited data.',
      image: '/images/VFR.jpeg',
      tags: ['AI', 'Computer Vision', 'React', 'Python', 'TensorFlow', '3D Modeling'],
      link: 'https://github.com/raneemousa3/Virtual-Fitting-room'
    },

    {

      id: 2,
      title: 'Yoink!',
      description: 'Co-founded a campus borrowing and rental marketplace, built and pitched an MVP, and won first place at the Skandalaris Hackathon in 2025.',
      image: '/images/Yoink.jpg',
      tags: ['Firebase', 'Flutter','Stripe Payments', 'Gamification', 'Sustainability'],
      link: 'https://yoink.green/',
    },
    {

      id: 3,
      title: 'Evra',
      description: 'Built a portfolio-first networking platform for creatives to showcase work, discover peers, and connect with recruiters.',
      image: '/images/evra.jpg',
      tags: [ 'Next.js', 'Typescript', 'Social Platform', 'google OAuth'],
      link: 'https://github.com/raneemousa3/LinkedIn-But-Cooler',
    },
    {

      id: 4,
      title: 'Escra',
      description:  'a team project where we built a Bitcoin-powered escrow system for freelancers, implementing secure payment using blockchain APIs.',
      image: '/images/escra.jpeg',
      tags: ['FastAPI', 'Bitcoin', 'Blockchain APIs'],
      link: 'https://github.com/jessaqt/Escra-Backend',
    },



    {
      id: 5,
      title: 'Route N Roam',
      description: 'A Java-powered, location-based recommendation engine that blends Tinder-style swiping with Yelp review data and a Pinterest-style feed—letting users discover local restaurants, activities, and self-care spots, save favorites to a wishlist, schedule visits, read reviews, and find and connect with others planning to go to the same place at the same time—all within one intuitive interface.',
      image: '/images/C.png',
      tags: ['Java', 'Location-Based', 'Recommendation', 'Swipe UI', 'Yelp API','MongoDB'],
      link: 'https://github.com/pefflerm/CS-335-Project'
    },
    {
      id: 6,
      title: 'ProfBotix: Math and Programming Tutor Chatbot',
      description: 'Flask web app for math and CS tutoring with step-by-step solutions, practice quizzes, OCR-based problem parsing, and OpenAI-powered contextual explanations.',
      image: '/images/STEMTutorBot.jpeg',
      tags: ['Web App', 'Flask', 'openai', 'Pillow','pytesseract'],
      link: 'https://github.com/raneemousa3/TutorBOTProfbotix'
    },
    {
      id: 7,
      title: 'Online Dresses Shopping Cart & Wishlist',
      description: 'A C++ console-based application simulating an online fashion boutique. Users can add dresses, skirts, tops, and accessories to a shopping cart or wishlist, adjust quantities, and view real-time total cost calculations. The implementation showcases robust object-oriented design—utilizing inheritance and polymorphism—and includes a custom linked-list for dynamic item management.',
      image: '/images/MM.png',
      tags: ['C++17', 'OOP', 'Linked List', 'Inheritance', 'Polymorphism'],
      link: 'https://github.com/raneemousa3/Online-Dresses-shop-Shopping-Cart-and-Wishlist'
    },
    {
      id: 8,
      title: 'Spotify Top Songs Analysis',
      description: 'A Streamlit-powered web app that taps into the Spotify API (via Spotipy) to pull in your most-played tracks and surface their audio features—danceability, energy, valence, and more—through interactive charts. Analyze your listening habits at a glance and get AI-driven song and artist recommendations tailored to your personal taste.',
      image: '/images/SpotifyPersonalRec.png',
      tags: ['Python', 'Spotipy', 'Streamlit', 'Pandas', 'API Integration'],
      link: 'https://github.com/raneemousa3/spotify-top-songs-analysis'
    },
    {
      id: 9,
      title: 'NdLinear vs nn.Linear Performance Comparison',
      description: 'Implemented a "NdLinear" layer to preserve multi-D input structure (text & video) and compared it with a conventional flatten+`nn.Linear` on AG News (text) and UCF-101 (video). Across both tasks—even when integrated with a frozen ResNet-18 backbone—NdLinear achieved lower validation loss and higher accuracy without adding parameters or slowing down training.',
      image: '/images/graphND.jpeg',
      tags: ['PyTorch',  'NDLinear', 'NLP', 'Computer Vision', 'Resnet18'],
      link: 'https://github.com/raneemousa3/ndlinear-vs-nnlinear'
    },





  ];
