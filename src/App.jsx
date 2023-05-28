import { useEffect, useState } from "react";
import { Hero, Navbar, Works, Contact } from "./components/";

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    // scroll automatically on section during load if included on link
    if (hash === "#works") {
      const worksSection = document.getElementById("works");
      worksSection.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#contact") {
      const contactSection = document.getElementById("contact");
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="bg-primary text-secondary w-full h-full ">
      <div className="py-3 ">
        <Navbar />
      </div>
      <div className="px-6 md:px-16 py-14">
        <Hero />
      </div>
      <div className="bg-otherBg px-6 md:px-16 py-14">
        <Works />
      </div>
      <div className="bg-primary px-6 md:px-16 py-14">
        <Contact />
      </div>
    </div>
  );
}

export default App;
