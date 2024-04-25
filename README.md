# Medscrape

An AI-powered research engine with a generative UI.

Medscrape is an open source project that takes in a URL, scrapes an entire website, uses the unstructured library to process the data, stores and embeds it using serverless instance of lanceDB, and then uses the instructor library to make API calls to OpenAI for inference over the data.

![capture](/public/capture_blk.png)

## Overview

- [Stack](#-stack)
- [Get Started](#-get-started)
- [Verified writers models](#-verified-writers-models)

## Stack

- App framework: [Next.js](https://nextjs.org/)
- Text streaming / Generative UI: [Vercel AI SDK](https://sdk.vercel.ai/docs)
- Generative Model: [OpenAI](https://openai.com/)
- Search API: [Tavily AI](https://tavily.com/)
- Component library: [shadcn/ui](https://ui.shadcn.com/)
- Headless component primitives: [Radix UI](https://www.radix-ui.com/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)

## Get Started

### 1. Fork and Clone repo

Fork the repo to your Github account, then run the following command to clone the repo:

```bash
git clone https://github.com/greyhaven-ai/medscrape.git
```

### 2. Install dependencies

```bash
cd medscrape
bun i
```

### 3. Fill out secrets

```bash
cp .env.local.example .env.local
```

### 4. Run app locally

```bash
bun dev
```

Visit http://localhost:3000.

## Verified writers models

List of verified models that can be specified to writers - Note this only works for the writers .env.local variables

- [Groq](https://console.groq.com/docs/models)
  - LLaMA3 8b
  - LLaMA3 70b

## Credits

Generative UI for the frontend is a based on the amazing open source project [Morphic](https://git.new/morphic) by [@miiura](https://twitter.com/miiura).
