import {
  AllowedSeaDropUpdated as AllowedSeaDropUpdatedEvent,
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  BaseURIUpdated as BaseURIUpdatedEvent,
  ConsecutiveTransfer as ConsecutiveTransferEvent,
  ContractURIUpdated as ContractURIUpdatedEvent,
  MaxSupplyUpdated as MaxSupplyUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PotentialOwnerUpdated as PotentialOwnerUpdatedEvent,
  ProvenanceHashUpdated as ProvenanceHashUpdatedEvent,
  RoyaltyInfoUpdated as RoyaltyInfoUpdatedEvent,
  SeaDropTokenDeployed as SeaDropTokenDeployedEvent,
  TokenURIUpdated as TokenURIUpdatedEvent,
  Transfer as TransferEvent
} from "../generated/Contract/Contract"
import {
  AllowedSeaDropUpdated,
  Approval,
  ApprovalForAll,
  BaseURIUpdated,
  ConsecutiveTransfer,
  ContractURIUpdated,
  MaxSupplyUpdated,
  OwnershipTransferred,
  PotentialOwnerUpdated,
  ProvenanceHashUpdated,
  RoyaltyInfoUpdated,
  SeaDropTokenDeployed,
  TokenURIUpdated,
  Transfer
} from "../generated/schema"

export function handleAllowedSeaDropUpdated(
  event: AllowedSeaDropUpdatedEvent
): void {
  let entity = new AllowedSeaDropUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.allowedSeaDrop = event.params.allowedSeaDrop

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBaseURIUpdated(event: BaseURIUpdatedEvent): void {
  let entity = new BaseURIUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.baseURI = event.params.baseURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleConsecutiveTransfer(
  event: ConsecutiveTransferEvent
): void {
  let entity = new ConsecutiveTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fromTokenId = event.params.fromTokenId
  entity.toTokenId = event.params.toTokenId
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContractURIUpdated(event: ContractURIUpdatedEvent): void {
  let entity = new ContractURIUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newContractURI = event.params.newContractURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMaxSupplyUpdated(event: MaxSupplyUpdatedEvent): void {
  let entity = new MaxSupplyUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newMaxSupply = event.params.newMaxSupply

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePotentialOwnerUpdated(
  event: PotentialOwnerUpdatedEvent
): void {
  let entity = new PotentialOwnerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newPotentialAdministrator = event.params.newPotentialAdministrator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProvenanceHashUpdated(
  event: ProvenanceHashUpdatedEvent
): void {
  let entity = new ProvenanceHashUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousHash = event.params.previousHash
  entity.newHash = event.params.newHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoyaltyInfoUpdated(event: RoyaltyInfoUpdatedEvent): void {
  let entity = new RoyaltyInfoUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.receiver = event.params.receiver
  entity.bps = event.params.bps

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSeaDropTokenDeployed(
  event: SeaDropTokenDeployedEvent
): void {
  let entity = new SeaDropTokenDeployed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenURIUpdated(event: TokenURIUpdatedEvent): void {
  let entity = new TokenURIUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.startTokenId = event.params.startTokenId
  entity.endTokenId = event.params.endTokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
