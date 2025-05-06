# Webdriver-Appium

A comprehensive mobile testing framework for Android application built with WebdriverIO v8, Page Object Model pattern, and BrowserStack integration.

## Summary

This repository contains an automated testing solution for Android mobile application. It leverages WebdriverIO v8 as the automation framework, implements the Page Object Model (POM) design pattern for improved test maintenance, and integrates with BrowserStack for cross-device testing capabilities.

Key features:
- WebdriverIO v8 and Appium for mobile automation
- Page Object Model implementation for clean test organization
- BrowserStack integration for testing across multiple Android devices
- JavaScript-based test scripts
- Organized test suites for login and form functionality

## Requirements

- Node.js (v16 or higher)
- npm (v8 or higher)
- GitHub account (for accessing repository and configuring secrets)
- BrowserStack account (for running tests on real devices)
- Android SDK (for local testing, optional if using BrowserStack exclusively)

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/iriger/Webdriver-Appium.git
   cd Webdriver-Appium
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure environment variables
   - Copy the `.env.example` file to create your own `.env` file:
     ```bash
     cp .env.example .env
     ```
   - Edit the `.env` file and add your BrowserStack credentials and other required configuration

## Setting up BrowserStack

1. Create a BrowserStack account if you don't have one already
2. Obtain your BrowserStack username and access key from the BrowserStack dashboard
3. Configure your credentials using one of these methods:
   - Add them to your `.env` file (for local execution)
   - Set them as GitHub secrets (for CI/CD pipelines):
     - Go to your GitHub repository
     - Navigate to Settings > Secrets and variables > Actions
     - Add repository secrets with the names specified in the `.env.example` file

## Launching Tests

To run all tests:
```bash
npm run wdio
```
## Running Tests on Local Devices (Optional)

If you want to run tests on locally connected devices instead of BrowserStack:

1. Install and set up Appium Server:
   ```bash
   npm install -g appium
   appium
   ```

2. Connect an Android device via USB or start an Android emulator

3. Run tests locally

## Troubleshooting

If you encounter issues:

1. Verify your BrowserStack credentials are correctly set
2. Check that your Android device/emulator is properly connected (for local testing)
3. Ensure all dependencies are installed
4. Review the WebdriverIO logs for detailed error information
