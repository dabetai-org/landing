import type { Dictionary } from "../types";

export const en: Dictionary = {
  nav: {
    inicio: "Home",
    appMovil: "Mobile App",
    appWeb: "Web App",
    faq: "FAQ",
  },
  hero: {
    titleBefore: "Predict and Prevent Diabetes Complications with ",
    highlightedText: "Artificial Intelligence",
    titleAfter: "",
    description:
      "Connect your CGM and wearables so AI analyzes your biomarkers, detects complication risks, and keeps your doctor informed in real time.",
  },
  mobileFeatures: {
    title: "Self-Monitoring for Patients",
    items: [
      {
        title: "Continuous Glucose Monitoring",
        description:
          "Connect with your CGM and view your glucose levels in real time without manual logging.",
        icon: "fa-chart-line",
        align: "right",
      },
      {
        title: "Biomarkers from Wearables",
        description:
          "Sync your wearables to automatically capture heart rate, sleep quality, and physical activity.",
        icon: "fa-heartbeat",
        align: "right",
      },
      {
        title: "AI Chat",
        description:
          "Ask the AI assistant about your metrics, predictions, or recommendations in natural language.",
        icon: "fa-robot",
        align: "right",
      },
      {
        title: "Predictive Alerts",
        description:
          "AI analyzes your data in real time and alerts you to risk patterns before they become complications.",
        icon: "fa-bell",
        align: "right",
      },
      {
        title: "Complication Prediction",
        description:
          "Machine learning models assess your risk of developing retinopathy, nephropathy, neuropathy, and diabetic foot.",
        icon: "fa-dna",
        align: "left",
      },
      {
        title: "Automated Clinical Reports",
        description:
          "Generate detailed reports with key metrics, risk predictions, and historical trends to share with your doctor.",
        icon: "fa-file-medical-alt",
        align: "left",
      },
      {
        title: "Connect with Doctors",
        description:
          "Share your data in real time with specialists through the medical portal for continuous remote monitoring.",
        icon: "fa-user-md",
        align: "left",
      },
      {
        title: "Complete History",
        description:
          "Access your full health history: glucose, biomarkers, meals, medication, and alerts in one panel.",
        icon: "fa-calendar-alt",
        align: "left",
      },
    ],
  },
  mobileHowItWorks: {
    title: "How It Works",
    steps: [
      {
        title: "Welcome to dabetai",
        description:
          "Download the app, create your account, and start receiving personalized AI recommendations.",
        images: [
          {
            src: "/assets/images/mobile/splash.png",
            alt: "dabetai welcome screen with logo and initial message",
          },
          {
            src: "/assets/images/mobile/welcome.png",
            alt: "Registration and login screen in the dabetai mobile app",
          },
        ],
        badges: true,
      },
      {
        title: "Complete Your Health Profile",
        description:
          "Fill out a quick onboarding: diabetes type, hypertension, age, and measurements. This helps AI give you more accurate predictions.",
        images: [
          {
            src: "/assets/images/mobile/onboarding.png",
            alt: "Health profile form in the dabetai app with diabetes type and biomarkers",
          },
        ],
      },
      {
        title: "Connect Your Devices",
        description:
          "Follow the assistant to link your CGM and wearables. The app syncs automatically to capture your biomarkers.",
        images: [
          {
            src: "/assets/images/mobile/connect-devices.png",
            alt: "CGM and wearable device connection wizard in the dabetai app",
          },
          {
            src: "/assets/images/mobile/device-connected.png",
            alt: "Devices successfully connected to the dabetai application",
          },
        ],
      },
      {
        title: "Connect Health Apps",
        description:
          "Link Apple Health or Google Fit to centralize your data and improve AI analysis.",
        images: [
          {
            src: "/assets/images/mobile/connect-apps.png",
            alt: "Apple Health and Google Fit linking screen in the dabetai app",
          },
          {
            src: "/assets/images/mobile/apps-connected.png",
            alt: "Apple Health and Google Fit successfully connected to dabetai",
          },
        ],
      },
      {
        title: "Link Your Doctor",
        description:
          "Connect your account with your doctor through the web portal so they can monitor your metrics and alerts in real time.",
        images: [
          {
            src: "/assets/images/mobile/connect-doctor.png",
            alt: "Screen for linking patient account with doctor in dabetai",
          },
          {
            src: "/assets/images/mobile/doctor-connected.png",
            alt: "Doctor successfully connected for remote monitoring in dabetai",
          },
        ],
      },
      {
        title: "Explore Your Ecosystem",
        description:
          "Access your dashboard with metrics, predictions, history, and an AI chat to resolve your questions instantly.",
        images: [
          {
            src: "/assets/images/mobile/dashboard.png",
            alt: "dabetai main dashboard with real-time glucose and health metrics",
          },
          {
            src: "/assets/images/mobile/predictions.png",
            alt: "AI risk prediction for retinopathy, nephropathy, and diabetic foot",
          },
          {
            src: "/assets/images/mobile/historial.png",
            alt: "Complete glucose, biomarker, and alert history in dabetai",
          },
          {
            src: "/assets/images/mobile/chat.png",
            alt: "AI assistant chat for consulting metrics and recommendations",
          },
        ],
      },
    ],
  },
  mobileCTA: {
    title: "Stay Ahead of Complications with the Power of AI",
    description:
      "Coming soon. Connect your CGM and wearables, and let AI take care of your health.",
  },
  webFeatures: {
    title: "Monitoring for Healthcare Professionals",
    items: [
      {
        title: "Remote Patient Monitoring",
        description:
          "Connect with your patients' accounts and access their glucose metrics, biomarkers, and alerts in real time.",
        icon: "fa-user-md",
      },
      {
        title: "AI Risk Alerts",
        description:
          "Receive notifications when models detect risk of retinopathy, nephropathy, or other complications.",
        icon: "fa-brain",
      },
      {
        title: "Automated Clinical Reports",
        description:
          "Generate detailed health status reports for each patient with objective data, predictions, and temporal evolution.",
        icon: "fa-notes-medical",
      },
      {
        title: "Remote Intervention and AI Chat",
        description:
          "Communicate with your patients, adjust treatments, and use AI chat to query metrics and answer questions instantly.",
        icon: "fa-chart-line",
      },
    ],
  },
  webHowItWorks: {
    title: "How It Works",
    steps: [
      {
        title: "Login or Register",
        description:
          "Sign in with your professional account or create a new one. Access your patients' metrics instantly.",
        images: [
          {
            src: "/assets/images/web/login.png",
            alt: "Login screen for the dabetai medical web portal",
          },
        ],
        buttons: true,
      },
      {
        title: "Dashboard",
        description:
          "View the dashboard with key metrics, current status, and active alerts for all your patients.",
        images: [
          {
            src: "/assets/images/web/dashboard.png",
            alt: "Medical portal dashboard with glucose metrics, alerts, and patient status",
          },
        ],
      },
      {
        title: "Patient Management",
        description:
          "Manage your patients from a single panel: add, review histories, and provide personalized follow-up.",
        images: [
          {
            src: "/assets/images/web/patients.png",
            alt: "Patient management panel in the dabetai medical web portal",
          },
          {
            src: "/assets/images/web/add-patient.png",
            alt: "Form to add a new patient to the dabetai medical portal",
          },
        ],
      },
      {
        title: "Predictions and AI Chat",
        description:
          "Review risk predictions per patient, receive anomaly notifications, and consult the integrated AI assistant.",
        images: [
          {
            src: "/assets/images/web/predictions.png",
            alt: "Per-patient risk predictions in the dabetai medical portal",
          },
          {
            src: "/assets/images/web/chat.png",
            alt: "AI chat assistant integrated in the dabetai web portal for doctors",
          },
          {
            src: "/assets/images/web/notifications.png",
            alt: "Real-time anomaly notifications and alerts in dabetai",
          },
        ],
      },
    ],
    loginButton: "Login",
    registerButton: "Register",
    comingSoon: "Coming soon",
  },
  webCTA: {
    title: "Monitor Your Patients with Predictive AI Alerts",
    description:
      "Register, link your patients, and receive automatic alerts for any risk detected by AI.",
    loginButton: "Login",
    registerButton: "Register",
    comingSoon: "Coming soon",
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How does dabetai work?",
        answer:
          "dabetai combines a patient app with a web portal for doctors. It syncs with your CGM and wearables, and AI analyzes everything to predict complications like retinopathy or diabetic foot before they occur.",
      },
      {
        question: "Which devices are compatible?",
        answer:
          "The app is compatible with continuous glucose monitors (CGM) and wearables that track heart rate, sleep quality, and physical activity. It works on Android and iOS devices.",
      },
      {
        question: "Can I share my data with my doctor?",
        answer:
          "Yes. Share your metrics with your doctor through the web portal. They can track your progress, receive alerts, and provide remote follow-up.",
      },
      {
        question: "How do you protect my medical information?",
        answer:
          "We implement end-to-end encryption and follow clinical data security standards. Your information is stored securely and only you and authorized professionals can access it.",
      },
      {
        question: "Is the app free?",
        answer:
          "The app offers basic free features. Advanced functionality, such as detailed predictions and clinical reports, is available in the premium plan.",
      },
    ],
  },
  footer: {
    description:
      "Intelligent ecosystem for monitoring and predicting diabetic complications using artificial intelligence, wearables, and continuous glucose monitors.",
    navigation: "Navigation",
    usefulResources: "Useful Resources",
    team: "Team",
    copyright: "dabetai",
    resourcesLinks: [
      {
        label: "GitHub repository",
        href: "https://github.com/dabetai-org",
      },
      {
        label: "Research paper",
        href: "https://chrisssp.vercel.app/assets/docs/papers/Prevenci%C3%B3n-de-Riesgos-de-la-Diabetes-Mediante-una-Plataforma-Inteligente-de-Monitorizaci%C3%B3n-y-Predicci%C3%B3n-de-Complicaciones-con-Inteligencia-Artificial.pdf",
      },
      {
        label: "View dabetai ecosystem",
        href: "https://chrisssp.vercel.app/es/projects/dabetai",
      },
    ],
    teamMembers: [
      {
        name: "Christian Serrano",
        github: { user: "chrisssp", url: "https://github.com/chrisssp" },
        linkedin: {
          user: "chrisssp",
          url: "https://linkedin.com/in/chrisssp",
        },
        email: "christian.serrano.puertos@gmail.com",
      },
      {
        name: "Alejandro Ortiz",
        github: { user: "aleor25", url: "https://github.com/aleor25" },
        linkedin: { user: "aleor", url: "https://www.linkedin.com/in/aleor/" },
        email: "alex03ortizperez@gmail.com",
      },
      {
        name: "Fermín Cárdenas",
        github: null,
        linkedin: null,
        email: null,
      },
    ],
  },
  badges: {
    comingSoon: "Coming soon",
  },
  alt: {
    webDashboard:
      "dabetai web control panel with patient metrics and AI alerts",
    mobileDashboard:
      "dabetai mobile app showing glucose dashboard and predictions",
  },
  backToTop: "Back to top",
  openMenu: "Open menu",
  closeMenu: "Close menu",
};
