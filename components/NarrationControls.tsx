"use client"

import React from "react"
import { useNarration } from "../hooks/useNarration"

type Props = {
  narration: ReturnType<typeof useNarration>
  className?: string
}

const NarrationControls: React.FC<Props> = ({ narration, className }) => {
  const {
    enabled,
    setEnabled,
    supported,
    status,
    voices,
    voiceURI,
    setVoiceURI,
    rate,
    setRate,
    volume,
    setVolume,
    pitch,
    setPitch,
    speak,
    pause,
    resume,
    stop,
    captionText,
  } = narration

  if (!supported) {
    return (
      <div className={`bg-slate-800/60 text-slate-300 p-4 rounded-lg ring-1 ring-slate-700 ${className ?? ""}`}>
        <p className="text-sm">Text-to-speech isn’t supported in this browser. You can still read the captions below.</p>
        <div className="sr-only" aria-live="polite">
          {captionText}
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-slate-800/60 text-slate-200 p-4 rounded-lg ring-1 ring-slate-700 ${className ?? ""}`}>
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => {
            if (!enabled) setEnabled(true)
            // Start speaking immediately on first enable
            speak()
          }}
          className="px-3 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-sm font-semibold"
          aria-label="Play narration"
        >
          {status === "speaking" ? "Re-play" : enabled ? "Play" : "Enable Audio & Play"}
        </button>

        <button
          onClick={pause}
          disabled={status !== "speaking"}
          className={`px-3 py-2 rounded-lg text-sm font-semibold ${
            status === "speaking" ? "bg-slate-700 hover:bg-slate-600" : "bg-slate-700/40 cursor-not-allowed"
          }`}
          aria-label="Pause narration"
        >
          Pause
        </button>
        <button
          onClick={resume}
          disabled={status !== "paused"}
          className={`px-3 py-2 rounded-lg text-sm font-semibold ${
            status === "paused" ? "bg-slate-700 hover:bg-slate-600" : "bg-slate-700/40 cursor-not-allowed"
          }`}
          aria-label="Resume narration"
        >
          Resume
        </button>
        <button
          onClick={stop}
          className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm font-semibold"
          aria-label="Stop narration"
        >
          Stop
        </button>

        <div className="flex items-center gap-2 ml-auto min-w-[220px]">
          <label className="text-xs text-slate-400">Voice</label>
          <select
            value={voiceURI}
            onChange={(e) => setVoiceURI(e.target.value)}
            className="bg-slate-900 text-slate-100 text-sm px-2 py-1 rounded border border-slate-700 w-full"
            aria-label="Choose voice"
          >
            {voices.map((v) => (
              <option key={`${v.voiceURI}-${v.name}`} value={v.voiceURI || v.name}>
                {v.name} — {v.lang}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
        <div className="flex items-center gap-2">
          <label className="text-xs text-slate-400 w-14">Rate</label>
          <input
            type="range"
            min={0.5}
            max={2}
            step={0.1}
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            className="w-full"
          />
          <span className="text-xs text-slate-300 tabular-nums">{rate.toFixed(1)}×</span>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-xs text-slate-400 w-14">Pitch</label>
          <input
            type="range"
            min={0.5}
            max={2}
            step={0.1}
            value={pitch}
            onChange={(e) => setPitch(parseFloat(e.target.value))}
            className="w-full"
          />
          <span className="text-xs text-slate-300 tabular-nums">{pitch.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-xs text-slate-400 w-14">Volume</label>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-full"
          />
          <span className="text-xs text-slate-300 tabular-nums">{Math.round(volume * 100)}%</span>
        </div>
      </div>

      {/* Live captions / transcript for accessibility */}
      <div className="mt-3 p-3 bg-slate-900/60 rounded text-sm text-slate-200" aria-live="polite">
        {captionText}
      </div>
    </div>
  )
}

export default NarrationControls