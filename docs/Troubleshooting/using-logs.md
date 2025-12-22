---
id: using-logs
sidebar_position: 1
---

# Using Logs for Troubleshooting

> Description — _Couchbase Lite on React Native — Using Logs for Troubleshooting_  
> Related Content — [Troubleshooting Queries](troubeshoot-queries.md) | [Troubleshooting Crashes](troubleshoot-crashes.md)

:::note
* The retrieval of logs from the device is out of scope of this feature.
:::

## Introduction

Couchbase Lite provides a robust Logging API — see: API References for Logging classes — which make debugging and troubleshooting easier during development and in production. It delivers flexibility in terms of how logs are generated and retained, whilst also maintaining the level of logging required by Couchbase Support for investigation of issues.

Log output is split into the following streams:

* File based logging

    Here logs are written to separate log files filtered by log level, with each log level supporting individual retention policies.

* Console based logging

    You can independently configure and control console logs, which provides a convenient method of accessing diagnostic information during debugging scenarios. With console logging, you can fine-tune diagnostic output to suit specific debug scenarios, without interfering with any logging required by Couchbase Support for the investigation of issues.

* Custom logging

    For greater flexibility you can implement a custom logging class using the ILogger interface.

## Log Sink API

Version 1.0 introduces the Log Sink API which provides three types of log sinks for flexible logging control.

### Log Levels

| Level | Value | Description |
|-------|-------|-------------|
| LogLevel.DEBUG | 0 | Most verbose - all logs |
| LogLevel.VERBOSE | 1 | Detailed diagnostic logs |
| LogLevel.INFO | 2 | Informational messages |
| LogLevel.WARNING | 3 | Warning messages only |
| LogLevel.ERROR | 4 | Error messages only |
| LogLevel.NONE | 5 | No logging |

### Log Domains

| Domain | Description |
|--------|-------------|
| LogDomain.DATABASE | Database operations |
| LogDomain.QUERY | Query execution and planning |
| LogDomain.REPLICATOR | Replication activity |
| LogDomain.NETWORK | Network operations |
| LogDomain.LISTENER | Change listeners |
| LogDomain.ALL | All domains (new in 1.0) |

## Console Log Sink

Console based logging outputs logs to the system console (stdout/stderr), useful for development and debugging.

#### Example 1. Enable Console Logging

```typescript
import { LogSinks, LogLevel, LogDomain } from 'cbl-reactnative';

// Enable verbose logging for all domains
await LogSinks.setConsole({
  level: LogLevel.VERBOSE,
  domains: [LogDomain.ALL]
});
```

#### Example 2. Console with Specific Domains

```typescript
// Log only replication and network activity
await LogSinks.setConsole({
  level: LogLevel.INFO,
  domains: [LogDomain.REPLICATOR, LogDomain.NETWORK]
});
```

#### Example 3. Disable Console Logging

```typescript
// Disable console logging
await LogSinks.setConsole(null);
```

## File Log Sink

File logging writes logs to files on the device with automatic rotation and retention policies.

#### Example 4. Enable File Logging

```typescript
import { Platform } from 'react-native';
import RNFS from 'react-native-fs';

// Determine platform-specific log directory
const logDirectory = Platform.OS === 'ios' 
  ? RNFS.DocumentDirectoryPath + '/logs'
  : RNFS.ExternalDirectoryPath + '/logs';

await LogSinks.setFile({
  level: LogLevel.INFO,
  directory: logDirectory,
  maxKeptFiles: 5,          // Keep 5 old log files
  maxFileSize: 1024 * 1024, // 1MB max file size
  usePlaintext: true        // Use plaintext format
});
```

:::note File Rotation
When a log file reaches `maxFileSize`, it's closed and a new one is created. Old files exceeding `maxKeptFiles` are automatically deleted.
:::

#### Example 5. Disable File Logging

```typescript
await LogSinks.setFile(null);
```

## Custom Log Sink

Custom logging allows you to implement your own logging logic with a callback function.

#### Example 6. Custom Logging with Callback

```typescript
await LogSinks.setCustom({
  level: LogLevel.ERROR,
  domains: [LogDomain.ALL],
  callback: (level, domain, message) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${domain}] ${message}`);
    
    // You can also send to analytics, log to database, etc.
  }
});
```

#### Example 7. Disable Custom Logging

```typescript
await LogSinks.setCustom(null);
```

## Using Multiple Log Sinks

You can enable multiple log sinks simultaneously for different purposes.

#### Example 8. Development and Production Configuration

```typescript
if (__DEV__) {
  // Development: Verbose console logging
  await LogSinks.setConsole({
    level: LogLevel.VERBOSE,
    domains: [LogDomain.ALL]
  });
} else {
  // Production: File logging for warnings and errors
  await LogSinks.setFile({
    level: LogLevel.WARNING,
    directory: logDirectory,
    maxKeptFiles: 7,
    maxFileSize: 2 * 1024 * 1024,
    usePlaintext: true
  });
  
  // Also send errors to analytics
  await LogSinks.setCustom({
    level: LogLevel.ERROR,
    domains: [LogDomain.ALL],
    callback: (level, domain, message) => {
      Analytics.logError({ level, domain, message });
    }
  });
}
```

## Platform Considerations

**iOS:**
- Log files are stored in the app's Documents directory
- Path: `RNFS.DocumentDirectoryPath + '/logs'`
- Accessible via iTunes File Sharing if enabled in Info.plist

**Android:**
- Log files are stored in the app's external directory
- Path: `RNFS.ExternalDirectoryPath + '/logs'`
- May require storage permissions in AndroidManifest.xml
