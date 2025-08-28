import "@/lib/GSAPAnimations";
import Navbar from "./components/custom/Navbar";
import CaseStudies from "./pages/CaseStudies";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import HomePage from "./pages/HomePage";
import ProcessCards from "./pages/ProcessCards";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main id="main-content" role="main">
        <div className="mx-auto max-w-6xl">
          <HomePage />
          <CaseStudies />
          <ProcessCards />
          <Testimonial />
          <ContactUs />
        </div>
        <Footer />
        {/* <div className="h-[200vh]"></div> */}
      </main>
    </div>
  );
}

export default App;
