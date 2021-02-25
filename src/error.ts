export class BandChainJSError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'BandChainJSError'
  }
}
export class NotIntegerError extends BandChainJSError {
  constructor(message: string) {
    super(message)
    this.name = 'NotIntegerNumberError'
  }
}

export class QueryError extends BandChainJSError {
  constructor(message: string) {
    super(message)
    this.name = 'QueryError'
  }
}

export class ValueError extends BandChainJSError {
  constructor(message: string) {
    super(message)
    this.name = 'ValueError'
  }
}

export class ValueTooLargeError extends BandChainJSError {
  constructor(message: string) {
    super(message)
    this.name = 'ValueTooLargeError'
  }
}

export class UndefinedError extends BandChainJSError {
  constructor(message: string) {
    super(message)
    this.name = 'UndefinedError'
  }
}

export class NotFoundError extends BandChainJSError {
  constructor(message: string) {
    super(message)
    this.name = 'NotFoundError'
  }
}

export class InsufficientCoinError extends BandChainJSError {
  constructor(message: string) {
    super(message)
    this.name = 'InsufficientCoinError'
  }
}

export class NegativeIntegerError extends BandChainJSError {
  constructor(message: string) {
    super(message)
    this.name = 'NegativeIntegerError'
  }
}

export class EmptyRequestMsgError extends BandChainJSError {
  constructor(message: string) {
    super(message)
    this.name = 'EmptyRequestMsgError'
  }
}

export class EmptyMsgError extends BandChainJSError {
  constructor(message: string) {
    super(message)
    this.name = 'EmptyMsgError'
  }
}

export class BadSignatureError extends BandChainJSError {
  constructor(message: string) {
    super(message)
    this.name = 'BadSignatureError'
  }
}

export class UnsuccessfulCallError extends BandChainJSError {
  constructor(message: string) {
    super(message)
    this.name = 'UnsuccessfulCallError'
  }
}

export class CreateError extends BandChainJSError {
  constructor(message: string) {
    super(message)
    this.name = 'CreateError'
  }
}

export class DecodeError extends BandChainJSError {
  constructor(message: string) {
    super(message)
    this.name = 'DecodeError'
  }
}

export class SchemaError extends BandChainJSError {
  constructor(message: string) {
    super(message)
    this.name = 'SchemaError'
  }
}
