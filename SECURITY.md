# Security Notes

## Current Security Posture

This demo app previously contained a hardcoded API token and several non-HTTPS outbound URLs.
These have been remediated.

## Best Practices for This Project

- Never commit secrets (tokens, keys, credentials) to source control.
- Provide DatoCMS API token only via `DATO_API_TOKEN` environment variable.
- Prefer HTTPS links for all external navigation.
- Keep dependency versions up to date and run regular audits in CI.
- Restrict production logging to avoid leaking sensitive payload data.

## Reporting

If you discover a security issue, please open a private report to maintainers rather than creating a public issue with exploit details.
