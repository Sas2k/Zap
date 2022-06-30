# Put

Sends a `PUT` request to the specified URL.

```bash
npx zap-client put <url> <dataType> <data>
```

## Aliases
`PUT`

## Arguments
`url`: The url to send requests
`dataType`: The dataType of the data to put.
    types:
        - json (default)
        - xml
        - text
        - form

> Quick Note about the json
> Try putting '\"' to the ".

`data`: The data to put.

### Optional Flags
`-vb | --verboose`: Verboosity

## Example Use

### Json

```powershell
C:\Users\user>npx zap-client put https://jsonplaceholder.typicode.com/posts/100 json '{\"title\":\"Hello\",\"body\":\"World!!!!!!!!!!!\"}'
```
```json
'statusCode: 200'
{ title: 'Hello', body: 'World!!!!!!!!!!!', id: 100 }
```