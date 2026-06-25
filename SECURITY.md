# Security

## Secrets

This project keeps **no secrets in the repository.** The site runs fully without
any credentials; the only optional ones (feedback email/storage) live in
`.env.local`, which is gitignored. Never commit a real key, token, or password.

- Put secrets in `.env.local` and read them via `process.env`.
- `.env.local.example` documents the variable names only (no real values).
- Anything sensitive belongs in your host's environment settings (e.g. Vercel
  Project Settings -> Environment Variables), not in code or docs.

## Pre-commit secret scan

A pre-commit hook (`.githooks/pre-commit`) scans staged changes for likely
secret values - JWTs, `sk-`/`AKIA`/`AIza`/`ghp_` keys, private-key blocks, and
`*_PASSWORD=` / `*_KEY=` assignments - and blocks the commit if it finds one.

It is enabled automatically: the `prepare` script in `package.json` runs
`git config core.hooksPath .githooks` on `npm install`. To enable it manually:

```bash
git config core.hooksPath .githooks
```

Bypass for a genuine false positive: `git commit --no-verify`.

## If a secret is ever committed

1. **Rotate it immediately** at the provider. Assume it is compromised the moment
   it lands in git history - rotation is the only real fix, because forks,
   clones, and the host's commit cache may retain the old value.
2. Scrub it from history with `git filter-repo --replace-text` and force-push.
3. Confirm it is gone: `git log --all -S '<secret-fragment>'` returns nothing.

## Reporting

Found a vulnerability? Email 2005jay@gmail.com rather than opening a public issue.
