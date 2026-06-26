import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Frostbyte — Cloud-Native Room Cooling Platform" },
      { name: "description", content: "AI-powered, cloud-native room temperature optimization. Production-ready. MIT licensed. Guaranteed not to cool your room." },
      { property: "og:title", content: "Frostbyte — Not every problem is a software problem." },
      { property: "og:description", content: "Open source, MIT, guaranteed wirkungslos." },
    ],
  }),
  component: Index,
});

const MODULES = [
  "Quantum Thermal Solver",
  "Neural Heat Predictor (GPU-accelerated)",
  "Distributed Cooling Mesh",
  "Blockchain Ledger for Thermal Accountability",
  "Real-Time Joule Streaming Pipeline",
  "Self-Healing Convection Microservice",
];

function Badge({ children, tone = "dim" }: { children: React.ReactNode; tone?: "green" | "blue" | "red" | "dim" | "amber" }) {
  const colors = {
    green: "text-green border-green/35",
    blue: "text-blue border-blue/35",
    red: "text-red border-red/35",
    amber: "text-amber border-amber/35",
    dim: "text-dim border-border",
  } as const;
  return (
    <span className={`text-[11px] px-2 py-[3px] rounded-full border bg-white/[0.02] ${colors[tone]}`}>
      {children}
    </span>
  );
}

function Terminal() {
  const [lines, setLines] = useState<{ text: string; cls?: string }[]>([]);
  const [progress, setProgress] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const out: { text: string; cls?: string }[] = [];
    const push = (text: string, cls?: string) => {
      if (cancelled) return;
      out.push({ text, cls });
      setLines([...out]);
    };
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

    (async () => {
      push("$ python3 frostbyte/engine.py", "dim");
      await wait(400);
      push("Initializing Frostbyte Engine v9.0.0 ...", "blue");
      await wait(300);
      for (const m of MODULES) {
        push(`  loading  ${m}  [ OK ]`, "ok");
        await wait(220);
      }
      push("");
      push("Reading outside temperature ...  37.0 C", "blue");
      await wait(250);
      push("Reading room temperature ...     31.4 C", "blue");
      await wait(300);
      push("");
      push("Running proprietary cooling algorithm ...", "dim");
      for (let i = 0; i <= 40; i++) {
        if (cancelled) return;
        setProgress(i);
        await wait(35);
      }
      setProgress(null);
      push("Optimization complete. Joules moved: 0", "green");
      await wait(300);
      push("");
      push("====================================================", "dim");
      push("RESULT", "bold");
      push("====================================================", "dim");
      push("  Outside temperature              37.0 C", "blue");
      push("  Room temperature (before)        31.4 C", "blue");
      push("  Room temperature (after)         31.4 C", "blue");
      push("");
      push("  NET CHANGE                       +0.0°C", "result");
      push("");
      push("  Joules moved: 0 · Boot: 4.2s · Investor interest: surprisingly high", "dim");
      setDone(true);
    })();

    return () => { cancelled = true; };
  }, []);

  return (
    <div className="rounded-xl border border-border bg-panel terminal-shadow overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-gradient-to-b from-white/[0.03] to-transparent">
        <span className="w-2.5 h-2.5 rounded-full bg-[#3a4750]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#3a4750]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#3a4750]" />
        <span className="ml-2 text-xs text-dim">frostbyte/engine.py — running</span>
      </div>
      <div className="p-6 text-[13px] leading-relaxed min-h-[520px] whitespace-pre-wrap font-mono">
        {lines.map((l, i) => {
          const cls =
            l.cls === "ok" ? "text-green" :
            l.cls === "green" ? "text-green" :
            l.cls === "blue" ? "text-blue" :
            l.cls === "dim" ? "text-dim" :
            l.cls === "bold" ? "text-text font-bold" :
            l.cls === "result" ? "text-green text-3xl font-bold block py-2" :
            "text-text";
          return <div key={i} className={cls}>{l.text || "\u00A0"}</div>;
        })}
        {progress !== null && (
          <div className="text-dim">
            {`  [${"#".repeat(progress)}${"-".repeat(40 - progress)}] ${String(Math.round(progress / 40 * 100)).padStart(3, " ")}%  applying thermodynamic optimization`}
          </div>
        )}
        {!done && <span className="cursor-blink" />}
      </div>
    </div>
  );
}

function Metric({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`rounded-lg border bg-panel/60 p-4 ${accent ? "border-green/50 shadow-[0_0_30px_-10px_var(--green)]" : "border-border"}`}>
      <div className="text-[10px] tracking-[0.18em] text-dim font-bold">{label}</div>
      <div className={`mt-3 text-2xl font-mono ${accent ? "text-green" : "text-text"}`}>{value}</div>
    </div>
  );
}

function Feature({ title, desc, tag }: { title: string; desc: string; tag: string }) {
  return (
    <div className="rounded-lg border border-border bg-panel/40 p-5 hover:border-blue/40 transition-colors">
      <div className="text-[10px] tracking-[0.2em] text-blue font-bold">{tag}</div>
      <div className="mt-2 text-text font-bold">{title}</div>
      <div className="mt-2 text-sm text-dim leading-relaxed">{desc}</div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen grid-bg">
      <div className="max-w-5xl mx-auto px-5 py-8 md:py-12">
        {/* Header */}
        <header className="flex items-center justify-between flex-wrap gap-3 mb-10">
          <div className="flex items-center gap-2.5 font-bold tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-green glow-green" />
            FROSTBYTE
            <span className="text-dim font-normal text-xs ml-2">v9.0.0</span>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            <Badge tone="green">status: production-ready</Badge>
            <Badge tone="blue">cooling: 0°C</Badge>
            <Badge tone="red">actually works: no</Badge>
            <Badge>MIT</Badge>
          </div>
        </header>

        {/* Hero */}
        <section className="mb-12">
          <div className="text-[11px] tracking-[0.25em] text-green font-bold mb-4">// LAUNCH DAY · OPEN SOURCE</div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-text">
            Cloud-Native,<br />
            <span className="text-blue">AI-Powered</span> Room<br />
            Temperature Platform.
          </h1>
          <p className="mt-6 text-lg text-dim max-w-2xl leading-relaxed">
            Frostbyte leverages machine learning, distributed systems, and a fully event-driven architecture
            to reduce ambient temperature by exactly <span className="text-green">0.0°C</span>.
            Outside is 37°C? We have got you covered.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://github.com/your-name/frostbyte" className="px-5 py-2.5 rounded-md bg-green text-bg font-bold text-sm hover:bg-green/90 transition">
              ★ Star on GitHub
            </a>
            <a href="#demo" className="px-5 py-2.5 rounded-md border border-border text-text font-bold text-sm hover:border-blue/60 transition">
              Run Live Demo →
            </a>
            <a href="#quickstart" className="px-5 py-2.5 rounded-md text-dim font-bold text-sm hover:text-text transition">
              Quick Start
            </a>
          </div>
        </section>

        {/* Metrics */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
          <Metric label="BOOT TIME" value="4.2s" />
          <Metric label="JOULES MOVED" value="0" />
          <Metric label="TEMP REDUCTION" value="0.0°C" accent />
          <Metric label="INVESTOR INTEREST" value="high" />
        </section>

        {/* Demo Terminal */}
        <section id="demo" className="mb-16">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-2xl font-bold">Live Demo</h2>
            <span className="text-xs text-dim">// streaming from /dev/null</span>
          </div>
          <Terminal />
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Why Frostbyte</h2>
          <p className="text-dim text-sm mb-6">
            The thermostat industry has not innovated in decades. We disrupt cooling with a software-first approach.
            No hardware. No refrigerant. No moving parts. Just clean code and ambition.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <Feature tag="01 / AI" title="Neural Heat Predictor" desc="A transformer-based network predicts heat before it happens, then politely ignores it." />
            <Feature tag="02 / SCALE" title="Cloud-Native" desc="Scales horizontally across regions to cool rooms of any size with the same impressive efficiency: none." />
            <Feature tag="03 / LEDGER" title="Blockchain-Ready" desc="Every joule that wasn't moved is logged on an immutable, gas-optimized ledger. For accountability." />
            <Feature tag="04 / REALTIME" title="Sub-ms Optimization" desc="Thermodynamic optimization in under 1ms. The optimization is doing nothing, but very fast." />
            <Feature tag="05 / TRUST" title="Zero-Trust Architecture" desc="Trusts no one. Especially the laws of physics. Especially not your room." />
            <Feature tag="06 / DX" title="Zero Dependencies" desc="Frostbyte ships with no runtime dependencies. It needs nothing, much like the room needs no software." />
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Architecture</h2>
          <pre className="rounded-xl border border-border bg-panel p-6 text-[12px] md:text-sm text-dim overflow-x-auto leading-relaxed">
{`     [ Outside: 37°C ]
            │
            ▼
   ┌─────────────────┐      ┌───────────────────┐
   │  Sensor Mesh    │ ───► │ Neural Predictor  │
   └─────────────────┘      └───────────────────┘
            │                        │
            ▼                        ▼
   ┌─────────────────────────────────────────────┐
   │     Proprietary Cooling Algorithm           │
   │     (moves precisely 0 joules of heat)      │
   └─────────────────────────────────────────────┘
            │
            ▼
     [ Room: still warm ]`}
          </pre>
        </section>

        {/* Quick Start */}
        <section id="quickstart" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
          <div className="rounded-xl border border-border bg-panel p-5 font-mono text-sm">
            <div className="text-dim"># clone the repository</div>
            <div><span className="text-green">$</span> git clone https://github.com/your-name/frostbyte.git</div>
            <div><span className="text-green">$</span> cd frostbyte</div>
            <div><span className="text-green">$</span> python3 frostbyte/engine.py</div>
            <div className="text-dim mt-3"># watch the room temperature drop by exactly zero degrees</div>
          </div>
        </section>

        {/* The Point */}
        <section className="mb-16 rounded-xl border border-green/30 bg-gradient-to-br from-green/[0.04] to-transparent p-8 md:p-12">
          <div className="text-[11px] tracking-[0.25em] text-green font-bold mb-4">// THE POINT</div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Not every problem is a software problem.
          </h2>
          <div className="mt-6 space-y-4 text-dim max-w-2xl leading-relaxed">
            <p>
              Heat is physics. No model, no cloud, no agent moves a single molecule of warm air.
              Physics does not read your code.
            </p>
            <p>
              We are trained to answer every problem with more code, more AI, more platform.
              Some problems aren't solved by another repo. Some problems are solved by an open window,
              a glass of water, and a little honesty about what our tools can actually do.
            </p>
            <p className="text-text font-bold">
              Frostbyte cools nothing. That is the point.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-dim">
          <div>© 2026 Frostbyte Contributors · MIT License</div>
          <div className="flex gap-5">
            <a href="https://github.com/your-name/frostbyte" className="hover:text-green transition">GitHub</a>
            <a href="#demo" className="hover:text-blue transition">Demo</a>
            <span className="text-dim">guaranteed wirkungslos</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
