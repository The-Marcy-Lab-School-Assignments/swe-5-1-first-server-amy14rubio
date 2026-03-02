# Short Response Questions

Answer each question below in your own words. Aim for 3–5 sentences per answer. Be specific — use the exact terms and concepts from the lesson.

Your responses will be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content.

---

## Question 1: Server Basics

What does it mean for a server to be "listening"? In your answer, explain the roles of **host**, **port**, and **localhost**.

**Your answer here**:
A server is "listening" when it is actively waiting for an incoming network request on a specific port. The host is the network address where the server is located. The port is a numbered endpoint that directs traffic to a specific process or application. The localhost is the hostname that refers to the device that is in use.

---

## Question 2: req and res

In the callback passed to `http.createServer((req, res) => { ... })`, what are `req` and `res`? Give at least one example of a property or method from each, and explain what it does.

**Your answer here**:
`req` is the HTTP request object and one of its properties is `url` which is the URL path of the incoming request. `res` is the HTTP response object and one of its properties is `writeHead` which defines the HTTP status code and response headers, such as content type.

---

## Question 3: Routing

What is **routing** in the context of a server, and how do you implement it using `node:http`? Why is it important to use `return` after calling `res.end()`?

**Your answer here**:
Routing in the context of a server is the process of deciding how to handle a request. Routing is implemented using `node:http` by checking `req.url` and `req.method`. It's important to `return` after calling `res.end()` because it prevents the program from continuing and accidentally sending multiple responses.
