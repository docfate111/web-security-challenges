// Write an HTTP server that serves JSON data when it receives a GET request
// to the path '/api/parsetime'. Expect the request to contain a query string
// with a key 'iso' and an ISO-format time as the value.
const http = require('http')
const url = require('url')
const moment = require('moment')
const port = process.argv[2]
const server = http.createServer((req, res) => {
  const { pathname, query } = url.URL(req.url, true)
  res.writeHead(200, { ContentType: 'application/json' })
  if (pathname === '/api/parsetime') {
    return res.end(JSON.stringify({
      hour: moment(query.iso).hour(),
      minute: moment(query.iso).minute(),
      second: moment(query.iso).second()
    }))
  }
  if (pathname === '/api/unixtime') {
    return res.end(JSON.stringify({
      unixtime: parseInt(moment(query.iso).format('x'))
    }))
  }
  res.writeHead(404, { ContentType: 'application/json' })
  res.end(JSON.stringify({
    success: false,
    message: `${pathname} is not a value endpoint`
  }))
})
server.listen(port)
