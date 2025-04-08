import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./SubjectPage.css";

import { Container } from "../../components/container/container";
import useSubjects from "../../hooks/useSubjects";
import SubjectCard from "../../components/subjectCard/SubjectCard";

export const SubjectPage = () => {
  const carouselRef = useRef(null);
  const { subjects } = useSubjects();

  const scrollCarousel = (direction) => {
    const scrollAmount = 160;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: scrollAmount * direction,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container>
      <div className="subject-page">
        <h1 className="title">Subjects</h1>

        <div className="carousel-container">
          <div className="carousel" ref={carouselRef}>
            {
              subjects.map((subject) => (
                <SubjectCard photo={subject.photo} name={subject.name} url={`${subject.id}`} />
              ))
            }
          </div>

          {/* Flechas debajo del carrusel */}
          <div className="arrow-controls">
            <button className="arrow-button" onClick={() => scrollCarousel(-1)}>
              <FaArrowLeft />
            </button>
            <button className="arrow-button" onClick={() => scrollCarousel(1)}>
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="links-section">
          <h2>Links</h2>
          <a href="https://www.khanacademy.org" target="_blank" rel="noreferrer">
            Khanacademy
          </a>
          <a href="https://translate.google.com" target="_blank" rel="noreferrer">
            Translator
          </a>
          <a href="https://www.wikipedia.org" target="_blank" rel="noreferrer">
            Wikipedia
          </a>
        </div>
      </div>
    </Container>
  );
};
