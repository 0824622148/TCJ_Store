"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { logoPulse, fadeUp } from "@/lib/animations";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => router.push("/onboarding"), 2800);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0118] via-[#160D2E] to-[#06000E]" />

      <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-[#160D2E]/60 blur-3xl" />
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-[#7B2FBE]/30 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <motion.div variants={logoPulse} initial="initial" animate="animate" className="relative">
          <div className="w-28 h-28 rounded-full bg-forest-gradient shadow-[0_20px_60px_rgba(22,13,46,0.8)] flex items-center justify-center p-1">
            <Image src="/images/tcj-logo.png" alt="The Cloud Junction" width={108} height={108} className="object-contain rounded-full" />
          </div>
          <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border-2 border-accent/40" />
        </motion.div>

        <motion.div variants={fadeUp} initial="initial" animate="animate" className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-soft">
            The Cloud<span className="text-gradient-green"> Junction</span>
          </h1>
          <p className="text-sm text-white/50 mt-1 tracking-widest uppercase">JHB South Delivery</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="flex gap-1.5 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div key={i} animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 h-1.5 rounded-full bg-accent" />
          ))}
        </motion.div>
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-12 text-xs text-white/25 tracking-wider">
        Fast · Discreet · JHB South
      </motion.p>
    </div>
  );
}
