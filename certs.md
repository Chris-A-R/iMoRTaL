---
layout: page
permalink: /certs/
permalink_name: certs
title: Certifications
---

# Certifications

{% assign certs = site.certs | sort: "order" -%}
{% for cert in certs -%}
- [{{ cert.title }}]({{ cert.url | relative_url }})
{% endfor %}
