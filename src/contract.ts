import { Transfer } from "../generated/Contract/Contract"
import { TransferEvent } from "../generated/schema"

  export function handleTransfer(event: Transfer): void {
    let transferEvent = new TransferEvent(
      // if we were indexing a token we would have used 
      // only the transaction's hash to successfully form a unique id
      // like this "event.transaction.hash.toHexString()"
      // but since we're indexing an NFT, we would concatenate the transaction's hash with
      // the event number in order to form a unique id like we did below
      // https://discord.com/channels/438038660412342282/438070183794573313/1073406617502097468
      // the link above is Data Nexus' explanation of this concept
      event.transaction.hash.toHexString() + "-" 
      + event.transactionLogIndex.toString()
      )
      // previously    let amount = (event.params.value.toBigDecimal())
    let amount = (event.params.tokenId.toBigDecimal())
    transferEvent.amount = amount
    transferEvent.sender = event.params.from
    transferEvent.destination = event.params.to
    transferEvent.block = event.block.number
    transferEvent.timestamp = event.block.timestamp
    transferEvent.transaction = event.transaction.hash
  
  transferEvent.save()
  }
  
