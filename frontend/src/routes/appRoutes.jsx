import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/homePage/homePage";
import { LoginPage } from "../pages/loginPage/loginPage";
import { RegisterPage } from "../pages/registerPage/registerPage";
import { SubjectPage } from "../pages/subjectPage/subject";
import { DetailSubjectPage } from "../pages/detailSubjectPage/detailSubjectPage";
import { LevelSubjectPage } from "../pages/levelSubjectPage/levelSubjectPage";
import { LessonPage } from "../pages/lessonPage/lessonPage";
import { CalendarPage } from "../pages/calendarPage/calendarPage";
import { ProfilePage } from "../pages/profilePage/profilePage";
import { SettingsPage } from "../pages/settingsPage/settingsPage";
import SpecificSubject from "../pages/specificSubjectPage/specificSubject";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />

      <Route path="/home" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/subject" element={<SubjectPage />} />
      {/* <Route path="/subject/:subject_id" element={<DetailSubjectPage />} /> */}
      <Route path="/subject/:subject_id/level" element={<SpecificSubject />} />
      <Route path="/subject/:subject_id/level/:level_id" element={<LevelSubjectPage />} />
      <Route path="/subject/:subject_id/level/:level_id/:lesson_id" element={<LessonPage />} />

      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/profile/:user_id" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />

    </Routes>
  );
};
