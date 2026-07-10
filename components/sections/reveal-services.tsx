"use client";

import { motion } from "framer-motion";
import { RevealImageList } from "@/components/ui/reveal-images";

export function RevealServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <RevealImageList />
        </motion.div>
      </div>
    </section>
  );
}
