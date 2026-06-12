---
title: Why I built Pixel2Excel
date: 2026-6-12
tag: Building
excerpt: A teacher friend showed me a stack of photographed grade sheets and asked if there was a faster way. There wasn't — so I built one.
---

A teacher friend of mine showed me her workflow for entering grades: a stack
of photographed paper sheets, a spreadsheet, and a lot of manual typing. Every
term, the same repetitive work.

I asked if there was a tool that could just read the sheet and fill in the
spreadsheet for her. There wasn't anything good — most "AI table extraction"
tools were either too generic, too expensive, or required a level of setup
that defeated the purpose.

## The first version

The first version of Pixel2Excel was deliberately narrow. One job: upload an
image of a grade sheet, get back an editable table. No accounts, no
dashboards, no settings page.

```
Upload image → Gemini API extracts table → Editable grid → Export
```

That constraint was the point. I wanted to validate whether the core
extraction was good enough to be useful *before* building anything else
around it.

## What I learned from real sheets

Real grade sheets are messier than test images. Handwriting varies, lighting
is inconsistent, and column headers aren't always where you'd expect. Most of
the iteration since launch has been about handling that messiness — better
preprocessing, clearer error states when extraction confidence is low, and an
editable interface that makes corrections fast rather than frustrating.

## What's next

Right now I'm working directly with a handful of teachers, refining accuracy
based on the sheets they actually use. The roadmap is intentionally short:
get extraction right for the formats people actually have, then think about
what comes after.

If you're a teacher dealing with this exact problem, I'd love to hear from
you — [reach out](/#contact).


