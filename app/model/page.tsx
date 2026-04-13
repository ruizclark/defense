import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TriangleDecoration, SectionDivider } from "@/components/triangle-decoration"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Leadership Convergence Model | Building AI Organizational Readiness",
  description: "The Digital Leadership Convergence Model synthesizes adaptive leadership, system coherence, and organizational ambidexterity to enable digital transformation.",
}

export default function ModelPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <TriangleDecoration position="top-left" size="lg" variant="royal" />
          <TriangleDecoration position="bottom-right" size="md" variant="teal" />
          
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-wider text-teal uppercase mb-4">
                Conceptual Synthesis
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight tracking-tight">
                Digital Leadership Convergence Model
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                A framework for understanding how adaptive leadership catalyzes change management to enable digital transformation through AI organizational readiness.
              </p>
            </div>
          </div>
        </section>

        {/* Model Display */}
        <section className="py-20 md:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm p-8">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Digital%20Leadership%20Convergence%20Model-fzij1b13vtZ6GpdszuX4g44pVJ3stJ.png"
                    alt="Digital Leadership Convergence Model showing concentric rings. The outer ring represents Adaptive Leadership and Change Management. The middle ring shows System Coherence and Organizational Ambidexterity with arrows indicating continuous flow. The inner rings show AI Organizational Readiness and Digital Transformation at the core."
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold text-primary tracking-tight mb-6">
                  Understanding the Model
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  This project crystallized an understanding of how the adaptive nature of change management must converge with the technical demands of digital transformation. The learning amassed over 20 years in education and 10 years working on tech-related projects can be distilled into this model.
                </p>
                <blockquote className="border-l-4 border-teal pl-6 py-2 mb-8">
                  <p className="text-foreground font-medium italic">
                    Adaptive leaders catalyze change management by establishing coherence to foster ambidexterity, enabling digital transformation through AI organizational readiness.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Model Components */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                Model Components
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Each ring of the model represents a critical layer in the journey toward digital transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Outer Ring */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mb-6">
                  <div className="w-8 h-8 rounded-full border-4 border-navy" />
                </div>
                <h3 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">Outer Ring</h3>
                <h4 className="text-xl font-semibold text-foreground mb-4">Adaptive Leadership for Change Management</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The necessary human-centered process of contextualizing, deep listening, co-creating, and iterating collectively to mobilize people. This outer ring represents the essential foundation that drives all subsequent transformation.
                </p>
              </div>

              {/* Middle Ring */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mb-6">
                  <div className="w-6 h-6 rounded-full border-4 border-teal" />
                </div>
                <h3 className="text-sm font-semibold text-teal uppercase tracking-wider mb-3">Middle Ring</h3>
                <h4 className="text-xl font-semibold text-foreground mb-4">System Coherence & Organizational Ambidexterity</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Aligning core operations, structures, processes, and infrastructure to balance exploitation and exploration. A system must be coherent to achieve transformation while remaining ambidextrous to keep pace with change.
                </p>
              </div>

              {/* Inner Core */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <div className="w-12 h-12 rounded-full bg-light-blue/20 flex items-center justify-center mb-6">
                  <div className="w-4 h-4 rounded-full bg-light-blue" />
                </div>
                <h3 className="text-sm font-semibold text-royal-blue uppercase tracking-wider mb-3">Inner Core</h3>
                <h4 className="text-xl font-semibold text-foreground mb-4">Digital Transformation</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The ultimate goal achieved through AI Organizational Readiness and technological integration. Importantly, digital transformation is a status constantly in flux—the moment a system believes it has fully achieved this transformation is the moment its capacity is likely becoming obsolete.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Insight */}
        <section className="py-20 bg-gradient-to-r from-navy via-royal-blue to-teal relative overflow-hidden">
          <TriangleDecoration position="top-left" size="md" variant="light" className="opacity-5" />
          <TriangleDecoration position="bottom-right" size="lg" variant="light" className="opacity-5" />
          
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white leading-relaxed text-balance">
                &ldquo;One cannot step twice into the same river.&rdquo;
              </p>
              <footer className="mt-6 text-white/80">
                — Heraclitus
              </footer>
              <p className="mt-8 text-lg text-white/90 max-w-3xl mx-auto">
                The river of technology is constantly flowing, and the educational system cannot remain static. Our task is not to preserve the existing system, but to proactively reimagine it so that every student can successfully cross the technological Rubicon before them.
              </p>
            </blockquote>
          </div>
        </section>

        <SectionDivider />

        {/* Implications */}
        <section className="py-20 md:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                Implications
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Given the results from this project, three critical implications emerge for the path ahead.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Site */}
              <div className="relative">
                <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-navy to-navy/50 rounded-t-2xl" />
                <div className="bg-card rounded-2xl p-8 border border-border shadow-sm pt-10">
                  <h3 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">
                    Implications for Site
                  </h3>
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    Digital Transformation
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    The Powerful Learning Division must focus on guiding school districts through Digital Transformation by helping them fundamentally reimagine the purpose of education.
                  </p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      The direction is clear: move beyond AI integration toward deeper systemic change.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sector */}
              <div className="relative">
                <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-teal to-teal/50 rounded-t-2xl" />
                <div className="bg-card rounded-2xl p-8 border border-border shadow-sm pt-10">
                  <h3 className="text-sm font-semibold text-teal uppercase tracking-wider mb-3">
                    Implications for Sector
                  </h3>
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    System Convergence
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    The Digital Leadership Convergence Model offers a vital pathway forward, helping districts balance the critical elements of human-centered change management with the technical demands of integrating AI into public education.
                  </p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      A framework for the entire education sector to navigate digital transformation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Self */}
              <div className="relative">
                <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-royal-blue to-royal-blue/50 rounded-t-2xl" />
                <div className="bg-card rounded-2xl p-8 border border-border shadow-sm pt-10">
                  <h3 className="text-sm font-semibold text-royal-blue uppercase tracking-wider mb-3">
                    Implications for Self
                  </h3>
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    My Source of Power
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    This project has clarified the source of my own leadership strength. My most prized asset is the ability to navigate ambiguity by centering relationships and human-centered change management.
                  </p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Personal clarity on leadership identity and approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-6">
              Reimagining the Purpose of Education
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              This work brings us back to the original challenge: school districts are under mounting pressure to solve the &ldquo;AI conundrum.&rdquo; But as this capstone argues, simply integrating AI is not enough. This moment demands that we completely reimagine the purpose and function of public education.
            </p>
            <p className="text-lg text-foreground leading-relaxed font-medium">
              The Digital Leadership Convergence Model provides a framework for this transformative work—balancing the adaptive nature of human-centered change management with the technical demands of digital transformation.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
