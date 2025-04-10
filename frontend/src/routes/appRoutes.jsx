import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/homePage/homePage";
import { LoginPage } from "../pages/loginPage/loginPage";
import { RegisterPage } from "../pages/registerPage/registerPage";
import { SubjectPage } from "../pages/subjectPage/subject";
import { DetailSubjectPage } from "../pages/detailSubjectPage/detailSubjectPage";
import { LevelSubjectPage } from "../pages/levelSubjectPage/levelSubjectPage";
import { LessonPage } from "../pages/lessonPage/lessonPage";
// import { CalendarPage } from "../pages/calendarPage/calendarPage";
import { ProfilePage } from "../pages/profilePage/profilePage";
import { SettingsPage } from "../pages/settingsPage/settingsPage";
import { SpecificSubject } from "../pages/specificSubjectPage/specificSubject";
import { FavouriteSubjects } from "../components/favouriteSubjects/favouriteSubjects";

import { RequireAuth } from "../components/requireAuth/requireAuth";
import { NotFound } from "../components/notFound/notFound";
import HelpSupport from "../pages/helpSupportPage/HelpSupport";
import { AboutUs } from "../pages/aboutus/aboutUs";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<RequireAuth />}>
        <Route path="/home" element={<HomePage />} />

        <Route path="/subject" element={<SubjectPage />} />
        <Route path="/subject/:subject_id" element={<DetailSubjectPage />} />
        <Route path="/subject/:subject_id/:level_id" element={<LevelSubjectPage />} />
        <Route path="/subject/:subject_id/:level_id/:lesson_id" element={<LessonPage />} />

        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/profile/:user_id" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/specificSubject" element={<SpecificSubject />} />
      </Route>

      <Route path="*" element={<NotFound />} />
      {/* <Route path="/calendar" element={<CalendarPage />} /> */}
      {/* <Route path="/profile/:user_id" element={<ProfilePage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/profile" element={<ProfilePage />} /> */}
      {/* <Route path="/settings" element={<SettingsPage />} />
      <Route path="/specificSubject" element={<SpecificSubject />} /> */}
      {/* <Route path="/favouriteSubjects" element={<FavouriteSubjects />} /> */}
      <Route path="/help" element={<HelpSupport />} />
      <Route path="/aboutUs" element={<AboutUs />} />
    </Routes>
  );
};
