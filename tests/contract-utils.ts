import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Pregnant,
  Transfer,
  Approval,
  Birth,
  ContractUpgrade
} from "../generated/Contract/Contract"

export function createPregnantEvent(
  owner: Address,
  matronId: BigInt,
  sireId: BigInt,
  cooldownEndBlock: BigInt
): Pregnant {
  let pregnantEvent = changetype<Pregnant>(newMockEvent())

  pregnantEvent.parameters = new Array()

  pregnantEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  pregnantEvent.parameters.push(
    new ethereum.EventParam(
      "matronId",
      ethereum.Value.fromUnsignedBigInt(matronId)
    )
  )
  pregnantEvent.parameters.push(
    new ethereum.EventParam("sireId", ethereum.Value.fromUnsignedBigInt(sireId))
  )
  pregnantEvent.parameters.push(
    new ethereum.EventParam(
      "cooldownEndBlock",
      ethereum.Value.fromUnsignedBigInt(cooldownEndBlock)
    )
  )

  return pregnantEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createBirthEvent(
  owner: Address,
  kittyId: BigInt,
  matronId: BigInt,
  sireId: BigInt,
  genes: BigInt
): Birth {
  let birthEvent = changetype<Birth>(newMockEvent())

  birthEvent.parameters = new Array()

  birthEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  birthEvent.parameters.push(
    new ethereum.EventParam(
      "kittyId",
      ethereum.Value.fromUnsignedBigInt(kittyId)
    )
  )
  birthEvent.parameters.push(
    new ethereum.EventParam(
      "matronId",
      ethereum.Value.fromUnsignedBigInt(matronId)
    )
  )
  birthEvent.parameters.push(
    new ethereum.EventParam("sireId", ethereum.Value.fromUnsignedBigInt(sireId))
  )
  birthEvent.parameters.push(
    new ethereum.EventParam("genes", ethereum.Value.fromUnsignedBigInt(genes))
  )

  return birthEvent
}

export function createContractUpgradeEvent(
  newContract: Address
): ContractUpgrade {
  let contractUpgradeEvent = changetype<ContractUpgrade>(newMockEvent())

  contractUpgradeEvent.parameters = new Array()

  contractUpgradeEvent.parameters.push(
    new ethereum.EventParam(
      "newContract",
      ethereum.Value.fromAddress(newContract)
    )
  )

  return contractUpgradeEvent
}
