# Public project evidence

Inspected 20 October 2026. Public repository metadata confirmed `private: false` for all five selections before inspecting their files. Sources were read through the GitHub API; no project was modified. Links below pin the inspected commit so the reasoning remains auditable.

## Masar Tech Portfolio

[Snapshot: 315f6d5](https://github.com/AbdallahSay/Abdallah-Portfolio-V6-MasarTech-Nextjs/tree/315f6d513c9e2c64f8f1e00583c31a2ecfc94dce).

- `README.md`: personal portfolio, case studies and interactive presentation; explicitly identifies project posters as mockups. No poster is reused here.
- `package.json`: Next.js, React and TypeScript.
- `.github/workflows/ci.yml`: type checking and production-build steps. Presence of CI is verified; green deployment status is not asserted.
- [Live portfolio](https://abdallah-sayed-portfolio.vercel.app): GET returned 200; title identifies Abdallah Sayed and digital products.

## Factory Quote Generator

[Snapshot: a8980ce](https://github.com/AbdallahSay/factory-quote-generator/tree/a8980cee7e0f3f6bc90537a9f4c608b2e38381db).

- `README.md`: document generation, quote persistence and queued notifications.
- `backend/FactoryQuoteApi.csproj`: .NET 10, OpenXML, EF Core SQL Server and MailKit.
- `backend/Services/WordQuoteGeneratorService.cs`: Word template population.
- `backend/Services/NotificationService.cs`: SMTP notifications and WhatsApp webhook interface; `BackgroundQueue.cs` present in source tree.
- `frontend/index.html` and `frontend/config.js`: browser frontend; JavaScript implementation present.
- `.github/workflows/deploy-backend.yml`: deployment workflow exists.
- [Live interface](https://factory-quote-frontend.vercel.app): GET returned 200; Arabic quotation-system title. No quote was submitted and no notification was sent.

**n8n:** repository documentation describes a compatible webhook destination. No checked-in n8n workflow was established. The profile therefore claims webhook integrations and automation, without listing n8n as demonstrated hands-on expertise.

## Digital Menu SaaS

[Snapshot: 8eb7c0a](https://github.com/AbdallahSay/digital-menu-saas/tree/8eb7c0ac0b49f48cb7896082c6fc9bd2bdf17ec0).

- `README.md`: development foundation; production hosting unresolved; menu-display scope excludes ordering and payments.
- `frontend/package.json`: Angular SSR and TypeScript dependencies.
- `frontend/src/app/app.routes.ts`: public menu, demo, admin and slug routes.
- `backend/src/DigitalMenu.Infrastructure/DigitalMenu.Infrastructure.csproj`: .NET, EF Core and SQL Server dependencies.
- Public README labels it **in development** and supplies no live URL. Architecture and scope are described without claiming a completed production SaaS.

## Nabra Studio

[Snapshot: 6835e28](https://github.com/AbdallahSay/Nabra/tree/6835e28390fb4e450a28200e7d49712834c30eef).

- No repository README was available (GitHub README endpoint returned 404). Description is grounded in source instead.
- `package.json`: React, TypeScript, Express, Vite, Google GenAI and lamejs.
- `server/app.ts`: transcription and voice-generation routes, GoogleGenAI client.
- `src/components/EgyptianVoiceStudio.tsx`: Egyptian Arabic and Modern Standard Arabic modes; audio utility imports for export.
- `src/utils/audioUtils.ts` and audio components present in source tree.
- [Live interface](https://nabra-studio.vercel.app): GET returned 200 with the Egyptian voice/audio studio title. No paid generation API was invoked.

## WatsStore

[Snapshot: 22b2524](https://github.com/AbdallahSay/watsstore-saas/tree/22b25241d163b3256f464329c35de7b7e950592e).

- No repository README was available (404); source inspection supplies the description.
- `frontend/package.json`: Next.js, React and TypeScript.
- `backend/WatsStore.Api.csproj`: ASP.NET Core, EF Core, SQL Server and PostgreSQL providers. Profile omits a project-specific database claim because package presence alone does not establish the deployed provider.
- `frontend/src/components/CartDrawer.tsx`: cart, order and coupon interface.
- `backend/Controllers/OrdersController.cs`: order creation and store-specific product handling.
- Merchant dashboard and public store controllers/routes present in the source tree.
- [Live interface](https://frontend-bay-ten-58.vercel.app): GET returned 200; title identifies WatsStore and WhatsApp catalogs. No store, account, order or payment was created.

## Boundary of verification

This is a source-grounded profile review, not a runtime audit of the five products. HTTP 200 and matching page titles establish reachable interfaces on the inspection date; they do not certify backend integrations, security, correctness or production readiness. Only public URLs and non-sensitive technology evidence are included.
