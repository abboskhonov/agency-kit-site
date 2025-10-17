import type { Metadata } from "next";

export const siteConfig = {
  name: "CogniLabs",
  description: "Digital solutions company creating websites, landing pages, CRMs, AI chatbots, and Telegram bots for growing businesses",
  url: "https://cognilabs.com",
  ogImage: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/cognilabs_og_image.png",
  logo: "https://cognilabs.com/logo.png",
  keywords: [
    "web development",
    "landing pages",
    "CRM development",
    "AI chatbots",
    "Telegram bots",
    "digital solutions",
    "web design",
    "custom software",
    "business automation",
    "conversational AI",
    "business applications"
  ],
  authors: [
    {
      name: "CogniLabs Team",
      url: "https://cognilabs.com",
    },
  ],
  creator: "CogniLabs",
  publisher: "CogniLabs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cognilabs.com",
    siteName: "CogniLabs",
    title: "CogniLabs - Digital & AI Solutions for Business",
    description: "Professional web development, CRM systems, AI chatbots, and Telegram bots designed to grow your business",
    images: [
      {
        url: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/cognilabs_og_image.png",
        width: 1200,
        height: 630,
        alt: "CogniLabs - Digital & AI Solutions for Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CogniLabs - Digital & AI Solutions for Business",
    description: "Professional web development, CRM systems, AI chatbots, and Telegram bots designed to grow your business",
    images: ["https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/cognilabs_og_image.png"],
    creator: "@cognilabs",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://cognilabs.com",
  },
  category: "technology",
};


export const pageMetadata = {
  home: {
    title: "CogniLabs - Web & AI Solutions for Growing Businesses",
    description: "Transform your business with custom websites, landing pages, CRM systems, intelligent AI chatbots, and Telegram bots. We deliver digital solutions that drive growth and customer engagement.",
    keywords: [
      "web development",
      "digital solutions",
      "CRM development",
      "AI chatbots",
      "Telegram bots",
      "landing page design",
      "custom web applications",
      "business automation"
    ],
    openGraph: {
      title: "CogniLabs - Web & AI Solutions for Growing Businesses",
      description: "Transform your business with custom websites, landing pages, CRM systems, intelligent AI chatbots, and Telegram bots.",
      url: "https://cognilabs.com",
      type: "website",
    },
    twitter: {
      title: "CogniLabs - Web & AI Solutions for Growing Businesses",
      description: "Transform your business with custom websites, landing pages, CRM systems, intelligent AI chatbots, and Telegram bots.",
    },
    alternates: {
      canonical: "https://cognilabs.com",
    },
  },
  about: {
    title: "About CogniLabs - Digital & AI Solutions Company",
    description: "Learn about CogniLabs' mission to deliver innovative digital and AI solutions. We build websites, CRMs, AI chatbots, and Telegram bots that help businesses scale.",
    keywords: [
      "CogniLabs",
      "web development",
      "AI solutions",
      "digital agency",
      "custom software",
      "team expertise",
      "business technology",
      "company mission"
    ],
    openGraph: {
      title: "About CogniLabs - Digital & AI Solutions Company",
      description: "Learn about CogniLabs' mission to deliver innovative digital and AI solutions. We build websites, CRMs, AI chatbots, and Telegram bots that help businesses scale.",
      url: "https://cognilabs.com/about",
      type: "website",
    },
    twitter: {
      title: "About CogniLabs - Digital & AI Solutions Company",
      description: "Learn about CogniLabs' mission to deliver innovative digital and AI solutions. We build websites, CRMs, AI chatbots, and Telegram bots that help businesses scale.",
    },
    alternates: {
      canonical: "https://cognilabs.com/about",
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "CogniLabs",
      "description": "Digital solutions company creating websites, landing pages, CRMs, AI chatbots, and Telegram bots for growing businesses",
      "url": "https://cognilabs.com",
      "logo": "https://cognilabs.com/logo.png",
      "numberOfEmployees": "20-50",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://linkedin.com/company/cognilabs",
        "https://twitter.com/cognilabs"
      ],
      "knowsAbout": [
        "Web Development",
        "AI Chatbots",
        "CRM Systems",
        "Telegram Bots",
        "Digital Solutions",
        "Business Automation"
      ]
    }
  },
  services: {
    title: "Our Services - CogniLabs Digital & AI Solutions",
    description: "Explore our comprehensive services: custom websites, high-converting landing pages, powerful CRM systems, intelligent AI chatbots, and Telegram bots tailored for your business.",
    keywords: [
      "web design services",
      "landing page design",
      "CRM development",
      "AI chatbot development",
      "Telegram bot development",
      "custom software",
      "digital transformation",
      "business solutions"
    ],
    openGraph: {
      title: "Our Services - CogniLabs Digital & AI Solutions",
      description: "Explore our comprehensive services: custom websites, high-converting landing pages, powerful CRM systems, intelligent AI chatbots, and Telegram bots.",
      url: "https://cognilabs.com/services",
      type: "website",
    },
    twitter: {
      title: "Our Services - CogniLabs Digital & AI Solutions",
      description: "Explore our comprehensive services: custom websites, landing pages, CRM systems, AI chatbots, and Telegram bots.",
    },
    alternates: {
      canonical: "https://cognilabs.com/services",
    },
  },
  portfolio: {
    title: "Portfolio & Case Studies - CogniLabs Projects",
    description: "Discover how CogniLabs has helped businesses scale with custom websites, CRM systems, AI chatbots, and Telegram bots. View our successful project case studies.",
    keywords: [
      "portfolio",
      "case studies",
      "project showcase",
      "web projects",
      "CRM solutions",
      "chatbot implementations",
      "business results",
      "client success"
    ],
    openGraph: {
      title: "Portfolio & Case Studies - CogniLabs Projects",
      description: "Discover how CogniLabs has helped businesses scale with custom solutions. View our successful project case studies.",
      url: "https://cognilabs.com/portfolio",
      type: "website",
    },
    twitter: {
      title: "Portfolio & Case Studies - CogniLabs Projects",
      description: "Discover how CogniLabs has helped businesses scale with custom solutions.",
    },
    alternates: {
      canonical: "https://cognilabs.com/portfolio",
    },
  },
  blog: {
    title: "Blog - Digital & AI Insights from CogniLabs",
    description: "Stay updated with the latest trends, tips, and insights in web development, AI chatbots, CRM systems, and digital solutions for business growth.",
    keywords: [
      "blog",
      "digital insights",
      "web development tips",
      "AI chatbot insights",
      "CRM guides",
      "business automation",
      "technology trends",
      "digital transformation"
    ],
    openGraph: {
      title: "Blog - Digital & AI Insights from CogniLabs",
      description: "Stay updated with the latest trends, tips, and insights in web development, AI chatbots, CRM systems, and digital solutions.",
      url: "https://cognilabs.com/blog",
      type: "website",
    },
    twitter: {
      title: "Blog - Digital & AI Insights from CogniLabs",
      description: "Stay updated with the latest trends, tips, and insights in web development, AI chatbots, and digital solutions.",
    },
    alternates: {
      canonical: "https://cognilabs.com/blog",
    },
  },
};

export function generatePageMetadata(
  page: keyof typeof pageMetadata,
  customMetadata?: Partial<Metadata>
): Metadata {
  const baseMetadata = pageMetadata[page];
  
  return {
    title: baseMetadata.title,
    description: baseMetadata.description,
    keywords: baseMetadata.keywords,
    openGraph: {
      ...siteConfig.openGraph,
      ...baseMetadata.openGraph,
    },
    twitter: {
      ...siteConfig.twitter,
      ...baseMetadata.twitter,
    },
    alternates: baseMetadata.alternates,
    robots: siteConfig.robots,
    verification: siteConfig.verification,
    ...customMetadata,
  };
}


export function generateBlogPostMetadata(
  title: string,
  description: string,
  publishedTime: string,
  slug: string,
  image?: string
): Metadata {
  const blogUrl = `https://cognilabs.com/blog/${slug}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    title: `${title} - CogniLabs Blog`,
    description,
    keywords: [
      ...siteConfig.keywords,
      "blog post",
      "web development article",
      "digital solutions insights"
    ],
    openGraph: {
      ...siteConfig.openGraph,
      title: `${title} - CogniLabs Blog`,
      description,
      url: blogUrl,
      type: "article",
      publishedTime,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...siteConfig.twitter,
      title: `${title} - CogniLabs Blog`,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: blogUrl,
    },
    robots: siteConfig.robots,
  };
}


export function generateBlogPostStructuredData(
  title: string,
  description: string,
  publishedTime: string,
  slug: string,
  author?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    datePublished: publishedTime,
    dateModified: publishedTime,
    description,
    url: `https://cognilabs.com/blog/${slug}`,
    author: {
      "@type": "Person",
      name: author || "CogniLabs Team",
    },
    publisher: {
      "@type": "Organization",
      name: "CogniLabs",
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://cognilabs.com/blog/${slug}`,
    },
  };
}


export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  robots: siteConfig.robots,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  verification: siteConfig.verification,
  alternates: siteConfig.alternates,
  category: siteConfig.category,
};