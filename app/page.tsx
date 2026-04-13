import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TriangleDecoration, SectionDivider } from "@/components/triangle-decoration"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <TriangleDecoration position="top-left" size="lg" variant="navy" />
          <TriangleDecoration position="top-right" size="md" variant="teal" />
          <TriangleDecoration position="bottom-right" size="lg" variant="royal" />
          
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="max-w-4xl">
              <p className="text-sm font-medium tracking-wider text-teal uppercase mb-4">
                Doctoral Capstone Defense
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight text-balance">
                Building AI Organizational Readiness for Digital Transformation
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                A case study in adaptive leadership, system coherence, and the convergence of human-centered change management with technological integration.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/theory"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Explore the Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/model"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors"
                >
                  View the Framework
                </Link>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div>
                  <p className="text-sm text-muted-foreground">Presented by</p>
                  <p className="text-lg font-semibold text-foreground">Ruiz Clark</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Institution</p>
                  <p className="text-lg font-semibold text-foreground">Harvard Graduate School of Education</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Defense Date</p>
                  <p className="text-lg font-semibold text-foreground">April 17, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* The Broader Challenge */}
        <section className="py-20 md:py-28 bg-background relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                The Broader Challenge
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                School districts are navigating real financial constraints while facing growing pressure to integrate AI into their systems. This creates a fundamental tension: less capacity, but greater expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Turbulent Crosswinds</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Districts face political shifts, economic funding cliffs, and rapid technological disruption simultaneously.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Ultimate Aim</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Achieving meaningful digital transformation in the era of generative AI requires more than surface-level integration.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-royal-blue/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-royal-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Core Argument</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Digital transformation relies on AI organizational readiness, system coherence, and organizational ambidexterity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Central Thesis Quote */}
        <section className="py-20 bg-gradient-to-r from-navy via-royal-blue to-teal relative overflow-hidden">
          <TriangleDecoration position="top-left" size="md" variant="light" className="opacity-5" />
          <TriangleDecoration position="bottom-right" size="lg" variant="light" className="opacity-5" />
          
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white leading-relaxed text-balance">
                Digital transformation in the age of AI is predicated on the collective aptitude of leaders within a given context to foster system-level coherence, thereby promoting district-wide AI literacy for all learners.
              </p>
            </blockquote>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-20 md:py-28 bg-secondary/30 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                Project Overview
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                This strategic project focused on providing AI capacity building to the executive cabinet of a large school district in California, serving over 70,000 students.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">The Context</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Digital Promise, an educational nonprofit established to end the digital divide in US public schools, launched its first fee-for-service project through a newly created division. By partnering with district executive-level leaders, Digital Promise delivered a full-day workshop, guiding participants through the process of establishing a district-wide vision for AI literacy as well as a communication plan.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Twenty staff members were engaged in the design and implementation of the project. The team had just 36 production days to deliver two separate components, requiring rapid execution and adaptive leadership throughout.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Organizational Shift</h4>
                  <p className="text-foreground">
                    Implemented amid restructuring, requiring cross-functional collaboration on a new team.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">First Milestone</h4>
                  <p className="text-foreground">
                    Launched the first high-profile fee-for-service project after restructuring. 
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Rapid Execution</h4>
                  <p className="text-foreground">
                    Led 20 teammates to execute two program components in 36 full production days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Terms */}
        <section className="py-20 md:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                Key Concepts
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Understanding the foundational concepts that underpin this work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group">
                <div className="h-1 w-16 bg-navy mb-6 group-hover:w-24 transition-all duration-300" />
                <h3 className="text-lg font-semibold text-foreground mb-3">AI Literacy</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  An individual learner&apos;s mastery over intelligent technologies, including the knowledge and skills to critically apply AI tools safely and effectively.
                </p>
              </div>

              <div className="group">
                <div className="h-1 w-16 bg-royal-blue mb-6 group-hover:w-24 transition-all duration-300" />
                <h3 className="text-lg font-semibold text-foreground mb-3">AI Organizational Readiness</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  The collective aptitude of a system to effectively integrate emerging technologies across workstreams.
                </p>
              </div>

              <div className="group">
                <div className="h-1 w-16 bg-teal mb-6 group-hover:w-24 transition-all duration-300" />
                <h3 className="text-lg font-semibold text-foreground mb-3">Digital Transformation</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  The convergence of human-centered change management orchestrated strategically to unlock the fullest potential of technological integration across a system.
                </p>
              </div>

              <div className="group">
                <div className="h-1 w-16 bg-light-blue mb-6 group-hover:w-24 transition-all duration-300" />
                <h3 className="text-lg font-semibold text-foreground mb-3">Change Management</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  A strategic process used to move an organization from its existing state to a desired state by addressing complex, human-centered challenges.
                </p>
              </div>

              <div className="group">
                <div className="h-1 w-16 bg-periwinkle mb-6 group-hover:w-24 transition-all duration-300" />
                <h3 className="text-lg font-semibold text-foreground mb-3">System Coherence</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  The strategic alignment of people, task, informal organization, and formal arrangement in order to achieve desired outputs.
                </p>
              </div>

              <div className="group">
                <div className="h-1 w-16 bg-navy mb-6 group-hover:w-24 transition-all duration-300" />
                <h3 className="text-lg font-semibold text-foreground mb-3">Organizational Ambidexterity</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  The ability of an organization to simultaneously leverage existing assets (exploitation) while looking outwardly to untapped potential (exploration).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-secondary via-background to-secondary/50 relative overflow-hidden">
          <TriangleDecoration position="bottom-left" size="md" variant="teal" />
          <TriangleDecoration position="top-right" size="sm" variant="royal" />
          
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-6">
              Explore the Full Case Study
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
              Discover how adaptive leadership, system coherence, and organizational ambidexterity converge to enable meaningful digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/theory"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Theory of Action
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/outcomes"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                View Outcomes
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
