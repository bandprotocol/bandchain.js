export class NotIntegerError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'NotIntegerNumberError'
  }
}

export class QueryError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'QueryError'
  }
}

export class ValueError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ValueError'
  }
}

export class ValueTooLargeError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ValueTooLargeError'
  }
}

export class UndefinedError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'UndefinedError'
  }
}

export class NotFoundError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'NotFoundError'
  }
}

export class InsufficientCoinError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'InsufficientCoinError'
  }
}

export class NegativeIntegerError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'NegativeIntegerError'
  }
}

export class EmptyRequestMsgError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'EmptyRequestMsgError'
  }
}

export class EmptyMsgError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'EmptyMsgError'
  }
}

export class BadSignatureError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'BadSignatureError'
  }
}

export class UnsuccessfulCallError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'UnsuccessfulCallError'
  }
}

export class CreateError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'CreateError'
  }
}

export class DecodeError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'DecodeError'
  }
}

export class SchemaError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'SchemaError'
  }
}
