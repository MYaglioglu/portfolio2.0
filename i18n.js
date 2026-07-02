import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import portfolio1 from '/src/assets/portfolio/portfolio1.jpg';
import portfolio2 from '/src/assets/portfolio/portfolio2.jpg';
import portfolio3 from '/src/assets/portfolio/portfolio3.jpg';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          navbar: {
            about: "About",
            work: "Work",
            contact: "Contact",
            technologies: "Technologies",
            experiences: "Experience",
            testimonials: "Testimonials",
            projects: "Projects",
          },
          services: {
            webDeveloper: "Web Developer",
            reactDeveloper: "React Developer",
            frontendDeveloper: "Frontend Developer",
            fullstackWebDeveloper: "Fullstack Web Developer",
          },
          hero: {
            greeting: "Hi, I'm",
            introduction: "I am a",
            webDeveloper: "Web Developer",
            frontendDeveloper: "Frontend Developer",
            reactDeveloper: "React Developer",
            fullstackWebDeveloper: "Fullstack Web Developer",
            techEnthusiast: "Tech Enthusiast",
            uiuxDesigner: "UI/UX Designer",
            angularDeveloper: "Angular Developer"
          },
          experience: {
            subtitle: "What I have done so far",
            title: "Work Experience",
            webDeveloperWla: {
              title: "Web Developer",
              company_name: "Wir Lieben Aktien GmbH",
              date: "December 2024 - April 2026",
              points: [
                "Developed and maintained production web applications using React, TypeScript, and WordPress as a headless CMS.",
                "Configured and connected ACF while integrating GraphQL and REST APIs for structured content delivery.",
                "Implemented authentication with Auth.js as well as role-based access control for protected content.",
                "Contributed to a subscription-based platform, including user migration workflows from WordPress to NeonDB/PostgreSQL.",
                "Handled deployment and technical maintenance of web applications using Vercel and Postgres-based databases.",
                "Modernized technical legacy systems, including a WordPress environment with numerous outdated plugins.",
                "Collaborated in a team environment using GitHub, branching, pull requests, and shared feature development.",
              ],
            },
            freelanceWebDeveloper: {
              title: "Freelance Web Developer",
              company_name: "Self-employed",
              date: "April 2024 - November 2024",
              points: [
                "Built and maintained custom websites for companies and individual clients based on specific project requirements.",
                "Developed responsive user interfaces for desktop, tablet, and mobile devices.",
                "Provided technical support, ongoing improvements, and feature adjustments for existing web projects.",
                "Integrated external services and API-based functionality, including Firebase-based solutions.",
                "Worked directly with clients to understand requirements and deliver tailored web solutions.",
                "Used Git and GitHub for version control and project organization.",
              ],
            },
            frontendDeveloperTraining: {
              title: "Frontend Developer Training",
              company_name: "Developer Akademie",
              date: "November 2022 - April 2024",
              points: [
                "Built practical web applications using Angular, TypeScript, JavaScript, HTML, and CSS as part of an intensive frontend training program.",
                "Developed responsive and interactive interfaces based on project requirements and modern frontend principles.",
                "Worked with Git and agile workflows while completing both individual and team-based projects.",
                "Created a multi-user task management application to strengthen frontend architecture and state handling skills.",
                "Built a browser-based game in vanilla JavaScript using object-oriented programming concepts.",
                "Developed a team chat application with Angular and Firebase inspired by real-world communication tools.",
              ],
            },
          },
          works: {
            subtitle: "My work",
            title: "Projects",
            description:
              "The following projects showcase my skills and experience in web development. Each project includes a short description, source code links and live demos. They reflect my hands-on experience with frontend development, interactivity and modern web technologies.",
            projects: [
              {
                name: "JOIN",
                description:
                  "Task management application developed using HTML, CSS, and JavaScript. It allows users to create, manage, and track tasks with a focus on simplicity and usability.",
                tags: [
                  { name: "html", color: "blue-text-gradient" },
                  { name: "css", color: "green-text-gradient" },
                  { name: "javascript", color: "pink-text-gradient" },
                ],
                image: portfolio1,
                source_code_link: "https://github.com/MYaglioglu/join",
                live_demo: "https://gruppe-639.developerakademie.net/join/index.html",
              },
              {
                name: "EL POLLO LOCO",
                description:
                  "Browser-based game where the player controls a character to fight enemies and collect coins. Built with HTML, CSS, and JavaScript.",
                tags: [
                  { name: "html", color: "blue-text-gradient" },
                  { name: "css", color: "green-text-gradient" },
                  { name: "javascript", color: "pink-text-gradient" },
                ],
                image: portfolio2,
                source_code_link: "https://github.com/MYaglioglu/elpolloloco",
                live_demo: "https://murat-yaglioglu.developerakademie.net/polloloco/index.html",
              },
              {
                name: "DaBubble",
                description:
                  "A social networking platform developed using Angular and Firebase. It is designed to connect users through channels, messaging, and community features.",
                tags: [
                  { name: "angular", color: "blue-text-gradient" },
                  { name: "typescript", color: "green-text-gradient" },
                  { name: "firebase", color: "pink-text-gradient" },
                ],
                image: portfolio3,
                source_code_link: "https://github.com/Hellsticks96/da_bubble",
                live_demo: "http://dabubble.muratyaglioglu.de",
              },
            ],
          },
          contact: {
            subtitle: "Get in touch",
            title: "Contact Me",
            nameLabel: "Your Name",
            namePlaceholder: "Enter your name",
            emailLabel: "Your Email",
            emailPlaceholder: "Enter your email",
            messageLabel: "Your Message",
            messagePlaceholder: "Enter your message",
            sending: "Sending...",
            send: "Send",
            successMessage: "Thank you! I will get back to you as soon as possible.",
            errorMessage: "Oops! Something went wrong. Please try again.",
          },
          footer: {
            title: "Web Developer | Frontend",
            rightsReserved: "All rights reserved.",
            impressum: "Imprint",
          },
          impressum: {
            title: "Imprint",
            section1: "Information according to § 5 TMG",
            representative: "Represented by:",
            contact: "Contact:",
            disclaimerTitle: "Disclaimer:",
            contentLiabilityTitle: "Liability for content",
            contentLiability:
              "The contents of our pages were created with great care. However, we cannot guarantee the accuracy, completeness, and timeliness of the contents. As a service provider, we are responsible for our own content on these pages according to the general laws pursuant to § 7 Abs.1 TMG. According to §§ 8 to 10 TMG, we are not obligated as a service provider to monitor transmitted or stored external information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific infringement. Upon becoming aware of such violations, we will remove this content immediately.",
            generator: "Imprint from",
            generatorSource: "of Kanzlei Hasselbach, Lawyers for Labor Law and Family Law",
            backToMain: "Back to Main Page",
          },
          introduction: "Introduction",
          overview: "Overview",
          greeting:
            "Hi, I'm Murat. I'm a web developer with a frontend focus and practical fullstack experience.",
        },
      },

      de: {
        translation: {
          navbar: {
            about: "Über mich",
            work: "Arbeit",
            contact: "Kontakt",
            technologies: "Technologien",
            experiences: "Erfahrung",
            testimonials: "Referenzen",
            projects: "Projekte",
          },
          services: {
            webDeveloper: "Webentwickler",
            reactDeveloper: "React-Entwickler",
            frontendDeveloper: "Frontend-Entwickler",
            fullstackWebDeveloper: "Fullstack Webentwickler",
          },
          hero: {
            greeting: "Hallo, ich bin",
            introduction: "Ich bin ein",
            webDeveloper: "Webentwickler",
            frontendDeveloper: "Frontend-Entwickler",
            reactDeveloper: "React-Entwickler",
            fullstackWebDeveloper: "Fullstack Webentwickler",
            techEnthusiast: "Tech-Enthusiast",
            uiuxDesigner: "UI/UX Designer",
            angularDeveloper: "Angular-Entwickler"
          },
          experience: {
            subtitle: "Was ich bisher gemacht habe",
            title: "Berufserfahrung",
            webDeveloperWla: {
              title: "Web Developer",
              company_name: "Wir Lieben Aktien GmbH",
              date: "Dezember 2024 - April 2026",
              points: [
                "Entwicklung und Betreuung produktiver Webanwendungen mit React, TypeScript und WordPress als Headless CMS.",
                "Konfiguration und Anbindung von ACF sowie Integration von GraphQL- und REST-Schnittstellen zur strukturierten Bereitstellung von Inhalten.",
                "Implementierung von Auth.js sowie rollenbasierter Zugriffskontrolle für geschützte Inhalte.",
                "Mitarbeit an einer subscription-basierten Plattform inklusive User-Migrationen von WordPress nach NeonDB/PostgreSQL.",
                "Deployment und technische Betreuung von Webanwendungen mit Vercel und Postgres-basierten Datenbanken.",
                "Modernisierung technischer Altlasten, darunter eine WordPress-Umgebung mit zahlreichen veralteten Plugins.",
                "Zusammenarbeit im Team über GitHub, Branching, Pull Requests und gemeinsame Weiterentwicklung.",
              ],
            },
            freelanceWebDeveloper: {
              title: "Freiberuflicher Web Developer",
              company_name: "Selbstständig",
              date: "April 2024 - November 2024",
              points: [
                "Entwicklung und Pflege individueller Webseiten für Unternehmen und Einzelkunden auf Basis konkreter Projektanforderungen.",
                "Umsetzung responsiver Benutzeroberflächen für Desktop, Tablet und Mobile.",
                "Technische Betreuung bestehender Webprojekte sowie laufende Anpassungen und Erweiterungen.",
                "Integration externer Dienste und API-basierter Funktionen, unter anderem mit Firebase.",
                "Direkte Abstimmung mit Kunden zur Anforderungsaufnahme und Umsetzung passender Weblösungen.",
                "Versionskontrolle und Projektorganisation mit Git und GitHub.",
              ],
            },
            frontendDeveloperTraining: {
              title: "Frontend-Entwickler Weiterbildung",
              company_name: "Developer Akademie",
              date: "November 2022 - April 2024",
              points: [
                "Entwicklung praxisnaher Webanwendungen mit Angular, TypeScript, JavaScript, HTML und CSS im Rahmen einer intensiven Frontend-Weiterbildung.",
                "Umsetzung responsiver und interaktiver Benutzeroberflächen auf Basis konkreter Projektanforderungen.",
                "Arbeit mit Git und agilen Workflows in Einzel- und Teamprojekten.",
                "Entwicklung einer Aufgabenverwaltungsanwendung für mehrere Nutzer zur Vertiefung von Frontend-Architektur und State-Handling.",
                "Umsetzung eines browserbasierten Spiels in Vanilla JavaScript unter Einsatz objektorientierter Programmierung.",
                "Entwicklung einer Chat-Anwendung mit Angular und Firebase, orientiert an realen Team-Kommunikationstools.",
              ],
            },
          },
          works: {
            subtitle: "Meine Arbeit",
            title: "Projekte",
            description:
              "Die folgenden Projekte zeigen meine Fähigkeiten und Erfahrungen in der Webentwicklung. Jedes Projekt wird kurz beschrieben und enthält Links zu Code-Repositories und Live-Demos. Sie spiegeln meine praktische Erfahrung in der Frontend-Entwicklung, Interaktivität und modernen Webtechnologien wider.",
            projects: [
              {
                name: "JOIN",
                description:
                  "Aufgabenverwaltungsanwendung, entwickelt mit HTML, CSS und JavaScript. Sie ermöglicht es Benutzern, Aufgaben zu erstellen, zu verwalten und zu verfolgen – mit einem Fokus auf Einfachheit und Benutzerfreundlichkeit.",
                tags: [
                  { name: "html", color: "blue-text-gradient" },
                  { name: "css", color: "green-text-gradient" },
                  { name: "javascript", color: "pink-text-gradient" },
                ],
                image: portfolio1,
                source_code_link: "https://github.com/MYaglioglu/join",
                live_demo: "https://gruppe-639.developerakademie.net/join/index.html",
              },
              {
                name: "EL POLLO LOCO",
                description:
                  "Browserbasiertes Spiel, bei dem der Spieler eine Figur steuert, um Feinde zu bekämpfen und Münzen zu sammeln. Entwickelt mit HTML, CSS und JavaScript.",
                tags: [
                  { name: "html", color: "blue-text-gradient" },
                  { name: "css", color: "green-text-gradient" },
                  { name: "javascript", color: "pink-text-gradient" },
                ],
                image: portfolio2,
                source_code_link: "https://github.com/MYaglioglu/elpolloloco",
                live_demo: "https://murat-yaglioglu.developerakademie.net/polloloco/index.html",
              },
              {
                name: "DaBubble",
                description:
                  "Eine Chat- und Community-Plattform, entwickelt mit Angular und Firebase, orientiert an realen Team-Kommunikationstools.",
                tags: [
                  { name: "angular", color: "blue-text-gradient" },
                  { name: "typescript", color: "green-text-gradient" },
                  { name: "firebase", color: "pink-text-gradient" },
                ],
                image: portfolio3,
                source_code_link: "https://github.com/Hellsticks96/da_bubble",
                live_demo: "http://dabubble.muratyaglioglu.de",
              },
            ],
          },
          contact: {
            subtitle: "Kontakt aufnehmen",
            title: "Kontaktiere mich",
            nameLabel: "Dein Name",
            namePlaceholder: "Gib deinen Namen ein",
            emailLabel: "Deine E-Mail",
            emailPlaceholder: "Gib deine E-Mail ein",
            messageLabel: "Deine Nachricht",
            messagePlaceholder: "Gib deine Nachricht ein",
            sending: "Senden...",
            send: "Senden",
            successMessage: "Danke! Ich werde mich so schnell wie möglich bei dir melden.",
            errorMessage: "Oh nein! Etwas ist schief gelaufen. Bitte versuche es erneut.",
          },
          footer: {
            title: "Webentwickler | Frontend",
            rightsReserved: "Alle Rechte vorbehalten.",
            impressum: "Impressum",
          },
          impressum: {
            title: "Impressum",
            section1: "Angaben gemäß § 5 TMG",
            representative: "Vertreten durch:",
            contact: "Kontakt:",
            disclaimerTitle: "Haftungsausschluss:",
            contentLiabilityTitle: "Haftung für Inhalte",
            contentLiability:
              "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
            generator: "Impressum vom",
            generatorSource:
              "der Kanzlei Hasselbach, Rechtsanwälte für Arbeitsrecht und Familienrecht",
            backToMain: "Zurück zur Hauptseite",
          },
          introduction: "Einleitung",
          overview: "Überblick",
          greeting:
            "Hallo, ich bin Murat. Ich bin Webentwickler mit Frontend-Schwerpunkt und praxisnaher Fullstack-Erfahrung.",
        },
      },
    },
    fallbackLng: 'de',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;