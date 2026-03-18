import React from "react";
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
  ExternalLink,
} from "lucide-react";

type NavItem = {
  label: string;
  href: string;
};

type ResearchItem = {
  title: string;
  subtitle: string;
  summary: string;
  highlights: string[];
  siteHref: string;
  siteLabel: string;
  assetTitle?: string;
  assetHref?: string;
  showPlaceholder?: boolean;
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
  assetTitle?: string;
  assetHref?: string;
};

type InterestCard = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

type SkillItem = {
  label: string;
  value: string;
};

const navItems: NavItem[] = [
  { label: "Research Interests", href: "#research-interests" },
  { label: "About Me", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Presentations", href: "#presentations" },
  { label: "Academic Background", href: "#honors-education" },
  { label: "Skills", href: "#technical-skills" },
];

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
  feeddhaStudyBrief: "/files/feeddha-electrochemical-study-brief.pdf",
};

const researchItems: ResearchItem[] = [
  {
    title: "Hollow-Fiber Direct Air Capture Modeling",
    subtitle: "Seo Research Group · Stony Brook University · May 2025–Present",
    summary:
      "Developing a numerically stable hollow-fiber direct-air-capture model for OH-based systems. The work reformulates carbonate chemistry in conservative variables, links DIC and alkalinity to pH and CO2 uptake, and emphasizes numerical stability in coupled transport calculations. It also includes calibration against pH and alkalinity data to improve agreement between the model and experimental observations.",
    highlights: ["Direct air capture", "Numerical modeling", "Calibration", "Carbonate chemistry"],
    siteHref: "https://seoresearch.github.io/",
    siteLabel: "Open lab website",
    assetTitle: "HFMC module image",
    assetHref: assetPaths.hfmcImage,
  },
  {
    title: "FeEDDHA Immobilization for Preliminary Electrochemical Studies",
    subtitle: "Seo Research Group · Stony Brook University · Aug 2025–Sep 2025",
    summary:
      "Explored FeEDDHA immobilization on carbon felt and Ni electrodes for preliminary electrochemical carbon-conversion studies. The work compared soaking, drop-casting, and surface-functionalization approaches, and evaluated catalyst attachment and stability using cyclic voltammetry under N2/CO2 and aqueous/DMF conditions. The study identified catalyst loss and film delamination as key limitations for stable electrode-supported operation.",
    highlights: ["Electrochemistry", "Catalyst immobilization", "Cyclic voltammetry", "Electrode stability"],
    siteHref: "https://seoresearch.github.io/",
    siteLabel: "Open lab website",
    assetTitle: "Project material",
    assetHref: assetPaths.feeddhaStudyBrief,
  },
  {
    title: "Process Optimization for Amine-Rich Wastewater from Wet Carbon Capture",
    subtitle: "Water Environment and Engineering Lab · University of Seoul · May 2024–Jan 2025",
    summary:
      "Investigated the treatment of amine-rich wastewater from wet carbon capture using electrochemical oxidation, coagulation, and adsorption. Evaluated electrode material, activated carbon dosage, voltage, electrode spacing, influent strength, and temperature. The study identified process-design guidelines and a cost-effective operating window.",
    highlights: ["Wet carbon capture", "Electrochemical oxidation", "Wastewater treatment", "Process optimization"],
    siteHref: "https://wewe.uos.ac.kr/",
    siteLabel: "Open lab website",
    assetTitle: "Amine-rich wastewater paper",
    assetHref: assetPaths.waterEnvPaper,
  },
  {
    title: "ToxCast–ToxRef Correlation Analysis for Reproductive Toxicity Screening",
    subtitle: "Environmental Systems Toxicology Lab · University of Seoul · Jun 2021–Feb 2022",
    summary:
      "Analyzed correlations between in vitro ToxCast assay activity and in vivo ToxRef reproductive-toxicity endpoints. Integrated and cleaned datasets covering 449 chemicals and 949 assays. Then applied endpoint-specific Pearson correlation analysis to identify candidate screening assays.",
    highlights: ["Toxicology", "ToxCast", "ToxRef", "Data analysis"],
    siteHref: "https://envsystox.uos.ac.kr/",
    siteLabel: "Open lab website",
    assetTitle: "ToxCast–ToxRef presentation material",
    assetHref: assetPaths.toxcastPresentation,
  },
];

const projects: ProjectItem[] = [
  {
    title: "DO Prediction Model for the Han River",
    period: "Sep 2024–Dec 2024",
    summary:
      "Built a dissolved oxygen prediction workflow using hourly water-quality data and five predictors: temperature, pH, total nitrogen, total phosphorus, and total organic carbon. Compared missing-data imputation methods and selected ensemble imputation as the strongest preprocessing approach. Then optimized a PatchTST model.",
    highlights: ["Time-series forecasting", "PatchTST", "Environmental data", "Outstanding course project"],
    assetLabel: "Open project brief",
    assetHref: assetPaths.hanRiverProjectBrief,
  },
  {
    title: "Domestic SAF Roadmap for Korea",
    period: "May 2024–Jul 2024",
    summary:
      "Led an eight-member team to evaluate ASTM-approved production pathways and EU blending-policy requirements for SAF. Assessed domestic feedstocks and considered DAC as an additional CO2 source. Built a Python model to estimate SAF output and project jet-fuel demand through 2050.",
    highlights: ["SAF", "Python model", "Energy systems", "First place team"],
  },
  {
    title: "2040 Net-Zero Roadmap for the University of Seoul",
    period: "Mar 2024–May 2024",
    summary:
      "Compiled a 2023 campus greenhouse gas inventory and classified Scope 1, Scope 2, and Scope 3 emissions. Evaluated reduction pathways using SBTi and GHG Protocol frameworks. Proposed phased implementation measures including renewable energy, microgrids, vehicle-to-grid, and waste-management improvements.",
    highlights: ["Net-zero planning", "GHG inventory", "SBTi", "First place team"],
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
    assetTitle: "Amine-rich wastewater poster",
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

const interestCards: InterestCard[] = [
  {
    title: "Carbon Capture",
    description: "Electrochemical and membrane-based CO2 capture systems",
    icon: Wind,
  },
  {
    title: "Hydrogen Production",
    description: "Electrochemical pathways for clean hydrogen generation",
    icon: Droplets,
  },
  {
    title: "Sustainable Fuels",
    description: "Carbon-to-fuel routes including SAF-oriented systems",
    icon: Leaf,
  },
  {
    title: "Process Systems",
    description: "Integrated environmental and chemical engineering design",
    icon: Factory,
  },
  {
    title: "AI Automation",
    description: "Data-driven modeling and future process automation",
    icon: Cpu,
  },
];

const honors: string[] = [
  "Tau Beta Pi Engineering Honor Society",
  "Dean’s List, Stony Brook University",
  "Korea–U.S. Advanced Technology Youth Exchange Program Scholarship (KIAT)",
  "Presidential Scholarship, University of Seoul",
  "Gold Prize, Environmental Toxicology and Health Project Competition",
];

const technicalSkills: SkillItem[] = [
  { label: "Programming", value: "Python, R" },
  {
    label: "Modeling & Quantitative Analysis",
    value: "transport modeling, mass-balance modeling, parameter calibration, statistical analysis",
  },
  {
    label: "Electrochemistry & Experimental Methods",
    value:
      "cyclic voltammetry, electrochemical oxidation, electrode preparation, catalyst immobilization, drop-casting, surface functionalization",
  },
  {
    label: "Data Analysis & Forecasting",
    value:
      "time-series forecasting, missing-data imputation, correlation analysis, machine learning, deep learning",
  },
  { label: "CAD & Prototyping", value: "SolidWorks, Fusion 360, 3D printing" },
];

function runSanityChecks() {
  const checks = [
    ["navigation", navItems.length > 0],
    ["research items", researchItems.length > 0],
    ["projects", projects.length > 0],
    ["presentations", presentations.length > 0],
    ["interest cards", interestCards.length > 0],
    ["skills", technicalSkills.length > 0],
  ] as const;

  checks.forEach(([label, pass]) => {
    if (!pass) {
      console.warn(`Sanity check failed: ${label}`);
    }
  });
}

runSanityChecks();

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-6">
        {title ? <h2 className="mb-6 text-3xl font-semibold tracking-tight text-slate-950">{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}

function AssetIconButton({
  href,
  label,
  showPlaceholder = false,
}: {
  href?: string;
  label: string;
  showPlaceholder?: boolean;
}) {
  if (!href && !showPlaceholder) return null;

  if (!href && showPlaceholder) {
    return (
      <div
        aria-label={label}
        title={label}
        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-100 bg-white text-emerald-900/40"
      >
        <FileText className="h-4 w-4" />
      </div>
    );
  }

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="rounded-2xl border-emerald-100 bg-white text-emerald-900 hover:bg-emerald-50"
    >
      <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
        <FileText className="h-4 w-4" />
      </a>
    </Button>
  );
}

function ExternalIconButton({ href, label }: { href: string; label: string }) {
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="rounded-2xl border-emerald-100 bg-white text-emerald-900 hover:bg-emerald-50"
    >
      <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
        <ExternalLink className="h-4 w-4" />
      </a>
    </Button>
  );
}

function ProfileBlock() {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className="relative aspect-square overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm">
      {!imgError ? (
        <img
          src={assetPaths.profileImage}
          alt="Hanyi Seok"
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-50 to-slate-100 p-6 text-center text-slate-500">
          <div>
            <div className="text-lg font-semibold text-emerald-900">Profile image missing</div>
            <div className="mt-2 text-sm">Add /images/profile-square.jpg to match the live site.</div>
          </div>
        </div>
      )}
    </div>
  );
}

function SocialButtons() {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <Button
        asChild
        variant="outline"
        className="rounded-2xl border-emerald-100 bg-white px-5 text-emerald-900 hover:bg-emerald-50"
      >
        <a href="mailto:hanyi.seok@stonybrook.edu">
          <Mail className="mr-2 h-4 w-4" />
          Email
        </a>
      </Button>

      <Button
        asChild
        variant="outline"
        className="rounded-2xl border-emerald-100 bg-white px-5 text-emerald-900 hover:bg-emerald-50"
      >
        <a href="https://github.com/hanyiseok" target="_blank" rel="noreferrer">
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </a>
      </Button>

      <Button
        asChild
        variant="outline"
        className="rounded-2xl border-emerald-100 bg-white px-5 text-emerald-900 hover:bg-emerald-50"
      >
        <a href="https://www.linkedin.com/in/hanyi-seok/" target="_blank" rel="noreferrer">
          <Linkedin className="mr-2 h-4 w-4" />
          LinkedIn
        </a>
      </Button>

      <Button
        asChild
        variant="outline"
        className="rounded-2xl border-emerald-100 bg-white px-5 text-emerald-900 hover:bg-emerald-50"
      >
        <a href={assetPaths.cv} target="_blank" rel="noreferrer">
          <FileText className="mr-2 h-4 w-4" />
          CV
        </a>
      </Button>
    </div>
  );
}

function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-emerald-100 bg-slate-50/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <nav className="hidden items-center justify-center gap-10 md:flex lg:gap-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[1.05rem] font-semibold text-emerald-900 transition hover:text-emerald-700"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function InterestGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-5">
      {interestCards.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.title} className="rounded-3xl border-emerald-100 bg-white shadow-sm">
            <CardContent className="p-5">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-900">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-base font-semibold text-emerald-900">{item.title}</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

function ResearchList() {
  return (
    <div className="grid gap-6">
      {researchItems.map((item) => (
        <Card key={`${item.title}-${item.subtitle}`} className="rounded-3xl border-emerald-100 bg-white shadow-sm">
          <CardContent className="p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-emerald-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{item.subtitle}</p>
              </div>
              <div className="flex items-center gap-2">
                <ExternalIconButton href={item.siteHref} label={item.siteLabel} />
                <AssetIconButton
                  href={item.assetHref}
                  label={item.assetTitle || "Open material"}
                  showPlaceholder={item.showPlaceholder}
                />
              </div>
            </div>

            <p className="mt-5 text-[15px] leading-8 text-slate-600 [text-align:justify]">{item.summary}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.highlights.map((tag) => (
                <Badge
                  key={`${item.title}-${tag}`}
                  variant="secondary"
                  className="rounded-full bg-slate-100 px-3 py-1 text-emerald-900"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function ProjectGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <Card
          key={project.title}
          className="flex h-full flex-col rounded-3xl border-emerald-100 bg-white shadow-sm"
        >
          <CardHeader className="px-8 pt-8 pb-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <CardTitle className="text-xl font-semibold leading-tight text-emerald-900">
                  {project.title}
                </CardTitle>
                <div className="mt-2 text-sm text-slate-500">{project.period}</div>
              </div>
              <AssetIconButton href={project.assetHref} label={project.assetLabel || "Open project material"} />
            </div>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col px-8 pb-8">
            <p className="text-[15px] leading-8 text-slate-600 [text-align:justify]">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.highlights.map((highlight) => (
                <Badge
                  key={highlight}
                  variant="secondary"
                  className="rounded-full bg-slate-100 px-3 py-1 text-emerald-900"
                >
                  {highlight}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function PresentationList() {
  return (
    <div className="grid gap-4">
      {presentations.map((item) => (
        <Card key={item.title} className="rounded-3xl border-emerald-100 bg-white shadow-sm">
          <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="text-base font-medium text-slate-950">{item.title}</div>
              <div className="mt-1 text-sm text-slate-500">{item.meta}</div>
            </div>
            <AssetIconButton href={item.assetHref} label={item.assetTitle || "Open presentation material"} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function HonorsEducation() {
  return (
    <Card className="rounded-3xl border-emerald-100 bg-white shadow-sm">
      <CardHeader className="px-8 pt-8 pb-3">
        <CardTitle className="flex items-center gap-3 text-2xl leading-none text-emerald-900">
          <GraduationCap className="h-5 w-5 shrink-0" />
          Education
        </CardTitle>
        <div className="pt-3 text-base leading-7 text-slate-500">
          Dual-degree program between the University of Seoul and Stony Brook University · Expected Spring 2027
        </div>
      </CardHeader>

      <CardContent className="space-y-8 px-8 pb-8 text-[15px] leading-8 text-slate-600">
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
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
                className="inline-flex rounded-xl border border-emerald-100 bg-white p-2 text-emerald-900 transition hover:bg-emerald-50"
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
                className="inline-flex rounded-xl border border-emerald-100 bg-white p-2 text-emerald-900 transition hover:bg-emerald-50"
              >
                <FileText className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 text-2xl font-semibold leading-none text-emerald-900">
            <Award className="h-5 w-5 shrink-0" />
            Honors
          </div>
          <div className="mt-4 grid gap-x-8 gap-y-3 pl-5 text-[15px] leading-7 text-slate-600 md:grid-cols-2">
            {honors.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TechnicalSkills() {
  return (
    <Card className="rounded-3xl border-emerald-100 bg-white shadow-sm">
      <CardContent className="grid gap-5 p-8">
        {technicalSkills.map((item) => (
          <div key={item.label} className="grid gap-2 md:grid-cols-[12rem_1fr] md:items-start">
            <div className="font-semibold text-emerald-900">{item.label}</div>
            <div className="text-slate-600">{item.value}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default function ResearchWebsitePreview() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <TopNav />

      <main>
        <section className="py-8 md:py-10">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[16rem_1fr] md:items-stretch">
            <ProfileBlock />

            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-end gap-3">
                  <div className="text-4xl font-semibold tracking-tight text-emerald-900 md:text-5xl">
                    Hanyi Seok
                  </div>
                  <span aria-hidden className="mb-1 inline-block h-6 w-px bg-slate-300 md:h-8" />
                  <div className="text-xl font-normal text-slate-700 md:text-2xl">Undergraduate Researcher</div>
                </div>

                <h1 className="mt-5 max-w-5xl text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  Modeling sustainable pathways from carbon capture to hydrogen and aviation fuels.
                </h1>
              </div>

              <SocialButtons />
            </div>
          </div>
        </section>

        <Section id="research-interests" title="Research Interests">
          <InterestGrid />
        </Section>

        <section className="scroll-mt-24 -mt-4 pt-0 pb-8 md:-mt-5 md:pt-0 md:pb-10">
          <div className="mx-auto max-w-6xl px-6">
            <Card className="rounded-3xl border-emerald-100 bg-emerald-50 shadow-sm">
              <CardHeader className="px-8 pt-8 pb-4">
                <CardTitle className="text-2xl text-emerald-900">Current Focus</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8 text-[15px] leading-8 text-slate-700 [text-align:justify]">
                Modeling OH-based direct air capture in hollow-fiber membrane contactors. The current work connects carbonate chemistry, transport, and pH-driven CO2 uptake while supporting broader carbon capture and fuel-synthesis pathways.
              </CardContent>
            </Card>
          </div>
        </section>

        <Section id="about" title="About Me">
          <Card className="rounded-3xl border-emerald-100 bg-white shadow-sm">
            <CardContent className="p-8 text-[15px] leading-8 text-slate-600 [text-align:justify]">
              <div className="mb-4 text-xl font-semibold tracking-tight text-emerald-900">
                Hi, I&apos;m Hanyi Seok, an undergraduate researcher in environmental engineering.
              </div>
              <p>
                My academic background combines environmental engineering at the University of Seoul with engineering science at Stony Brook University through a dual-degree program. Earlier projects in electrochemical wastewater treatment, catalyst immobilization, toxicity-data analysis, and environmental prediction helped shape my research interests. These experiences led me toward carbon capture, electrochemical systems, and process modeling.
              </p>
            </CardContent>
          </Card>
        </Section>

        <Section id="research" title="Selected Research Experience">
          <ResearchList />
        </Section>

        <Section id="projects" title="Selected Projects">
          <ProjectGrid />
        </Section>

        <Section id="presentations" title="Presentations">
          <PresentationList />
        </Section>

        <Section id="honors-education" title="Academic Background">
          <HonorsEducation />
        </Section>

        <Section id="technical-skills" title="Technical Skills">
          <TechnicalSkills />
        </Section>
      </main>
    </div>
  );
}
