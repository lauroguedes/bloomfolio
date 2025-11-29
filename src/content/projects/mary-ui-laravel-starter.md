---
title: "Mary UI Laravel Starter Kit"
description: "A contemporary, production-ready Laravel starter kit with integrated Livewire Volt and Mary UI components. Designed to expedite web application development with pre-built authentication, user administration, and developer-friendly tooling."
image: "https://api.dicebear.com/9.x/glass/svg?seed=Alexander"
startDate: "2024-12-07"
skills: ["Laravel", "Livewire", "Mary UI", "DaisyUI", "Tailwind CSS", "Pest"]
sourceLink: "https://github.com/lauroguedes/mary-ui-starter-kit"
demoLink: "https://github.com/lauroguedes/mary-ui-starter-kit"
---

## Project Overview

Mary UI Laravel Starter Kit is a comprehensive, production-ready foundation for building modern web applications. It combines the robustness of Laravel 12.x with the elegance of Mary UI and the reactivity of Livewire Volt, providing developers with everything they need to kickstart their next project.

### Repository Stats

[![Laravel](https://img.shields.io/badge/Laravel-12.x-red?style=flat&logo=laravel)](https://laravel.com) [![Livewire](https://img.shields.io/badge/Livewire-3.x-purple?style=flat)](https://livewire.laravel.com)
[![Mary UI](https://img.shields.io/badge/Mary_UI-2.x-blue?style=flat)](https://mary-ui.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](LICENSE)
--
[![Packagist Version](https://img.shields.io/packagist/v/lauroguedes/mary-ui-starter-kit?style=flat)](https://packagist.org/packages/lauroguedes/mary-ui-starter-kit)
[![Packagist Downloads](https://img.shields.io/packagist/dt/lauroguedes/mary-ui-starter-kit?style=flat)](https://packagist.org/packages/lauroguedes/mary-ui-starter-kit)

## Core Technologies

- **Backend**: Laravel 12.x (PHP 8.2+)
- **Frontend Framework**: Livewire 3.x with Volt
- **UI Components**: [Mary UI](https://mary-ui.com)
- **Styling**: Tailwind CSS 4.x + DaisyUI
- **Icons**: Blade Hero and Font Awesome
- **Build Tool**: Vite
- **Database**: SQLite (default, easily switchable)
- **Testing**: Pest framework
- **Code Quality**: Pint, Rector

## Authentication & User Management

### Complete Auth System
- Login, registration, and password reset flows
- Email verification capabilities
- User profile administration with avatar uploads
- Session management

### User Administration Dashboard
- Comprehensive CRUD operations for user management
- User status tracking (Active, Inactive, Suspended)
- Advanced search and filtering
- Bulk operations support

### OAuth Integration
- **Google OAuth** authentication built-in
- Social account connection to existing profiles
- Extensible provider architecture for adding more OAuth providers

### Roles & Permissions
Powered by **Spatie Laravel Permission** package for robust role-based access control:
- Flexible permission system
- Role assignment and management
- Guard-based permissions
- Easy integration with your application logic

## Developer Experience

### Testing
- **80+ comprehensive tests** using Pest framework
- Unit, feature, and browser tests included
- Pre-configured test database setup
- Test coverage for critical user flows

### Code Quality Tools
- **Pint**: Laravel's opinionated PHP code formatter
- **Rector**: Automated code refactoring and upgrades
- **LaraDumps**: Enhanced debugging and profiling
- **Laravel Pail**: Real-time log tailing in the terminal

### Development Workflow
Quick setup with one command:
```bash
laravel new my-app --using=lauroguedes/mary-ui-starter-kit
```

Or clone and install:
```bash
composer install
npm install
php artisan migrate --seed
```

Start development with hot reload:
```bash
composer dev
```

This launches the development server, queue worker, log monitor, and Vite with hot module replacement - all concurrently!

## Production Ready

- Optimized asset bundling with Vite
- Database migrations and seeders included
- Email templates with Mailpit for local testing
- Environment-based configuration
- Security best practices implemented out of the box

## Perfect For

- SaaS applications requiring rapid development
- Internal business tools and dashboards
- Client projects with tight deadlines
- Learning Laravel best practices and modern patterns
- Prototyping and MVPs

## Open Source

This project is open source under the MIT License and welcomes contributions from the community. Visit the GitHub repository to report issues, suggest features, or contribute code.
