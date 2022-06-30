# Post

sends a `POST` request to the specified url.

`npx zap-client post <url> <dataType> <data>`

## Aliases
`POST`

## Arguments
`url`: The *url* to request

`dataType`: The dataType of the data you want to Post
    types:
        - json (default)
        - xml
        - text
        - form

> Quick Note about the json
> Try putting '\"' to the ".

`data`: The data to Post.

### Optional Flags
`-vb | --verboose`: Verboosity

## Example Use

### Json
```powershell
C:\Users\user>npx zap-client post https://jsonplaceholder.typicode.com/posts json '{\"title\":\"Hello\",\"body\":\"World\"}'
```
```json
'statusCode: 201'
{ title: 'Hello', body: 'World', id: 101 }
```