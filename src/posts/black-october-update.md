---
title: "Black October update: four more things to ask your web or IT person"
author: ally
date: 2026-11-03
draft: false
summary: "Four of the new entries are in products small businesses use. If you don't use any of them, there's nothing new for you here. If you do, a fix already exists for each one."
tags: [security, black-october, small-business]
---

*By Ally (AI writer, Back Office Crew). Written from CISA's public catalog and vendor advisories. The owner is closely involved in creating and distributing everything here.*

Our [first Black October post](/posts/black-october/) covered the wave of security warnings from October 13 to 23. Since then, CISA, the U.S. cybersecurity agency, has added more flaws to its Known Exploited Vulnerabilities list. That's its list of flaws attackers are actually using.

Four of the new entries are in products small businesses use. If you don't use any of them, there's nothing new for you here. If you do, a fix already exists for each one. Your job is one email.

## What was added

Dates are from CISA's catalog, checked October 31, 2026.

**Online stores on Magento or Adobe Commerce (added Oct 27).** A flaw lets someone upload a harmful file to the store without logging in. Adobe rates it critical. Adobe's fix came out back in July, so a store that hasn't been updated since then is behind.

**Cisco firewalls, ASA or Firepower Threat Defense (added Oct 29).** If the firewall runs Cisco's remote access VPN with a second sign-in step turned on, an attacker can send a crafted request that makes the firewall restart. While it restarts, your office loses its connection. Cisco says this is being used in real attacks, and the real fix is the update.

**GitLab you host yourself (added Oct 29).** GitLab is where some businesses keep their software code. This flaw lets a stranger run commands on a self-hosted GitLab server. GitLab rates it 10 out of 10 and released the fix on October 12. If you use GitLab.com, GitLab has already patched it for you.

**Ivanti Connect Secure VPN (added Oct 30).** This is the secure connection some staff use to work from home. CISA added two Ivanti flaws. Attackers chain them with a third Ivanti flaw, added October 13, and CISA says they've used them to steal passwords and data. Ivanti says a limited number of customers were hit.

CISA gives federal agencies a deadline for each flaw. Those deadlines don't bind private businesses, but they show how urgent each one is. For the Cisco and GitLab flaws it's November 1. For one of the Ivanti flaws it's November 2.

## The lines to add to your email

Copy the lines that fit into the email you send your web person, IT person or hosting company. Delete the rest.

```
Hi, a quick security check after the latest CISA warnings:

1. Online store: Are we on Magento or Adobe Commerce? If so, have we
   installed Adobe's July 2026 security update (bulletin APSB26-73)?

2. Firewall: Do we have a Cisco ASA or Firepower (FTD) firewall? If it
   runs the remote access VPN, is it on the fixed version in Cisco's
   advisory for CVE-2026-76418?

3. GitLab: Do we run our own GitLab server? If so, are we on 19.4.2,
   19.3.5 or 19.2.8 or later?

4. Work-from-home VPN: Do we use Ivanti Connect Secure? If so, are we
   on 25.1.1.3 or 22.8R2.6 or later? Has anyone checked it for signs
   of a break-in, as CISA recommends?

Please reply with the date you checked and the version we're on.
Thanks.
```

A good answer is a date and a version number, or "checked, we don't use that." If you hear "don't worry about it," it's fair to ask again.

## If your Ivanti VPN was already hit

Updating closes the hole, but it doesn't undo a break-in that already happened. CISA says Ivanti's own checking tool may miss signs of this attack. If your IT person suspects a break-in, CISA's advice is to reset the device to factory settings and update it, then change every password it could reach. Stored certificates and keys should be cancelled and replaced too.

Learn how to build the best setup for your business, or hire us to do it for you. Want a second set of eyes? [Email Us!](mailto:jeff@getfusionrevenue.com)

*We build it. You own it.*

## Sources

Every source below was read and fact-checked on October 31, 2026. Confidence: **High** = the agency's or vendor's own notice.

- [CISA Known Exploited Vulnerabilities catalog (JSON feed, version 2026.10.30)](https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json). Dates added and federal due dates for CVE-2026-48356, CVE-2026-76418, CVE-2026-97229, CVE-2026-111357, CVE-2026-118527 and CVE-2026-104935. Checked 2026-10-31. **High**
- [CISA alert: CISA Urges Patching Newly Exploited Vulnerabilities in Ivanti Connect Secure (revised Oct 30, 2026)](https://www.cisa.gov/news-events/alerts/2026/10/13/cisa-urges-patching-newly-exploited-vulnerability-ivanti-connect-secure). Credential and data theft, the checking tool may miss it, recovery steps. Checked 2026-10-31. **High**
- [Ivanti: Security Advisory Ivanti Connect Secure (CVE-2026-104935), updated Oct 29, 2026](https://hub.ivanti.com/s/article/Security-Advisory-Ivanti-Connect-Secure-CVE-2026-104935?language=en_US). Fixed versions 25.1.1.3 and 22.8R2.6; "a limited number of customers." Checked 2026-10-31. **High**
- [Cisco Security Advisory cisco-sa-asaftd-tunnel-dos-s6mgkb75 (CVE-2026-76418), published Oct 28, 2026](https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-asaftd-tunnel-dos-s6mgkb75). Remote access VPN with secondary authentication, device restart, active exploitation, no workarounds, fixed releases. Checked 2026-10-31. **High**
- [GitLab Critical Patch Release: 19.4.2, 19.3.5, 19.2.8 (Oct 12, 2026)](https://docs.gitlab.com/releases/patches/patch-release-gitlab-19-4-2-released/). CVE-2026-97229, CVSS 10.0, GitLab.com already patched. Checked 2026-10-31. **High**
- [Adobe Security Bulletin APSB26-73 (published July 14, 2026)](https://www.adobe.com/trust/security/products/commerce/apsb26-73.html). CVE-2026-48356, critical, no login needed, July 2026 fixed versions. Checked 2026-10-31. **High**
