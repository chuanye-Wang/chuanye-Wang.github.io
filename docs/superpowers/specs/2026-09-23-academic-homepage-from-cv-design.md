# Academic Homepage Update from CV — Design Spec

**Date:** 2026-09-23  
**Source of truth:** Chinese sections of `CV/CV_Chuanye_Wang_PhD_Application_2027_Fall__牛逼版_.zip`  
**Language:** English only  
**Approach:** In-place content replacement on AcadHomepage (no visual redesign)

## Goal

Replace placeholder AcadHomepage content with a condensed English academic homepage translated from the Chinese CV, suitable for 2027 Fall PhD applications.

## Non-goals

- Visual redesign / new theme / new framework
- Full CV dump (keep 2–3 bullets per experience)
- Bilingual pages or language switcher
- Publishing phone number
- Adding Meituan experience (absent from active Chinese CV)
- Fake Google Scholar links or citation widgets until a real Scholar ID exists

## Source-of-truth rules

1. Prefer **Chinese CV content**; translate into English.
2. Ignore outdated English CV affiliations when they conflict (e.g. Prof. He Wang).
3. Peking University internship must read as **Peking University–JD Joint Lab**, advisor **Prof. Hao Dong**.
4. Do not invent experiences, papers, or awards not in the Chinese CV.
5. Keep standard academic English terms (WAM, DiT, BEV, RFT, etc.).

## Site structure

Single-page homepage with sidebar author profile. Navigation:

| Nav label     | Section                                      |
|---------------|----------------------------------------------|
| About Me      | Short bio                                    |
| News          | 3–5 recent milestones                        |
| Publications  | 7 papers from Chinese CV                     |
| Experience    | PKU–JD → Megvii/Qianli → AIR Tsinghua        |
| Education     | BUAA M.Eng. + BJUT B.Eng.                    |
| Honors        | Awards listed under education in Chinese CV  |

**Remove:** Invited Talks; template paper-card with placeholder image; Lorem ipsum.

## Content outline

### Sidebar / `_config.yml`

- `title`: `Chuanye Wang`
- `description`: short English tagline on Embodied AI & Autonomous Driving
- `author.name`: `Chuanye Wang`
- `author.bio`: e.g. `M.Eng. @ BUAA`
- `author.location`: `Beijing, China`
- `author.email`: `wangchuanye66@gmail.com`
- `author.avatar`: keep `images/me.jpg`
- Clear invalid Google Scholar URL placeholder; leave empty if no real ID
- Do not add phone number

### About

3–5 sentences covering:

- Master’s student at Beihang University (Transportation Engineering)
- Research focus: Embodied AI and end-to-end autonomous driving
- Current internship: PKU–JD Joint Lab (Prof. Hao Dong)
- Open to PhD discussions for Fall 2027

### News

Derive from Chinese CV milestones (wording may be polished), e.g.:

- Jul 2026: joined PKU–JD Lab (Prof. Hao Dong) for DexWAM / high-DoF dexterous manipulation
- Oct 2025 – Jul 2026: Megvii (Qianli) AD research intern (BehaviorWorldGen, WorldDrive)
- Recent papers / venues: CVCI 2025, ICCV 2025 Workshop, Automotive Innovation, DriveE2E (TMLR under review), etc.

### Publications

List all 7 papers from Chinese CV, in the same order. For each entry:

- Title (linked to PDF/project when available)
- Authors with **Chuanye Wang** / **Wang C** bolded
- Role/venue tags: co-first, first author, venue, status (working paper / under review / etc.)
- Prefer simple markdown list (no fake teaser images)

Papers (titles kept as in CV):

1. DexWAM: Scaling World Action Models for Dexterous Manipulation via Fine-Grained Video Pre-training — Embodied AI, co-first, working paper
2. WorldDrive: Spatiotemporally Aligned Privileged Distillation for Autonomous Driving — co-first, working paper
3. Design Planning Framework Based on Bidirectional Refinement Interaction for Autonomous Driving — first author, CVCI 2025 — IEEE link
4. BehaviorWorldGen: … — technical report — arXiv + project page
5. DriveE2E: … — co-first, TMLR under review — OpenReview PDF
6. Research challenges and progress in the end-to-end v2x cooperative autonomous driving competition — ICCV 2025 Workshop — IEEE link
7. FocalAD: Local motion planning for end-to-end autonomous driving — Automotive Innovation — Springer link

### Experience (condensed)

**1. Peking University–JD Joint Lab · Embodied AI Research Intern · Jul 2026 – Present**  
Advisor: [Prof. Hao Dong](https://zsdonghao.github.io/)  
Project: DexWAM / foundation models for high-DoF dexterous manipulation  
2–3 bullets from Chinese CV: WAM + high-DoF action expert; heterogeneous data pipeline (~10k hours); RoboCasa closed-loop eval; Franka real-robot setup.

**2. Megvii (Qianli) · Autonomous Driving Research Intern · Oct 2025 – Jul 2026**  
- BehaviorWorldGen: causal attention mask + Diffusion Forcing; link project page  
- WorldDrive: privileged BEV world model (lead); NAVSIM gain 87.74 → 92.66; target venue as in Chinese CV (CVPR 2027)

**3. Institute for AI Industry Research (AIR), Tsinghua University · AD Research Intern · May 2024 – Sept 2025**  
Advisor: Prof. Zaiqing Nie  
- DriveE2E: CARLA real-to-sim from Yizhuang roadside data; baseline benchmarking  
- Academic service: Organizing Committee, 2nd MEIS Workshop @ CVPR 2025 (workshop link)

**Out of scope:** Meituan internship.

### Education

- Beihang University (BUAA), Beijing — M.Eng., Transportation Engineering — Sept 2024 – Present (Focus: Embodied AI & Autonomous Driving)
- Beijing University of Technology (BJUT), Beijing — B.Eng., Electrical Engineering (Telecommunications) — Sept 2019 – June 2023

### Honors

- National 3rd Prize, RoboCup China (2022)
- 3rd Prize, National Undergraduate Electronics Design Contest, Beijing (2021)

## Files to change

| File | Change |
|------|--------|
| `_config.yml` | Site title, description, author fields |
| `_pages/about.md` | Full content replacement |
| `_data/navigation.yml` | Align anchors with new sections |

## Files not to change

- Layouts, includes, Sass/CSS (except if a broken Scholar badge requires a minimal guard)
- `images/me.jpg` and other assets
- Theme / plugin stack

## Acceptance criteria

1. No Lorem ipsum or template dummy papers remain on the homepage.
2. Content matches Chinese CV (PKU–JD + Hao Dong; no Meituan; no phone).
3. Nav anchors jump to the correct sections.
4. Sidebar shows correct name, bio, location, and email.
5. Publication links that exist in the CV still work.
6. Page remains a standard English AcadHomepage single composition (sidebar + main column).

## Implementation notes

- Translate and compress; do not paste Chinese paragraphs verbatim.
- For WorldDrive venue: follow Chinese CV (**CVPR 2027**), not the English CV’s ICLR 2027.
- For Megvii naming: use **Megvii (Qianli)** to reflect both 旷世科技 and 千里科技 used in sources.
- Repository field in `_config.yml` should remain a valid `user/repo` form if Scholar CDN paths depend on it; fix only if currently broken for this fork.
