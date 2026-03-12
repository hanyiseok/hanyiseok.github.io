import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Github,
  Linkedin,
  FileText,
  GraduationCap,
  Award,
  Wind,
  Droplets,
  Leaf,
  Factory,
  Cpu,
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Research Interests", href: "#research-interests" },
  { label: "About Me", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Presentations", href: "#presentations" },
  { label: "Honors & Education", href: "#honors-education" },
  { label: "Skills", href: "#technical-skills" },
];

// Upload the files below into your repo's public/ folder using these exact names.
// public/
//   files/
//     Hanyi_Seok_CV.pdf
//     stony-brook-transcript.pdf
//     university-of-seoul-transcript.pdf
//     amine-rich-wastewater-poster.png
//     han-river-project-brief.pdf
//     toxcast-toxref-presentation.pdf
//   images/
//     hfmc-module.jpg
const assetPaths = {
  profileImage: "/images/profile-square.jpg",
  cv: "/files/Hanyi_Seok_CV.pdf",
  stonyBrookTranscript: "/files/stony-brook-transcript.pdf",
  universityOfSeoulTranscript: "/files/university-of-seoul-transcript.pdf",
  hfmcImage: "/images/hfmc-module.jpg",
  waterEnvPaper: "/files/amine-rich-wastewater-paper.pdf",
  waterEnvPoster: "/files/amine-rich-wastewater-poster.png",
  hanRiverProjectBrief: "/files/han-river-project-brief.pdf",
  toxcastPresentation: "/files/toxcast-toxref-presentation.pdf",
};

type LinkType = "folder" | "file";

type ResearchItem = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  siteHref: string;
  siteLabel: string;
  assetType?: LinkType;
  assetTitle?: string;
  assetHref?: string;
};

type ProjectItem = {
  title: string;
  period: string;
  summary: string;
  highlights: string[];
  assetLabel?: string;
  assetHref?: string;
};

type PresentationItem = {
  title: string;
  meta: string;
  assetType?: LinkType;
  assetTitle?: string;
  assetHref?: string;
};

const researchItems: ResearchItem[] = [
  {
    title: "Seo Research Group",
    subtitle: "Undergraduate Researcher · Stony Brook University · May 2025–Present",
    description:
      "Developing a numerically stable hollow-fiber direct-air-capture model for OH⁻-based systems. The work reformulates carbonate chemistry in conservative variables, links DIC and alkalinity to pH and CO₂ uptake, and emphasizes numerical stability in coupled transport calculations. It also includes calibration against pH and alkalinity data to improve agreement between the model and experimental observations.",
    tags: ["Direct air capture", "Numerical modeling", "Calibration", "Carbonate chemistry"],
    siteHref: "https://seoresearch.github.io/",
    siteLabel: "Open lab website",
    assetType: "file",
    assetTitle: "HFMC module image",
    assetHref: assetPaths.hfmcImage,
  },
  {
    title: "Water Environment and Engineering Lab",
    subtitle: "Undergraduate Researcher · University of Seoul · May 2024–Jan 2025",
    description:
      "Investigated the treatment of amine-rich wastewater from wet carbon capture using electrochemical oxidation, coagulation, and adsorption. Evaluated electrode material, activated carbon dosage, voltage, electrode spacing, influent strength, and temperature. The study identified process-design guidelines and a cost-effective operating window.",
    tags: ["Wet carbon capture", "Electrochemical oxidation", "Wastewater treatment", "Process optimization"],
    siteHref: "https://wewe.uos.ac.kr/",
    siteLabel: "Open lab website",
    assetType: "file",
    assetTitle: "Amine-Rich Wastewater Paper",
    assetHref: assetPaths.waterEnvPaper,
  },
  {
    title: "Environmental Systems Toxicology Lab",
    subtitle: "Undergraduate Researcher · University of Seoul · Jun 2021–Feb 2022",
    description:
      "Analyzed correlations between in vitro ToxCast assay activity and in vivo ToxRef reproductive-toxicity endpoints. Integrated and cleaned datasets covering 449 chemicals and 949 assays. Then applied endpoint-specific Pearson correlation analysis to identify candidate screening assays.",
    tags: ["Toxicology", "ToxCast", "ToxRef", "Data analysis"],
    siteHref: "https://envsystox.uos.ac.kr/",
    siteLabel: "Open lab website",
    assetType: "file",
    assetTitle: "ToxCast–ToxRef Presentation Material",
    assetHref: assetPaths.toxcastPresentation,
  },
];

const projects: ProjectItem[] = [
  {
    title: "DO Prediction Model for the Han River",
    period: "Sep 2024–Dec 2024",
    summary:
      "Built a dissolved oxygen (DO) prediction workflow using hourly water-quality data and five predictors: temperature, pH, total nitrogen, total phosphorus, and total organic carbon. Compared missing-data imputation methods and selected ensemble imputation as the strongest preprocessing approach. Then optimized a PatchTST model.",
    highlights: ["Time-series forecasting", "PatchTST", "Environmental data", "Outstanding course project"],
    assetLabel: "Open project brief",
    assetHref: assetPaths.hanRiverProjectBrief,
  },
  {
    title: "Domestic SAF Roadmap for Korea",
    period: "May 2024–Jul 2024",
    summary:
      "Led an eight-member team to evaluate ASTM-approved production pathways and EU blending-policy requirements for SAF. Assessed domestic feedstocks and considered DAC as an additional CO₂ source. Built a Python model to estimate SAF output and project jet-fuel demand through 2050.",
    highlights: ["SAF", "Python model", "Energy systems", "1st place team"],
  },
  {
    title: "2040 Net-Zero Roadmap for the University of Seoul",
    period: "Mar 2024–May 2024",
    summary:
      "Compiled a 2023 campus greenhouse gas inventory and classified Scope 1, 2, and 3 emissions. Evaluated reduction pathways using SBTi and GHG Protocol frameworks. Proposed phased implementation measures including renewable energy, microgrids, V2G, and waste-management improvements.",
    highlights: ["Net-zero planning", "GHG inventory", "SBTi", "1st place team"],
  },
  {
    title: "SELFIES ALPHA",
    period: "Sep 2023–Nov 2023",
    summary:
      "Proposed a stereochemistry-aware molecular string representation for toxicity prediction. Introduced optical-isomer symbols into a SELFIES-style encoding framework. The long-term goal was to improve toxicity-model inputs and build a dedicated database.",
    highlights: ["Toxicity prediction", "Molecular representation", "Poster presentation", "Gold Prize"],
  },
];

const presentations: PresentationItem[] = [
  {
    title: "Process Optimization for Treatment of Amine-Rich Wastewater Generated from Wet Carbon Capture",
    meta: "Undergraduate Thesis Presentation · University of Seoul · 2025",
    assetType: "file",
    assetTitle: "Amine-Rich Wastewater Poster",
    assetHref: assetPaths.waterEnvPoster,
  },
  {
    title: "SELFIES ALPHA: A Stereochemistry-Aware Molecular String Representation for Toxicity Prediction",
    meta: "Poster Presentation · Environmental Health Policy Idea Competition · 2023",
  },
  {
    title: "Identification of ToxCast Assays for Reproductive Toxicity Screening by Correlation Analysis of ToxCast and ToxRef Data",
    meta: "Research Workshop · University of Seoul · 2022",
  },
];

const interestCards = [
  {
    title: "Carbon Capture",
    icon: Wind,
    description: "Electrochemical and membrane-based CO₂ capture systems",
  },
  {
    title: "Hydrogen Production",
    icon: Droplets,
    description: "Electrochemical pathways for clean hydrogen generation",
  },
  {
    title: "Sustainable Fuels",
    icon: Leaf,
    description: "Carbon-to-fuel routes including SAF-oriented systems",
  },
  {
    title: "Process Systems",
    icon: Factory,
    description: "Integrated environmental and chemical engineering design",
  },
  {
    title: "AI Automation",
    icon: Cpu,
    description: "Data-driven modeling and future process automation",
  },
];

const honors = [
  "Tau Beta Pi Engineering Honor Society",
  "Dean’s List, Stony Brook University",
  "Korea–U.S. Advanced Technology Youth Exchange Program Scholarship (KIAT)",
  "Presidential Scholarship, University of Seoul",
  "Gold Prize, Environmental Toxicology and Health Project Competition",
];

const technicalSkills = [
  {
    label: "Programming",
    value: "Python, R",
  },
  {
    label: "Modeling & Analysis",
    value:
      "Statistical analysis, time-series forecasting, missing-data imputation, machine learning, deep learning, process modeling",
  },
  {
    label: "CAD & Prototyping",
    value: "SolidWorks, Fusion 360, 3D printing",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};

function IconLinkButton({
  href,
  label,
}: {
  href?: string;
  label: string;
}) {
  if (!href) return null;

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="shrink-0 rounded-2xl border-emerald-100 bg-white text-[#064E3B] hover:bg-emerald-50"
    >
      <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
        <FileText className="h-4 w-4" />
      </a>
    </Button>
  );
}

function SectionShell({
  id,
  children,
  className = "",
  contentClassName = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 md:scroll-mt-24 bg-slate-50 ${className}`}>
      <div className={`mx-auto max-w-6xl px-6 py-8 md:py-10 ${contentClassName}`}>{children}</div>
    </section>
  );
}

export default function HanyiSeokHomepageDraft() {
  return (
    <div className="min-h-screen bg-slate-50 text-left text-slate-900">
      <header className="sticky top-0 z-40 border-b border-emerald-100/80 bg-slate-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-4">
          <nav className="hidden gap-7 md:flex lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[1.05rem] font-semibold text-[#064E3B] transition hover:text-emerald-800 lg:text-[1.125rem]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-8 pt-8 md:grid-cols-[16rem_1fr] md:items-stretch md:pb-10 md:pt-10">
            <motion.div {...fadeUp}>
              <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-[0_14px_36px_rgba(6,78,59,0.06)]">
                <img
                  src={assetPaths.profileImage}
                  alt="Hanyi Seok"
                  className="absolute -inset-px block h-[calc(100%+2px)] w-[calc(100%+2px)] max-w-none object-cover object-[center_14%]"
                />
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="flex h-full flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-end gap-3">
                <div className="text-4xl font-semibold leading-none tracking-tight text-[#064E3B] md:text-5xl">
                  Hanyi Seok
                </div>
                <span
                  aria-hidden
                  className="mb-[0.08em] inline-block h-6 w-[2px] self-end bg-slate-300/90 md:h-8"
                />
                <div className="text-xl font-normal leading-none text-slate-700 md:text-2xl">
                  Undergraduate Researcher
                </div>
              </div>
              <h1 className="mt-5 max-w-5xl text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl md:leading-[1.08]">
                Modeling sustainable pathways: From carbon capture to hydrogen and aviation fuels.
              </h1>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-2xl border-emerald-100 bg-white px-5 text-[#064E3B] hover:bg-emerald-50 hover:text-[#064E3B]"
                >
                  <a href="mailto:hanyi.seok@stonybrook.edu">
                    <Mail className="mr-2 h-4 w-4" />Email
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-2xl border-emerald-100 bg-white px-5 text-[#064E3B] hover:bg-emerald-50 hover:text-[#064E3B]"
                >
                  <a href="https://github.com/hanyiseok" target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />GitHub
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-2xl border-emerald-100 bg-white px-5 text-[#064E3B] hover:bg-emerald-50 hover:text-[#064E3B]"
                >
                  <a href="https://www.linkedin.com/in/hanyi-seok/" target="_blank" rel="noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-2xl border-emerald-100 bg-white px-5 text-[#064E3B] hover:bg-emerald-50 hover:text-[#064E3B]"
                >
                  <a href={assetPaths.cv} target="_blank" rel="noreferrer">
                    <FileText className="mr-2 h-4 w-4" />CV
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <SectionShell id="research-interests" contentClassName="pb-0 md:pb-0">
          <motion.div {...fadeUp} className="mb-6">
            <h2 className="text-3xl font-semibold tracking-tight">Research Interests</h2>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-5 md:auto-rows-fr">
            {interestCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="h-full"
                >
                  <Card className="h-full rounded-[2rem] border-emerald-100 bg-white shadow-[0_14px_36px_rgba(6,78,59,0.06)]">
                    <CardContent className="flex h-full flex-col p-5">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50/80 text-[#064E3B]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-h-[3rem] text-base font-semibold leading-6 text-[#064E3B]">
                        {item.title}
                      </div>
                      <p className="mt-3 h-[4.5rem] overflow-hidden text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </SectionShell>

        <SectionShell contentClassName="pt-6 pb-8 md:pt-6 md:pb-10">
          <motion.div {...fadeUp}>
            <Card className="rounded-[2rem] border-emerald-100 bg-emerald-50/60 shadow-[0_14px_36px_rgba(6,78,59,0.04)]">
              <CardHeader className="px-8 pt-8 pb-4">
                <CardTitle className="text-2xl font-semibold tracking-tight text-[#064E3B]">Current Focus</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8 text-[15px] leading-8 text-slate-700 [text-align:justify]">
                Modeling OH⁻-based direct air capture in hollow-fiber membrane contactors. The current work
                connects carbonate chemistry, transport, and pH-driven CO₂ uptake while supporting broader carbon
                capture and fuel-synthesis pathways.
              </CardContent>
            </Card>
          </motion.div>
        </SectionShell>

        <SectionShell id="about">
          <motion.div {...fadeUp} className="mb-6">
            <h2 className="text-3xl font-semibold tracking-tight">Academic Background and Direction</h2>
          </motion.div>
          <motion.div {...fadeUp}>
            <Card className="rounded-[2rem] border-emerald-100 bg-white shadow-[0_14px_36px_rgba(6,78,59,0.06)]">
              <CardContent className="p-8 text-[15px] leading-8 text-slate-600 [text-align:justify]">
                <div className="mb-4 text-xl font-semibold tracking-tight text-[#064E3B]">
                  Hi, I&apos;m Hanyi Seok, an undergraduate researcher in environmental engineering.
                </div>
                <p>
                  I am a dual-degree student at the University of Seoul and Stony Brook University. My work
                  connects environmental engineering, electrochemical carbon capture, hydrogen production, and
                  future fuel systems. More broadly, my research sits at the intersection of environmental
                  engineering, reaction and transport modeling, and data-driven analysis. Across research and
                  coursework, I have studied toxicity-data analysis, wet carbon capture wastewater treatment,
                  energy-system roadmaps, and environmental time-series prediction. Together, these experiences
                  support a broader goal: building scalable carbon-management systems that connect capture
                  technologies with hydrogen, future fuel synthesis, and AI-driven automation.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </SectionShell>

        <SectionShell id="research">
          <motion.div {...fadeUp} className="mb-6">
            <h2 className="whitespace-nowrap text-3xl font-semibold tracking-tight">
              Selected Research Experience
            </h2>
          </motion.div>
          <div className="grid gap-6">
            {researchItems.map((item, index) => (
              <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: index * 0.06 }}>
                <Card className="rounded-[2rem] border-emerald-100 bg-white shadow-[0_14px_36px_rgba(6,78,59,0.06)]">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-[#064E3B]">{item.title}</h3>
                        <p className="mt-2 text-sm text-slate-500">{item.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          asChild
                          variant="outline"
                          size="icon"
                          className="shrink-0 rounded-2xl border-emerald-100 bg-white text-[#064E3B] hover:bg-emerald-50"
                          title={item.siteLabel}
                        >
                          <a href={item.siteHref} target="_blank" rel="noreferrer" aria-label={item.siteLabel}>
                            <span className="text-sm font-semibold text-[#064E3B]">↗</span>
                          </a>
                        </Button>
                        <IconLinkButton href={item.assetHref} label={item.assetTitle || "Open material"} />
                      </div>
                    </div>
                    <p className="mt-5 text-[15px] leading-8 text-slate-600 [text-align:justify]">
                      {item.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="rounded-full bg-slate-100 px-3 py-1 text-[#064E3B] hover:bg-slate-100"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="projects">
          <motion.div {...fadeUp} className="mb-6">
            <h2 className="text-3xl font-semibold tracking-tight">Selected Projects</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 md:auto-rows-fr md:items-stretch">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="h-full"
              >
                <Card className="flex h-full flex-col overflow-hidden rounded-[2rem] border-emerald-100 bg-white shadow-[0_14px_36px_rgba(6,78,59,0.06)]">
                  <CardHeader className="px-8 pt-8 pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <CardTitle className="min-h-[3rem] text-xl font-semibold leading-[1.25] tracking-tight text-[#064E3B] md:min-h-[3rem]">
                          {project.title}
                        </CardTitle>
                        <div className="mt-0 min-h-[1.5rem] text-sm text-slate-500">{project.period}</div>
                      </div>
                      <IconLinkButton href={project.assetHref} label={project.assetLabel || "Open project material"} />
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col px-8 pb-8">
                    <div className="min-h-[15rem] pt-1 md:min-h-[16rem]">
                      <p className="text-[15px] leading-8 text-slate-600 [text-align:justify]">
                        {project.summary}
                      </p>
                    </div>
                    <div className="mt-6 flex flex-wrap content-start gap-3">
                      {project.highlights.map((highlight) => (
                        <Badge
                          key={highlight}
                          variant="secondary"
                          className="rounded-full bg-slate-100 px-3 py-1 text-[#064E3B] hover:bg-slate-100"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="presentations">
          <motion.div {...fadeUp} className="mb-6">
            <h2 className="text-3xl font-semibold tracking-tight">Presentations</h2>
          </motion.div>
          <div className="grid gap-4">
            {presentations.map((item, index) => (
              <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: index * 0.05 }}>
                <Card className="rounded-[2rem] border-emerald-100 bg-white shadow-[0_14px_36px_rgba(6,78,59,0.06)]">
                  <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="text-base font-medium text-slate-950">{item.title}</div>
                      <div className="mt-1 text-sm text-slate-500">{item.meta}</div>
                    </div>
                    <IconLinkButton href={item.assetHref} label={item.assetTitle || "Open presentation material"} />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="honors-education">
          <motion.div {...fadeUp} className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <Card className="rounded-[2rem] border-emerald-100 bg-white shadow-[0_14px_36px_rgba(6,78,59,0.06)]">
              <CardHeader className="px-8 pt-8 pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl leading-none text-[#064E3B]">
                  <Award className="h-5 w-5 shrink-0 translate-y-[2px] text-[#064E3B]" />
                  Selected Honors
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-5 px-8 pb-8 text-[15px] text-slate-600">
                {honors.map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 px-6 py-5 leading-7">
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-emerald-100 bg-white shadow-[0_14px_36px_rgba(6,78,59,0.06)]">
              <CardHeader className="px-8 pt-8 pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl leading-none text-[#064E3B]">
                  <GraduationCap className="h-5 w-5 shrink-0 translate-y-[2px] text-[#064E3B]" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 px-8 pb-8 text-[15px] leading-8 text-slate-600">
                <div className="rounded-2xl bg-slate-50 px-6 py-5 text-sm leading-7 text-slate-500">
                  Dual-degree program between the University of Seoul and Stony Brook University · Expected Spring 2027
                </div>
                <div className="rounded-2xl bg-slate-50 px-6 py-5">
                  <div className="text-lg font-semibold text-slate-950">Stony Brook University</div>
                  <div className="mt-3">B.E. in Engineering Science, specialization in Environmental Engineering</div>
                  <div>Second Major in Applied Mathematics and Statistics</div>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span>GPA: 3.96/4.00</span>
                    <a
                      href={assetPaths.stonyBrookTranscript}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open Stony Brook transcript"
                      className="inline-flex shrink-0 rounded-xl border border-emerald-100 bg-white p-2 text-[#064E3B] transition hover:bg-emerald-50 hover:text-[#064E3B]"
                    >
                      <FileText className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-50 px-6 py-5">
                  <div className="text-lg font-semibold text-slate-950">University of Seoul</div>
                  <div className="mt-3">B.E. in Environmental Engineering</div>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span>GPA: 4.10/4.50</span>
                    <a
                      href={assetPaths.universityOfSeoulTranscript}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open University of Seoul transcript"
                      className="inline-flex shrink-0 rounded-xl border border-emerald-100 bg-white p-2 text-[#064E3B] transition hover:bg-emerald-50 hover:text-[#064E3B]"
                    >
                      <FileText className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </SectionShell>

        <SectionShell id="technical-skills">
          <motion.div {...fadeUp} className="mb-6">
            <h2 className="text-3xl font-semibold tracking-tight">Technical Skills</h2>
          </motion.div>
          <motion.div {...fadeUp}>
            <Card className="rounded-[2rem] border-emerald-100 bg-white shadow-[0_14px_36px_rgba(6,78,59,0.06)]">
              <CardContent className="grid gap-5 p-8">
                {technicalSkills.map((item) => (
                  <div key={item.label} className="grid gap-2 md:grid-cols-[12rem_1fr] md:items-start">
                    <div className="font-semibold text-[#064E3B]">{item.label}</div>
                    <div className="text-slate-600 [text-align:justify]">{item.value}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </SectionShell>
      </main>
    </div>
  );
}
