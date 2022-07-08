# Global Flags/Options

The flags and options for the commands.

## Verbose
`-vb | --verbose`
the verbose command.

### example
```bash
npx zap-client get https://jsonplaceholder.typicode.com/posts/100 -vb
```
> Hang Tight since this website will give you a 2000+ lines reponse !!
> Why did I even create this type of command

## Header
`-hr | --header`
The custom header.

### example
```bash
npx zap-client get https://<some-kind-of-url>/ --header '{\"key\":\"value\"}'
```
