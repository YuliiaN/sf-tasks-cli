oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g sf-tasks-cli
$ cli COMMAND
running command...
$ cli (--version)
sf-tasks-cli/0.0.0 darwin-arm64 node-v19.1.0
$ cli --help [COMMAND]
USAGE
  $ cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cli help [COMMANDS]`](#cli-help-commands)
* [`cli plugins`](#cli-plugins)
* [`cli plugins:install PLUGIN...`](#cli-pluginsinstall-plugin)
* [`cli plugins:inspect PLUGIN...`](#cli-pluginsinspect-plugin)
* [`cli plugins:install PLUGIN...`](#cli-pluginsinstall-plugin-1)
* [`cli plugins:link PLUGIN`](#cli-pluginslink-plugin)
* [`cli plugins:uninstall PLUGIN...`](#cli-pluginsuninstall-plugin)
* [`cli plugins:uninstall PLUGIN...`](#cli-pluginsuninstall-plugin-1)
* [`cli plugins:uninstall PLUGIN...`](#cli-pluginsuninstall-plugin-2)
* [`cli plugins update`](#cli-plugins-update)
* [`cli tasks list [FILE]`](#cli-tasks-list-file)
* [`cli tasks new SUBJECT [COMMENT]`](#cli-tasks-new-subject-comment)

## `cli help [COMMANDS]`

Display help for cli.

```
USAGE
  $ cli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `cli plugins`

List installed plugins.

```
USAGE
  $ cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cli plugins add

EXAMPLES
  $ cli plugins:install myplugin 

  $ cli plugins:install https://github.com/someuser/someplugin

  $ cli plugins:install someuser/someplugin
```

## `cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ cli plugins:inspect myplugin
```

## `cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cli plugins add

EXAMPLES
  $ cli plugins:install myplugin 

  $ cli plugins:install https://github.com/someuser/someplugin

  $ cli plugins:install someuser/someplugin
```

## `cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ cli plugins:link myplugin
```

## `cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cli plugins unlink
  $ cli plugins remove
```

## `cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cli plugins unlink
  $ cli plugins remove
```

## `cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cli plugins unlink
  $ cli plugins remove
```

## `cli plugins update`

Update installed plugins.

```
USAGE
  $ cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `cli tasks list [FILE]`

describe the command here

```
USAGE
  $ cli tasks list [FILE] [-n <value>] [-f]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ cli tasks list
```

## `cli tasks new SUBJECT [COMMENT]`

create a new salesforce task

```
USAGE
  $ cli tasks new SUBJECT [COMMENT] [-p <value>] [-s <value>]

FLAGS
  -p, --priority=<value>  [default: Normal] priority of the task
  -s, --status=<value>    [default: Not started] status of the task

DESCRIPTION
  create a new salesforce task

EXAMPLES
  $ cli tasks new "Email" --priority "Normal" --status "Not started"

  $ cli tasks new "Call" "This is a comment" --priority "Urgent" -s "Not started"
```
<!-- commandsstop -->
