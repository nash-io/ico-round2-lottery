const jsonfile = require('jsonfile')

const entrantsFilePath = 'ico_round2_eligible_document_hashes.json'
const winnersFilePath = 'winning_hashes_ico_round2.json'

const sortHashes = (a, b) => {
  // choose 1st, 0th, 2nd, and 5th character ( 1025 )
  let at = parseInt(a[1], 16) + parseInt(a[0], 16) + parseInt(a[2], 16) + parseInt(a[5],16)
  let bt = parseInt(b[1], 16) + parseInt(b[0], 16) + parseInt(b[2], 16) + parseInt(b[5],16)
  if (at < bt) return -1
  if (at > bt) return 1
  return 0
}

jsonfile.readFile(entrantsFilePath, (err, obj) => {
  const winners = obj.sort(sortHashes).slice(0,1025);

  jsonfile.writeFile(winnersFilePath, winners, err => {
    if (err) {
      console.log('error', err)
    } else {
      console.log(`Wrote winners json to ${winnersFilePath}`)
    }
  })
})
