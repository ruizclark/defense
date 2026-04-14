import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TriangleDecoration, SectionDivider } from "@/components/triangle-decoration"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Theory of Action | Building AI Organizational Readiness",
  description: "Explore the theory of action, logic model, and project timeline for the AI organizational readiness capstone project.",
}

export default function TheoryPage() {
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
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-wider text-teal uppercase mb-4">
                Project Architecture
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight tracking-tight">
                Theory of Action
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                The strategic framework that guided the design, implementation, and evaluation of this AI capacity building project.
              </p>
            </div>
          </div>
        </section>

        {/* Theory of Action */}
        <section className="py-20 md:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                The Strategic Framework
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                This Theory of Action weaves the concepts of AI readiness, coherence, and ambidexterity together, outlining the strategic path for this project.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* IF Statement */}
              <div className="bg-gradient-to-br from-navy/5 to-navy/10 rounded-2xl p-8 border border-navy/20">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-sm font-bold text-navy uppercase tracking-wider">If</span>
                  <div className="h-px flex-1 bg-navy/20" />
                </div>
                <p className="text-foreground font-medium mb-6">
                  I strategically lead the Powerful Learning Team&apos;s first fee-for-service project by:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-navy/20 flex items-center justify-center text-xs font-semibold text-navy">1</span>
                    <span className="text-muted-foreground">Seeking to understand the context and history</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-navy/20 flex items-center justify-center text-xs font-semibold text-navy">2</span>
                    <span className="text-muted-foreground">Practicing deep listening to discern team dynamics</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-navy/20 flex items-center justify-center text-xs font-semibold text-navy">3</span>
                    <span className="text-muted-foreground">Cultivating a positive working environment that fosters relationship building</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-navy/20 flex items-center justify-center text-xs font-semibold text-navy">4</span>
                    <span className="text-muted-foreground">Harnessing the power of my own skills</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-navy/20 flex items-center justify-center text-xs font-semibold text-navy">5</span>
                    <span className="text-muted-foreground">Learning iteratively while evaluating impact</span>
                  </li>
                </ul>
              </div>

              {/* THEN Statement */}
              <div className="bg-gradient-to-br from-teal/5 to-teal/10 rounded-2xl p-8 border border-teal/20">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-sm font-bold text-teal uppercase tracking-wider">Then</span>
                  <div className="h-px flex-1 bg-teal/20" />
                </div>
                <p className="text-foreground leading-relaxed">
                  I will establish a <strong>blueprint for executive-level AI readiness programming</strong> that can be scaled.
                </p>
                <div className="mt-8 pt-8 border-t border-teal/20">
                  <p className="text-sm text-muted-foreground">
                    The immediate purpose of this blueprint was to secure additional fee-for-service engagements, demonstrating a replicable model for AI capacity building at the executive level.
                  </p>
                </div>
              </div>

              {/* SO THAT Statement */}
              <div className="bg-gradient-to-br from-royal-blue/5 to-royal-blue/10 rounded-2xl p-8 border border-royal-blue/20">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-sm font-bold text-royal-blue uppercase tracking-wider">So That</span>
                  <div className="h-px flex-1 bg-royal-blue/20" />
                </div>
                <p className="text-foreground leading-relaxed">
                  Digital Promise can become an <strong>ambidextrous organization</strong> with sustainable revenue streams, fueling its growth towards reaching <strong>30 million learners</strong>.
                </p>
                <div className="mt-8 pt-8 border-t border-royal-blue/20">
                  <p className="text-sm text-muted-foreground">
                    By scaling these efforts and diversifying revenue streams, Digital Promise is positioned to balance existing strengths with new opportunities for impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Logic Model */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                Project Logic Model
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                The &ldquo;if&rdquo; statements from the Theory of Action were translated into a logic model, connecting activities to resources, outputs, outcomes, and the ultimate impact goal.
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
              <div className="p-4 md:p-8">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logic%20Model-sRtx6oshVOxBsWi8cQHgdwqTxkb2Dd.png"
                  alt="Project Logic Model showing the flow from Resources through Activities to Outputs, Outcomes, and Impact Goal. Resources include Research (AI Literacy Framework), Practice & Design (LX Materials), Tech (Discourse), Measures (Surveys), and Logistics (Copyediting & Branding). Activities flow through understanding context, deep listening, fostering relationships, harnessing skills, and learning iteratively. Outputs include Executive-Level AI Capacity Building Workshop, Post-Action Review, and Blueprint for Revenue-Generation. Outcomes measure fee-for-service contracts secured, 80% team success perception, and 90% executive satisfaction. The Impact Goal is to engage 30 million learners in powerful learning."
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Resources</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  AI Literacy Framework, Learning Experience Materials, Technology Platforms, Survey Instruments, and Branding Assets
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Activities</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  Contextualize, deep listen, foster relationships, harness skills, and iterate collectively with the team
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Outputs</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  Executive-Level Workshop, Post-Action Review, and a Blueprint for Revenue-Generation
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Outcomes</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  New fee-for-service contracts, 80% team success rating, and 90% executive satisfaction
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Timeline */}
        <section className="py-20 md:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                36-Day Sprint Timeline
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                This project was initially planned for January 2026, but the district requested an earlier start in October. Accounting for weekends and an All-Staff Retreat, the team had just 36 production days to deliver two separate components.
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
              <div className="p-4 md:p-8 overflow-x-auto">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline-fVyYPshVNTu8EK4caIJ4Z36fRQ7omt.png"
                  alt="Project Timeline from August 27 to October 29. Key milestones include: Aug 27 - District agrees to sign contract; Aug 28 - Assume responsibility of project; Sep 3 - Meet with project team and facilitate co-creative session; Sep 5 - Announce project and facilitate design sprint conversation; Sep 8 - Organize kickoff meeting; Sep 10 - Assume role as project leader; Sep 11-26 - Facilitate design sprint; Sep 24 - First internal review; Sep 26 - First feedback session with District; Oct 6-10 - All-Staff Retreat; Oct 16 - Lead Champions Onboarding; Oct 17 - Second internal review; Oct 21 - Second feedback session with District; Oct 24 - Walkthrough with facilitators; Oct 29 - Facilitators deliver session to District."
                  className="w-full h-auto min-w-[800px]"
                />
              </div>
            </div>


          </div>
        </section>

        {/* Contextual Note */}
        <section className="py-16 bg-gradient-to-r from-navy via-royal-blue to-teal">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h3 className="text-xl font-semibold mb-4">Adaptive Leadership in Action</h3>
              <p className="text-white/90 leading-relaxed">
                Through a human-centered, adaptive leadership approach grounded in deep listening and collaboration, I built trust across the design team, which led to my appointment as team lead on September 10. In this role, I facilitated daily standups to maintain alignment and momentum, culminating in a full-day, in-person workshop for executive leadership. The case study presented here reflects one of two components delivered as part of the first phase of a broader district partnership.              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
