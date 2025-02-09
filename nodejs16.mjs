// const fetch = require('node-fetch')
import fetch from 'node-fetch'

console.log('Fetching google...')
await fetch('https://google.com')
console.log('Google website fetched.')