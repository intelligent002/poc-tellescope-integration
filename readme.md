# Tellescope Enduser Multi-Update POC

This repository is a stand-alone proof-of-concept demonstrating safe,
sequential, multi-round updates of the same Enduser record through the
Tellescope API.

## Purpose

Validates:
- Stable Enduser creation
- Deterministic fetching by ID 
- Multiple consecutive updates on the same user record
- Clean deletion flow

## Requirements

-   Node.js 20+ (Node 24 recommended)
-   Tellescope account with API access
-   API key from Tellescope Control Panel

## API Key Setup

This project requires an environment variable, available in the control panel of tellescope:

### Windows (PowerShell)

```bash
$env:TELLESCOPE_API_KEY="YOUR_API_KEY_HERE"
```

### Linux / macOS

```bash
export TELLESCOPE_API_KEY="YOUR_API_KEY_HERE"
```

The key is obtained from the Tellescope Control Panel.

## Install

```bash
npm install
```

## Run

```bash
npx ts-node src/main.ts
```

## What It Does

1.  Creates an Enduser
2.  Fetches by ID
3.  Updates (round #1)
4.  Updates (round #2)
5.  Deletes the Enduser

## License

ISC
