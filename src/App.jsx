import { useState, useEffect } from "react";
import "./App.css";
import Side from "./icons/Side";
import Profile from "./Component/Profile";
import Question from "./Component/Question";

// Custom hook to detect media query matches (for responsive layout)
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [query]);

  return matches;
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Default to closed on mobile
  const isDesktop = useMediaQuery("(min-width:768px)"); // Desktop breakpoint

  useEffect(() => {
    if (isDesktop) {
      setIsSidebarOpen(true); // Automatically open sidebar on desktop
    } else {
      setIsSidebarOpen(false); // Close sidebar on mobile
    }
  }, [isDesktop]);

  return (
    <div className="flex bg-stone-900">
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      {/* Main Content */}
      <MainContent isSidebarOpen={isSidebarOpen} />
    </div>
  );
}

// Sidebar component
function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const isMobile = useMediaQuery("(max-width: 408px)");
  if (isMobile && !isSidebarOpen) {
    return null;
  }
  return (
    <div
      onClick={() => setIsSidebarOpen(!isSidebarOpen)} // Toggle sidebar visibility on mobile
      className={`h-screen p-4 cursor-pointer transition-all ${
        isSidebarOpen ? "bg-stone-800 w-72" : "bg-stone-900 w-16"
      }`}
    >
      {/* Sidebar content */}
      <div className="flex justify-end text-white">
        <Side />
      </div>
    </div>
  );
}

// Main Content component
function MainContent({ isSidebarOpen }) {
  const isMobile = useMediaQuery("(max-width: 450px)");
  const [mobilesidebar, setmobilesidebar] = useState(false);
  const isDesktop = useMediaQuery("(min-width:760px)"); // Desktop breakpoint

  // When on mobile and the sidebar is not open, show different padding
  if (isMobile) {
    return (
      <>
        {/* Mobile Header with Leetcode and Sidebar */}
        <div className="flex flex-col w-full items-center">
          <div className="flex justify-between p-4 bg-stone-800 w-full h-16 text-white">
            <div>Leetcode</div>
            <div
              onClick={() => setmobilesidebar(!mobilesidebar)} // Toggle sidebar visibility on mobile
              className={`cursor-pointer transition-all ${
                !mobilesidebar
                  ? ""
                  : "bg-stone-800 w-64 h-screen  p-4 relative -my-4 -mx-4 text-white"
              }`}
            >
              <Side /> {/* Sidebar component */}
            </div>
          </div>

          {/* Main Content Grid for Mobile */}
          <div className="grid grid-cols-1 w-full gap-12 transition-all delay-150 ease-in-out p-4">
            {/* Content blocks */}
            <div className="col-span-1 bg-stone-800 h-96 shadow-2xl rounded-xl p-6">
              <Profile />
            </div>
            <div className="col-span-1 bg-stone-800 h-full shadow-2xl rounded-xl">
              <Question />
            </div>
          </div>
        </div>
      </>
    );
  }

  // Default layout for larger screens (desktop)
  return (
    <div
      className={
        "grid grid-cols-10 w-full gap-12 transition-all delay-150 ease-in-out py-12 px-16"
      }
    >
      {/* Content blocks */}
      <div className="md:col-span-4 col-span-10 bg-stone-800 h-[580px] shadow-2xl rounded-xl p-6">
        <Profile />
      </div>
      <div className="md:col-span-6 col-span-10 bg-stone-900 h-full  rounded-xl ">
        <Question />
      </div>
    </div>
  );
}

export default App;
