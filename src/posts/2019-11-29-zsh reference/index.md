---
title: zsh reference
---

This is probably going to be a constantly updated post of useful zsh tips and
tricks. It can probably be used in bash and sh but I haven't tested in those
systems.

## !$

This gets the previous commands last argument

```bash
mkdir hello_world
cd !$ # This expands to cd hello_world
```

## fc

function to control interactive history. Very useful for editting mistakes in
shell commands / writing long 1 time use shell scripts

```bash
fc -l # Lists the last 16 commands

fc # Opens up an editor with the previous command to edit.
```
