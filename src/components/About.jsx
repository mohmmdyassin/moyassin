"use client"

function About() {
  return (
    <div className="about">
      <div className="container">
        <header>
          <h1>About</h1>
        </header>

        <div className="content">
          <p className="intro">Builder, educator, and perpetual learner.</p>

          <div className="achievements">
            <p>
              Taught English online by building multiple websites and platforms, including the LearnEnglish Facebook
              page — the largest English teaching page at the time, helping nearly 100K people at age 16
            </p>

            <p>Built several websites focused on teaching English in creative ways</p>

            <p>Baccalaureate in Mathematics</p>

            <p>Worked with clients across the MENA region in web development and digital marketing</p>

            <p>Taught myself how to code by hacking into Scrimba.com and unlocking 1 year of free learning</p>

            <p>Built over 100 websites to strengthen my programming and product-building skills</p>

            <p>Created a university rating website that started in Tunisia and went viral across several countries</p>

            <p>
              Built Facebook and Messenger clones as a graduation project, featuring interactive historic figures users
              could chat with
            </p>

            <p>Started working as a teacher on October 5 (World Teachers' Day) without prior experience</p>

            <p>Designed and built my own AI teaching assistant, which evolved into a personal project and companion</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          min-height: 100vh;
          background: #ffffff;
          color: #000000;
        }

        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        header {
          margin-bottom: 60px;
        }

        h1 {
          font-size: 32px;
          font-weight: 400;
          letter-spacing: -0.5px;
          margin: 0;
        }

        .intro {
          font-size: 20px;
          line-height: 1.4;
          color: #666666;
          margin: 0 0 48px 0;
          font-weight: 300;
        }

        .achievements {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .achievements p {
          font-size: 16px;
          line-height: 1.6;
          color: #333333;
          margin: 0;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .container {
            padding: 60px 20px;
          }

          h1 {
            font-size: 28px;
          }

          .intro {
            font-size: 18px;
            margin-bottom: 40px;
          }

          .achievements {
            gap: 20px;
          }
        }
      `}</style>
    </div>
  )
}

export default About
