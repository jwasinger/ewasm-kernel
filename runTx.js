const Transaction = require('ethereumjs-tx')

exports.runTx = async function(tx, environment) {
  // check to the sender's account to make sure it has enough wei and the correct nonce
	let fromAcct = environment.state[tx.from]
	if (new BN(fromAcct.balance).lt(tx.getUpfrontCost())) {
		message = "sender doesn't have enough funds to send tx. The upfront cost is: " + tx.getUpfrontCost().toString() + ' and the sender\'s account only has: ' + new BN(fromAcct.balance).toString()
		reject(new Error(message))
		return
	} else if (!opts.skipNonce && !(new BN(fromAcct.nonce).eq(new BN(tx.nonce)))) {
		message = "the tx doesn't have the correct nonce. account has nonce of: " + new BN(fromAcct.nonce).toString() + ' tx has nonce of: ' + new BN(tx.nonce).toString()
		reject(new Error(message))
		return
	}

	fromAcct.nonce = new BN(fromAcct.nonce).addn(1)

	basefee = tx.getBaseFee()
	gasLimit = new BN(tx.gasLimit)
	if (gasLimit.lt(basefee)) {
		return reject(new Error('base fee exceeds gas limit'))
	}
	gasLimit.isub(basefee)

	fromAcct.balance = new BN(fromAcct.balance).sub(new BN(tx.gasLimit).mul(new BN(tx.gasPrice)))
  debugger

  // invoke the ewasm kernel

  // post transaction logic ...
}
