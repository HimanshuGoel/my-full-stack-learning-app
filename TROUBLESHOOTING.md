# Troubleshooting

Facing issues? Don't worry—this guide has got you covered! Follow the steps below to troubleshoot and resolve common problems.

## Table of Contents

1. [General Troubleshooting Steps](#general-troubleshooting-steps)
1. [Common Issues and Fixes](#common-issues-and-fixes)
1. [Reporting Issues](#reporting-issues)

## General Troubleshooting Steps

1. **Check Logs**
   Always start by checking logs for error messages. These can be found in:

   - Browser Developer Tools (for front-end issues)
   - Server logs (for back-end errors)

1. **Clear Cache**

   - Clear your browser cache and local storage.
   - If you are working with a Node.js application, try removing `node_modules` and reinstalling dependencies:

     ```bash
     rm -rf node_modules && npm install
     ```

## Common Issues and Fixes

**Problem:** `Error: listen EACCES: permission denied 0.0.0.0:3000`

**Solution:** If you encounter an error indicating that a specific port is being used by another process, you can resolve it by restarting the `winnat` service. Use the following commands:

```shell
net stop winnat
net start winnat
```

**Problem:** `No matching version found for @abc@1.2.3`

**Solution:** It means npm can't find the stable version you're looking for, even though it's on the artifactory. This usually happens if you started with a beta-xxx version for testing and now need the stable version after testing. To fix this, cleaning the npm cache usually does the trick.

```shell
npm cache clean --force
```

## Reporting Issues

If the issue persists or you can't find a solution here, create a [new issue](https://github.com/HimanshuGoel/my-full-stack-learning-app/issues/new/choose) with a detailed description, steps to reproduce, and any relevant logs.

We'll get back to you as soon as possible!

Happy debugging! 💻
