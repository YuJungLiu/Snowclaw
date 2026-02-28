export const projectsData = {
  game: {
    title: "Game Dev",
    sections: [
      {
        id: "section-mobile",
        label: "Game",
        quote: "Enjoy, and have fun !",
        isTwoCols: true,
        projects: [
          { 
            id: 'wando', 
            tag: 'Mobile Puzzle Game', 
            title: 'Wando', 
            img: '/assets/Wan_2.png', 
            fullWidth: true,
            details: {
              coverImg: '/assets/Wan_3.png', 
              subtitle: 'Mobile Puzzle Game',
              externalLink: 'https://apps.apple.com/us/app/wando/id6480163998',
              year: '2024',
              contribution: 'Game Direct (Game & Level, UIUX, Sound, Motion Design)',
              credits: '劉有容(Liu Yu-Jung), 白雅云(Pai Ya-Yun), 何政勳(Ho Cheng-Hsun)',
              videoUrl: 'https://www.youtube.com/embed/GD-1PSTsYtg?si=mGDYdKCr_URmwZvR', 
              description: `“Wando” is a therapeutic and artistic puzzle game. The game is themed around nature and ancient civilizations, and players can embark on adventure with protagonist "Kgoro" to experience various puzzles. 
              
              Using spells to transform plants and creating a path connecting the beginning and the endpoint. Through these actions, players can help Kgoro overcome challenges and continue his journey into the unknown.
              
              Honors |
              2024 AppStore Regional Featured     'Today' recommendation & Banner
              2023 Bahamut ACG Award     Merit
              2023 Vision Get Wild Award     Silver`, 
              screenshots: [
                // '/assets/portfolio/Wan_P_1.jpg',
                // '/assets/portfolio/Wan_P_2.jpg',
                // '/assets/portfolio/Wan_P_3.jpg',
                // '/assets/portfolio/Wan_P_4.jpg',
                // '/assets/portfolio/Wan_P_5.jpg',
                // '/assets/portfolio/Wan_P_6.jpg',
              ]
            }
          },
          // { id: 'tiny-criminals', tag: 'Adventure Parkour Game', title: 'Tiny Criminals', img: '/assets/Tiny_2.png', fullWidth: false,             
          //   details: {
          //     coverImg: '/assets/Tiny_3.png', 
          //     subtitle: 'Adventure Parkour Game (Aalto School Project)',
          //     externalLink: 'https://eelis-koivusaari.itch.io/tiny-criminals',
          //     year: '2025',
          //     contribution: 'Game & Level, UIUX, Sound, Motion Design',
          //     credits: '劉有容(Liu Yu-Jung), Eelis Koivusaari, Apurv Rayate, 胡宇宸(Hu Yuchen), Michelle Lauriste',
          //     videoUrl: 'https://www.youtube.com/embed/J8EVziidqNc?si=paqIBtP88I5PV5tm', 
          //     description: `Tiny Criminals is a multi-round survival game where you pull off heists to grab cash and upgrade your humble grandma's house into the ultimate criminal hideout. Plan smart, steal big, and turn each successful job into better gear, bigger rewards, and bolder crimes. Cute on the outside, chaotic at heart. 
              
          //     IT'S ROBBING TIME!`, 
          //     screenshots: [
          //       '/assets/portfolio/Tiny_P_1.jpg',
          //       '/assets/portfolio/Tiny_P_2.jpg',
          //       '/assets/portfolio/Tiny_P_3.jpg',
          //       '/assets/portfolio/Tiny_P_4.jpg',
          //       '/assets/portfolio/Tiny_P_5.jpg',
          //       '/assets/portfolio/Tiny_P_6.jpg',
          //     ]
          //   }
          // },
          { id: 'psyqualogy', tag: 'Desktop Pet', title: 'Psyqualogy', img: '/assets/Psy_2.png', fullWidth: true, isComingSoon: true },
        ]
      },
      // {
      //   id: "section-vr",
      //   label: "Virtual Reality",
      //   quote: "Think beyond, for the future of gaming.",
      //   isTwoCols: true,
      //   projects: [
      //     { id: 'spelland', tag: 'MR Vocabulary Learning Game', title: 'Spelland', img: '/assets/Spe_1.png', fullWidth: false,
      //       details: {
      //         coverImg: '/assets/Spe_3.png', 
      //         subtitle: 'MR Vocabulary Learning Game (NTUST Research Project)',
      //         externalLink: 'https://dl.acm.org/doi/10.1145/3544549.3583830',
      //         year: '2023',
      //         contribution: 'Interaction, Sound Design, PM, User Research',
      //         credits: '劉有容(Liu Yu-Jung), 徐加(Hsu Chia), 陳譽(Chen Yu), 張宇承(Zhang Yu-Cheng), 李旻叡(Lee Min-Jui)',
      //         videoUrl: 'https://www.youtube.com/embed/zcNmSv0TPzk?si=ZTDlLpE_gjHZTpk1', 
      //         description: `Spelland explores the use of mixed-reality (MR) technology to enable situated language learning using everyday objects in the environment around the learners. The learning method is based on Presentation, Practice, and Production (PPP), which cultivates the habit of independent learning through repetition, practice, and demonstration.

      //         We designed the learning experience and content tools using gestural UI, voice input, and object-to-word engine. Children in the preliminary user study found the game to be immersive, helpful in learning the spelling of the everyday objects and the target words, and additionally showed increased interests in learning about other nearby objects after playing the game.
              
      //         Honors |
      //         ACM CHI'23 Student Game Competition     Nominated
      //         2023 Meta XR Hub Taiwan Social Welfare Award     Best Application`, 
      //         screenshots: [
      //           '/assets/portfolio/Spe_P_1.jpg',
      //           '/assets/portfolio/Spe_P_2.jpg',
      //           '/assets/portfolio/Spe_P_3.jpg',
      //           '/assets/portfolio/Spe_P_4.jpg',
      //           '/assets/portfolio/Spe_P_5.jpg',
      //           '/assets/portfolio/Spe_P_6.jpg',
      //         ]
      //       }
      //     },
      //     { id: 'elden-vr', tag: 'VR Soulslike Combat Game', title: 'Elden VR', img: '/assets/Elden_1.png', fullWidth: false, isComingSoon: true },
      //   ]
      // },
      // {
      //   id: "section-experimental",
      //   label: "Experimental",
      //   quote: "Random happiness.",
      //   projects: [
      //     { id: 'no-signal', tag: 'Simulation Game', title: 'No Signal', img: '/assets/No_2.png', fullWidth: false,             details: {
      //         coverImg: '/assets/No_2.png', 
      //         subtitle: 'Simulation Strategy Game (Aalto School Project)',
      //         externalLink: 'https://moiraikai.itch.io/no-signal',
      //         year: '2024',
      //         contribution: 'Game, UIUX, Lighting Design, Sound Design & Engineering',
      //         credits: '劉有容(Liu Yu-Jung), Kettu Kautto, Sasha Usoskin, Kathleen Lindgren, Aura Koykka, Zoe Yanko',
      //         // videoUrl: 'https://www.youtube.com/embed/zcNmSv0TPzk?si=ZTDlLpE_gjHZTpk1', 
      //         description: `No Signal is a '90s-style strategy game where you monitor surveillance cameras to keep the ship orderly. Dispatch guards to handle incidents, but be careful—too much intervention disrupts the passengers, and a slow response can lead to chaos. Rumors of strange passenger behavior and a missing predecessor swirl, but you're a skeptic. Is it just rumors... or is there something more?`, 
      //         screenshots: [
      //           '/assets/portfolio/No_P_1.jpg',
      //           '/assets/portfolio/No_P_2.jpg',
      //           '/assets/portfolio/No_P_3.jpg',
      //           '/assets/portfolio/No_P_4.jpg',
      //         ]
      //       }
      //     },
      //     { id: 'popcorn-projection', tag: '2D Platformer Game', title: 'Popcorn Projection', img: '/assets/Pop_1.png', fullWidth: false,
      //       details: {
      //         coverImg: '/assets/Pop_2.png', 
      //         subtitle: '2D Platformer Game(TapTap Game Jam)',
      //         externalLink: 'https://huyuchen.itch.io/popcorn-projection',
      //         year: '2024',
      //         contribution: 'Game, UIUX, Sound, Motion Design',
      //         credits: '劉有容(Liu Yu-Jung), 韓淑榕(Han Shurong), 劉子涵(Liu Zihan), 毛一迪(Mao Yidi), 胡宇宸(Hu Yuchen)',
      //         videoUrl: 'https://www.youtube.com/embed/o6e05vVRalE?si=E4nyzN4vUpxhPK4h', 
      //         description: `Popcorn Projector is a fast-paced 2D platform shooter where players zap falling kernels with lightning to create a variety of popcorn flavors. As you fill the machine, you earn a movie ticket—because with richly flavored popcorn, you deserve an equally exciting movie! Adjust the machine, craft your perfect mix, and unlock your cinematic reward!`, 
      //         screenshots: [
      //         //   '/assets/portfolio/No_P_1.jpg',
      //         //   '/assets/portfolio/No_P_2.jpg',
      //         //   '/assets/portfolio/No_P_3.jpg',
      //         //   '/assets/portfolio/No_P_4.jpg',
      //         ]
      //       }
      //     },
      //     { id: 'moment', tag: 'Game Poem', title: 'Moment', img: '/assets/Fire_1.png', fullWidth: false, details: {
      //         coverImg: '/assets/Fire_2.png', 
      //         subtitle: 'Interactive Poem (Aalto School Project)',
      //         externalLink: 'https://supermini-burger.itch.io/moment',
      //         year: '2024',
      //         contribution: 'Personal Project',
      //         credits: '劉有容(Liu Yu-Jung)',
      //         videoUrl: 'https://www.youtube.com/embed/V9bwmLYqEiE?si=HbrHJwKDrM7CfVrT', 
      //         description: `In Moment, the night sky ignites with fireworks—bursts of fleeting beauty that dance beyond reach. No matter how you time the shot, their brilliance slips through, uncaptured, a reminder that some wonders defy the lens. 
              
      //         So why chase what can not be held? Set the camera aside, let your eyes drink in the spectacle, and etch each vivid instant into the quiet gallery of your mind, where the truest memories glow.`, 
      //         screenshots: [
      //         //   '/assets/portfolio/No_P_1.jpg',
      //         //   '/assets/portfolio/No_P_2.jpg',
      //         //   '/assets/portfolio/No_P_3.jpg',
      //         //   '/assets/portfolio/No_P_4.jpg',
      //         ]
      //       }
      //     },
      //     { id: 'comic-chaos', tag: 'AI-Embbed Doodle Game', title: 'Comic Chaos', img: '/assets/Com_1.png', fullWidth: false,
      //       details: {
      //         coverImg: '/assets/Com_2.png', 
      //         subtitle: 'AI-Embbed Doodle Game(Junction Hackathon)',
      //         externalLink: 'https://shamitahmed.itch.io/comicchaos',
      //         year: '2024',
      //         contribution: 'Software development, UIUX Design',
      //         credits: '劉有容(Liu Yu-Jung), Shamit Ahmed',
      //         videoUrl: 'https://www.youtube.com/embed/joUPUe0u6KQ?si=ief1Sv4nWNNI2vwN', 
      //         description: `You are a comic artist with zero drawing skill but an insane deadline. Your demanding boss expects brilliant work, and you've got nothing but shaky doodles. Submit your "AI-enhanced" pages before the buzzer sounds!
              
      //         Fool Your Boss, Save Your Job!`, 
      //         screenshots: [
      //         //   '/assets/portfolio/No_P_1.jpg',
      //         //   '/assets/portfolio/No_P_2.jpg',
      //         //   '/assets/portfolio/No_P_3.jpg',
      //         //   '/assets/portfolio/No_P_4.jpg',
      //         ]
      //       }
      //     },
      //   ]
      // }
    ]
  },
  ux: {
    title: "UX Design",
    sections: [
      {
        id: "section-app",
        label: "Service Design",
        quote: "More than thoughtful.",
        projects: [
          { id: 'yamaha', tag: 'Music Education Rebranding', title: 'Yamaha Adults', img: '/assets/Yam_1.png', fullWidth: false,
             details: {
              coverImg: '/assets/Yam_2.png', 
              subtitle: 'Music Education Rebranding (NTUST School Project)',
              year: '2024',
              contribution: 'User Research, Concept Design',
              credits: '劉有容(Liu Yu-Jung), 黃采媛(Huang Tsai-Yuan), 梁朝偉(Liang Chao-Wei), 賴潔瑤(Lai Jie-Yao)',
              // videoUrl: 'https://www.youtube.com/embed/V9bwmLYqEiE?si=HbrHJwKDrM7CfVrT', 
              description: `In response to declining birth rates and the rising trend of lifelong learning, we led a comprehensive brand transformation for Yamaha's music education. This project involved a deep analysis of adult learners' needs, resulting in seven innovative service design proposals.

              These solutions were successfully adopted and implemented by Yamaha, effectively optimizing their adult music services and helping the brand pivot for continued growth in a changing market. The project established a new brand identity for Yamaha as a "lifelong partner in music learning."`, 
              screenshots: [
                '/assets/portfolio/Yam_P_1.jpg',
                '/assets/portfolio/Yam_P_2.jpg',
                '/assets/portfolio/Yam_P_3.jpg',
                '/assets/portfolio/Yam_P_4.jpg',
                '/assets/portfolio/Yam_P_5.jpg',
                '/assets/portfolio/Yam_P_6.jpg',
              ]
            }
          },
          { id: 'plantoholic', tag: 'Sustainable Green Roof Gardening Service', title: 'Plantoholic', img: '/assets/Pla_2.png', fullWidth: false,            
            details: {
              coverImg: '/assets/Pla_3.png', 
              subtitle: 'Sustainable Green Roof Gardening Service (SPOSAD Hackathon)',
              year: '2023',
              contribution: 'Personal Project',
              credits: '劉有容(Liu Yu-Jung)',
              videoUrl: 'https://www.youtube.com/embed/8IKNPt83SVw?si=6TeaLtdm_Y2D-Lq6', 
              description: `Plantoholic is a rooftop gardening service centered around the concept of 'Phyto-Centered Design.' This unique approach challenges the conventional relationship between plants and humans by regarding plants as lively companions, much like cherished pets.

              Through this systematic services, I aim to inspire people in Taiwan to embrace greener rooftops, with the ultimate goal of mitigating the urban heat island effect.
              
              Honors | 
              2023 SPOSAD Workshop  2nd price`, 
              screenshots: [
                '/assets/portfolio/Pla_P_1.jpg',
                '/assets/portfolio/Pla_P_2.jpg',
                '/assets/portfolio/Pla_P_3.jpg',
                '/assets/portfolio/Pla_P_4.jpg',
                '/assets/portfolio/Pla_P_5.jpg',
                '/assets/portfolio/Pla_P_6.jpg',
              ]
            } 
          }
        ]
      },
    ]
  },
  media: {
    title: "Media Art",
    sections: [
      {
        id: "section-motion",
        label: "Motion Design",
        quote: "Living frames",
        projects: [
          { id: 'lover', tag: 'Animation', title: 'L___over', img: '/assets/Left_1.jpg', fullWidth: true,             
            details: {
              coverImg: '/assets/Left_1.jpg', 
              subtitle: '2D Animation (NTU School Project)',
              year: '2021',
              contribution: 'Personal Project',
              credits: '劉有容(Liu Yu-Jung)',
              videoUrl: 'https://www.youtube.com/embed/5lfn1HeJ8pA?si=P0MoUB8zWuJBpBay', 
              description: `The creative inspiration behind 'L___over' was sparked by the tragic sequence of three student suicides at National Taiwan University in November 2020. This animation endeavors to raise public awareness about depression.

              The storyline revolves around a couple deeply in love, where the man succumbs to depression and tragically takes his own life, leaving the woman to grapple with profound grief. To convey the melancholic emotions, the animation employs the color blue, yet to maintain a delicate balance, the characters are transformed into animals—rabbits and bears, one white and one black—symbolizing the couple.`, 
              screenshots: [
                '/assets/portfolio/Left_P_1.jpg',
                '/assets/portfolio/Left_P_2.jpg',
              ]
            } }
        ]
      },
      // {
      //   id: "section-sound",
      //   label: "Sound Design",
      //   quote: "The harmony of mentality",
      //   projects: [
      //     { id: 'no1', tag: 'Installation', title: 'Digital Echo', img: '/assets/No_1.png', desc: 'Sound reactive visuals.', fullWidth: false }
      //   ]
      // }
    ]
  }
};

export const getProjectById = (id) => {
  // 遍歷所有分類 (game, ux, media...)
  for (const cat in projectsData) {
    // 遍歷該分類下的所有 section
    for (const section of projectsData[cat].sections) {
      // 尋找 ID 匹配的專案
      const project = section.projects.find(p => p.id === id);
      if (project) return project;
    }
  }
  return null;
};