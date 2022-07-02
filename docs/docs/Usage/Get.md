# Get

sends a `GET` request to the specify URL.

`npx zap-client get <url>`

## Aliases
`get | GET | g`

## Arguments
`url` : The *url* to request

### Flags

#### Local Flags
None

#### Global Flags 
[Flags](https://sas2k.github.io/Zap/docs/build/Usage/Global-Flags)

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