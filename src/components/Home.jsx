"use client"

import {Link} from "react-router-dom"

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="intro">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moyass.in_use_the_same_style_to_make_a_pic_with_void_.._like__6b425dc6-37fd-47ab-a428-f38ec6223ea4_2-ysgJnzwpirhjlvbLPx7oBXoVkSHp4l.png"
            alt="Mohamed Yassin"
            className="profile-pic"
            crossOrigin="anonymous"
          />
          <h1>Mohammed Yassin</h1>
          <p>@moyassin</p>
        </div>

        <div className="social-links">
          <div>
            <a href="https://facebook.com/moyassin" target="_blank" rel="noreferrer">
              facebook.com/moyassin
            </a>
          </div>
          <div>
            <a href="https://tiktok.com/@moyassin" target="_blank" rel="noreferrer">
              tiktok.com/@moyassin
            </a>
          </div>
        </div>

        <div className="blog-link">
          <Link href="/about">→ about</Link>
        </div>
      </div>

      <style jsx>{`
        .home {
          height: 100vh;
          background: #ffffff;
          color: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .intro {
          margin-bottom: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .profile-pic {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center;
          margin-bottom: 16px;
          display: block;
        }

        h1 {
          font-size: 24px;
          font-weight: 400;
          letter-spacing: -0.5px;
          margin: 0 0 4px 0;
        }

        .intro p {
          font-size: 14px;
          color: #666666;
          margin: 0;
          font-weight: 300;
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 32px;
          align-items: center;
        }

        .social-links a {
          color: #333333;
          text-decoration: none;
          font-size: 14px;
          font-weight: 300;
          transition: color 0.2s ease;
        }

        .social-links a:hover {
          color: #000000;
        }

        .blog-link a {
          color: #333333;
          text-decoration: none;
          font-size: 14px;
          font-weight: 300;
          transition: color 0.2s ease;
        }

        .blog-link a:hover {
          color: #000000;
        }

        @media (max-width: 768px) {
          .profile-pic {
            width: 70px;
            height: 70px;
          }

          h1 {
            font-size: 20px;
          }
          
          .intro p {
            font-size: 13px;
          }
          
          .social-links a,
          .blog-link a {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
