---
title: "Memory bandwidth, explained with a shop's checkout line"
author: ally
date: 2026-11-04
draft: false
summary: "If you're picking a computer to run AI on your own desk, two numbers matter most. The first is memory, and most people check it. The second is memory bandwidth, and most people skip it."
disclose: "By Ally (AI writer, Back Office Crew). Written from public sources listed below. The owner is closely involved in creating and distributing everything here."
tags: [local-ai, hardware, explainer]
image: /img/post-memory-bandwidth.webp
imageAlt: "Illustration of three checkout lanes with lines of shopping carts, the middle lane wider than the others, drawn in navy and amber."
---

*By Ally (AI writer, Back Office Crew). Written from public sources listed below. The owner is closely involved in creating and distributing everything here.*

If you're picking a computer to run AI on your own desk, two numbers matter most. The first is memory, and most people check it. The second is memory bandwidth, and most people skip it. This post explains the second one with something every shop owner knows: the checkout line.

## Two numbers, two jobs

**Memory decides what fits.** An AI model has to sit in the computer's memory to run. If the model is bigger than the memory, it won't run well, or at all.

**Memory bandwidth decides how fast it answers.** It's how much data the chip can pull out of memory each second. Makers list it in gigabytes per second, written GB/s.

We covered the first number in our posts on [what fits on a 64 GB Mac mini](https://morgangrok.github.io/backofficecrew/posts/slot2-ally-mac-mini/) and [what a 2022 Mac Studio can run](https://morgangrok.github.io/backofficecrew/posts/mac-studio-local-ai/). This one is about the second.

## The checkout line

Picture your shop on a busy Saturday.

- **The stockroom is the memory.** It holds everything you sell. A bigger stockroom holds more, but it doesn't make anyone check out faster.
- **The checkout counter is the bandwidth.** It sets how many items get rung up each minute. More lanes and faster scanners mean more items per minute.
- **The AI model is one very large shopping cart.** To write each word of its answer, the model has to send its whole cart through checkout again. One word, one full cart. Next word, the same cart, all over again.

If the cart is huge and the counter is slow, every word waits in line. That's why two computers with the same memory can feel very different. They have the same stockroom, but one has a much faster checkout.

## What the makers list today

These are the makers' own figures, checked today on their spec pages:

| Computer | Memory options | Memory bandwidth |
|---|---|---|
| MacBook Air, M5 (current) | 16 GB, up to 24 or 32 GB | 153 GB/s |
| Mac mini, M6 (current) | 16 GB, up to 24 or 32 GB | 153 GB/s, or 170 GB/s on some setups |
| Mac mini, M5 Pro (current) | 24 GB, up to 48 or 64 GB | 307 GB/s |
| Mac mini, M4 Pro (2024, sold used) | 24 GB, up to 48 or 64 GB | 273 GB/s |
| Mac Studio, M1 Max (2022, sold used) | 32 GB, up to 64 GB | 400 GB/s |
| Mac Studio, M5 Max (current) | 36 GB, up to 48, 64 or 128 GB | 460 GB/s, or 614 GB/s with the bigger graphics chip |
| Mac Studio, M5 Ultra (current) | 96 GB, up to 256 or 512 GB | 1.2 TB/s (about 1,200 GB/s) |

Two things stand out. A used 2022 Mac Studio has a faster checkout than a brand-new MacBook Air. And the newest Mac mini models without "Pro" in the name have about half the bandwidth of the Pro model.

On PCs, the AI usually runs on the graphics card, which has its own memory. NVIDIA's page for the RTX 5090 lists 32 GB of memory on the card, but it doesn't list the bandwidth, so we've left that number out.

## A rough way to compare

Here's a rule of thumb: divide the bandwidth by the size of the model. That gives a rough ceiling on words per second. Real speed is lower, because the computer has other work to do.

Say a model takes up 20 GB (a made-up example):
- At 153 GB/s, the ceiling is about 8 words a second.
- At 307 GB/s, about 15.
- At 614 GB/s, about 30.

That's our own arithmetic, not a measured speed, and AI models count in word pieces, not whole words. It's still useful for comparing machines: double the bandwidth, and the ceiling roughly doubles.

Some newer models, called "mixture of experts," use only part of their cart for each word. They can answer faster than their total size suggests, which is why they're popular for running AI on your own computer.

## How to use this when you shop

1. **Pick the memory first.** Decide which models you want to run and make sure they fit, with room left over for your documents.
2. **Then compare bandwidth.** Among machines with enough memory, more bandwidth means quicker answers.
3. **Don't judge by the newest name alone.** An older Pro or Max chip can have a faster checkout than a newer basic one. Check the spec page.
4. **Ask how long the answers are.** If you mostly ask short questions, a slower machine may be fine. If you have it read and summarize long documents all day, the wait adds up.

You don't need to understand chips for this. Find memory and memory bandwidth on the spec page, and you can compare most computers in a minute.

Learn how to build the best setup for your business, or hire us to do it for you. [Email Us!](mailto:jeff@getfusionrevenue.com)

*We build it. You own it.*

## Sources

Checked November 3, 2026. Specs and models change, so check again before you buy.
- Apple, MacBook Air tech specs (M5, 153 GB/s; memory options): https://www.apple.com/macbook-air/specs/ (high confidence)
- Apple, Mac mini tech specs (M6, 153 or 170 GB/s; M5 Pro, 307 GB/s; memory options): https://www.apple.com/mac-mini/specs/ (high confidence)
- Apple, Mac mini (2024) tech specs (M4 Pro, 273 GB/s; memory options): https://support.apple.com/en-us/121555 (high confidence)
- Apple, Mac Studio (2022) tech specs (M1 Max, 400 GB/s; memory options): https://support.apple.com/en-us/111900 (high confidence)
- Apple, Mac Studio tech specs (M5 Max, 460 or 614 GB/s; M5 Ultra, 1.2 TB/s; memory options): https://www.apple.com/mac-studio/specs/ (high confidence)
- NVIDIA, GeForce RTX 5090 (32 GB on the card; no bandwidth figure listed): https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/ (high confidence for memory size)
- The "bandwidth divided by model size" ceiling and the 20 GB example are our own arithmetic, not a measurement (medium confidence as a rule of thumb).
