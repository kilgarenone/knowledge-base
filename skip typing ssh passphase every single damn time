Store ssh passphase to skip having to enter it everytime I ssh to my VPS.

1.  Add following at the end of your ~/.bashrc or ~/.zshrc:

```
SSH_ENV="$HOME/.ssh/agent-environment"

function start_agent {
    /usr/bin/ssh-agent | sed 's/^echo/#echo/' > "${SSH_ENV}"
    chmod 600 "${SSH_ENV}"
    . "${SSH_ENV}" > /dev/null
}

if [ -f "${SSH_ENV}" ]; then
    . "${SSH_ENV}" > /dev/null
    #ps ${SSH_AGENT_PID} doesn't work under cywgin
    ps -ef | grep ${SSH_AGENT_PID} | grep ssh-agent$ > /dev/null || {
        start_agent;
    }
else
    start_agent;
fi
```

2. And add following at the end of ~/.ssh/config file:

```
Host *
   AddKeysToAgent yes
```

source: https://askubuntu.com/a/1266670
