## Purpose

This file defines the general development conventions and behavioral guidelines that AI coding agents should follow when working in this repository.

The goal is to produce code that is:

* Correct and reliable.
* Clear and maintainable.
* Consistent with the existing project.
* Secure by default.
* Appropriately tested.
* Easy to understand and modify.
* Free from unnecessary complexity.
* Compatible with established project behavior unless a breaking change is explicitly required.

These guidelines are defaults, not a reason to override project-specific decisions or framework conventions.

---

## Instruction Priority

When instructions or conventions conflict, use the following priority order:

1. Explicit requirements from the current task.
2. Project-specific instructions documented in this repository.
3. Framework, language, platform, or ecosystem conventions.
4. Established conventions already used consistently in the project.
5. The general guidelines defined in this file.

Never change an established framework or project convention solely to satisfy a generic preference from this document.

When an existing convention is clearly intentional, prefer consistency with the project over introducing a theoretically cleaner alternative.

---

## Core Principles

Prefer:

* Simple solutions over unnecessary complexity.
* Explicit behavior over hidden behavior.
* Readability over cleverness.
* Maintainability over premature optimization.
* Small and focused units of responsibility.
* Clear boundaries between components or modules.
* Existing project patterns over newly invented patterns.
* Incremental improvements over unrelated large-scale refactoring.
* Proven abstractions over speculative abstractions.
* Appropriate validation and error handling.
* Backward compatibility whenever practical.

Avoid:

* Overengineering.
* Premature abstractions.
* Unnecessary dependencies.
* Duplicated business logic.
* Dead code.
* Commented-out code.
* Hidden side effects.
* Excessive coupling.
* Large files with unrelated responsibilities.
* Broad refactors during small or focused tasks.

Apply SOLID principles and design patterns when they provide a concrete maintainability or architectural benefit.

Do not apply principles, patterns, abstractions, or architectural layers mechanically.

---

# Agent Workflow

## Before Making Changes

Before modifying the project:

1. Understand the relevant project structure.
2. Inspect the files related to the requested task.
3. Review nearby implementations when they can reveal established patterns.
4. Identify the project's naming, architecture, formatting, and organization conventions.
5. Check whether the project already provides utilities, abstractions, components, or services that solve part of the problem.
6. Determine whether the requested change affects:

   * Tests.
   * Documentation.
   * APIs.
   * Database schemas or migrations.
   * Configuration.
   * Environment variables.
   * External integrations.
   * Public interfaces.
7. Verify that any library, framework feature, dependency, or tool you plan to use actually exists in the project.

Do not assume the availability of a dependency, package, framework feature, environment variable, service, or development tool without verifying it when verification is possible.

---

## While Making Changes

Keep changes focused on the requested task.

Do not:

* Rewrite unrelated code.
* Perform opportunistic large-scale refactors.
* Introduce architectural changes without a clear reason.
* Rename unrelated identifiers simply to match these guidelines.
* Replace established project patterns without a concrete benefit.
* Change public behavior unless required by the task.
* Add speculative functionality that was not requested.

Prefer reusing existing components, utilities, services, types, and abstractions when doing so keeps the solution clear and consistent.

When existing code requires improvement to support the requested change, make the smallest reasonable improvement necessary.

---

## After Making Changes

After implementing a change:

1. Review all modified files.
2. Check for obvious regressions and unintended changes.
3. Run relevant tests when the environment allows it.
4. Run configured linting tools when applicable.
5. Run configured formatting tools when applicable.
6. Run type checking when applicable.
7. Run the relevant build or compilation step when useful and available.
8. Verify that no secrets, temporary artifacts, debug code, or unintended generated files were introduced.
9. Update documentation when behavior, configuration, installation, APIs, or developer workflows changed.

Never claim that tests, linting, type checking, compilation, builds, or runtime behavior were verified unless those checks were actually performed.

If an appropriate verification step cannot be executed because of environment limitations, missing dependencies, unavailable services, permissions, or similar constraints, state that clearly.

---

## Ambiguous or Risky Changes

If a requirement is ambiguous but a safe and reasonable interpretation is possible, prefer the interpretation that:

* Minimizes scope.
* Preserves existing behavior.
* Avoids destructive changes.
* Follows established project conventions.

If an ambiguous action could reasonably cause destructive changes, data loss, security problems, or breaking changes, request clarification before proceeding.

---

# Language Policy

## Core Language Rule

Maintain a clear separation between technical implementation and user-facing content.

In general:

**Technical implementation → English**

**User-facing content → Spanish**

---

## Technical Content

Use English for technical implementation artifacts, including:

* Source code.
* Variables.
* Functions and methods.
* Classes.
* Interfaces.
* Types.
* Enums.
* Constants.
* Components.
* Hooks.
* Services.
* Repositories.
* Internal modules.
* Technical file names.
* Technical directory names.
* Database tables and columns.
* Database constraints and indexes.
* Migration names.
* API routes.
* Request and response field names.
* Internal identifiers.
* Configuration keys.
* Environment variable names.
* Tests and test descriptions.
* Fixtures and mocks.
* Internal logs.
* Technical error messages.
* Code comments.
* Code-level documentation.

Do not mix English and Spanish inside technical identifiers.

---

## User-Facing Content

Use Spanish for content intended primarily for end users, clients, or other Spanish-speaking stakeholders.

This includes:

* User interface text.
* Buttons.
* Labels.
* Menus.
* Forms.
* Headings displayed in the interface.
* Placeholders.
* Dialogs.
* Validation messages visible to users.
* User-facing error messages.
* Notifications.
* Emails sent to users.
* Reports intended for Spanish-speaking clients.
* End-user documentation.
* Client deliverables.
* Business documents.
* Academic or institutional documentation when Spanish is required.

Technical identifiers contained inside otherwise Spanish content must remain in their original technical form when translating them would be incorrect or confusing.

---

## Domain Terminology

Use consistent English terminology for business-domain concepts inside the technical implementation.

Maintain the same vocabulary across:

* Source code.
* Database schemas.
* APIs.
* Tests.
* Technical documentation.

Do not use multiple English translations for the same domain concept unless they intentionally represent different concepts.

Do not translate official terminology when translation would alter its meaning or identity.

Examples include:

* Government identifiers such as `RUC`.
* Institution names such as `SRI`.
* Official company names.
* Brand names.
* Product names.
* Legally defined document names.
* Client-defined identifiers.
* External system fields that must preserve their official names.

---

# Naming Conventions

## General Rule

Follow the naming conventions established by the language, framework, ecosystem, and existing project.

Do not enforce one naming style across technologies that conventionally use different styles.

Consistency within the project is required.

---

## Directories

Use English for technical directory names.

For generic directories, prefer lowercase names:

* `components/`
* `services/`
* `controllers/`
* `repositories/`
* `middleware/`
* `config/`
* `utils/`
* `hooks/`
* `types/`
* `tests/`

When multiple words are necessary and the ecosystem does not prescribe another convention, prefer kebab-case:

* `user-management/`
* `integration-tests/`
* `api-client/`

Avoid:

* Spaces.
* Accented characters.
* Unnecessary uppercase names.
* Mixed naming conventions.
* Spanish names for technical directories.

Framework-defined directories and established project structures take precedence.

Do not rename framework-defined or established directories solely to comply with these rules.

---

## File Names

Follow the convention expected by the language, framework, or ecosystem.

Examples may include:

`reservation-service.ts`

for modules in ecosystems where kebab-case is conventional.

`ReservationCard.tsx`

for React components when PascalCase is the established convention.

`ReservationService.java`

for Java classes.

Prefer consistency with surrounding files over imposing a new convention.

---

## Identifiers

Use descriptive names that communicate intent.

Avoid unnecessary abbreviations.

Prefer:

`reservationRepository`

instead of:

`resRepo`

Prefer:

`calculateTotalAmount()`

instead of:

`calcAmt()`

Names should describe the responsibility or domain meaning of an element rather than incidental implementation details whenever practical.

Code should be understandable to another developer without requiring unnecessary context.

---

# Architecture and Organization

## General Structure

Prefer modular organization with clear boundaries and responsibilities.

Each module, feature, screen, page, or functional area should be reasonably independent and clearly identifiable.

Organize code so that related functionality can be modified without unnecessarily affecting unrelated parts of the application.

Prefer:

* High cohesion within modules.
* Low coupling between unrelated modules.
* Clear ownership of responsibilities.
* Explicit interfaces between layers or components.
* Feature-appropriate organization.
* Reusable shared code when there is genuine reuse.

Avoid creating shared abstractions solely because two pieces of code currently look similar.

---

## File Responsibilities

Each file should have a clear purpose.

Avoid files that accumulate many unrelated responsibilities.

Split files when doing so materially improves:

* Readability.
* Testability.
* Maintainability.
* Reusability.
* Separation of concerns.

Do not split code mechanically into many tiny files when keeping closely related code together is clearer.

Follow the conventions of the project's technology when deciding whether styles, templates, tests, types, or related implementation details belong in separate files or colocated files.

---

## Feature Organization

When appropriate for the technology and project architecture, features may contain related directories such as:

* `components/`
* `services/`
* `hooks/`
* `utils/`
* `types/`
* `styles/`
* `tests/`

These names are examples, not mandatory architecture.

Do not restructure an existing project solely to match this example.

---

# Source Code Quality

Write source code in English.

Prefer code that is:

* Clear.
* Focused.
* Predictable.
* Maintainable.
* Testable.
* Appropriately efficient.
* Consistent with surrounding code.

Avoid unnecessarily complex control flow.

Prefer early validation and clear error paths when they improve readability.

Avoid unnecessary work, allocations, database queries, network calls, or repeated computations, particularly on performance-sensitive paths.

Do not introduce performance-oriented complexity without a real need.

When performance matters, prefer measurements or concrete evidence over assumptions whenever practical.

Mention relevant technical improvements, risks, or tradeoffs when they materially affect the requested task.

Avoid unrelated unsolicited refactoring advice.

---

# Comments

Write code comments in English.

Comments should primarily explain:

* Why a decision exists.
* Non-obvious constraints.
* Important tradeoffs.
* Workarounds.
* External requirements.
* Behavior that would otherwise be surprising.

Avoid comments that merely restate what the code already expresses.

Prefer self-explanatory code over excessive comments.

Keep comments synchronized with the implementation.

Remove obsolete comments when changing the behavior they describe.

---

# Frontend and User Interfaces

These guidelines apply when the task involves a graphical user interface.

Follow the existing design system, component library, visual language, and UX patterns before introducing new ones.

Design interfaces that are:

* Clear.
* Consistent.
* Accessible.
* Responsive when the application supports multiple screen sizes.
* Easy to navigate.
* Visually coherent with the rest of the product.

Prioritize usability over decorative complexity.

Use established reusable components when available.

Avoid introducing a new visual pattern when an existing pattern already solves the problem adequately.

---

## Responsive Design

For interfaces intended to work across multiple device sizes:

* Ensure layouts adapt appropriately to supported viewport sizes.
* Avoid unnecessary horizontal overflow.
* Ensure interactive elements remain usable on smaller screens.
* Preserve meaningful content hierarchy across breakpoints.
* Test or inspect relevant responsive states when the available environment permits it.

Do not assume that every project requires responsive behavior. Follow the requirements and target platforms of the application.

---

## User-Facing Text

All Spanish user-facing text should be:

* Clear.
* Natural.
* Concise.
* Consistent in terminology.
* Appropriate for the intended audience.

Avoid exposing technical implementation details to users.

Do not display raw stack traces, database errors, internal identifiers, credentials, or sensitive diagnostic information.

---

## Icons and Emojis

Do not use emojis as substitutes for interface icons.

When an icon is appropriate, prefer the icon system or component library already used by the project.

Do not add a new icon dependency solely for a trivial use case when an adequate existing solution is available.

---

# Database

These guidelines apply when the project uses a database.

## Naming

Use English for technical database identifiers, including:

* Table names.
* Column names.
* Foreign keys.
* Constraints.
* Indexes.
* Migration names.

Follow the naming convention established by the database, ORM, framework, and existing schema.

Do not mix languages in the technical database schema.

Examples:

`reservations`

`guest_id`

`check_in_date`

`created_at`

---

## Schema Design

For relational transactional databases, prefer normalized schemas, typically up to third normal form (3NF), when this produces a clear and maintainable data model.

Normalization is a guideline, not an absolute requirement.

Denormalization may be appropriate when justified by:

* Established project architecture.
* Measured performance needs.
* Reporting requirements.
* Analytics workloads.
* Caching strategies.
* Explicit domain requirements.

Do not redesign an existing schema solely to enforce normalization during an unrelated task.

Use appropriate:

* Primary keys.
* Foreign keys.
* Constraints.
* Indexes.
* Data types.
* Nullability rules.

Preserve data integrity at the appropriate layer.

---

## Migrations

When the project uses a migration system, implement schema changes through migrations.

Do not manually modify a production schema as a substitute for a migration.

Migration changes should be:

* Reproducible.
* Reviewable.
* Compatible with the project's deployment workflow.
* Safe for existing data whenever practical.

Consider backward compatibility when application deployments and database migrations may occur at different times.

---

# API Design

Use English for technical API routes and payload fields.

Prefer:

`/api/reservations`

`/api/guests`

`/api/rooms`

rather than translated technical routes.

Use English request and response property names.

Prefer:

`checkInDate`

rather than:

`fechaEntrada`

User-facing values contained inside API responses may be localized when required.

Maintain API consistency with existing project conventions.

Avoid exposing implementation details through APIs.

Preserve backward compatibility unless a breaking change is explicitly required.

When changing a public API, consider the impact on:

* Existing clients.
* Frontend applications.
* External integrations.
* Tests.
* Documentation.
* Versioning.
* Data migrations.

---

# Documentation

## Documentation Language

Documentation language depends on its audience.

Code-level technical documentation should use English.

Prose documentation may use English or Spanish according to the intended audience.

Use Spanish when documentation is primarily intended for:

* Spanish-speaking users.
* Clients.
* Students.
* Business stakeholders.
* Institutions requiring Spanish documentation.

Use English when documentation is primarily intended for:

* International contributors.
* External technical developers.
* Global open-source audiences.
* Engineering teams where English is the established working language.

Technical identifiers, commands, source-code examples, API routes, configuration keys, and technology names should retain their technical English form regardless of the surrounding prose language.

---

## README Files

`README.md` may be written in Spanish when the repository is primarily maintained or consumed by Spanish-speaking developers, students, clients, or stakeholders.

For projects intended primarily for an international audience, English may be used as the main README language.

When both languages are genuinely required, separate documentation files may be used, for example:

* `README.md`
* `README.es.md`
* `README.en.md`

Avoid maintaining duplicated multilingual documentation unless there is a real audience requirement and a reasonable process for keeping both versions synchronized.

---

# Git Conventions

## Branch Names

Use English for branch names.

Prefer lowercase names and kebab-case when multiple words are necessary.

Recommended prefixes include:

* `feature/`
* `fix/`
* `hotfix/`
* `refactor/`
* `docs/`
* `test/`
* `chore/`

Examples:

`feature/guest-registration`

`fix/reservation-validation`

`refactor/payment-service`

Avoid names such as:

`feature/registro-huesped`

`FixReservation`

`cambios-varios`

Follow repository-specific branch conventions when they already exist.

---

## Commit Messages

Write commit messages in English.

Prefer Conventional Commits when compatible with the repository's established workflow.

Examples:

`feat: add guest registration`

`fix: prevent duplicate reservations`

`docs: update installation guide`

`refactor: simplify reservation service`

`test: add reservation validation tests`

`chore: update dependencies`

Keep commits focused on one logical change whenever practical.

Avoid vague messages such as:

`changes`

`updates`

`fix stuff`

`various changes`

Do not rewrite existing Git history unless explicitly requested and safe to do so.

---

# Testing

Follow the testing conventions already established by the project.

New or modified business logic should include appropriate tests when the project has suitable testing infrastructure.

Bug fixes should include regression tests whenever practical.

Tests should primarily verify observable behavior rather than internal implementation details.

Prefer tests that are:

* Deterministic.
* Focused.
* Easy to understand.
* Independent when practical.
* Representative of meaningful behavior.

Do not:

* Remove valid tests merely to make the suite pass.
* Disable tests without justification.
* Change expected behavior solely to satisfy a failing test.
* Weaken meaningful assertions to hide regressions.
* Introduce arbitrary delays to make asynchronous tests pass when deterministic synchronization is possible.

Run the tests most relevant to the changed code whenever the environment permits it.

Use broader test suites when the scope or risk of the change justifies them.

---

# Error Handling and Validation

Validate untrusted or externally supplied input at appropriate system boundaries.

Handle errors consistently with the project's existing conventions.

Prefer actionable internal errors and safe user-facing errors.

Do not silently swallow errors unless intentionally required by the design.

Avoid catching exceptions merely to ignore them.

Do not expose sensitive technical details to end users.

When logging errors, preserve useful diagnostic context without including secrets or unnecessarily sensitive information.

---

# Security

Never commit, expose, or hard-code:

* Passwords.
* API keys.
* Access tokens.
* Refresh tokens.
* Private keys.
* Database credentials.
* Production secrets.
* Authentication credentials.
* Sensitive personal information.

Use environment variables or the project's established secret-management mechanism.

Keep real environment files such as `.env` out of version control unless the repository explicitly uses a safe alternative convention.

When environment variables are required, provide an `.env.example` or equivalent example configuration when appropriate, using placeholder values only.

Never copy real secrets into example files.

Validate untrusted input.

Use parameterized database queries or the equivalent safe abstraction provided by the framework.

Do not expose:

* Internal stack traces.
* Credentials.
* Database connection details.
* Sensitive environment information.
* Private implementation details.
* Sensitive user data.

Follow the security mechanisms already provided by the framework instead of implementing custom security primitives without a strong reason.

---

# Dependencies

Do not add new dependencies unless they provide clear value.

Before introducing a dependency:

1. Check whether equivalent functionality already exists in the project.
2. Check whether the standard library or framework already provides the required functionality.
3. Prefer established and actively maintained packages.
4. Avoid adding large dependencies for trivial functionality.
5. Consider security implications.
6. Consider maintenance burden.
7. Consider bundle size or runtime impact when relevant.
8. Ensure the dependency is compatible with the project's current technology versions.

Do not upgrade major dependency versions unless:

* The task requires it.
* It is necessary to solve a confirmed compatibility problem.
* It is explicitly requested.

Avoid unrelated dependency upgrades during focused tasks.

Do not manually edit generated lockfile contents.

Use the project's package manager or established dependency workflow.

---

# Existing Code and Backward Compatibility

Apply these conventions primarily to:

* New code.
* Code directly modified by the current task.

Do not perform large-scale renaming or restructuring solely to make existing code comply with this document.

In particular, do not automatically rename existing:

* Public APIs.
* Database tables.
* Database columns.
* Environment variables.
* Configuration keys.
* External integration fields.
* Public interfaces.
* Serialized field names.
* Persistent identifiers.

Such changes may introduce breaking changes.

If existing code violates these conventions, improve it incrementally only when the improvement is safe, relevant, and reasonably within the scope of the current task.

Preserve backward compatibility whenever practical.

Breaking changes must be intentional, justified by the task, and handled consistently across affected code, tests, migrations, integrations, and documentation.

---

# Refactoring

Refactor when it directly supports the requested change or prevents a concrete maintainability problem.

Avoid unrelated refactoring.

Before extracting a new abstraction, confirm that it improves the code rather than merely relocating complexity.

Prefer small, reviewable refactors.

When refactoring existing behavior:

* Preserve observable behavior unless the task explicitly changes it.
* Preserve public interfaces whenever practical.
* Update affected tests.
* Remove obsolete code made unnecessary by the refactor.
* Do not leave temporary compatibility code without a reason.

---

# Performance

Prefer appropriately efficient implementations without sacrificing clarity unnecessarily.

Avoid obvious inefficiencies such as:

* Repeated expensive computations.
* Unnecessary database queries.
* Avoidable network requests.
* Unbounded processing when limits are known.
* Loading significantly more data than required.
* Unnecessary repeated serialization or parsing.

Do not introduce complex optimization techniques without evidence that they are needed.

When performance is a stated requirement, measure or validate relevant behavior whenever suitable tools and environments are available.

---

# Accessibility

When working on user interfaces, preserve or improve accessibility.

Follow the capabilities and conventions of the project's framework and design system.

Consider:

* Semantic structure.
* Keyboard interaction.
* Focus behavior.
* Form labels.
* Accessible names.
* Meaningful alternative text.
* Appropriate contrast.
* Error identification.
* Screen-reader compatibility.

Do not sacrifice accessibility solely for visual styling.

---

# Generated and Temporary Files

Do not commit or intentionally include temporary development artifacts unless the project requires them.

Examples may include:

* Debug output.
* Temporary scripts.
* Local caches.
* Build artifacts.
* Editor-specific files.
* OS metadata files.
* Local environment files.

Respect the repository's `.gitignore` and existing generated-file policies.

Do not manually modify generated files when the project provides an official generation mechanism unless there is a specific reason to do so.

---

# Final Review

Before considering a task complete, confirm that the implementation:

* Satisfies the requested behavior.
* Respects the project's existing architecture and conventions.
* Keeps technical implementation in English.
* Keeps user-facing Spanish content in Spanish where applicable.
* Avoids unrelated modifications.
* Preserves backward compatibility where expected.
* Handles relevant errors and validation.
* Does not expose secrets or sensitive information.
* Includes or updates tests when appropriate.
* Includes documentation changes when behavior or setup changed.
* Has been validated with the relevant available tools.

When reporting completion, distinguish clearly between:

* Changes that were implemented.
* Checks that were actually executed.
* Checks that could not be executed.
* Remaining risks or limitations that are relevant to the task.

Do not claim certainty beyond what was actually verified.

---

# Guiding Principle

Maintain a clear separation between technical implementation and user-facing communication while preserving the conventions and architecture of the existing project.

Use English to keep technical implementation consistent with common international software engineering conventions.

Use Spanish wherever user-facing communication is intended for the project's primarily Spanish-speaking audience.

Above all, favor solutions that are clear, maintainable, appropriately simple, secure, and consistent with the project being modified.
