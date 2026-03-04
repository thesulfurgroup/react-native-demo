const fetch = require('node-fetch');
const fs = require('fs');

const token = process.env.DATO_API_TOKEN;

if (!token) {
  throw new Error('Missing DATO_API_TOKEN environment variable.');
}

fetch(`https://graphql.datocms.com/`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then(result => result.json())
  .then(result => {
    const filteredData = result.data.__schema.types.filter(
      type => type.possibleTypes !== null,
    );
    result.data.__schema.types = filteredData;
    fs.writeFile('./fragmentTypes.json', JSON.stringify(result.data), err => {
      if (err) console.error('Error writing fragmentTypes file', err);
      console.log('Fragment types successfully extracted!');
    });
  });
