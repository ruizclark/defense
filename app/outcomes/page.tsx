import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TriangleDecoration, SectionDivider } from "@/components/triangle-decoration"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Outcomes | Building AI Organizational Readiness",
  description: "Project outcomes and evidence from the AI organizational readiness capstone project, including executive satisfaction and team success metrics.",
}

export default function OutcomesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <TriangleDecoration position="top-left" size="lg" variant="teal" />
          <TriangleDecoration position="bottom-right" size="md" variant="navy" />
          
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-wider text-teal uppercase mb-4">
                Evidence & Results
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight tracking-tight">
                Project Outcomes
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Measurable results that demonstrate the project&apos;s success in building executive-level AI organizational readiness.
              </p>
            </div>
          </div>
        </section>

        {/* Key Outcomes */}
        <section className="py-20 md:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Outcome 1 */}
              <div className="bg-gradient-to-br from-navy/5 to-navy/10 rounded-2xl p-8 border border-navy/20">
                <div className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">
                  Executive Approval
                </div>
                <div className="text-5xl md:text-6xl font-bold text-navy mb-4">100%</div>
                <p className="text-foreground font-medium mb-4">
                  of executive leaders were satisfied or extremely satisfied with the session
                </p>
                <div className="pt-4 border-t border-navy/20">
                  <p className="text-sm text-muted-foreground">
                    <strong>91%</strong> would recommend it to other districts
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">N = 12</p>
                </div>
              </div>

              {/* Outcome 2 */}
              <div className="bg-gradient-to-br from-teal/5 to-teal/10 rounded-2xl p-8 border border-teal/20">
                <div className="text-sm font-semibold text-teal uppercase tracking-wider mb-4">
                  Team Approval
                </div>
                <div className="text-5xl md:text-6xl font-bold text-teal mb-4">80%</div>
                <p className="text-foreground font-medium mb-4">
                  of implementation team regarded the Project as a success
                </p>
                <div className="pt-4 border-t border-teal/20">
                  <p className="text-sm text-muted-foreground">
                    Internal team survey conducted post-delivery
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">N = 15</p>
                </div>
              </div>

              {/* Outcome 3 */}
              <div className="bg-gradient-to-br from-royal-blue/5 to-royal-blue/10 rounded-2xl p-8 border border-royal-blue/20">
                <div className="text-sm font-semibold text-royal-blue uppercase tracking-wider mb-4">
                  Fee-for-Service Impact
                </div>
                <div className="text-5xl md:text-6xl font-bold text-royal-blue mb-4">5+</div>
                <p className="text-foreground font-medium mb-4">
                  additional districts exploring bringing this program to their contexts
                </p>
                <div className="pt-4 border-t border-royal-blue/20">
                  <p className="text-sm text-muted-foreground">
                    <strong>3</strong> presentations repurposing session content
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Team Perception */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-6">
                  Team Perception of Success
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Despite the compressed timeline, 80% of team members who completed the survey described the project as a success.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This internal assessment reflects the effectiveness of the adaptive leadership approach employed throughout the project, including deep listening, fostering positive relationships, and maintaining clear communication during the rapid sprint.
                </p>
              </div>
              <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
                <div className="p-4 md:p-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Overall%20Success-oBNn8wvOmbyeva3dchBYCkb7UZDLHB.png"
                    alt="Pie chart showing Team's Perception of Success (N = 15). 80% rated the project as successful, 13.3% were neutral, and 6.7% were uncertain."
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Staff Survey */}
        <section className="py-20 md:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                Post-Training Internal Staff Survey
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Team members assessed their alignment across five key dimensions of change management: Vision, Skills, Motivation, Resources, and Action Plan.
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
              <div className="p-4 md:p-8">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Team%20Survey-tgQwDu3QnMrQbkwgaIqiZoZDCrHqyy.png"
                  alt="Post-Training Internal Staff Survey results (N = 15). Shows stacked bar chart measuring team agreement across Vision, Skills, Motivation, Resources, and Action Plan. Vision shows 60% Strongly Agree/Agree, 40% Neutral. Skills shows 73% Strongly Agree/Agree, 27% Neutral. Motivation shows 60% Strongly Agree/Agree, 20% Neutral, 20% Disagree. Resources shows 80% Strongly Agree/Agree, 7% Neutral, 13% Disagree. Action Plan shows 46% Strongly Agree/Agree, 33% Neutral, 20% Disagree."
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Baseline Survey Results - Strengths */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                Diagnostic Baseline: Areas of Strength
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                The post-training survey served as a critical diagnostic tool, establishing a baseline against which the district&apos;s growth can be measured over the next six months.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
                <div className="p-4 md:p-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vision%20%26%20Leadership-0ZGHtnjDAliIyHU7m5N89ZthUhaGxS.png"
                    alt="Post-Training Baseline Survey Results: Vision & Leadership (N = 11). Shows three metrics: 'Our district has a clear vision for how AI can support teaching and learning' - 45% Developing, 55% Emerging. 'District leadership is actively engaged in conversations about ethical AI use' - 9% Exemplary, 36% Developing, 55% Emerging. 'We have identified priority areas where AI could enhance instructional planning or equity' - 18% Exemplary, 18% Developing, 36% Emerging, 27% Not Started."
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Vision & Leadership</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A primary strength visible in the data is that <strong>100% of executive leaders</strong> indicated they had established at minimum an emergent vision for AI. Achieving this shared vision was one of the core session objectives.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This strong initial collective agreement is a foundational indicator of success for AI organizational readiness. The goal for follow-up is to confirm that the District has moved beyond this initial &ldquo;emerging&rdquo; status into &ldquo;developing&rdquo; or &ldquo;exemplary&rdquo; levels of readiness.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Overall Confidence</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The survey also measured leaders&apos; confidence in their ability to articulate AI concepts, strategically leverage AI in current infrastructure, and advocate for meaningful AI integration in classrooms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Results show strong foundations with 83% expressing confidence in articulating AI concepts.
                </p>
              </div>
              <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm order-1 lg:order-2">
                <div className="p-4 md:p-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Overall%20Confidence-gNvsBh3s2IDA1udNRV76prQGrwcY6I.png"
                    alt="Post-Training Baseline Survey Results: Overall Confidence (N = 12). Shows three confidence metrics: 'I am confident in my ability to clearly articulate AI concepts and advocate for their strategic value among fellow leaders' - 8% Strongly Agree, 75% Agree, 17% Neutral. 'I feel confident in my ability to strategically leverage AI in our current infrastructure' - 8% Strongly Agree, 58% Agree, 33% Neutral. 'I am confident that I can effectively advocate for meaningful AI integration in our district's classrooms' - 25% Strongly Agree, 58% Agree, 17% Neutral."
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
                <div className="p-4 md:p-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Infrastructure-Wk5Z2owvXNLrG34eisrxrJHTCXlIf2.png"
                    alt="Post-Training Baseline Survey Results: Infrastructure & Data Systems (N = 11). Shows three metrics: 'Our district has the technical infrastructure to support AI tools' - 28% Exemplary, 45% Developing, 27% Emerging. 'We have policies in place to protect student data when using AI-powered platforms' - 45% Developing, 55% Emerging. 'Our data systems are integrated enough to support AI-driven insights' - 30% Developing, 60% Emerging, 10% Not Started."
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Infrastructure & Data Systems</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  100% of responding executive leaders indicated that the district’s AI policies are at least at an emergent stage.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  One of the highest-rated items focused on the district’s technological infrastructure, with a quarter of respondents rating it as “exemplary.”                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas for Growth */}
        <section className="py-20 md:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                Diagnostic Baseline: Areas for Growth
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                The data revealed striking trends around community engagement and instructional integration, which represent the district&apos;s greatest areas needing immediate focus.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Communication & Engagement</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A core objective of the session was to develop an initial communication plan, meaning external communication had just begun. The baseline results are informative:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-periwinkle" />
                    Nearly half of executives felt the district had not yet communicated their vision to the broader community
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-periwinkle" />
                    One-third felt families had not been engaged at all in conversations about AI
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-6">
                  Given that the communication plan heavily emphasized family engagement, we anticipate seeing significant positive traction after the six-month follow-up.
                </p>
              </div>
              <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
                <div className="p-4 md:p-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Communication-YHvMmWkfiaK2KzufFpHOgzgcyTU9HN.png"
                    alt="Post-Training Baseline Survey Results: Communication & Engagement (N = 11). Shows three metrics: 'We have communicated our AI strategy to families and community stakeholders' - 55% Emerging, 45% Not Started. 'We are engaging educators, students, and families in conversations about AI use' - 73% Emerging, 27% Not Started. 'We have a plan to address concerns or misconceptions about AI in education' - 9% Developing, 45% Emerging, 45% Not Started."
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
                <div className="p-4 md:p-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Instruction-004Cp5Z8lJIe9BoWnVlpI0BQYdOTxl.png"
                    alt="Post-Training Baseline Survey Results: Instructional Integration (N = 11). Shows three metrics: 'Teachers have access to professional development on using AI tools for instruction' - 27% Developing, 73% Emerging. 'AI tools are being used to support lesson planning, differentiation, or formative assessment' - 9% Developing, 64% Emerging, 27% Not Started. 'We have guidance in place for responsible classroom use of AI tools' - 18% Developing, 64% Emerging, 18% Not Started."
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Instructional Integration</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Professional development and classroom integration represent key areas for continued growth. While 100% of leaders report at least emerging access to PD, the instructional use of AI tools remains nascent.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nearly one-fifth of respondents indicated that the district lacks sufficient guidance for responsible AI use in the classroom.                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-gradient-to-r from-navy via-royal-blue to-teal">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h3 className="text-xl font-semibold mb-4">Looking Ahead</h3>
              <p className="text-white/90 leading-relaxed">
                These results provide evidence that the project largely achieved the intended outcomes outlined in the logic model. The partnership is currently in talks with the district to continue and gather summative data, with the goal of confirming movement beyond the initial baseline into developing or exemplary levels of AI organizational readiness.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
