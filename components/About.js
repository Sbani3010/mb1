import React from "react";

const About = () => {
  return (
    <div className="about" id="about">
      <h3 className="text-center">About</h3>
      <div className="abt_content">
        <div className="row">
          <div className="col-sm-6">
            <div className="abt_image">
              <img
                src="/images/IMG-20221224-WA0004.jpg"
                className="img-fluid"
                alt="our students"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="content_page">
              <h5>Our Story</h5>
              <p>
                Mabhoyi Foundation is a youth led Foundation. Mental health is a
                big issue across South Africa. Young people suffer from it and
                lead to high rates of young people who commit suicide. Rates of
                depression, suicidal behavior, eating disorders and substance
                abuse has increased dramatically over the past few years.
              </p>
              <p>
                In response to the above-mentioned, as our solution, we teach
                and empower young people with basic home based care, skills and
                knowledge that will empower them to deal with health issues.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Our purpose</h5>
                <p className="card-text">
                  Is to empower communicates to take care of their won health
                  and bring the concept of community oriented primary care to
                  life.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Our curriculum</h5>
                <p className="card-text">Basic Home Based Care</p>
                <ul>
                  <li>TB (dots), HIV, Corona Virus</li>
                  <li>Depression Counseling</li>
                  <li>Essential First Aid</li>
                  <li>Physiotherapy</li>
                  <li>Financial management</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="alert alert-success mt-2 mb-2" role="alert">
            <strong>
              At the end of our program, our students receive a certificate of
              attendance.
            </strong>
          </div>
        </div>
        <h5 className="text-center">Our partners</h5>
        <div className="row">
          <div className="col-sm-6">
            <p>
              We believe that real Change takes people linking arms abs working
              together.
            </p>
            <p>
              <strong>Generations Youth Development</strong> ‘strategic partner‘
              work with us to address a complex challenges facing our young
              people across the African Continent. In partnership with{" "}
              <strong> Generations Youth Development</strong>, we offer Life
              Skills Empowerment course.
            </p>
            <p>
              Generations Youth Development mission is to empower young people
              with life skills that are necessary for their future. Both
              Foundations share core values.
            </p>
            <p>
              <strong>Life Skills Empowerment course</strong>
            </p>
            <ul>
              <li>Leadership and effective communication skills</li>
              <li>Career guidance and job preparation </li>
              <li>Innovation and creativity</li>
              <li>Financial management </li>
            </ul>
            <p>
              We provide young people with a range of skills programmes that
              makes them ready for the market place. We unlock potential in
              young people, enabling them to participate in the economy through
              launching them into the job market, build and run businesses,
              create new innovations and be social conscious leaders that will
              drive change in the society.
            </p>
            <h5>What we see</h5>
            <p>
              We dream of an Africa where young leaders across the Continent are
              empowered to change their future and the others for the better
              through basic home based care and life skills empowerment.{" "}
            </p>
            <p>
              <strong>Mabhoyi Foundation</strong> sees limitless potential of
              our youngest citizens, developing and empowering youth as leaders.{" "}
            </p>
          </div>
          <div className="col-sm-6">
            <img
              src="/images/IMG-20221224-WA0005.jpg"
              className="img-fluid"
              alt="our graduate 2"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="card">
            <div className="card-body row">
              <div className="col-sm-6">
                <div className="img-container">
                  <img
                    src="/images/IMG-20221224-WA0001.jpg"
                    className="img-fluid"
                    alt="owner image"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <h5>Meet the Founder</h5>
                <strong>Miss Silungelo Mlaba</strong>
                <p>
                  She’s passion about entrepreneurship and education. Over the
                  years, she has taken it upon herself to lead communities and
                  take up diverse roles in order to help young people take care
                  of their health.
                </p>
                <p>
                  “When our youth thrive, our country thrive. I strongly believe
                  in empowering youth because they are our future leaders, let
                  us invest in their lives. “
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
