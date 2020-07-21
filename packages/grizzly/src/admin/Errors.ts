export class HTTPError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = "HTTPError";
  }
}

export class PrinterNotInstalledError extends Error {
  constructor(message: string) {
    super(message);
    this.name="PrinterNotInstalledError";
  }
}

export class PrinterNotConnectedError extends Error {
  constructor(message: string) {
    super(message);
    this.name="PrinterNotConnectedError";
  }
}
