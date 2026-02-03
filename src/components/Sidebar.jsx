import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  // to handle to contact page
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate("/contact");
  };

  // when it on other page , it will close the drop down
  useEffect(() => {
    if (location.pathname === "/contact") {
      setIsContactOpen(true);
    } else {
      setIsContactOpen(false);
    }
  }, [location.pathname]);

  return (
    <aside className="w-64 pr-10 mt-24 h-full text-[28px] order-2">
      <nav>
        <ul>
          {/* Contact */}
          <li className="mb-4">
            <button
              onClick={handleContactClick}
              className="block py-2 px-4 hover:opacity-100  rounded opacity-70 focus:bg-gray-300 focus:opacity-100 text-left w-full"
            >
              Contact Us
            </button>
            <div
              className="ml-4 mt-10 text-[16px] overflow-hidden transition-max-height duration-300 ease-in-out"
              style={{
                maxHeight: isContactOpen ? "1000px" : "0",
              }}
            >
              {isContactOpen && (
                <>
                  <p className="mt-10 opacity-80">sunnywxyzstudio@gmail.com</p>
                  <p className="opacity-80">+44 7388348419</p>
                  <br />
                  <p className="mt-10 opacity-80">© WXYZ Studio</p>
                  <br />
                  <p className="mt-10 opacity-80">Southampton</p>
                  <p className="opacity-80">Hampshire, United Kingdom</p>
                  <br />

                  <br />

                  <div className="mb-20">
                    
                    <a
                      href="https://www.linkedin.com/in/sunny-weisheng-he/"
                      className="mt-10 text-[20px] opacity-80 hover:opacity-100 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a> 
                    <span> | </span>
                    
                    <a
                      href="https://api.whatsapp.com/send/?phone=447902478960&text&type=phone_number&app_absent=0"
                      className="text-[20px] opacity-80 hover:opacity-100 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Whatsapp
                    </a> 
                    
                  </div>
                </>
              )}
            </div>
          </li>

          {/* About */}
          <li>
            <Link
              to="/about"
              className="block py-2 px-4 mb-20 hover:opacity-100  rounded opacity-70 focus:bg-gray-300 focus:opacity-100"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
