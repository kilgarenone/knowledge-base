## Postgres

```
sudo apt update
```

```
sudo apt install postgresql postgresql-contrib
```

```
sudo service postgresql status
```

Set password to `postgres` user:

```
sudo passwd postgres
```

Alternatively,

```
sudo -u postgres psql
```

```
postgres=# \password postgres
Enter new password: <new-password>
postgres=# \q
```

Start postgres

```
sudo service postgresql start
```

Restart postgres

```
sudo service postgresql restart
```

## pgAdmin

[https://www.pgadmin.org/download/pgadmin-4-windows/](https://www.pgadmin.org/download/pgadmin-4-windows/)

1. Create a new server. Give it a name. `Host` - `localhost`, `Port` - `5432`, `Password` - enter the one up there. Save.
2. Create a new database. Name it. Done.

## psql

```
sudo -u postgres psql
```

```
postgres=# \l    // list all databases
```
