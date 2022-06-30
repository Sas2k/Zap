# Get

sends a `GET` request to the specify URL.

`npx zap-client get <url>`

## Aliases
`get | GET | g`

## Arguments
`url` : The *url* to request

### Optional Flags
`-vb | --verboose` : Verboosity

## Example Use

```powershell
C:\Users\user>npx zap-client get https://jsonplaceholder.typicode.com/posts/1
```
```json
'statusCode: 200'
{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
```