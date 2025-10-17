"use client";

import { SectionHeading } from "@/components/custom/SectionHeading";
import { Marquee } from "@/components/magicui/marquee";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { caseStudies } from "@/data/caseStudies";
import "@/lib/GSAPAnimations";
import { useGSAP } from "@gsap/react";
import Autoplay from "embla-carousel-autoplay";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Zap } from "lucide-react";
import { useRef } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef(null);

  useGSAP(() => {
    const headingElement = heroRef?.current?.querySelector("h1");
    if (headingElement) {
      SplitText.create(headingElement, {
        type: "lines, words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.words, {
            duration: 0.6,
            y: 10,
            opacity: 0.5,
            filter: "blur(6px)",
            autoAlpha: 0,
            stagger: 0.06,
          });
        },
      });
    }

    if (heroRef?.current && caseStudiesRef?.current) {
      gsap.effects.fadeUpOnScroll(caseStudiesRef.current, {
        start: "top 80%",
        duration: 0.8,
        markers: false,
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="item-center flex flex-col flex-nowrap p-5">
      <div
        ref={heroRef}
        className="hero space-y-4 pt-[116px] pb-[48px] md:pt-[128px] md:pb-[128px] md:text-center lg:pt-[140px] lg:pb-[96px]"
      >
        <SectionHeading
          badge="Web & AI Solutions"
          heading="Build Your Digital Presence with CogniLabs"
          description="We create stunning websites, powerful landing pages, intelligent CRM systems, AI chatbots, and Telegram bots that transform how your business connects with customers — delivering seamless digital experiences at scale."
          icon={Zap}
          size="lg"
          align="center"
          as="h1"
          className="heading max-w-4/5 mx-auto"
          headingClassName="md:mx-auto md:w-2/3 leading-tight"
          showDescriptionToScreenReaders={true}
        />

        <div
          aria-label="Call to action buttons"
          className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-center"
        >
          <Button
            aria-describedby="founder-cta-description"
            type="button"
            className="cursor-pointer"
          >
            Start Your Project
          </Button>
          <Button
            aria-describedby="case-studies-cta-description"
            type="button"
            className="cursor-pointer"
            variant={"outline"}
          >
            See Our Work
          </Button>
        </div>

        <div
          className="relative"
          role="region"
          aria-label="Our trusted clients"
        >
          <h2 className="!sr-only">Companies We've Worked With</h2>
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent md:w-48"></div>

          {/* Right fade gradient */}
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l from-gray-50 via-gray-50/90 to-transparent md:w-48"></div>

          <Marquee pauseOnHover className="mt-14">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={`${caseStudy.name}-${index}`}
                className="group mx-1 flex-shrink-0 cursor-pointer md:mx-4"
              >
                <div className="relative flex h-16 items-center justify-center p-4 transition-all duration-300 ease-in-out">
                  <img
                    src={caseStudy.logo_src}
                    alt={`${caseStudy.project_title} logo`}
                    className={`max-h-full max-w-full object-contain opacity-80 grayscale filter transition-all duration-300 ease-in-out hover:opacity-100 hover:brightness-110 hover:grayscale-0`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        <Carousel
          ref={caseStudiesRef}
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          aria-label="case-studies"
          aria-labelledby="featured-case-studies-heading"
          id="case-studies-section"
          className="relative mt-14 w-full"
        >
          <h2 id="featured-case-studies-heading" className="!sr-only">
            Featured Case Studies
          </h2>
          <div className="pointer-events-none absolute top-0 left-0 z-5 h-full w-12 bg-gradient-to-r from-gray-50/80 via-gray-50/20 to-transparent md:w-36"></div>

          <div className="pointer-events-none absolute top-0 right-0 z-5 h-full w-12 bg-gradient-to-l from-gray-50/90 via-gray-50/20 to-transparent md:w-36"></div>

          <CarouselContent>
            {caseStudies.map((caseStudy, index) => (
              <CarouselItem
                key={`${caseStudy.name}-carousel-${index}`}
                className="md:basis-1/2 lg:basis-1/4"
                data-carousel-item
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${caseStudies.length}: ${caseStudy.name}`}
              >
                <div
                  key={`case-study-${index}`}
                  className="w-full max-w-sm space-y-3 text-left"
                >
                  <div className="bg-tag-bg flex aspect-square items-center justify-center rounded-md p-4">
                    <img
                      src={caseStudy["main_image_src"]}
                      className="max-h-full max-w-full object-contain"
                      alt={`${caseStudy.name} project preview - ${caseStudy.project_title}`}
                      loading={index < 4 ? "eager" : "lazy"}
                      decoding={index < 4 ? "sync" : "async"}
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-heading text-md leading-snug">
                      {caseStudy["project_title"]}
                    </p>
                    <div className="flex items-center gap-3">
                      <p className="text-heading text-sm font-medium">
                        CogniLabs
                      </p>
                      <p className="text-heading text-sm">[CUSTOM SOLUTION]</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            aria-label="Previous case study"
            className="left-0 z-50 size-9 translate-x-0 border-0 bg-gray-500/50"
          />
          <CarouselNext
            aria-label="Next case study"
            className="right-0 z-50 size-9 translate-x-0 border-0 bg-gray-500/50"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default HomePage;
