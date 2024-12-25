# Troubleshooting

## Issue `Error: listen EACCES: permission denied 0.0.0.0:3000`

If you encounter an error indicating that a specific port is being used by another process, you can resolve it by restarting the `winnat` service. Use the following commands:

```shell
net stop winnat
net start winnat
```

## Issue `No matching version found for @abc@1.2.3`

It means npm can't find the stable version you're looking for, even though it's on GitLab innersource. This usually happens if you started with a beta-xxxx version for testing and now need the stable version that came out after testing. To fix this, cleaning the npm cache usually does the trick.

```shell
npm cache clean --force
```
