# Troubleshooting

## Issue: Port Is Being Used by Another Process

If you encounter an error indicating that a specific port is being used by another process, you can resolve it by restarting the `winnat` service. Use the following commands:

```shell
net stop winnat
net start winnat
```
