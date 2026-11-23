---
layout: page
permalink: /about-me
permalink_name: about-me
title: About Me
---

# About Me

<figure class="profile-photo">
  <img src="{{ '/assets/images/100_0106.jpg' | relative_url }}" alt="Photo of Chris"></figure>

<div class="whoami">
<div class="whoami-cmd">$ whoami</div>
<dl>
  <dt>name</dt>     <dd>Chris</dd>
  <dt>role</dt>     <dd>Cyber Professional</dd>
  <dt>focus</dt>    <dd>IAM, Endpoint Hardening, Network Security</dd>
  <dt>edu</dt>      <dd>M.S. Information Security</dd>
  <dt>status</dt>   <dd><span class="whoami-status">[ open to work ]</span></dd>
</dl>
</div>

Hey, I’m Chris. I’m an IT and cybersecurity professional with an M.S. in Information Security from Cal Poly Pomona. Most recently, as the on-site specialist for a nonprofit, I handled everything from firewall deployments and patch management to identity governance in Microsoft Entra and Intune. I hold CompTIA Security+, Network+, and HTB CDSA certifications. I keep my skills sharp with Hack The Box and TryHackMe. I started out with a B.S. in Biology, so I still approach security like a scientist: observe, hypothesize, test. When I’m not behind a keyboard, you’ll find me on the volleyball court or in the gym. This is where I document what I’m learning, building, and breaking. The only thing getting exploited here is my free time.

## Experience

**IT Specialist** · Nonprofit
_On-site cybersecurity lead reporting to the CISO and Director of Operations_
- Led a multi-site WatchGuard firewall deployment, reaching 100% site coverage
- Rolled out Action1 automated patching, cutting mean time to patch and earning a top-ranked vulnerability score

**Security Specialist** · Retail
- Escalated incidents to upper management with daily threat summaries and status briefings
- Maintained 100% accurate case documentation with zero audit-trail gaps

## Certifications

{% assign certs = site.certs | sort: "order" -%}
{% for cert in certs -%}
- [{{ cert.title }}]({{ cert.url | relative_url }})
{% endfor %}

## Socials

<div class="socials">
<div class="whoami-cmd">$ ls ~/socials</div>
<ul>
  <li><a href="https://github.com/chris-a-r">GitHub</a></li>
  <li><a href="https://www.linkedin.com/in/christian-rivera-901821284/">LinkedIn</a></li>
</ul>
</div>
