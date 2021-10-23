Remove `Server: nginx` in the response headers to make it look like you know what you are doing:

1. Install this `sudo apt install libnginx-mod-http-headers-more-filter`. Not the `nginx_extra` package.
2. `sudo nano /etc/nginx/conf.d/server_tokens.conf`
3. Paste this:

```
# Hide nginx server header
# This doesn't provides any real security but makes hackers life a bit more difficult
more_clear_headers Server;
```

4. I'm assuming you have `server_tokens off;` in your `/etc/nginx/nginx.conf`, if you had been following along. This only hide the nginx's version.

[source](https://wiki.meurisse.org/wiki/Nginx)
