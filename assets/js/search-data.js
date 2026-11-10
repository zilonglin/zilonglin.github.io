// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order. (* with equal contribution)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-our-paper-is-accepted-at-ieee-s-amp-amp-p-24",
          title: 'Our paper is accepted at IEEE S&amp;amp;amp;P ‘24.',
          description: "",
          section: "News",},{id: "news-thrilled-to-provide-the-talk-on-llm-security-to-capital-one",
          title: 'Thrilled to provide the talk on LLM security to Capital One.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-member-of-the-artifact-evaluation-committee-for-ccs-24",
          title: 'I will serve as a member of the Artifact Evaluation Committee for CCS...',
          description: "",
          section: "News",},{id: "news-honored-to-be-awarded-a-student-travel-grant-to-attend-ieee-s-amp-amp-p-24-thanks-ieee-s-amp-amp-p",
          title: 'Honored to be awarded a student travel grant to attend IEEE S&amp;amp;amp;P ‘24....',
          description: "",
          section: "News",},{id: "news-honored-to-receive-the-luddy-outstanding-researcher-award-thanks-to-the-guidance-of-my-advisors-in-my-research-work",
          title: 'Honored to receive the Luddy Outstanding Researcher Award, thanks to the guidance of...',
          description: "",
          section: "News",},{id: "news-honored-to-give-a-talk-about-mawseo-at-ieee-s-amp-amp-p-2024-the-animation-video-of-this-work-is-available-on-youtube-in-english-and-bilibili-in-chinese",
          title: 'Honored to give a talk about MAWSEO at IEEE S&amp;amp;amp;P 2024. The animation...',
          description: "",
          section: "News",},{id: "news-our-paper-malla-demystifying-real-world-large-language-model-integrated-malicious-services-is-accepted-by-usenix-security-24",
          title: 'Our paper Malla: Demystifying Real-world Large Language Model Integrated Malicious Services is accepted...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-member-of-the-artifact-evaluation-committee-for-ndss-25",
          title: 'I will serve as a member of the Artifact Evaluation Committee for NDSS...',
          description: "",
          section: "News",},{id: "news-ai-incident-database-has-included-our-research-real-world-large-language-model-integrated-malicious-services-presented-at-usenix-security-24",
          title: 'AI Incident Database has included our research Real-world Large Language Model Integrated Malicious...',
          description: "",
          section: "News",},{id: "news-honored-to-give-a-talk-at-the-33rd-usenix-security-symposium-about-large-language-model-integrated-malicious-services-whose-repository-has-been-awarded-all-three-badges-in-the-usenix-security-24-artifact-evaluation-the-animation-video-of-this-work-is-available-on-youtube-in-english-and-bilibili-in-chinese",
          title: 'Honored to give a talk at the 33rd USENIX Security Symposium about Large...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-member-of-the-artifact-evaluation-committee-for-acsac-25",
          title: 'I will serve as a member of the Artifact Evaluation Committee for ACSAC...',
          description: "",
          section: "News",},{id: "news-honored-to-be-awarded-a-student-conference-grant-to-attend-acm-ccs-24-thanks-acm-ccs",
          title: 'Honored to be awarded a student conference grant to attend ACM CCS ‘24....',
          description: "",
          section: "News",},{id: "news-our-paper-malla-demystifying-real-world-large-language-model-integrated-malicious-services-has-been-selected-as-a-top-15-finalist-in-the-2024-csaw-applied-research-competition",
          title: 'Our paper Malla: Demystifying Real-world Large Language Model Integrated Malicious Services has been...',
          description: "",
          section: "News",},{id: "news-i-will-join-the-university-of-missouri-kansas-city-carnegie-r1-institution-as-a-tenure-track-assistant-professor-in-fall-2025",
          title: 'I will join the University of Missouri - Kansas City (Carnegie R1 institution)...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-member-of-the-program-committee-for-euros-amp-amp-p-26-welcome-to-submit-your-papers",
          title: 'I will serve as a member of the Program Committee for EuroS&amp;amp;amp;P ‘26....',
          description: "",
          section: "News",},{id: "news-honored-to-receive-the-distinguished-artifact-reviewer-award-of-acm-ccs-2025-thanks-acm-ccs",
          title: 'Honored to receive the Distinguished Artifact Reviewer Award of ACM CCS 2025. Thanks...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-member-of-the-program-committee-for-acm-ccs-26-welcome-to-submit-your-papers",
          title: 'I will serve as a member of the Program Committee for ACM CCS...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-member-of-the-program-committee-for-www-26-welcome-to-submit-your-papers",
          title: 'I will serve as a member of the Program Committee for WWW ‘26....',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-member-of-the-program-committee-for-acsac-26-welcome-to-submit-your-papers",
          title: 'I will serve as a member of the Program Committee for ACSAC ‘26....',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-member-of-the-program-committee-for-humsec-esorics-26-welcome-to-submit-your-papers",
          title: 'I will serve as a member of the Program Committee for HumSec@ESORICS ‘26’....',
          description: "",
          section: "News",},{id: "news-two-co-first-author-papers-were-accepted-by-acm-imc-2026-and-ndss-2027-all-in-one-lucky-day",
          title: 'Two (co-)first-author papers were accepted by ACM IMC 2026 and NDSS 2027—all in...',
          description: "",
          section: "News",},{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/227/2961-1.html", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%6C%69%6E@%75%6D%6B%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-5553-1165", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=jfCHZR0AAAAJ", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/79302744", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/zllinxs", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
