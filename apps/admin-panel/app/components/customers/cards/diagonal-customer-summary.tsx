"use client";

import React from "react";

export default function DiagonalSliceStats({
  stats = [
    { label: "Total Customers", value: "2,530" },
    { label: "Customer Satisfaction", value: "92%" },
    { label: "Active Customers", value: "1,870" },
    { label: "New Customers", value: "135" },
  ],
}) {
  return (
    <section>
      <div>
        <div className="relative rounded-2xl overflow-hidden">
          {/* left diagonal */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-purple-600/25 to-purple-300/10 dark:from-purple-900/70 dark:to-transparent"
            style={{
              clipPath: "polygon(0 0, 65% 0, 35% 100%, 0% 100%)",
            }}
          />

          {/* right diagonal */}
          <div
            className="absolute inset-0 bg-gradient-to-bl from-transparent to-purple-400/25 dark:from-transparent dark:to-purple-900/30"
            style={{
              clipPath: "polygon(65% 0, 100% 0, 100% 100%, 35% 100%)",
            }}
          />

          <div className="relative grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-tw-primary text-lg font-semibold mb-4">
                Customer Overview
              </h3>
              <p className="text-font-light max-w-md">
                Snapshot of customer health — growth, activity, and satisfaction
                at a glance.
              </p>
            </div>

            <div className="p-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="
                    rounded-xl p-4 flex flex-col shadow-md
                    bg-white/15
                    dark:bg-slate-800/25
                    backdrop-blur-xl
                    hover:bg-purple/20
                    dark:hover:bg-purple-800/20
                    transition-colors duration-300
                  "
                >
                  <div className="text-sm text-font-light mb-2">{s.label}</div>
                  <div className="text-2xl font-bold text-font-primary">
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs text-font-light">
                    Quick insight
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
