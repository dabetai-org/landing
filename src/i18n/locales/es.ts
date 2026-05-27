import type { Dictionary } from "../types";

const menuLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Aplicación móvil", href: "#mobile-app-features" },
  { label: "Aplicación web", href: "#web-app-features" },
  { label: "FAQ", href: "#faq" },
];

export const es: Dictionary = {
  nav: {
    inicio: "Inicio",
    appMovil: "Aplicación móvil",
    appAI: "IA predictiva",
    appWeb: "Aplicación web",
    faq: "Preguntas frecuentes",
  },
  hero: {
    titleBefore: "Predice y prevén complicaciones de la diabetes con ",
    highlightedText: "inteligencia artificial",
    titleAfter: "",
    description:
      "Conecta tu glucómetro (CGM) y wearables para que la IA analice tus biomarcadores, detecte riesgos de complicaciones y mantenga a tu médico al tanto en tiempo real.",
  },
  mobileFeatures: {
    title: "Automonitoreo para el paciente",
    items: [
      {
        title: "Monitoreo continuo de glucosa",
        description:
          "Conéctate con tu monitor CGM y visualiza tus niveles de glucosa en tiempo real sin necesidad de registros manuales.",
        icon: "fa-chart-line",
        align: "right",
      },
      {
        title: "Biomarcadores desde wearables",
        description:
          "Sincroniza tus wearables para capturar frecuencia cardíaca, calidad del sueño y actividad física de forma automática.",
        icon: "fa-heartbeat",
        align: "right",
      },
      {
        title: "Chat con IA",
        description:
          "Resuelve tus dudas con el asistente de IA. Pregunta sobre métricas, predicciones o recomendaciones en lenguaje natural.",
        icon: "fa-robot",
        align: "right",
      },
      {
        title: "Alertas predictivas",
        description:
          "IA analiza tus datos en tiempo real y te alerta ante patrones de riesgo antes de que se conviertan en complicaciones.",
        icon: "fa-bell",
        align: "right",
      },
      {
        title: "Predicción de complicaciones",
        description:
          "Modelos de machine learning evaluan tu riesgo de desarrollar retinopatía, nefropatía, neuropatía y pie diabético.",
        icon: "fa-dna",
        align: "left",
      },
      {
        title: "Reportes clínicos automatizados",
        description:
          "Genera informes detallados con métricas clave, predicciones de riesgo y evolución histórica para compartir con tu médico.",
        icon: "fa-file-medical-alt",
        align: "left",
      },
      {
        title: "Conexión con médicos",
        description:
          "Comparte tus datos en tiempo real con especialistas a través del portal médico para una supervisión remota continua.",
        icon: "fa-user-md",
        align: "left",
      },
      {
        title: "Historial completo",
        description:
          "Accede a todo tu historial de salud: glucosa, biomarcadores, comidas, medicación y alertas en un solo panel.",
        icon: "fa-calendar-alt",
        align: "left",
      },
    ],
  },
  mobileHowItWorks: {
    title: "Cómo funciona",
    steps: [
      {
        title: "Bienvenido a dabetai",
        description:
          "Descarga la app, crea tu cuenta y empieza a recibir recomendaciones personalizadas con IA.",
        images: [
          {
            src: "/assets/images/mobile/splash.png",
            alt: "Pantalla de bienvenida de la app dabetai con logotipo y mensaje inicial",
          },
          {
            src: "/assets/images/mobile/welcome.png",
            alt: "Registro e inicio de sesión en la aplicación móvil dabetai",
          },
        ],
        badges: true,
      },
      {
        title: "Completa tu perfil de salud",
        description:
          "Completa un onboarding rápido: tipo de diabetes, hipertensión, edad y medidas. Así la IA te da predicciones más precisas.",
        images: [
          {
            src: "/assets/images/mobile/onboarding.png",
            alt: "Formulario de perfil de salud en la app dabetai con tipo de diabetes y biomarcadores",
          },
        ],
      },
      {
        title: "Conecta tus dispositivos",
        description:
          "Sigue el asistente para vincular tu glucómetro (CGM) y wearables. La app se sincroniza sola para capturar tus biomarcadores.",
        images: [
          {
            src: "/assets/images/mobile/connect-devices.png",
            alt: "Asistente de conexión de glucómetro CGM y wearables en la app dabetai",
          },
          {
            src: "/assets/images/mobile/device-connected.png",
            alt: "Dispositivos conectados exitosamente a la aplicación dabetai",
          },
        ],
      },
      {
        title: "Conecta apps de salud",
        description:
          "Vincula Apple Health o Google Fit para centralizar tus datos y mejorar el análisis de la IA.",
        images: [
          {
            src: "/assets/images/mobile/connect-apps.png",
            alt: "Vinculación de Apple Health y Google Fit con la app dabetai",
          },
          {
            src: "/assets/images/mobile/apps-connected.png",
            alt: "Apple Health y Google Fit conectados exitosamente a dabetai",
          },
        ],
      },
      {
        title: "Vincula a tu médico",
        description:
          "Conecta tu cuenta con la de tu médico a través del portal web. Así podrá supervisar tus métricas y alertas en tiempo real.",
        images: [
          {
            src: "/assets/images/mobile/connect-doctor.png",
            alt: "Pantalla para vincular cuenta de paciente con médico en dabetai",
          },
          {
            src: "/assets/images/mobile/doctor-connected.png",
            alt: "Médico conectado exitosamente para supervisión remota en dabetai",
          },
        ],
      },
      {
        title: "Explora tu ecosistema",
        description:
          "Accede a tu dashboard con métricas, predicciones, historial y un chat con IA para resolver tus dudas al instante.",
        images: [
          {
            src: "/assets/images/mobile/dashboard.png",
            alt: "Dashboard principal de dabetai con glucosa en tiempo real y métricas de salud",
          },
          {
            src: "/assets/images/mobile/predictions.png",
            alt: "Predicción de riesgo de retinopatía nefropatía y pie diabético con IA",
          },
          {
            src: "/assets/images/mobile/historial.png",
            alt: "Historial completo de glucosa biomarcadores y alertas en dabetai",
          },
          {
            src: "/assets/images/mobile/chat.png",
            alt: "Chat con asistente de IA para consultar métricas y recomendaciones",
          },
        ],
      },
    ],
  },
  mobileCTA: {
    title: "Anticípate a las complicaciones con el poder de la IA",
    description:
      "Próximamente disponible. Conecta tu CGM y wearables, y deja que la IA cuide de tu salud.",
  },
  webFeatures: {
    title: "Seguimiento para profesionales de la salud",
    items: [
      {
        title: "Supervisión remota de pacientes",
        description:
          "Conéctate con las cuentas de tus pacientes y accede a sus métricas de glucosa, biomarcadores y alertas en tiempo real.",
        icon: "fa-user-md",
      },
      {
        title: "Alertas de riesgo por IA",
        description:
          "Recibe notificaciones cuando los modelos detecten riesgo de retinopatía, nefropatía u otras complicaciones.",
        icon: "fa-brain",
      },
      {
        title: "Reportes clínicos automatizados",
        description:
          "Genera informes detallados del estado de salud de cada paciente con datos objetivos, predicciones y evolución temporal.",
        icon: "fa-notes-medical",
      },
      {
        title: "Intervención a distancia y chat IA",
        description:
          "Comunícate con tus pacientes, ajusta tratamientos y usa el chat con IA para consultar métricas y resolver dudas al instante.",
        icon: "fa-chart-line",
      },
    ],
  },
  webHowItWorks: {
    title: "Cómo funciona",
    steps: [
      {
        title: "Inicia sesión o regístrate",
        description:
          "Ingresa con tu cuenta profesional o crea una nueva. Accede al panel con las métricas de tus pacientes al instante.",
        images: [
          {
            src: "/assets/images/web/login.png",
            alt: "Pantalla de inicio de sesión del portal médico web de dabetai",
          },
        ],
        buttons: true,
      },
      {
        title: "Panel de control",
        description:
          "Visualiza el dashboard con métricas clave, estado actual y alertas activas de todos tus pacientes.",
        images: [
          {
            src: "/assets/images/web/dashboard.png",
            alt: "Dashboard del portal médico con métricas de glucosa alertas y estado de pacientes",
          },
        ],
      },
      {
        title: "Gestión de pacientes",
        description:
          "Administra tus pacientes desde un solo panel: agrega, revisa historiales y da seguimiento personalizado.",
        images: [
          {
            src: "/assets/images/web/patients.png",
            alt: "Panel de gestión de pacientes en el portal médico web de dabetai",
          },
          {
            src: "/assets/images/web/add-patient.png",
            alt: "Formulario para agregar nuevo paciente al portal médico dabetai",
          },
        ],
      },
      {
        title: "Predicciones y chat con IA",
        description:
          "Revisa predicciones de riesgo por paciente, recibe notificaciones de anomalías y consulta al asistente de IA integrado.",
        images: [
          {
            src: "/assets/images/web/predictions.png",
            alt: "Predicciones de riesgo de complicaciones por paciente en el portal médico dabetai",
          },
          {
            src: "/assets/images/web/chat.png",
            alt: "Asistente de chat con IA integrado en el portal web para médicos dabetai",
          },
          {
            src: "/assets/images/web/notifications.png",
            alt: "Notificaciones y alertas de anomalías para médicos en tiempo real dabetai",
          },
        ],
      },
    ],
    loginButton: "Iniciar sesión",
    registerButton: "Registrarse",
    comingSoon: "Próximamente",
  },
  webCTA: {
    title: "Supervisa a tus pacientes con alertas predictivas de IA",
    description:
      "Regístrate, vincula a tus pacientes y recibe alertas automáticas ante cualquier riesgo detectado por la IA.",
    loginButton: "Iniciar sesión",
    registerButton: "Registrarse",
    comingSoon: "Próximamente",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        question: "¿Cómo funciona dabetai?",
        answer:
          "dabetai combina una app para pacientes con un portal web para médicos. Se sincroniza con tu glucómetro (CGM) y wearables, y la IA analiza todo para predecir complicaciones como retinopatía o pie diabético antes de que ocurran.",
      },
      {
        question: "¿Qué dispositivos son compatibles?",
        answer:
          "La aplicación es compatible con monitores de glucosa continuos (CGM) y wearables que registren frecuencia cardíaca, calidad del sueño y actividad física. Funciona en dispositivos Android e iOS.",
      },
      {
        question: "¿Puedo compartir mis datos con mi médico?",
        answer:
          "Sí. Comparte tus métricas con tu médico a través del portal web. Él podrá ver tu evolución, recibir alertas y darte seguimiento remoto.",
      },
      {
        question: "¿Cómo protegen mi información médica?",
        answer:
          "Implementamos cifrado de extremo a extremo y seguimos estándares de seguridad para datos clínicos. Tu información se almacena de forma segura y solo tú y los profesionales que autorices pueden acceder a ella.",
      },
      {
        question: "¿Es gratuita la aplicación?",
        answer:
          "La app ofrece funciones básicas gratuitas. Las funcionalidades avanzadas, como predicciones detalladas y reportes clínicos, están en el plan premium.",
      },
    ],
  },
  footer: {
    description:
      "Ecosistema inteligente de monitoreo y predicción de complicaciones diabéticas mediante inteligencia artificial, wearables y monitores de glucosa continuos.",
    navigation: "Navegación",
    usefulResources: "Recursos útiles",
    team: "Equipo",
    copyright: "dabetai",
    resourcesLinks: [
      {
        label: "Repositorio en GitHub",
        href: "https://github.com/dabetai-org",
      },
      {
        label: "Paper de investigación",
        href: "https://chrisssp.vercel.app/assets/docs/papers/Prevenci%C3%B3n-de-Riesgos-de-la-Diabetes-Mediante-una-Plataforma-Inteligente-de-Monitorizaci%C3%B3n-y-Predicci%C3%B3n-de-Complicaciones-con-Inteligencia-Artificial.pdf",
      },
      {
        label: "Ver ecosistema dabetai",
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
    comingSoon: "Próximamente",
  },
  alt: {
    webDashboard:
      "Panel de control web de dabetai con métricas de pacientes y alertas de IA",
    mobileDashboard:
      "Aplicación móvil dabetai mostrando dashboard de glucosa y predicciones",
  },
  ai: {
    title: "Inteligencia artificial predictiva",
    subtitle:
      "Nuestro modelo analiza 13 biomarcadores en tiempo real para predecir complicaciones antes de que ocurran.",
    riskLabel: "Riesgo",
    complications: [
      {
        name: "Retinopatía",
        risk: "31 %",
        icon: "fa-eye",
        description:
          "Daño en los vasos de la retina que puede causar ceguera irreversible",
      },
      {
        name: "Nefropatía",
        risk: "31 %",
        icon: "fa-droplet",
        description: "Daño renal progresivo que puede derivar en diálisis",
      },
      {
        name: "Neuropatía",
        risk: "20 %",
        icon: "fa-bolt",
        description:
          "Daño nervioso periférico que causa dolor y pérdida de sensibilidad",
      },
      {
        name: "Pie diabético",
        risk: "17 %",
        icon: "fa-shoe-prints",
        description: "Úlceras e infecciones que pueden requerir amputación",
      },
    ],
    steps: [
      {
        title: "Tus datos",
        description:
          "Conecta tu CGM y wearables. El modelo captura frecuencia cardíaca, sueño, glucosa y actividad física.",
        icon: "fa-database",
      },
      {
        title: "Análisis predictivo",
        description:
          "Procesa 13 biomarcadores con el modelo AdaBoost entrenado con 440 pacientes para detectar patrones de riesgo.",
        icon: "fa-brain",
      },
      {
        title: "Alerta temprana",
        description:
          "Si detecta riesgo de complicación, genera una alerta inmediata al paciente y a su médico para intervenir a tiempo.",
        icon: "fa-bell",
      },
    ],
    stat: "92.9 % de sensibilidad",
    statDetail:
      "Nuestra métrica principal es el recall: detectar a los pacientes que realmente están en riesgo. En pruebas clínicas, el modelo identifica 9 de cada 10 casos de retinopatía a tiempo.",
  },
  backToTop: "Volver al inicio",
  openMenu: "Abrir menú",
  closeMenu: "Cerrar menú",
};
