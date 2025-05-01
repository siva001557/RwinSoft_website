import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Pen, Code, BarChart3, Award, Users, Target, Handshake } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="font-bold text-2xl text-gray-900 dark:text-white">RWINSOFT</div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm font-medium"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm font-medium"
            >
              Work
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm font-medium"
            >
              Process
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm font-medium"
            >
              Careers
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button className="bg-green-500 hover:bg-green-600 text-white">Contact Us</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Background pattern"
              width={1200}
              height={600}
              className="object-contain"
            />
          </div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            A Digital Product Studio
            <br />
            that will Work
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 text-sm">
              For Startups
            </span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 text-sm">
              Enterprise leaders
            </span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 text-sm">
              Media & Publishers
            </span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 text-sm">
              Social/Good
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="border-gray-300 dark:border-gray-700 dark:text-gray-300">
              Our Works
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white">Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-10 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <p className="text-center text-gray-500 dark:text-gray-400 mb-8">Trusted by 250+ Companies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-gray-400 dark:text-gray-500 font-medium">City Printer</div>
            <div className="text-gray-400 dark:text-gray-500 font-medium">Sri Ayangaran</div>
            <div className="text-gray-400 dark:text-gray-500 font-medium">Oscar Printer</div>
            <div className="text-gray-400 dark:text-gray-500 font-medium">Hugam textile</div>
            <div className="text-gray-400 dark:text-gray-500 font-medium">Rithula Fashion</div>
            <div className="text-gray-400 dark:text-gray-500 font-medium">Sri Jayam</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Transform your brand with our innovative digital solutions that captivate and engage your audience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Design */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Pen className="text-green-500 dark:text-green-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Design</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                At RwinSoft, our design team is passionate about creating intuitive user-centric designs that not just
                look great but also deliver exceptional experiences. Great design is not just about aesthetics; it's
                about creating meaningful user experiences.
              </p>
              <Button variant="outline" className="w-full justify-center mt-4 dark:border-gray-700 dark:text-gray-300">
                Learn More
              </Button>
            </div>

            {/* Engineering */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Code className="text-green-500 dark:text-green-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Engineering</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                Our engineering team combines technical expertise with a passion for innovation to build robust and
                scalable solutions. We leverage cutting-edge technologies and best practices to deliver high-performance
                applications tailored to your specific needs.
              </p>
              <Button variant="outline" className="w-full justify-center mt-4 dark:border-gray-700 dark:text-gray-300">
                Learn More
              </Button>
            </div>

            {/* Project Management */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="text-green-500 dark:text-green-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Management</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                Our experienced project management team ensures that your projects are delivered on time, within budget,
                and to the highest quality standards. We follow industry-standard methodologies and employ effective
                communication and collaboration tools to keep the entire process transparent and efficient.
              </p>
              <Button variant="outline" className="w-full justify-center mt-4 dark:border-gray-700 dark:text-gray-300">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose RwinSoft?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to
              delivering exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Expertise */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-green-500 dark:text-green-400 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Expertise</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our team consists of highly skilled professionals who have a deep understanding of the digital
                    landscape. We stay updated with the latest industry trends and best practices to deliver
                    cutting-edge solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Client-Centric Approach */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-green-500 dark:text-green-400 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Client-Centric Approach</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals,
                    and tailor our services to meet your specific requirements. Your success is our success.
                  </p>
                </div>
              </div>
            </div>

            {/* Results-Driven Solutions */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="text-green-500 dark:text-green-400 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Results-Driven Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our primary focus is on delivering results. We combine creativity and technical expertise to create
                    digital products that drive business growth, enhance user experiences, and provide a competitive
                    advantage.
                  </p>
                </div>
              </div>
            </div>

            {/* Collaborative Partnership */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Handshake className="text-green-500 dark:text-green-400 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Collaborative Partnership</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We value long-term relationships with our clients. We see ourselves as your digital partner,
                    providing ongoing support, maintenance, and updates to ensure your digital products continue to
                    thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What our Clients say About us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              At RwinSoft, we take pride in delivering exceptional digital products and services that drive success for
              our clients. Here's what some of our satisfied clients have to say about their experience working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                RwinSoft has been instrumental in Transforming our Online Presence.
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                The team delivered a website that is both visually appealing and design-focused. It's a really stunning
                and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier!
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-green-500 dark:text-green-400 font-medium">JS</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">John Smith</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">CEO of XYZ Boutique</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="dark:border-gray-700 dark:text-gray-300">
                  Open Website
                </Button>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Working with RwinSoft was a breeze.
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                They understood our vision for a website app that streamlined our food delivery service. The app they
                designed exceeded our expectations, and customers love the seamless ordering experience. RwinSoft is a
                trusted partner we highly recommend.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-green-500 dark:text-green-400 font-medium">SJ</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Sarah Johnson</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Founder of Hungry Bites</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="dark:border-gray-700 dark:text-gray-300">
                  Open Website
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Still have any questions? Contact our Team via hello@rwinsoft.com
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-white border border-gray-100 rounded-lg overflow-hidden dark:bg-gray-700 dark:border-gray-600"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <span className="bg-green-100 text-green-500 w-8 h-8 rounded-full flex items-center justify-center font-medium dark:bg-green-800">
                      01
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      What services does RwinSoft provide?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-gray-600 dark:text-gray-300">
                  RwinSoft offers a range of services including web design, engineering, and project management. We
                  specialize in UI/UX design, web development, mobile app development, custom software development,
                  branding and identity, and more.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white border border-gray-100 rounded-lg overflow-hidden dark:bg-gray-700 dark:border-gray-600"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <span className="bg-green-100 text-green-500 w-8 h-8 rounded-full flex items-center justify-center font-medium dark:bg-green-800">
                      02
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      How can RwinSoft help my business?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-gray-600 dark:text-gray-300">
                  We help businesses transform their digital presence with custom solutions that enhance user
                  experience, streamline operations, and drive growth. Our team works closely with you to understand
                  your specific needs and deliver tailored solutions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white border border-gray-100 rounded-lg overflow-hidden dark:bg-gray-700 dark:border-gray-600"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <span className="bg-green-100 text-green-500 w-8 h-8 rounded-full flex items-center justify-center font-medium dark:bg-green-800">
                      03
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      What industries does RwinSoft work with?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-gray-600 dark:text-gray-300">
                  We work with clients across various industries including e-commerce, healthcare, finance, education,
                  real estate, and more. Our diverse experience allows us to bring fresh perspectives and innovative
                  solutions to any industry.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-8 text-center border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Thank you for your interest in RwinSoft.
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                We would love to hear from you and discuss how we can help bring your digital vision to life. Here are
                the different ways you can get in touch with us.
              </p>
              <Button className="mt-6 bg-green-500 hover:bg-green-600 text-white">Start Project</Button>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Type here"
                    className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Why are you contacting us?
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="web-design" className="text-green-500 border-gray-300 dark:border-gray-600" />
                    <label htmlFor="web-design" className="text-sm text-gray-600 dark:text-gray-400">
                      Web Design
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="collaboration" className="text-green-500 border-gray-300 dark:border-gray-600" />
                    <label htmlFor="collaboration" className="text-sm text-gray-600 dark:text-gray-400">
                      Collaboration
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="mobile-app" className="text-green-500 border-gray-300 dark:border-gray-600" />
                    <label htmlFor="mobile-app" className="text-sm text-gray-600 dark:text-gray-400">
                      Mobile App Design
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="other" className="text-green-500 border-gray-300 dark:border-gray-600" />
                    <label htmlFor="other" className="text-sm text-gray-600 dark:text-gray-400">
                      Other
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Budget</label>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Slide to indicate your budget range</p>
                <div className="px-2">
                  <Slider defaultValue={[50]} max={100} step={1} className="py-4" />
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <span>$1000</span>
                    <span>$50000</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
                <textarea
                  placeholder="Type here"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                ></textarea>
              </div>

              <div className="text-center">
                <Button className="px-8 bg-green-500 hover:bg-green-600 text-white">Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-100 dark:bg-gray-800 dark:border-gray-700">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="font-bold text-2xl text-gray-900 mb-4 md:mb-0 dark:text-white">RWINSOFT</div>
            <nav className="flex flex-wrap justify-center gap-6">
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm dark:text-gray-300 dark:hover:text-white"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm dark:text-gray-300 dark:hover:text-white"
              >
                Services
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm dark:text-gray-300 dark:hover:text-white"
              >
                Work
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm dark:text-gray-300 dark:hover:text-white"
              >
                Process
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm dark:text-gray-300 dark:hover:text-white"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm dark:text-gray-300 dark:hover:text-white"
              >
                Careers
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm dark:text-gray-300 dark:hover:text-white"
              >
                Contact
              </Link>
            </nav>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-600 text-sm dark:text-gray-300">Stay Connected</p>
              <div className="flex gap-4 mt-2">
                <Link href="#" className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center dark:bg-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center dark:bg-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center dark:border-gray-700">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="flex items-center gap-2 text-gray-600 text-sm dark:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>hello@rwinsoft.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm dark:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+91 97876 28438</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm dark:text-gray-400">© 2023 RwinSoft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
