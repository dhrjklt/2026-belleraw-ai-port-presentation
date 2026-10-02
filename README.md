# AI-Assisted Code Porting: BelleRawDIRAC → DiracX

Slidev presentation on how an AI/LLM agent (opencode) was used together with
**codegraph** (repository knowledge graph) and **mempalace** (cross-session
memory) to port the legacy BelleRawDIRAC DIRAC extension to the DiracX-based
`bellerawdiracx`.

Built with [Slidev](https://sli.dev) and the
[neversink](https://github.com/estruyf/slidev-theme-neversink) theme, sharing
the DiracX colour scheme with the DUW12 Analytics deck.

## Local development

```bash
npm install
npm run dev        # http://localhost:3030
```

## Build

```bash
npm run build      # static build in dist/
npm run build:pdf  # build with the PDF/download button (needs chromium)
```

## Deploy (GitLab Pages)

The `.gitlab-ci.yml` builds the deck and publishes it as GitLab Pages. The URL
is `https://<namespace>.pages.desy.de/<project-name>/`.

Create the project on `gitlab.desy.de`, then:

```bash
git init
git add .
git commit -m "Add AI-assisted porting presentation"
git remote add origin <gitlab-remote-url>
git push -u origin main
```

Author: Dhiraj Kalita
