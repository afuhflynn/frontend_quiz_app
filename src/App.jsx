import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import ReviewPage from "./pages/ReviewPage";
import NotFoundPage from "./pages/404Page";
import Header from "./components/Header";
import { SectionWrapper } from "./components/HOC/section-wrapper";

const App = () => {
  return (
    <main className="h-screen w-screen overflow-auto bg-secondary">
      <div className="flex flex-col items-center justify-start w-full h-full bg-pattern-bg paddingX paddingY md:gap-0 gap-[3rem]">
        <header className="w-full h-[20%] flex flex-row items-start justify-end">
          <Header />
        </header>
        <SectionWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz/:slug/:id" element={<QuizPage />} />
            <Route
              path="/quiz/:slug/:id/quiz-complete-preview"
              element={<ReviewPage />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </SectionWrapper>
      </div>
    </main>
  );
};
export default App;
