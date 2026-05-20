"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Award, Sun, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeLargeTitles"
        background="grid"
        cardStyle="inset"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Portfolio",
          id: "products",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="D&Z Landscaping"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Transforming Your Outdoors Into Living Art"
      description="Professional landscaping and hardscaping services tailored to enhance your property's value and natural beauty."
      buttons={[
        {
          text: "Get A Quote",
          href: "#contact",
        },
        {
          text: "Our Work",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/women-working-greenhouse-with-green-trees_1157-30893.jpg"
      imageAlt="Luxury backyard landscaping service"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/view-robot-taking-care-garden_23-2151804047.jpg",
          alt: "Team member 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cinematic-style-mall_23-2151551284.jpg",
          alt: "Team member 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/view-robot-taking-care-garden_23-2151804041.jpg",
          alt: "Team member 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-panorama-green-city-park-dawn_1127-3213.jpg",
          alt: "Team member 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-standing-front-painted-ladies-san-francisco-usa_53876-49291.jpg",
          alt: "Team member 5",
        },
      ]}
      avatarText="Join 500+ satisfied clients"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="Why Choose D&Z Landscaping"
      metrics={[
        {
          icon: Award,
          label: "Projects Completed",
          value: "500+",
        },
        {
          icon: Users,
          label: "Happy Clients",
          value: "450+",
        },
        {
          icon: Sun,
          label: "Years Experience",
          value: "15+",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Lawn Maintenance",
          description: "Precision mowing and lawn care to ensure your greens stay vibrant.",
          imageSrc: "http://img.b2bpic.net/free-photo/sky-old-grass-summer-nobody_1203-5139.jpg",
          buttonIcon: "ArrowRight",
        },
        {
          title: "Hardscaping & Masonry",
          description: "Custom stone pathways, patios, and retaining walls built to last.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-watering-his-plants-his-garden-man-blue-shirt_1157-41444.jpg",
          buttonIcon: "ArrowRight",
        },
        {
          title: "Garden Design",
          description: "Creative landscapes tailored to your local environment and style.",
          imageSrc: "http://img.b2bpic.net/free-photo/restaurant-vacation-park-cafe-tourism_1203-4964.jpg",
          buttonIcon: "ArrowRight",
        },
        {
          title: "Irrigation Systems",
          description: "Smart watering solutions to optimize water usage and health.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-city-with-apartment-buildings-green-vegetation_23-2150439343.jpg",
          buttonIcon: "ArrowRight",
        },
      ]}
      title="Our Expert Services"
      description="From intricate stone masonry to complete lawn rejuvenation, we deliver excellence in every square inch."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Garden Renovation",
          price: "Custom",
          imageSrc: "http://img.b2bpic.net/free-photo/stepping-stone-garden-path_1252-1029.jpg",
        },
        {
          id: "p2",
          name: "Modern Patio",
          price: "Custom",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-man-working-eco-friendly-wind-power-project-with-paper-plans_23-2148847792.jpg",
        },
        {
          id: "p3",
          name: "Stone Walkway",
          price: "Custom",
          imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-sustainable-garden-with-home-grown-plants_23-2151479074.jpg",
        },
        {
          id: "p4",
          name: "Retaining Wall",
          price: "Custom",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-japanese-garden_23-2149359701.jpg",
        },
        {
          id: "p5",
          name: "Lawn Restoration",
          price: "Custom",
          imageSrc: "http://img.b2bpic.net/free-photo/man-working-eco-friendly-wind-power-project-with-layout_23-2148847779.jpg",
        },
        {
          id: "p6",
          name: "Full Landscape Design",
          price: "Custom",
          imageSrc: "http://img.b2bpic.net/free-photo/greenhouse-owner-presenting-flowers-options-potential-customer-retailer_158595-7007.jpg",
        },
      ]}
      title="Portfolio Highlights"
      description="A glimpse of the landscapes we've crafted with passion and precision."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Mark R.",
          role: "Homeowner",
          company: "Private Residence",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-young-man-standing-front-woman-near-car_23-2147874698.jpg",
        },
        {
          id: "t2",
          name: "Sarah J.",
          role: "Business Owner",
          company: "Local Café",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-walking-romantic-happy-holidays-holding-hand-boyfriend-following-her_1150-4659.jpg",
        },
        {
          id: "t3",
          name: "James L.",
          role: "Homeowner",
          company: "Private Residence",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-woman-holding-her-her_23-2148631401.jpg",
        },
        {
          id: "t4",
          name: "Elena M.",
          role: "Homeowner",
          company: "Private Residence",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/male-gardener-cutting-harvested-flower-garden_23-2148165213.jpg",
        },
        {
          id: "t5",
          name: "Robert B.",
          role: "Property Manager",
          company: "Office Park",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/hands-gardener-orange-gloves-are-trimming-overgrown-green-shrub-using-hedge-shears-sunny-backyard-worker-landscaping-garden-close-up_639032-841.jpg",
        },
      ]}
      title="Client Success Stories"
      description="Don't just take our word for it—hear from satisfied clients across the city."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "Do you offer free quotes?",
          content: "Yes, we provide complimentary consultations and estimates for all landscaping projects.",
        },
        {
          id: "f2",
          title: "What areas do you serve?",
          content: "We serve the entire metro area and surrounding suburbs for residential and commercial work.",
        },
        {
          id: "f3",
          title: "Are you licensed and insured?",
          content: "Absolutely. D&Z Landscaping is fully licensed and insured for your peace of mind.",
        },
      ]}
      title="Common Questions"
      description="Find answers about our services, process, and commitment to quality."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Let's Get Started"
      title="Ready to Transform Your Landscape?"
      description="Contact us today for a free estimate and discover what D&Z can do for your yard."
      buttons={[
        {
          text: "Contact Us Now",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="D&Z Landscaping"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Lawn Care",
              href: "#",
            },
            {
              label: "Landscaping",
              href: "#",
            },
            {
              label: "Masonry",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
