Forget about Google Analytics, or even the ['Minimal Google Analytics'](https://minimalanalytics.com/), coz ad blockers blocks the `/collect` request anyway.

Forget about server-side analytics too(like [goaccess.io](https://goaccess.io/)). The analytic is based on access log. In the case of Nginx, if you look at the access log, they are filled with nonsense from bots and whatnot.

What I decided to do was to self-host analytics that tracks on client-side.

## Using Umami

#### Guide

[https://umami.is/docs/running-on-heroku](https://umami.is/docs/running-on-heroku)

Although Heroku etc. are free, keep in mind that if you get lots of traffic, one way or another, you are gonna have to dole out for something scalable to host your data.

#### Setting up the psql tables

##### Step 1

```
sudo apt-get install postgresql-client
```

##### Step 2

Grab the connection string from your heroku PSQL dashboard, and connect to your DB in CLI:

```
psql postgres://<BLAH_BLAH>
```

##### Step 3

Then just copy [this](https://raw.githubusercontent.com/mikecao/umami/master/sql/schema.postgresql.sql) and paste and enter in the cli.

## Alternative

- [https://github.com/PostHog/posthog](https://github.com/PostHog/posthog)
- [https://ackee.electerious.com/](https://ackee.electerious.com/)

* [https://www.offen.dev/](https://www.offen.dev/)
* [https://matomo.org/](https://matomo.org/)
