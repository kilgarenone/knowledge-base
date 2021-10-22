To enable `res.write()` and 'Server Source Event(SSE)'

1. In your **NodeJS** route, right off the bat:

```javascript
res.writeHead(200, {
  "Content-Type": "text/event-stream",
  "X-Accel-Buffering": "no", // this is the key for streaming response with NginX!!
  "Cache-Control": "no-cache",
  Connection: "keep-alive",
});
```

2. Now in your **NginX** location block:

```
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Connection '';
}
```

[source](https://serverfault.com/questions/801628/for-server-sent-events-sse-what-nginx-proxy-configuration-is-appropriate)
