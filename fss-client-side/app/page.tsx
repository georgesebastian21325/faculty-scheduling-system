import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, BookOpen, Calendar, Bell, ArrowRight } from "lucide-react"
import { AdminCard } from "@/components/ui/admincard"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 relative">
              <Image src="/emblem.png" alt="UST Logo" fill className="object-contain" />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight" style={{ color: "#BE152F" }}>
                College of Information &<br />
                <span className="text-[#3A3838]">Computing Sciences</span>
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-[#3A3838] hover:text-[#BE152F] font-medium transition-colors">
              Home
            </Link>
            <Link href="#" className="text-[#3A3838] hover:text-[#BE152F] font-medium transition-colors">
              About
            </Link>
            <Link href="#" className="text-[#3A3838] hover:text-[#BE152F] font-medium transition-colors">
              Programs
            </Link>
            <Link href="#" className="text-[#3A3838] hover:text-[#BE152F] font-medium transition-colors">
              Faculty
            </Link>
            <Link href="#" className="text-[#3A3838] hover:text-[#BE152F] font-medium transition-colors">
              Research
            </Link>
            <Link href="#" className="text-[#3A3838] hover:text-[#BE152F] font-medium transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden md:flex border-[#BE152F] text-[#BE152F] hover:bg-[#BE152F] hover:text-white transition-colors"
            >
              Student Portal
            </Button>
            <Button className="bg-[#BE152F] hover:bg-[#a01227] text-white transition-colors">Login</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative py-20 px-4"
        style={{
          background: "linear-gradient(135deg, #BE152F 0%, #3A3838 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Shaping the Future Through Computing Excellence</h1>
            <p className="text-xl mb-8 text-white/90">
              The University of Santo Tomas College of Information and Computing Sciences is committed to excellence in
              education, research, and innovation in the field of computing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-[#BE152F] hover:bg-gray-100 transition-colors text-base px-6 py-6">
                Explore Programs
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/20 transition-colors text-base px-6 py-6"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Administrators Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#3A3838" }}>
              College <span style={{ color: "#BE152F" }}>Administration</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated leaders guiding the College of Information and Computing Sciences towards academic
              excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AdminCard
              name="Asst. Prof. Christopher D. Ladao, MSCS"
              position="Dean"
              imageSrc="/placeholder.svg?height=300&width=300"
            />

            <AdminCard
              name="Rev. Fr. Gaspar Sigaya, O.P."
              position="Regent"
              imageSrc="/placeholder.svg?height=300&width=300"
            />

            <AdminCard
              name="Assoc. Prof. Perla P. Cosme, MSCS"
              position="Assistant Dean"
              imageSrc="/placeholder.svg?height=300&width=300"
            />

            <AdminCard
              name="Asst. Prof. Arne B. Barcelo, PhD"
              position="College Secretary"
              imageSrc="/placeholder.svg?height=300&width=300"
            />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#3A3838" }}>
                Academic <span style={{ color: "#BE152F" }}>Programs</span>
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Discover our comprehensive range of undergraduate and graduate programs designed to prepare students for
                the evolving world of technology.
              </p>
            </div>
            <Button
              variant="outline"
              className="mt-4 md:mt-0 border-[#BE152F] text-[#BE152F] hover:bg-[#BE152F] hover:text-white transition-colors"
            >
              View All Programs <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#BE152F]/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-[#BE152F]" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#3A3838" }}>
                  BS in Computer Science
                </h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive program focusing on algorithms, programming languages, and computational theory.
                </p>
                <Link href="#" className="text-[#BE152F] font-medium flex items-center hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#BE152F]/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-[#BE152F]" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#3A3838" }}>
                  BS in Information Technology
                </h3>
                <p className="text-gray-600 mb-4">
                  Focuses on practical applications of computing technology in business and organizational contexts.
                </p>
                <Link href="#" className="text-[#BE152F] font-medium flex items-center hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#BE152F]/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-[#BE152F]" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#3A3838" }}>
                  MS in Computer Science
                </h3>
                <p className="text-gray-600 mb-4">
                  Advanced studies in specialized areas of computer science for professionals and researchers.
                </p>
                <Link href="#" className="text-[#BE152F] font-medium flex items-center hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#3A3838" }}>
                News & <span style={{ color: "#BE152F" }}>Events</span>
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Stay updated with the latest happenings, achievements, and upcoming events at the College of Information
                and Computing Sciences.
              </p>
            </div>
            <Button
              variant="outline"
              className="mt-4 md:mt-0 border-[#BE152F] text-[#BE152F] hover:bg-[#BE152F] hover:text-white transition-colors"
            >
              View All News <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 relative">
                <Image src="/placeholder.svg?height=400&width=600" alt="News Image" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="h-4 w-4 text-[#BE152F]" />
                  <span className="text-sm text-gray-500">June 10, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#3A3838" }}>
                  CICS Students Win National Hackathon
                </h3>
                <p className="text-gray-600 mb-4">
                  A team of Computer Science students secured first place in the National Collegiate Hackathon with
                  their innovative solution.
                </p>
                <Link href="#" className="text-[#BE152F] font-medium flex items-center hover:underline">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 relative">
                <Image src="/placeholder.svg?height=400&width=600" alt="Event Image" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Bell className="h-4 w-4 text-[#BE152F]" />
                  <span className="text-sm text-gray-500">Upcoming: July 5, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#3A3838" }}>
                  Annual Tech Summit 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Join us for the annual Technology Summit featuring industry leaders, workshops, and networking
                  opportunities.
                </p>
                <Link href="#" className="text-[#BE152F] font-medium flex items-center hover:underline">
                  Register now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 relative">
                <Image src="/placeholder.svg?height=400&width=600" alt="Research Image" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="h-4 w-4 text-[#BE152F]" />
                  <span className="text-sm text-gray-500">May 28, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#3A3838" }}>
                  Faculty Research Published in IEEE
                </h3>
                <p className="text-gray-600 mb-4">
                  Dr. Barcelo's groundbreaking research on AI ethics has been published in the prestigious IEEE journal.
                </p>
                <Link href="#" className="text-[#BE152F] font-medium flex items-center hover:underline">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3A3838] text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-10 w-10 relative">
                  <Image src="/emblem.png" alt="UST Logo" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight text-white">
                    College of Information &<br />
                    Computing Sciences
                  </h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                University of Santo Tomas
                <br />
                España Boulevard, Sampaloc
                <br />
                Manila, Philippines 1015
              </p>
              <p className="text-gray-300">
                Email: cics@ust.edu.ph
                <br />
                Phone: (632) 8-123-4567
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    About CICS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Academic Programs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Faculty & Staff
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Student Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Programs</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    BS in Computer Science
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    BS in Information Technology
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    BS in Information Systems
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    MS in Computer Science
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    PhD in Computing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Connect With Us</h3>
              <div className="flex space-x-4 mb-6">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#BE152F] transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#BE152F] transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#BE152F] transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#BE152F] transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter for updates on events, news, and opportunities.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#BE152F]"
                />
                <Button className="rounded-l-none bg-[#BE152F] hover:bg-[#a01227] text-white transition-colors">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300">
            <p>
              © {new Date().getFullYear()} University of Santo Tomas - College of Information and Computing Sciences.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
