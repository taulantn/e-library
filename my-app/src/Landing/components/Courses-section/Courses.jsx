import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/where-the.jpg";
import courseImg2 from "../../assests/images/ends.jpg";
import courseImg3 from "../../assests/images/verity.jpg";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Where the Crawdads Sing",
    lesson: 368,
    students: 607.8,
    rating: 4.4,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "It ends with Us",
    lesson: 384,
    students: 271.5,
    rating: 4.7,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Verity",
    lesson: 331,
    students: 276.2,
    rating: 4.6,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Books</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
