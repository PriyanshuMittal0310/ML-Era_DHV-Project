"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"

export type NarrationStatus = "idle" | "speaking" | "paused" | "unsupported"

export interface UseNarrationProps {
  /** Current scene index (0-based) */
  scene: number
  /** Returns the full text to speak for a scene */
  getTextForScene: (scene: number) => string
  /** If true, automatically start narrating when the scene changes (after user initiates audio once) */
  autoOnSceneChange?: boolean
  /** If true, automatically go to next() when narration for current scene ends */
  autoAdvance?: boolean
  /** Called when narration ends for a scene and autoAdvance is enabled */
  onAdvance?: () => void
}

export interface UseNarrationReturn {
  status: NarrationStatus
  supported: boolean
  voices: SpeechSynthesisVoice[]
  voiceURI?: string
  setVoiceURI: (uri?: string) => void
  rate: number
  setRate: (r: number) => void
  volume: number
  setVolume: (v: number) => void
  pitch: number
  setPitch: (p: number) => void
  enabled: boolean
  setEnabled: (e: boolean) => void
  /** Start speaking the current scene text (cancels any existing speech) */
  speak: () => void
  /** Pause current utterance (if supported) */
  pause: () => void
  /** Resume paused utterance (if supported) */
  resume: () => void
  /** Stop/cancel speaking */
  stop: () => void
  /** The text that will/does get spoken for this scene (for captions) */
  captionText: string
}

const isSpeechSupported = () =>
  typeof window !== "undefined" && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window

export function useNarration({
  scene,
  getTextForScene,
  autoOnSceneChange = true,
  autoAdvance = false,
  onAdvance,
}: UseNarrationProps): UseNarrationReturn {
  const supported = isSpeechSupported()
  const [status, setStatus] = useState<NarrationStatus>(supported ? "idle" : "unsupported")
  const [enabled, setEnabled] = useState(false) // must be toggled by a user gesture once
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [voiceURI, setVoiceURI] = useState<string | undefined>(undefined)
  const [rate, setRate] = useState(1.0)
  const [volume, setVolume] = useState(1.0)
  const [pitch, setPitch] = useState(1.0)

  const lastSceneRef = useRef<number>(scene)
  const initializedRef = useRef(false)
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  const captionText = useMemo(() => getTextForScene(scene), [getTextForScene, scene])

  // Load voices (browsers load them async).
  useEffect(() => {
    if (!supported) return
    const synth = window.speechSynthesis

    const load = () => {
      const v = synth.getVoices()
      if (v.length > 0) {
        setVoices(v)
        // Preserve selection if still present; else choose a sensible default (prefer en-US female, else first)
        if (!voiceURI) {
          const preferred =
            v.find((vv) => /en-?US/i.test(vv.lang) && /female/i.test((vv as any).name || "")) ||
            v.find((vv) => /en/i.test(vv.lang)) ||
            v[0]
          if (preferred) setVoiceURI(preferred.voiceURI || preferred.name)
        }
      }
    }

    load()
    // Some browsers (Chromium) fire voiceschanged later
    window.speechSynthesis.addEventListener?.("voiceschanged", load)
    return () => window.speechSynthesis.removeEventListener?.("voiceschanged", load)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supported])

  const stop = useCallback(() => {
    if (!supported) return
    window.speechSynthesis.cancel()
    currentUtteranceRef.current = null
    setStatus("idle")
  }, [supported])

  const speak = useCallback(() => {
    if (!supported) return
    const text = captionText?.trim()
    if (!text) return
    // Cancel any ongoing speech
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    currentUtteranceRef.current = u
    // Apply voice
    if (voiceURI) {
      const voice = voices.find((v) => v.voiceURI === voiceURI || v.name === voiceURI)
      if (voice) u.voice = voice
    }
    u.rate = rate
    u.volume = volume
    u.pitch = pitch

    u.onstart = () => setStatus("speaking")
    u.onpause = () => setStatus("paused")
    u.onresume = () => setStatus("speaking")
    u.onend = () => {
      setStatus("idle")
      currentUtteranceRef.current = null
      if (autoAdvance && onAdvance) onAdvance()
    }
    u.onerror = () => {
      setStatus("idle")
      currentUtteranceRef.current = null
    }

    window.speechSynthesis.speak(u)
  }, [supported, captionText, voiceURI, voices, rate, volume, pitch, autoAdvance, onAdvance])

  const pause = useCallback(() => {
    if (!supported) return
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause()
      setStatus("paused")
    }
  }, [supported])

  const resume = useCallback(() => {
    if (!supported) return
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume()
      setStatus("speaking")
    }
  }, [supported])

  // When scene changes, re-speak if enabled + autoOnSceneChange.
  useEffect(() => {
    if (!supported) return
    if (!initializedRef.current) {
      initializedRef.current = true
      lastSceneRef.current = scene
      return
    }
    if (scene !== lastSceneRef.current) {
      lastSceneRef.current = scene
      stop()
      if (enabled && autoOnSceneChange) {
        // tiny delay so UI updates feel smooth
        setTimeout(() => speak(), 150)
      }
    }
  }, [scene, enabled, autoOnSceneChange, speak, stop, supported])

  // If user disables audio, stop any current speech.
  useEffect(() => {
    if (!supported) return
    if (!enabled) stop()
  }, [enabled, stop, supported])

  return {
    status,
    supported,
    voices,
    voiceURI,
    setVoiceURI,
    rate,
    setRate,
    volume,
    setVolume,
    pitch,
    setPitch,
    enabled,
    setEnabled,
    speak,
    pause,
    resume,
    stop,
    captionText,
  }
}