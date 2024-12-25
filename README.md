# My Full Stack Learning App

## Overview

This is an application to showcase a range of various frontend and backend skills acquired from diverse sources such as articles, training materials, and more.

## Project Structure (High-level)

```shell
my-full-stack-learning-app/
├── app-core/                  # Core shared assets & configurations
│   ├── config/                # Global configuration (e.g., shared environment variables)
│   ├── common/                # Common utilities, shared services, types, and models
│   └── docs/                  # Documentation for both frontend & backend setup, usage, and APIs
│
├── backend-service/           # Backend service with Spring Boot and other technologies
│   ├── src/                   # Backend source code
│   │   ├── main/
│   │   │   ├── java/          # Java source code for business logic, controllers, etc.
│   │   │   └── resources/     # Application config files like application.properties
│   ├── config/                # Backend-specific config (CORS, security, database)
│   ├── db/                    # Database setup scripts (optional)
│   └── build.gradle           # Gradle build file (or pom.xml if using Maven)
│
├── frontend-ui/               # Frontend with Angular
│   ├── src/                   # Angular source code
│   │   ├── app/               # Angular app code (components, services, modules)
│   │   ├── assets/            # Static assets (images, icons)
│   ├── styles/                # Shared styles, themes, and custom design system
│   ├── environments/          # Environment configurations for dev, prod
│   ├── angular.json           # Angular CLI config
│   └── package.json           # Node dependencies for Angular
│
├── generative-ai/             # Projects based on Generative AI
├── deployment/                # Deployment configurations and scripts
│   ├── docker/                # Docker files and Docker Compose for containerizing backend and frontend
│   ├── k8s/                   # Kubernetes manifests, if deploying to a K8s cluster
│   ├── scripts/               # Helper scripts for CI/CD (build, deploy, test)
│   └── README.md              # Documentation for deployment procedures
│
├── README.md                  # Main project overview and instructions
└── .gitignore                 # Ignore files for Git version control
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200`. The app will automatically reload if you change any of the source files.

## Deployed Server

This application has been deployed on Firebase at <https://frontend-learnings-75836.web.app>

## Documents

- [Roadmap](./ROADMAP.md)
- [Changelog](./CHANGELOG.md)
- [Best Practices](./BEST_PRACTICES.md)
- [Troubleshooting](./TROUBLESHOOTING.md)
- [Console Commands](./CONSOLE_COMMANDS.md)
- [Keyboard Shortcuts](./KEYBOARD_SHORTCUTS.md)

## Other Documents

- [License](./LICENSE)
- [Code of Conduct](./CODE_OF_CONDUCT.md)

## Any Feedback

If you have any feedback or questions, feel free to email <himanshu.goel.mca@gmail.com>. If you encounter any problems, please create a [GitHub Issue](https://github.com/HimanshuGoel/my-full-stack-learning-app/issues/new/choose) within this repository.
