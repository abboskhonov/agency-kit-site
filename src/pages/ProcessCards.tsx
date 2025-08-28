import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface processType {
  title: string;
  tagline: string;
  description: string;
  bg_image: string;
  deliverables: {
    item: string;
  }[];
}

const ProcessCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const process: processType[] = [
    {
      title: "Discovery & Strategy",
      tagline: "Getting to Know Your Big Idea",
      description:
        "We begin by diving deep into your vision, your goals, and the problem you’re solving. This stage is all about uncovering the story behind your idea and understanding why it matters. Through thorough market research and a detailed competitor analysis, we identify unique opportunities and define the best way to position your product for long-term success. This step ensures that your foundation is solid before any building begins.",
      deliverables: [
        { item: "Detailed market insights" },
        { item: "Comprehensive competitor breakdown" },
        { item: "A winning strategy tailored to your product" },
      ],
      bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png",
    },
    {
      title: "Planning & Wireframes",
      tagline: "Mapping Out Your Vision",
      description:
        "Once we know where you want to go, we carefully map out how to get there. Our team creates structured wireframes and a detailed project scope so that everyone involved knows exactly what’s being built and how. This stage eliminates guesswork and brings clarity to the entire process. By the end, you’ll have a well-defined roadmap that aligns with your vision and keeps the project on track from start to finish.",
      deliverables: [
        { item: "Complete project blueprint" },
        { item: "High-fidelity wireframes" },
        { item: "Technical implementation plan" },
      ],
      bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png",
    },
    {
      title: "Design & Development",
      tagline: "Building Your Dream Into Reality",
      description:
        "This is where ideas start to take shape. Our designers and developers work hand in hand to turn your vision into a functional, scalable, and visually stunning platform. Every detail is thoughtfully crafted — from intuitive user experiences to reliable back-end systems. We combine creativity with technology to deliver a product that not only looks beautiful but also performs seamlessly and grows with your business.",
      deliverables: [
        { item: "A fully designed user-friendly platform" },
        { item: "Robust, scalable development" },
        { item: "End-to-end tested product ready for growth" },
      ],
      bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804376/fasimage_skodum.png",
    },
    {
      title: "Launch & Growth",
      tagline: "Getting You Out There",
      description:
        "Bringing your platform to life is just the beginning of the journey. We provide full support for launch, making sure everything runs smoothly and your product reaches the right audience. Beyond launch day, we help you craft and refine marketing strategies, track performance, and implement optimizations that fuel sustainable growth. Our focus is on making sure your business doesn’t just go live, but thrives in the market.",
      deliverables: [
        { item: "Hands-on launch support" },
        { item: "Tailored marketing strategy" },
        { item: "Actionable tips and ongoing growth guidance" },
      ],
      bg_image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png",
    },
  ];

  useGSAP(() => {
    const slides = slidesRef.current;
    if (!slides.length || !headingRef.current || !sectionRef.current) return;

    const headerPin = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 5%", // Start pinning when section reaches 20% from top
      endTrigger: slidesRef.current[slidesRef.current.length - 2], // End when last slide is scrolled
      end: "center top", // End when the top of the last slide reaches the top
      pin: headingRef.current,
      pinSpacing: false,
      anticipatePin: 1,
    });

    slides.slice(0, 3).forEach((slide) => {
      if (!slide) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: "top 25%",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        },
      });

      tl.to(slide, {
        scale: 0.6,
        z: -100,
        rotationX: 15,
        opacity: 0,
        duration: 0.7,
        ease: "power2.inOut",
      });
    });

    // Add responsive behavior
    const updatePinning = () => {
      // Check if we're on mobile (you can adjust the breakpoint as needed)
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        // Disable header pinning on mobile
        headerPin.disable();
      } else {
        // Enable header pinning on desktop
        headerPin.enable();
      }
    };

    if (headingRef.current) {
      gsap.effects.fadeUpOnScroll(headingRef.current, {
        start: "top 80%",
        duration: 0.8,
        markers: false,
      });
    }

    // Initial call
    updatePinning();

    // Update on window resize
    window.addEventListener("resize", updatePinning);

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", updatePinning);
    };
  }, []);

  const addSlideRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      slidesRef.current[index] = el;
    }
  };

  return (
    <div ref={sectionRef} className="relative space-y-4">
      <header ref={headingRef} className="z-10 mb-8 space-y-4 text-center md:mb-14">
        <div className="bg-tag-bg w-fit rounded-3xl px-6 py-1 md:mx-auto" role="banner">
          <p className="text-tag align-middle text-xs font-medium">Our Proven Process</p>
        </div>

        <h2
          id="case-studies-heading"
          className="text-h3 text-heading text-left text-3xl font-[500] md:text-center md:text-4xl lg:text-5xl"
        >
          How We Bring Ideas to Life
        </h2>

        <p className="sr-only">
          Explore our latest projects featuring AI-powered platforms, business solutions, and
          innovative designs that have driven measurable growth for our clients.
        </p>
      </header>

      <div ref={containerRef} className="relative">
        {process.map((slide, index) => (
          <div
            key={`slide-main-${index}`}
            ref={(el) => addSlideRef(el, index)}
            className="relative mb-10 flex h-fit w-full items-center justify-center"
          >
            <div
              className={`relative h-fit w-full rounded-lg bg-cover p-10`}
              style={{ backgroundImage: `url(${slide.bg_image})` }}
            >
              <div className="w-full max-w-7/12 space-y-4 rounded-md bg-white/20 p-6 backdrop-blur-lg">
                <div className="space-y-3">
                  <h3 className="heading text-h3 text-heading font-semibold">{slide.title}</h3>
                  <p className="text-sm font-normal tracking-wide text-[#323c4d]">
                    <span> 💡</span> {slide.tagline}
                  </p>
                </div>

                <p className="text-p text-md w-full max-w-4/5 leading-snug text-black/60">
                  {slide.description}
                </p>

                <ul className="mt-8 flex flex-wrap gap-3">
                  {slide.deliverables.map((dl, ix) => (
                    <li
                      key={`deliverable-${dl.item}-${ix}`}
                      className="text-heading bg-tag-bg/20 rounded-4xl px-4 py-1 text-sm tracking-wide backdrop-blur-lg"
                    >
                      {dl.item}
                    </li>
                  ))}
                  <li className="text-heading bg-tag-bg/20 rounded-4xl px-4 py-1 text-sm tracking-wide backdrop-blur-lg">
                    competitor breakdown
                  </li>
                  <li className="text-heading bg-tag-bg/20 rounded-4xl px-4 py-1 text-sm tracking-wide backdrop-blur-lg">
                    {" "}
                    your winning strategy
                  </li>
                </ul>
              </div>
              <div className="absolute right-16 bottom-10">
                {/* <p className='text-8xl font-extrabold bg-clip-text bg-gradient-to-b to-red-400 from-yellow-50'>1</p> */}
                <div className={`relative`}>
                  <span
                    className={`text-9xl font-extrabold text-transparent`}
                    style={{
                      WebkitTextStroke: "2px rgb(225,225,225,0.9",
                      textShadow: "0 1px 2px rgba(225, 225, 225, 0.05)",
                      color: "rgb(0,0,0,0.09)",
                    }}
                  >
                    {index + 1}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessCards;
