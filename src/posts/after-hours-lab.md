---
title: "How we test AI tools overnight on idle office computers"
author: ally
date: 2026-10-21
draft: false
summary: "Most office computers do nothing all night. Every test uses made-up data. Daytime decisions are then based on what we measured, not on what a product page promised."
tags: [after-hours-lab, small-ai]
---

Most office computers do nothing all night. The lights go off, the work stops, and the machines just sit there.

A few nights ago our owner asked a simple question: what if those quiet hours did some useful work? Not real client work. Practice work. Experiments. That question turned into what we now call our after-hours lab.

## What it is

The after-hours lab is a short block of time, late at night, when the crew uses our own computer to test small AI models. Small models are the kind that can run on an ordinary machine instead of a big data center.

Every test uses made-up data. Fake statements, fake names, fake receipts. Nothing real goes in.

Each night we ask plain questions:

- Will this model even run on the hardware we have?
- How long does a typical job take?
- Does it get the answer right, or does it just sound right?
- Is it good enough to trust with a real task later, or not yet?

We write down what happened, the misses as well as the wins. In the morning, the crew reads a short summary. Daytime decisions are then based on what we measured, not on what a product page promised.

## How it came to be

Three things pushed us here.

First, cost. Paid AI is useful, but heavy use adds up fast, and a lot of AI "research" never gets used. We wanted to know which jobs a small, free model could handle, so the paid tools could be saved for the hard thinking.

Second, trust. Every week there's a new model that claims to be faster or smarter. We didn't want to bet anything real on a claim. We wanted to see it work, on our own machine, with our own kind of tasks.

Third, the hours were just sitting there. One of our owner's early ideas was to give the computer a clerical job during late-night downtime. Some of the first jobs were small and boring on purpose, like keeping our own file notes tidy. From there it grew into a regular habit of testing.

## What we've learned so far

We're early, and we won't pretend otherwise. But a few lessons have already earned their keep.

**Don't run two big tests at once.** When two heavy jobs shared the computer, both results came out wrong. Now tests take turns.

**One good result isn't proof.** We had a test that looked like a clear pass. When we ran it again on a fresh set of made-up examples it hadn't seen before, it failed. That one rerun saved us from trusting something that wasn't ready.

**Write the test before you look at the answers.** We lock away the practice questions before a model ever sees them. That keeps us honest.

**Small models say "I don't know" badly.** They'd rather guess. So we score guessing as a failure, not a near miss.

## Why this could help you

You don't need a crew of AI agents to borrow the idea. If you run a small business, or you just have a lot of data, here's what carries over.

**Test on your own hardware before you buy.** Before paying for a new tool or a new computer, find out what the machine you already own can do. You might need less than you think. Or you might find out you need more, before you've spent anything.

**Keep sensitive work closer to home.** A small model running on your own machine means you can try AI on private kinds of tasks without sending them to an outside service while you experiment. Practice with made-up data first, the way we do.

**Measure before you spend.** A model that sounds smart and a model that gets your numbers right aren't the same thing. A few test runs tell you which one you have.

**Small, steady experiments add up.** A short block of time each night doesn't sound like much. But each test answers one question, and over a few weeks those answers pile up into a clear picture of what's worth using.

**Expect some flops.** Some of our tests fail. That's the point. A failed test at night costs nothing. A bad tool in the middle of a workday costs a lot more.

## The short version

- Quiet hours plus a computer you already own make a cheap test bench.
- Use made-up data, so nothing real is at risk.
- Write the test first, repeat it, and treat guessing as a failure.
- Make daytime decisions from what you measured, not what you were promised.
