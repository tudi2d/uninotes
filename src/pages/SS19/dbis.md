---
title: "Datenbanken & Informationssysteme"
---

Klassischer Klausuraufbau:

- ER-Diagramm zeichnen
- Relationales Datenbankschema aus ER-Diagramm
- Relationale Algebra, Kalküle
- SQL Queries formulieren zu gegebenen Table
- Funktionale Abhängigkeiten, Normalform
- Synthese, Dekomposition
- Serialisierbarkeit, Nebenläufigkeit, Transaktionsmanagment
- $B^+$-Baum, B-Baum
- XML
- RDF, SPARQL (XPath, XQuery)

## Einführung

Ein Datenbanksystem besteht aus:

- Datenbank-Managementsystem (DBMS): Verwaltung der Datenbank; Schnittstelle
- Datenbank (DB): Sammlung aller Daten/Schemata

Big Data Problem: Erfassung, Verarbeitung und Analyse von Daten erfordert immer häufiger effiziente Datenbanksysteme

## Entity-Relationship-Modell

### Datenbankentwurf

Bestimmung der Struktur und des allgemeinen Aufbaus der Datenbank.

Anforderungsanalyse $\rightarrow$ Entwurf $\rightarrow$ Implementierung $\rightarrow$ Validierung $\rightarrow$ Betrieb ($\rightarrow$ Evolution)

### ER-Diagramm

Entity-Typ (Objekt):
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="91px" viewBox="-0.5 -0.5 91 41" content="&lt;mxfile modified=&quot;2019-07-18T07:48:05.817Z&quot; host=&quot;www.draw.io&quot; agent=&quot;Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0&quot; etag=&quot;AWJhtGFHvPm17nlkY36x&quot; version=&quot;10.9.8&quot; type=&quot;device&quot;&gt;&lt;diagram id=&quot;LRwWvk0p5C2VLGGLqu9J&quot; name=&quot;Page-1&quot;&gt;jZLda4MwEMD/mjwO1Iy2Pq6u3Qbr+iBjsLdgriYQPZfGqf3rF5ukVkphkIe7333lPgjNqv5Fs0bskIMiScR7Qp9JksSPSULGF/HBkeWKOlBqyb3TBHJ5Ag8jT1vJ4ThzNIjKyGYOC6xrKMyMMa2xm7sdUM2rNqyEG5AXTN3SL8mNcHSVLCf+CrIUoXK8SJ2lYsHZd3IUjGN3heiG0EwjGidVfQZqHF6Yi4vb3rFePqahNv8J2MuPn0W6276916c9suwz+949+Cy/TLW+4dy0fMzo/myGMAiNbc1hzBURuu6ENJA3rBitnV29ZcJUymqxFQ9SqQwV6nMsfUqzx83acl8NtIH+bhvxZTj2qgArMHqwLj6AhssYwol5vZvWk3okrjYT3Jg/iPKSeZqZFfzYgjqt52y7OnK6+QM=&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://www.draw.io/?client=1&amp;lightbox=1&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:41px;"><defs/><g><rect x="0" y="0" width="90" height="40" fill="#a9c4eb" stroke="#000000" pointer-events="none"/><g transform="translate(23.5,13.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="42" height="12" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 43px; white-space: nowrap; overflow-wrap: normal; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml" style="display:inline-block;text-align:inherit;text-decoration:inherit;white-space:normal;">Student</div></div></foreignObject><text x="21" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica">Student</text></switch></g></g></svg>  
Entity-Set (Objektmenge): Menge von konkreten Instanzen des Entity-Typ

Attribute: <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="71px" viewBox="-0.5 -0.5 71 31" content="&lt;mxfile modified=&quot;2019-07-18T07:55:43.334Z&quot; host=&quot;www.draw.io&quot; agent=&quot;Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0&quot; etag=&quot;igb7DmL_44v39CDsnVQM&quot; version=&quot;10.9.8&quot; type=&quot;device&quot;&gt;&lt;diagram id=&quot;LRwWvk0p5C2VLGGLqu9J&quot; name=&quot;Page-1&quot;&gt;jZLBboMwDIafhuOkQjYo17GyTRrtoZom7RYRl0QKmKXpgD79QjFQVFWalEP82Y6d3/ZYUravhtcyQwHaC1ai9diLFwT+YxB4/VmJbiDRmg2gMEpQ0Az26gwEV0RPSsBxEWgRtVX1EuZYVZDbBePGYLMMO6BeVq15ATdgn3N9S7+UsHKg6yCa+RuoQo6V/TAePCUfg+knR8kFNleIbTyWGEQ73Mo2Ad2LN+oy5KV3vFNjBir7n4Sd2v6EcZa+f1TnHfLkM/nOHmg6v1yf6MNbXgI1bLtRBfeSE9wZz41UFvY1z3tP42bumLSldpbvrgeldYIazSWPpenmKY4dpzJgLLR3+/cnVdw6AZZgTedCKIGFJCRtkh+R3cxzGZG8GgkjxmkTiunlWSx3Ib1Gc57LxXe13WzzBw==&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://www.draw.io/?client=1&amp;lightbox=1&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:31px;"><defs/><g><ellipse cx="35" cy="15" rx="35" ry="15" fill="#ffe599" stroke="#000000" pointer-events="none"/><g transform="translate(18.5,8.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="33" height="12" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 34px; white-space: nowrap; overflow-wrap: normal; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml" style="display:inline-block;text-align:inherit;text-decoration:inherit;white-space:normal;">Name</div></div></foreignObject><text x="17" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica">Name</text></switch></g></g></svg>  
Ein Attribut beschreibt die Eigenschaften einer zugehörigen Entity.  
Schlüssel: <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="71px" viewBox="-0.5 -0.5 71 31" content="&lt;mxfile modified=&quot;2019-07-18T07:58:09.597Z&quot; host=&quot;www.draw.io&quot; agent=&quot;Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0&quot; etag=&quot;K1kxjQtBZ0eVpXB3hzLH&quot; version=&quot;10.9.8&quot; type=&quot;device&quot;&gt;&lt;diagram id=&quot;LRwWvk0p5C2VLGGLqu9J&quot; name=&quot;Page-1&quot;&gt;jZLBboMwDIafhuOkQrq2XMdgmzTaA5om7RaRlEQKmKXugD79QjGlqKpUKQf7s53Ev+2xqGzfLK9VCkIaL1iI1mOvXhD4yyDw+rMQ3UDWGzaAwmpBSRPI9EkSXBA9aiEPs0QEMKjrOcyhqmSOM8athWaetgczf7XmhbwBWc7NLf3WAtVAN8F64u9SF2p82V+FQ6TkYzJ1clBcQHOFWOyxyALgYJVtJE0v3qjLUJfciV4+ZmWFjxTs9PZ3FabJx2d12gGPvqKf9Imm88fNkRpOOdqtpS9jN+rg7nKSO+elURplVvO8jzRu6o4pLI3zfGfutTERGLDnOpYk8XMY9hwqzOi+Jb0qLcr2bjv+RSS3XRJKibZzKVTAVqQrLZa/Jr+ZxjQidTUhRozTYhSXmyftnEHyje40pnPsatlZ/A8=&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://www.draw.io/?client=1&amp;lightbox=1&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:31px;"><defs/><g><ellipse cx="35" cy="15" rx="35" ry="15" fill="#ffe599" stroke="#000000" pointer-events="none"/><g transform="translate(16.5,8.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="37" height="12" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 38px; white-space: nowrap; overflow-wrap: normal; text-decoration: underline; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml" style="display:inline-block;text-align:inherit;text-decoration:inherit;white-space:normal;">MatrNr</div></div></foreignObject><text x="19" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica" text-decoration="underline">MatrNr</text></switch></g></g></svg>  
Einzigartig für eine Instanz.

Ein Attribut kann aus mehreren Attributen bestehen.

Mehrwertige Attribute: <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="81px" viewBox="-0.5 -0.5 81 41" content="&lt;mxfile modified=&quot;2019-07-18T08:01:45.957Z&quot; host=&quot;www.draw.io&quot; agent=&quot;Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0&quot; etag=&quot;LUXZqcWkXQgqXrbH-QGS&quot; version=&quot;10.9.8&quot; type=&quot;device&quot;&gt;&lt;diagram id=&quot;LRwWvk0p5C2VLGGLqu9J&quot; name=&quot;Page-1&quot;&gt;rZTfa4MwEID/Gh8HaqrO17m6DWb7IGOwt6CpBqLn0nTa/vVLm/MXrrBCXyT35S7JfQlaJKq6F0mbMoGcCcu1884iz5br+kGgv2dwNIAExIBC8twgZwQpPzGENtIDz9l+lqgAhOLNHGZQ1yxTM0alhHaetgMx37WhBVuANKNiST95rkpDH91g5K+MF2W/s+OHZqaifTJ2si9pDu0EkbVFIgmgzKjqIibO7novpi6+MjscTLJa/adgyzfffpjEb+/1aQs0+oi+kge8jB8qDtgwHlYdewN6FS1bB09tyRVLG5qdZ1p93ZqVqhI6cvRwx4WIQIC81JE4XnthqPnQuK0D3I9JxbqrjTiDHv2sGFRMyaNOwQLieaYEn5TjY9xOLgill5O7WSGj+CSKYeXRmh6guBskuguJCVVyI++vcge1SnG91T1U+vZcZWAvVAZ/qCS3q9Th+NYvc5MfBln/Ag==&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://www.draw.io/?client=1&amp;lightbox=1&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:41px;"><defs/><g><ellipse cx="40" cy="20" rx="40" ry="20" fill="#ffe599" stroke="#000000" pointer-events="none"/><ellipse cx="40" cy="20" rx="35" ry="15" fill="#ffe599" stroke="#000000" pointer-events="none"/><g transform="translate(20.5,13.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="37" height="12" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 38px; white-space: nowrap; overflow-wrap: normal; text-decoration: underline; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml" style="display:inline-block;text-align:inherit;text-decoration:inherit;white-space:normal;">Autoren</div></div></foreignObject><text x="19" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica" text-decoration="underline">MatrNr</text></switch></g></g></svg>

Relationship: <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="461px" viewBox="-0.5 -0.5 461 62" content="&lt;mxfile modified=&quot;2019-07-18T08:06:24.179Z&quot; host=&quot;www.draw.io&quot; agent=&quot;Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0&quot; etag=&quot;BWVR_ghPEbMSFvfUWbTI&quot; version=&quot;10.9.8&quot; type=&quot;device&quot;&gt;&lt;diagram id=&quot;LRwWvk0p5C2VLGGLqu9J&quot; name=&quot;Page-1&quot;&gt;1ZZdb9owFIZ/TS6HQgwOuWxTuk0aazW0ddudRQ6JJRNnjlNCf/1s7Hwa1q5im8YFynltH+c85+UID8W7+q0gRbbiCTAv8JPaQzdeEOAwVN9aOBgBhcgIqaCJkaadsKZPYEXfqhVNoBxslJwzSYuhuOF5Dhs50IgQfD/ctuVseGtBUnCE9YYwV32gicyMugjCTn8HNM2am6c4Mis70my2lZQZSfi+J6Glh2LBuTRPuzoGptk1XMy52zOr7YsJyOVLDtzRjz9wtLp9/yF/uuMk/hx/X72ZmSyPhFW24LWsEp3RvLM8NCAEr/IEdC7fQ9f7jEpYF2SjV/eq80rL5I6paKoe21r13i1lLOaMi2MiFC6v8FLr9moQEuqzNU1bUsphwHcgxUFtaQ4gC/fQ4LfxvutVq2W9PmGrEWuPtE3dEVQPFuJvAJ07QL9wwaCs8vT/QDoLX4A0+JtIsYM082LkXWPhurQH7BRPUhZmSGxprcFrqoVepyX/pFZInupMv4StWF9jfBnYaOzfwIWNsct69qdYLxzWDmLIkys9WFWU8xyGLlV1i8PXfvBNU5zMm/CmtlRNdLCRuQUSZxiPSKrpT0QK8rmR5hLvEZ2fcG+jCWBE0sfha5zCbG+451QPy7MNHXeq5JXYgD3Vn9ajRO3PqUmEwmEiw8FJdOx6W/brjRBdygj+JIoWIzP4i2fscIzuQVBVBojLewT/S4+oCTvxe5/pqNHRZP46z8z8sWeiC3lGhd0fFbO9+7eHlj8B&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://www.draw.io/?client=1&amp;lightbox=1&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:62px;"><defs/><g><rect x="0" y="0" width="110" height="60" fill="#7ea6e0" stroke="#000000" pointer-events="none"/><g transform="translate(33.5,23.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="42" height="12" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 43px; white-space: nowrap; overflow-wrap: normal; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml" style="display:inline-block;text-align:inherit;text-decoration:inherit;white-space:normal;">Student</div></div></foreignObject><text x="21" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica">Student</text></switch></g><rect x="340" y="0" width="120" height="60" fill="#7ea6e0" stroke="#000000" pointer-events="none"/><g transform="translate(371.5,23.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="55" height="12" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 56px; white-space: nowrap; overflow-wrap: normal; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml" style="display:inline-block;text-align:inherit;text-decoration:inherit;white-space:normal;">Vorlesung</div></div></foreignObject><text x="28" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica">Vorlesung</text></switch></g><path d="M 200 30 L 233 10.95 L 266 30 L 233 49.05 L 200 30 Z" fill="#ea6b66" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><g transform="translate(221.5,23.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="21" height="12" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 22px; white-space: nowrap; overflow-wrap: normal; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml" style="display:inline-block;text-align:inherit;text-decoration:inherit;white-space:normal;">hört</div></div></foreignObject><text x="11" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica">hört</text></switch></g><path d="M 200 30 L 110.14 29.86" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 340 29.5 L 265.86 30.33" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/></g></svg>

Rekursive Beziehung: <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="271px" viewBox="-0.5 -0.5 271 62" content="&lt;mxfile modified=&quot;2019-07-18T08:10:25.350Z&quot; host=&quot;www.draw.io&quot; agent=&quot;Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0&quot; etag=&quot;zktW1MWxBJae8_N1PHrz&quot; version=&quot;10.9.8&quot; type=&quot;device&quot;&gt;&lt;diagram id=&quot;LRwWvk0p5C2VLGGLqu9J&quot; name=&quot;Page-1&quot;&gt;5ZbLjtsgFIafxstWsUnsZJnxZNpKzcyoUa87ZJ/YSBhcjGMnT18I+J65tE1X3UScHzjAd35DHBRm9TuB83TLY6CON4trB906nucHgfrVwtEIKEBGSASJjeR2wo6cwIozq5YkhmIwUHJOJcmHYsQZg0gONCwEr4bD9pwOV81xAhNhF2E6Vb+SWKZGXXpBp78HkqTNyq6/Mj0ZbgbbkxQpjnnVk9DGQaHgXJpWVodANbuGi5l390RvuzEBTL5mwgO5/+mvtncfPrLTA8fh5/DH9s3cZDlgWtoDf+GCQlGyxO5aHhsUgpcsBp1t5qCbKiUSdjmOdG+laq+0VGZURa5qtqfVY/eE0pBTLs6JULBZ+xut28VBSKifPJXbslIeA56BFEc1pJmALN5jUwAbV121Wi3tVcq3GrYGSdrUHUPVsBh/A6k/QXrgQuCyKECegE2w9qBdYoqL3Ph6T2oNX5PNdT8p+CfVg1miMz0LXPG+8f3rAEezVwCfXQLu/iPgy0seTpwQOes5S0BMiAOL1/pqUBHjDIbGhZrIbxrjW3e5svH3c4xQ039bW87n4NgLHkEQdSoQVjNrQzy5ZEa41f54KSJ4yVfTsvSwLy5QbzQBFEtyGG7jUinsCo+cqA12VR9/ZvPR52O2b2f1b6FRIm8+SoRGiSQWCchJorMz2mP/uVlWE7Pc4yhVz8LfGCVYDoyiH73/1ijeqL6LxZWMsriWUVTYvbpmePfXBW1+AQ==&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://www.draw.io/?client=1&amp;lightbox=1&amp;edit=_blank');}}})(this);" style="cursor:pointer;max-width:100%;max-height:62px;"><defs/><g><rect x="0" y="0" width="110" height="60" fill="#7ea6e0" stroke="#000000" pointer-events="none"/><g transform="translate(26.5,23.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="55" height="12" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 56px; white-space: nowrap; overflow-wrap: normal; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml" style="display:inline-block;text-align:inherit;text-decoration:inherit;white-space:normal;">Vorlesung</div></div></foreignObject><text x="28" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica">Vorlesung</text></switch></g><path d="M 170 30.5 L 220 1.63 L 270 30.5 L 220 59.37 L 170 30.5 Z" fill="#ea6b66" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><g transform="translate(180.5,23.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="77" height="12" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 78px; white-space: nowrap; overflow-wrap: normal; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml" style="display:inline-block;text-align:inherit;text-decoration:inherit;white-space:normal;">vorraussetzen</div></div></foreignObject><text x="39" y="12" fill="#000000" text-anchor="middle" font-size="12px" font-family="Helvetica">vorraussetzen</text></switch></g><path d="M 188.71 20.33 L 110 20" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><g transform="translate(123.5,14.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="51" height="11" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; font-size: 11px; font-family: &quot;Helvetica&quot;; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; white-space: nowrap; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml" style="display:inline-block;text-align:inherit;text-decoration:inherit;background-color:#ffffff;">Vorgänger</div></div></foreignObject><text x="26" y="11" fill="#000000" text-anchor="middle" font-size="11px" font-family="Helvetica">Vorgänger</text></switch></g><path d="M 187.76 41.29 L 110 40" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><g transform="translate(121.5,34.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="53" height="11" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; font-size: 11px; font-family: &quot;Helvetica&quot;; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; white-space: nowrap; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml" style="display:inline-block;text-align:inherit;text-decoration:inherit;background-color:#ffffff;">Nachfolger</div></div></foreignObject><text x="27" y="11" fill="#000000" text-anchor="middle" font-size="11px" font-family="Helvetica">Nachfolger</text></switch></g></g></svg>

isA Beziehung: partiell:

- Die erbenden Entities decken nur ein Teil der ursprünglichen Entity ab
- Die erbenden Entities spezialisieren alle ursprünglichen Entities

### Konzeptueller Entwurf

## Relationale Datenmodell

Relationen: $R \subseteq D_1 \times ... \times D_k$ von Domänen z.B. $D_i= \{ 1, ... ,10 \}$ oder $D_j=\{ a,b,c \}$ $\Rightarrow$ $R_{ij} = \{ (1,a), ... , (10,c) \}$  
Tupel: $t \in R_{ij}$
Schlüssel: Teilmenge S der Attribute, sodass für Tupel $t_1,t_2$ gilt: $t_1 \neq t_2 \Rightarrow t_1[S] \neq t_2[S]$

Im geordneten Relationenschema spielt ist $(1,a) \neq (a,1)$. Im ungeordneten Relationenschema spielt die Reihenfolge im Tupel keine Rolle.

### ER-Diagramm zum relationalen Modell

- Entity-Typ $\rightarrow$ Tabelle/Relation: Student($\underline{\text{MatrNr}}$, Name, Status) - Zusammengesetzte Attribute werden zu einzelnen Attributen
- n:m Beziehungen $\rightarrow$ Relationen für Relation und Entities:

  - Relationen: Entity1($\underline{\text{Key1}}$); Entity2($\underline{\text{Key2}}$); Relationship($\underline{\text{Key1}}, \underline{\text{Key2}}$)
  - Interrelationale Abhängigkeiten: Relationship[Key1] $\subseteq$ Entity1[Key1]; Relationship[Key2] $\subseteq$ Entity2[Key2]
  - Die "Relationship" bekommt Key1 und Key2 als Fremdschlüssel

- 1:n Beziehungen
  - Relationen: Entity1($\underline{\text{Key1}}$, Attr1); Entity2($\underline{\text{Key2}}$, Entity1Key1Relation)
  - Interrelationale Abhängigkeiten: Entity2[Entity1Key1Relation] $\subseteq$ Entity1[Key1]
  - Vorteil: Keine extra Relation für Relation
  - Nachteil: Für Entities die nicht in Beziehung stehen ist Entity1Key1Relation leer
- 1:1 Beziehungen
  - Verschmelzen von 2 Entities zu einer Relation
  - Relationen: Entity1($\underline{\text{Key1}}$, Attr1, Key2 Attr2)
- Rekursive Beziehungen
  - Relationen: Relation($\underline{\text{Vorgänger}}$, $\underline{\text{Nachfolger}}$)
  - Interrelationale Abhängigkeiten: Relation[Vorgänger] $\subseteq$ Entity[Key]; Relation[Nachfolger] $\subseteq$ Entity[Key]
- isA Beziehungen
  - Relationen: Key der Parent-Entity auch für Children-Entity
  - Interrelationale Abhängigkeiten: Children[Key] $\subseteq$ Parent[Key] und Schnittmenge zwischen Children-Relationen ist die leere Menge
- Mehrwertiges Attribut:
  - Aus dem mehwertigen Attribut wird eine Relation
  - Relationen: Entity($\underline{\text{Key}}$, Attr); Mehrwertig($\underline{\text{MehrwertigKey}}$, $\underline{\text{Key}}$)
  - Interrelationale Abhängigkeiten: Mehrwertig[Key] $\subseteq$ Student[Matrkielnummer]

### Relationale Algebra

Relationen als Wertebereich. Somit sind R,S Mengen von Tupeln

#### Grundoperationen

- Vereinigung: $R \cup S$
  - Vereinigt und löscht Duplikate
- Differenz: $R - S$
  - Alle Tupel aus R, welche nicht in S sind
- Kartesisches Produkt: $R \times S$
  - Jedes Tupel aus R verknüpft mit jedem Tupel aus S
- Selektion: $\sigma_F(R)$
  - Selektiert alle Tupel, welche dem boolschen Ausdruck F entsprechen
- Projektion: $\pi_{A_{i_1},...,A_{i_m}}(R)$
  - Gibt nur die Attribute (Spalten) $A_{i_1},...,A_{i_m}$ zurück
- Umbenennung: $\rho_{R'}(R)$ oder $\rho_{A' \leftarrow A}(R)$
  - Bennent Relation R in R' um
  - Bennent Attribut A in A' um für eine Relation R

Alle Grundoperationen sind induktiv definiert, sodass eine Relation auch durch eine gültige Operation auf einer Relation ersetzt werden kann.

#### Weitere Operationen

- Durchschnitt: $R \cap S = R - (R - S)$
- Natürlicher Verbund (natural join): $R \Join S$
  - Zusammenfügen von Relationen in Abhängigkeit von übereinstimmenden Attributen
  - Funktioniert nur bei gleichen Attributnamen
  - kommutativ und assoziativ
- Theta-Join: $R \Join_{\Theta} S = \sigma_{\Theta}(R \times S)$
  - Nur passende Attribute des Kreuzprodukts
  - Doppelte Attribute werden nicht aussortiert!
- Weitere join operationen
  ![Join Operationen](../../../public/images/join.png)

### Relationale Kalkül

Deklarative Sprache (im Gegensatz zur prozeduralen Sprache der relationalen Algebra)

#### Tupelkalkül

Alle Tupel t die die Formel $F(t)$ erfüllen $\{ t | F(t) \}$  
z.B. $\{ [p.PersNr] | p \in Professor \land p.Rang = \text{'W3'} \}$

#### Domänenkalkül

Ein Ausdruck mit k Bereichsvariablen: $\{ x_1,...,x_k | F(x_1,...,x_k) \}$  
z.B. $\{ p | \exists n,b (\text{Professor}(p,n,\text{'W3'},b)) \}$

## SQL

Structured Query Language ist eine Mischung aus relationaler Algebra und des relationalen Kalküls. SQL ist eine deklarative Datenbankanfragensprache.

```sql
CREATE TABLE Cars (
    SerialNumber INTEGER NOT NULL,
    CarName VARCHAR (50),
    OwnerId VARCHAR (50) REFERENCES Owner(OwnerId)
    PRIMARY KEY (SerialNumber)
);

ALTER TABLE Cars
ADD LicencePlate VARCHAR (50);

ALTER TABLE CARs
DROP COLUMN CarName;

CREATE UNIQUE INDEX CarIndex
ON Cars (SerialNumber);

DROP INDEX CarIndex;

// DROP TABLE;
```

### Views

```sql
CREATE VIEW OwnedCars AS
SELECT * FROM Cars WHERE OwnerId IS NOT NULL;
```

### Data Manipulation Language

Data Manipulation Language (DML) von SQL

```sql
SELECT *                    // Projektion
FROM Cars                   // Kreuzprodukt
WHERE CarName LIKE '%BMW%'  // Selektion
```

`SELECT DISTINCT` gibt nur einmalig eine Zeile zurück. Duplikate werden ignoriert.

### Aggregatfunktionen

```sql
SELECT [COUNT, MIN, MAX, SUM, AVG] ([Distinct] <Attribut>)
FROM ... WHERE ...
```

COUNT: Anzahl der Zeilen zu gegebener Querry  
SUM : Summe der Werte eines Attributs

### Gruppieren und Sortieren

```sql
SELECT * FROM ...
GROUP BY <Liste von Attributen>
ORDER BY <Liste von Attributen> ASC/DESC
```

### Join

```sql
// Theat-Join
SELECT * FROM Cars ...
JOIN ... ON <Bedingung für Attribute>
```

Es exestieren noch `LEFT (OUTER) JOIN, RIGHT (OUTER) JOIN, FULL (OUTER) JOIN`, welche analog zu `JOIN` verwendet werden können. Die funktionsweise lässt sich an der Grafik gut veranschaulichen.

### Änderungen

```sql
INSERT INTO Cars (CarName, OwnerId)
VALUES ('BMW',1)

DELETE FROM Cars WHERE ...

UPDATE Cars
SET Price = Price + 200
WHERE CarName = %'BMW'%
```

## Relationale Anfragebearbeitung

Günstigsten Auswertungsplan ermitteln.

SQL zu relationaler Algebra (kanonisch)

- Bilde das kartesische Produkt der Relationen
- Führe Selektionen mit den einzelnen Bedingungen durch
- Projeziere auf erforderliche Attribute

Beispiel:

```sql
SELECT VName, NName
FROM Studenten AS S, Professoren AS P
WHERE S.NName = P.NName
AND S.Alter < P.Alter - 20
```

Wird zu:

$\pi_{VName, NName}(\sigma_{S.Alter < P.Alter - 20}(\sigma_{S.NName = P.NName}(S \times P)))$

### regelbasierte Anfragenoptimierung

Restrukturierungsalgorithmus

- Aufbrechen der Selektion
- Verschieben der Selektion nach unten
- Kreuzprodukte und Selektionen zu Joins zusammenfassen
- Einfügen und verschieben von Projektionen
- (Zusammenfassen von Selektionen)

Die Idee ist Selektionen möglichst früh durchzuführen und somit eine Performance-Verbesserung zu erreichen.

<!--
### kostenbasierte Anfragenoptimierung

Joa... Kommt bestimmt nicht dran, ne

### Basisoperationen
-->

### Indexstrukturen

Prozesse sollen nebenläufig auf Daten arbeiten können. Für sowas verwendet man Festplatten als Sekundärspeicher. Die Daten werden in Blöcken gespeichert.

#### eindimensionale Daten

Mehrwege-Bäume: Alle Knoten haben $M + 1$ viele Nachfolger ud M viele Schlüssel.

B-Baum: M+1 Mehrwege Suchbaum für eine gerade Zahl M.

- Suchen: Binär vergleichen auf dem jeweiligen Knoten; Suche rekursiv in den Teilbaum. Benötigte Vergleiche: $log_2 M * log_m N$
- Einfügen
  - Passendes Blatt für Objekt suchen
  - Wenn hierdurch das Blatt überläuft, spalte es auf
- Löschen
  - Bei einem Blatt: Lösche Schlüssel aus dem Blatt
  - Bei inneren Knoten: Suche größten Schlüssel links vom zu löschenden Schlüssel. Ersetze den zulöschenden durch den gefundenen Knoten. Lösche den zu löschenden Knoten
  - Bei der Wurzel: So wie bei den anderen beiden, nur darf die Wurzel weniger als M/2 Schlüssel haben

Einfügen:  
![Einfügen](https://martin-thoma.com/images/2012/07/b-tree-2-small-2.png)![Einfügen](https://martin-thoma.com/images/2012/07/b-tree-2-small-4.png)

$B^+$-Baum: B-Baum Variante mit zwei Knotentypen

- Blätter enthalten Schlüssel mit Datensätzen oder Verweisen auf Datensätzen

$B^+$-Baum speichert Schlüssel ohne Daten. Dadurch ist der $B^+$-Baum meist breiter und weniger hoch als ein B-Baum.

#### mehrdimensionale Daten

Invertierte Listen

Quadtree

R-Baum (Rectangel-Baum)

## Relationale Entwurfstheorie

### Funktionale Abhängigkeiten

Sei $X$ eine Attributmenge und $R$ ein Relationenschema. $\alpha, \beta \subseteq X$.

$\beta$ funktional abhängig von $\alpha$: $\alpha \rightarrow \beta$  
intrarelationale Abhängigkeit: $\sigma_K:Rel(X)\rightarrow\{0,1\}$: 1, falls $\alpha \rightarrow \beta$ in R gilt, sonst 0  
voll funktional abhängig: Es gilt $\alpha \rightarrow \beta$, aber $\alpha - \{ A \} \nrightarrow \beta$ für alle $A \in \alpha$.  
Schlüsselkandidat: Attributmenge $\alpha \subseteq X$ ist ein Schlüsselkandidat, wenn $X$ voll funktional abhängig von $\alpha$ ist  
Primärschlüssel: Einer der Schlüsselkandidaten

R erfüllt funktionale Abhängigkeiten $A \rightarrow B$, wenn für Tupel p,q gilt $p.A = q.A$ und $p.B = q.B$

### Armstrong Kalkül

#### implizierte funktionale Abhängigkeiten

## Alternative Datenmodelle

## Transaktionsverwaltung
