# Delete

Sends a `DELETE` request to the specified URL.

```bash
npx zap-client delete <url>
```

## Aliases
`DELETE | D | d`

## Arguments
`url`: The url to send requests

### Flags

#### Local Flags
None

#### Global Flags 
[Flags](https://sas2k.github.io/Zap/docs/build/Usage/Global-Flags)

## Example Use

### Json

```powershell
C:\Users\user>npx zap-client delete https://jsonplaceholder.typicode.com/posts/100
```
```json
'statusCode: 200'
{}
```