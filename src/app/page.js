import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero_section from "../components/Hero_section";
import Features from "../components/Features";
import Departments from "../components/Departments";
import Popular_Courses from "../components/Popular_Courses";
import Counters_Component from "../components/Counters_Component";
import Testimonials from "../components/Testimonials";
import CTA_Block from "../components/CTA_Block";
import Footer from "@/components/Footer";

export default function Home() {
  return (

    <div>
      <Hero_section />
      <Features />
      <Departments />
      <Popular_Courses />
      <Counters_Component />
      <CTA_Block />
      <Testimonials />
    </div>
  );
}
