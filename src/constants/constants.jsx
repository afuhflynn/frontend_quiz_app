import { accessibilityIcon, cssIcon, htmlIcon, jsIcon } from "../assets";
import quizzes from "../data/data.json";

export const navItems = [
  {
    id: "1de47ecc486087baa90f",
    label: "HTML",
    href: `/quiz/html/1de47ecc486087baa90f`,
    logo: htmlIcon,
    logoBgColor: "bg-orange-50 opacity-80",
  },
  {
    id: "b5c838ea77588504e412",
    label: "CSS",
    href: `/quiz/css/b5c838ea77588504e412`,
    logo: cssIcon,
    logoBgColor: "bg-green-50 opacity-80",
  },
  {
    id: "1249c9a1e1c5b5dc3931",
    label: "Javascript",
    href: `/quiz/javascript/1249c9a1e1c5b5dc3931`,
    logo: jsIcon,
    logoBgColor: "bg-blue-50 opacity-80",
  },
  {
    id: "8a86f3c0d7fe6cfc64eb",
    label: "Accessibility",
    href: `/quiz/accessibility/8a86f3c0d7fe6cfc64eb`,
    logo: accessibilityIcon,
    logoBgColor: "bg-purple-50 opacity-80",
  },
];

export const getQuizBySlug = (slug) => {
  const foundQuiz = quizzes.quizzes.find(
    (item) => item.title.toLowerCase() === slug.toLowerCase()
  );
  if (!foundQuiz) return null;
  return foundQuiz;
};
