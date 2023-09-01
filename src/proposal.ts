import { Any } from 'google-protobuf/google/protobuf/any_pb'
import { CommunityPoolSpendProposal as CommunityPoolSpendProposalPb } from '../proto/cosmos/distribution/v1beta1/distribution_pb'
import { TextProposal as TextProposalPb } from '../proto/cosmos/gov/v1beta1/gov_pb'
import {
  ParamChange,
  ParameterChangeProposal as ParameterChangeProposalPb,
} from '../proto/cosmos/params/v1beta1/params_pb'
import {
  CancelSoftwareUpgradeProposal as CancelSoftwareUpgradeProposalPb,
  Plan,
  SoftwareUpgradeProposal as SoftwareUpgradeProposalPb,
} from '../proto/cosmos/upgrade/v1beta1/upgrade_pb'
import { VetoProposal as VetoProposalPb } from '../proto/council/v1beta1/types_pb'
import { Coin } from '../proto/cosmos/base/v1beta1/coin_pb'
import { BaseMsg } from 'message'

// export class Plan extends PlanPb implements BaseMsg {
//   constructor(name: string, height: number, info: string) {
//     super()
//     this.setInfo(info)
//     this.setName(name)
//     this.setHeight(height)
//   }

//   toAny(): Any {
//     const any = new Any()
//     any.pack(this.serializeBinary(), 'cosmos.upgrade.v1beta1.Plan', '/')
//     return any
//   }

//   toJSON(): object {
//     return {
//       name: this.getName(),
//       info: this.getInfo(),
//       height: this.getHeight().toString(),
//     }
//   }
// }

export class TextProposal extends TextProposalPb implements BaseMsg {
  constructor(title: string, description: string) {
    super()
    this.setTitle(title)
    this.setDescription(description)
  }

  toAny() {
    const any = new Any()
    any.pack(this.serializeBinary(), 'cosmos.gov.v1beta1.TextProposal', '/')
    return any
  }

  toJSON(): object {
    return {
      type: 'cosmos-sdk/TextProposal',
      value: {
        title: this.getTitle().toString(),
        description: this.getDescription().toString(),
      },
    }
  }
}

export class CommunityPoolSpendProposal
  extends CommunityPoolSpendProposalPb
  implements BaseMsg
{
  constructor(
    title: string,
    description: string,
    recipient: string,
    amount: Coin[],
  ) {
    super()
    this.setTitle(title)
    this.setDescription(description)
    this.setRecipient(recipient)
    this.setAmountList(amount)
  }

  toAny() {
    const any = new Any()
    any.pack(
      this.serializeBinary(),
      'cosmos.distribution.v1beta1.CommunityPoolSpendProposal',
      '/',
    )
    return any
  }

  toJSON(): object {
    return {
      type: 'cosmos-sdk/CommunityPoolSpend',
      value: {
        title: this.getTitle().toString(),
        description: this.getDescription().toString(),
        recipient: this.getRecipient().toString(),
        amount: this.getAmountList().map((coin) => coin.toObject()),
      },
    }
  }
}

export class ParameterChangeProposal
  extends ParameterChangeProposalPb
  implements BaseMsg
{
  constructor(title: string, description: string, changes: ParamChange[]) {
    super()
    this.setTitle(title)
    this.setDescription(description)
    this.setChangesList(changes)
  }

  toAny() {
    const any = new Any()
    any.pack(
      this.serializeBinary(),
      'cosmos.params.v1beta1.ParameterChangeProposal',
      '/',
    )
    return any
  }

  toJSON(): object {
    return {
      type: 'cosmos-sdk/ParameterChangeProposal',
      value: {
        title: this.getTitle().toString(),
        description: this.getDescription().toString(),
        changes: this.getChangesList().map((change) => change.toObject()),
      },
    }
  }
}

export class SoftwareUpgradeProposal
  extends SoftwareUpgradeProposalPb
  implements BaseMsg
{
  constructor(title: string, description: string, public plan: Plan) {
    super()
    this.setTitle(title)
    this.setDescription(description)
    this.setPlan(plan)
  }

  toAny() {
    const any = new Any()
    any.pack(
      this.serializeBinary(),
      'cosmos.upgrade.v1beta1.SoftwareUpgradeProposal',
      '/',
    )
    return any
  }

  toJSON(): object {
    const plan = this.getPlan()

    return {
      type: 'cosmos-sdk/SoftwareUpgradeProposal',
      value: {
        title: this.getTitle().toString(),
        description: this.getDescription(),
        plan: {
          info: plan.getInfo().toString(),
          name: plan.getName().toString(),
          height: plan.getHeight().toString(),
        },
      },
    }
  }
}

export class CancelSoftwareUpgradeProposal
  extends CancelSoftwareUpgradeProposalPb
  implements BaseMsg
{
  constructor(title: string, description: string) {
    super()
    this.setTitle(title)
    this.setDescription(description)
  }

  toAny() {
    const any = new Any()
    any.pack(
      this.serializeBinary(),
      'cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal',
      '/',
    )
    return any
  }

  toJSON(): object {
    return {
      type: 'cosmos-sdk/CancelSoftwareUpgradeProposal',
      value: {
        title: this.getTitle().toString(),
        description: this.getDescription().toString(),
      },
    }
  }
}

export class VetoProposal extends VetoProposalPb implements BaseMsg {
  constructor(proposalId: number, description: string) {
    super()
    this.setProposalId(proposalId)
    this.setDescription(description)
  }

  toAny() {
    const any = new Any()
    any.pack(this.serializeBinary(), 'council.v1beta1.VetoProposal', '/')
    return any
  }

  toJSON(): object {
    return {
      type: 'council/VetoProposal',
      value: {
        proposal_id: this.getProposalId().toString(),
        description: this.getDescription().toString(),
      },
    }
  }
}

export namespace Proposal {
  export type Content =
    | TextProposal
    | CommunityPoolSpendProposal
    | ParameterChangeProposal
    | SoftwareUpgradeProposal
    | CancelSoftwareUpgradeProposal
    | VetoProposal
}
