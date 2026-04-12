import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TriangleDecoration } from "@/components/triangle-decoration"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Ruiz Clark",
  description: "Learn more about Ruiz Clark, AI Edupreneur and Harvard EdLD candidate focused on transforming how institutions leverage artificial intelligence.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <TriangleDecoration position="top-left" size="lg" variant="navy" />
          <TriangleDecoration position="bottom-right" size="md" variant="teal" />
          
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-2/5">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-navy/20 via-teal/20 to-royal-blue/20 rounded-2xl blur-xl" />
                  <div className="relative bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/headshot-K9t7bB3NL5t8AuhIhnzf5d1b7Odm8w.jpg"
                      alt="Ruiz Clark - Professional headshot"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-3/5">
                <p className="text-sm font-medium tracking-wider text-teal uppercase mb-4">
                  AI Edupreneur | Harvard EdLD
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight tracking-tight">
                  Ruiz Clark
                </h1>
                <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                  My mission is to transform how institutions leverage artificial intelligence to meet the needs of learners.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://www.ruizclark.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Contact Me
                  </Link>
                  <Link
                    href="https://www.ruizclark.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors"
                  >
                    Visit Full Website
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography */}
        <section className="py-20 md:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-6">
                  Background
                </h2>
                <div className="prose prose-lg text-muted-foreground">
                  <p className="leading-relaxed mb-6">
                    For more than 20 years, I have held leadership roles around the globe—driving organizational learning, change management, and innovation in education. As an executive, I led a team of 100 staff who supported over 200 teachers, impacting the lives of 30,000 students.
                  </p>
                  <p className="leading-relaxed mb-6">
                    During that time, I oversaw the creation of a Master&apos;s program in Teacher Leadership, spearheaded a nationwide School Transformation Initiative, established a Public Policy Lab, and launched an Innovation Accelerator.
                  </p>
                  <p className="leading-relaxed">
                    Fueled by my passion for educational innovation, I recently co-founded Qüento, an AI-powered platform that elevates student and community voices.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-6">
                  Current Work
                </h2>
                <div className="prose prose-lg text-muted-foreground">
                  <p className="leading-relaxed mb-6">
                    Combining deep program development expertise, technical savvy, and executive coaching, I partner with educational institutions to design and implement AI-driven solutions that deliver measurable results.
                  </p>
                  <p className="leading-relaxed">
                    This doctoral capstone represents the culmination of my work at Harvard Graduate School of Education, where I have focused on understanding how adaptive leadership can catalyze digital transformation in K-12 education through AI organizational readiness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Expertise */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                Areas of Expertise
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Bridging the gap between educational vision and technological implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Innovation Strategy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Design and launch AI-driven initiatives that transform education, from vision development through implementation and evaluation.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Organizational Learning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Use data to guide strategic decisions and drive continuous improvement, fostering cultures of learning and adaptation.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-royal-blue/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-royal-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Executive Coaching</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advise leaders on change management and leadership development, helping them navigate complex organizational transformations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-navy via-royal-blue to-teal relative overflow-hidden">
          <TriangleDecoration position="top-left" size="md" variant="light" className="opacity-5" />
          <TriangleDecoration position="bottom-right" size="lg" variant="light" className="opacity-5" />
          
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision for transforming education through AI.
            </p>
            <Link
              href="https://www.ruizclark.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
