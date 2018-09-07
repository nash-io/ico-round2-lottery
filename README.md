<p align="center">
  <img
    src="http://neonexchange.org/img/NEX-logo.svg"
    width="125px;">

</p>
<h3 align="center">NEX ICO Round 2Lottery</h3>
<hr/>


This is a repository that contains the data submitted to our lottery system, our methodology for determining the winners of the lottery, and the results of the lottery.  

All results are verifiable by anyone who wishes to follow the steps below. These results are final

## Setup


1. Make sure you have a recent version of `node` and `yarn` installed.

2. Install some modules

```
$ npm install
or
$ yarn install
```

## Selecting participants for Round 2 of ICO

The file `ico_round2_eligible_document_hashes.json` contains the document hashes associated with NEO Addresses that have met the following criteria:

- Address has purchased at least 975 NEX is Round 1 of the ICO
- Address has successfully completed the 2nd round KYC Application 

To run the Round 2 ICO Sort, use the script `sortIcoRound2.js`. This will sort the document hashes of associated addresses and choose the first 1025

```
$ node sortIcoRound2.js
or
$ yarn sort
```

## How does this sort work?

The ICO Round 2 sort selects the 1st, 0th, 2nd, and 5th character in the hash, adds together their value, then sorts the results in an ascending order.  It chooses the 1,0,2 and 5th characters in the hash as these are determined by the digits in available slots(1025). The first 1025 hashes after sorting are then chosen for the ICO Round 2 Lottery. 



### What is the hash of my document?


1. Run the `hashGenerator.js` script, passing it the id you sent to the lottery registration process.

```
$ node hashGenerator.js "ABC-my-document-id-123"
or
$ yarn hash "ABC-my-document-id-123"
$ [Output] ABC-my-document-id-123 -> 5790769a8b21d63a3f0bec96d4268e02eadf7d8a4eb2c4b7c156b502162fd9ea
```

2. In this instance, `5790769a8b21d63a3f0bec96d4268e02eadf7d8a4eb2c4b7c156b502162fd9ea` is the hash for your document that was used in the lottery.

3.  Now you can check the `winning_hashes_ico_round2.json` to see if your document hash is in the output.

4. If you cant find your document hash in the `ico_round2_eligible_document_hashes.json`, it is possible you mistyped your document ID.  Otherwise, your address did not meet the criteria specified above for Round 2 eligibility. 



