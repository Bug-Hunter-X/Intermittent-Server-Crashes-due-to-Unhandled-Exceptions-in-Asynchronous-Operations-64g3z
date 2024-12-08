# Node.js Server Crash Bug

This repository demonstrates a common issue in Node.js server applications: intermittent crashes caused by unhandled exceptions within asynchronous operations.  The `bug.js` file contains a simplified example, while `bugSolution.js` illustrates a robust solution.

## Problem

The primary problem lies in the lack of proper error handling in asynchronous tasks.  When an asynchronous operation (e.g., file I/O, database queries, network requests) fails, it can throw an exception.  If this exception isn't caught, it'll crash the entire Node.js process, leading to downtime and data loss.

## Solution

The solution involves comprehensive error handling using `try...catch` blocks within asynchronous functions and the `process.on('uncaughtException')` event listener as a safety net for unanticipated errors.  Always ensure that asynchronous operations have robust error handling to prevent unexpected crashes.  Additionally, consider using a process manager (such as PM2) to automatically restart the server in case of a crash, ensuring high availability.