# Avatar: Damien

## Appearance
- Age: Adult
- Gender: Man
- Ethnicity: Real-person digital twin (photo-based) — appearance comes from Damien Hiorth's own photos, not a generated description
- Hair: As in reference photos
- Build: As in reference photos
- Features: Digital twin of Damien Hiorth, owner of DenturesDirect (Toronto)
- Style: Realistic. Default look: close-up, white lab coat over blue scrub top, dental operatory background (landscape). Other looks: white shirt (landscape), lab coat (portrait), casual (portrait), game-show set (landscape)
- Reference: Managed in the HeyGen account (photo avatar group "Damien")

## Voice
- Tone: Damien's own cloned voice — natural, conversational
- Accent: English (Canadian)
- Energy: Warm, professional
- Think: The clinic owner speaking directly to a patient

## HeyGen
- Group ID: 7b969a9dc54940829b4905ea3795ec05
- Voice ID: ba68f62b7c714d4e9176948b1f9d01a5
- Voice Name: Damien Hiorth (private voice clone)
- Voice Designed: false
- Voice Seed: n/a
- Looks: landscape=06957931d44143a1aa3eab1b6977c5ba (Lab Coat Operatory Close-Up, DEFAULT), portrait=e3b43ac5e4b9413ea41006537a7fdf10 (Damien), square=none
- Last Synced: 2026-07-17T19:55:00Z

⚠️ look_ids are ephemeral — always resolve fresh from group_id at runtime via `heygen avatar looks list --group-id <id>` (or MCP `list_avatar_looks`). Never hardcode look_id as the primary avatar reference.

## Video Production Directives (apply to EVERY video)

These are standing rules from Damien — include them in every heygen-video prompt:

1. **Never cover the presenter's face — enforce structurally, not with
   placement hints.** HeyGen's compositor does NOT reliably honor overlay
   placement instructions (learned 2026-07-17: it rendered a text box across
   Damien's face despite an explicit lower-third directive). The only
   reliable pattern: the A-roll presenter footage must be completely clean —
   zero text, zero graphics on any frame where the presenter is visible.
   All on-screen text appears exclusively on separate full-screen
   motion-graphics cutaway cards.
   **Cards must ride over continuous narration** (learned 2026-07-17:
   "cards between segments" produced awkward silent gaps). The voice track
   is one unbroken take; cards appear for 2-3 s as visual cutaways WHILE
   the voice-over continues. Never instruct the agent to "let lines
   breathe" or give a duration target longer than the natural script
   length — both cause dead-air padding. State: total duration = natural
   narration length; zero silent gaps.
   **Cards sparingly** (learned 2026-07-18: listing 5-7 cards produced
   videos Damien found too card-heavy, ~1/3 of runtime off his face).
   Max 3 cards per video: a title card (shown a few seconds in, NOT at the
   very start — see rule 5), at most ONE mid-video concept card, and the
   contact outro. State explicitly: "the presenter must be on screen for at
   least 85% of the video's runtime."
2. **Every CTA includes address + website.** The closing call-to-action (and
   outro card) must always show: **2833 Weston Road, North York**,
   **denturesdirect.ca**, and the phone number **(416) 245-7474**.
3. Keep claims honest — no "24/7", no "and up" pricing; 4.8 stars / 67
   reviews; implant overdenture is $5,250 flat per arch.
4. Slow down slightly on the phone number.
5. **Always open on Damien's face, never on a card** (rule from Damien,
   2026-07-18). The very first scene must be the presenter on camera
   delivering the hook — the first frame the viewer sees is his face, not a
   title card or motion graphic. Any title card comes a few seconds in,
   after the opening spoken line. State explicitly in the prompt: "The video
   MUST open on the presenter speaking on camera. Do not begin with a title
   card, logo, or any full-screen graphic — the first frames are the
   presenter's face."
6. **Default cutaways are AI-generated clinical b-roll, not flat text cards**
   (adopted 2026-07-18 after a successful test — Seedance-backed footage
   inside HeyGen). Instead of full-screen text cards, use AI-generated VIDEO
   of dental equipment, appliances, models, and clean clinic/lab
   environments as the cutaways. **Hard constraint: objects and environments
   ONLY — never AI people, patients, dentists, hands, fingers, or mouths**
   (that's where generative video goes uncanny, and it's a trust risk in a
   medical context). The only on-screen TEXT remains the final contact card
   (rule 2). Billed as normal HeyGen credits per render.
7. **Do NOT add aggressive "no pauses / no silence" directives, and do NOT
   re-render to chase a small gap** (learned 2026-07-18). A single ~1-1.3s
   beat sometimes appears at a b-roll cut; that's acceptable and normal.
   Attempting a "CRITICAL AUDIO — NO PAUSES" instruction made the agent chop
   the audio at EVERY b-roll cut (one 1.3s gap → six gaps, ~7.5s silence).
   Re-rendering is non-deterministic and often worse. If a single beat truly
   must go, trim it out of the finished MP4 locally (free, no re-render) —
   never re-generate for it.
