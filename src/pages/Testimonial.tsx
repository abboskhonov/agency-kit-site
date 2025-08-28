import type { CaseStudyType } from "@/constants/caseStudies";
import { caseStudies } from "@/constants/caseStudies";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface TestimonialCardProps {
  item: CaseStudyType;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ item, index }) => {
  const hasTestimonial = Boolean(item.testimonial && item.testimonial.trim().length > 0);
  if (!hasTestimonial) return null;

  return (
    <article
      key={`${item.name}-testimonial-${index}`}
      className="testimonial-card-bg flex h-full w-full flex-col space-y-4 rounded-2xl text-left"
      aria-labelledby={`testimonial-${index}-title`}
      role="article"
    >
      <div className="flex aspect-video items-center justify-center overflow-hidden rounded-t-md">
        <img
          src={item.test_img}
          className="aspect-video h-full w-full object-cover"
          alt={`${item.name} project preview image`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="relative flex flex-1 flex-col space-y-4 px-4 pb-4">
        <blockquote
          className="text-heading/90 text-md leading-tight font-bold tracking-wide"
          cite={item.case_study_link}
        >
          <p id={`testimonial-${index}-title`}>{item.testimonial}</p>
        </blockquote>
        <div className="mt-auto space-y-1.5" aria-label="Client details">
          <div className="flex items-center">
            <img
              src={item.logo_src}
              className="aspect-auto max-h-6 w-auto"
              alt={`${item.name} company logo`}
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="text-heading text-sm font-medium">
            {item.founder_name}
            {item.position ? (
              <span className="text-tag ml-2 text-sm font-normal">{item.position}</span>
            ) : null}
          </p>
        </div>
      </div>
    </article>
  );
};

function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLElement>(null);

  const testimonials = caseStudies.filter((cs) => cs.testimonial);

  useGSAP(() => {
    if (headingRef.current) {
      gsap.effects.fadeUpOnScroll(headingRef.current, {
        start: "top 80%",
        duration: 0.8,
        markers: false,
      });
    }

    // Cards fade-up (staggered, on scroll)
    if (gridRef.current && gsap.effects?.fadeUpOnScroll) {
      const cards = gridRef.current.querySelectorAll("article");
      cards.forEach((card, index) => {
        gsap.effects.fadeUpOnScroll(card as Element, {
          start: "top 92%",
          duration: 0.7,
          delay: Math.min(index * 0.04, 0.3),
          markers: false,
        });
      });
    }

    if (statsRef.current && gsap.effects?.fadeUpOnScroll) {
      const items = statsRef.current.querySelectorAll('[data-stat-item="true"]');
      items.forEach((el) => {
        gsap.effects.fadeUpOnScroll(el as Element, {
          start: "top 95%",
          duration: 0.6,
          // delay: index * 0.08,
          markers: false,
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="py-16 md:py-24"
        aria-labelledby="testimonials-heading"
        role="region"
      >
        {/* Header */}
        <header ref={headingRef} className="mb-8 space-y-4 text-center md:mb-14">
          <div className="bg-tag-bg w-fit rounded-3xl px-6 py-1 md:mx-auto" role="banner">
            <p className="text-tag align-middle text-xs font-medium">Testimonials</p>
          </div>

          <h2 id="testimonials-heading" className="text-h2 text-heading text-left md:text-center">
            Meet our happy clients
          </h2>

          <p className="sr-only" aria-live="polite">
            Read what our clients say about working with Ionio.
          </p>
        </header>

        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3"
          ref={gridRef}
          role="list"
          aria-label="Client testimonials"
        >
          {testimonials.map((item, index) => (
            <div role="listitem" key={`${item.name}-${index}`}>
              <TestimonialCard item={item} index={index} />
            </div>
          ))}
        </div>

        <section
          className="mt-14 md:mt-16"
          aria-labelledby="stats-heading"
          role="region"
          ref={statsRef}
        >
          <h3 id="stats-heading" className="sr-only">
            Impact metrics
          </h3>
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col divide-y divide-gray-200 md:flex-row md:divide-x md:divide-y-0">
              <div
                className="flex flex-1 flex-col items-start px-6 py-6 md:items-center md:py-0"
                data-stat-item="true"
              >
                <div className="text-heading text-4xl font-semibold md:text-5xl">120+</div>
                <p className="text-label mt-2 text-base">AI-powered projects delivered</p>
              </div>

              <div
                className="flex flex-1 flex-col items-start px-6 py-6 md:items-center md:py-0"
                data-stat-item="true"
              >
                <div className="text-heading text-4xl font-semibold md:text-5xl">50+</div>
                <p className="text-label mt-2 text-base">Global clients we’ve partnered with</p>
              </div>

              <div
                className="flex flex-1 flex-col items-start px-6 py-6 md:items-center md:py-0"
                data-stat-item="true"
              >
                <div className="text-heading text-4xl font-semibold md:text-5xl">$50k+</div>
                <p className="text-label mt-2 text-base">Monthly recurring revenue generated</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Testimonial;
