/**
 * (c) 2021, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import { Terminal } from "xterm";
import { DeviceConnection } from "../device/device";

/**
 * Serial/terminal/REPL UI-level actions.
 */
export class SerialActions {
  constructor(
    private terminal: Terminal,
    private device: DeviceConnection,
    private onSerialSizeChange: (size: "compact" | "open") => void
  ) {}

  interrupt = (): void => this.sendCommand("\x03");
  reset = (): void => this.sendCommand("\x04");

  private sendCommand(data: string): void {
    this.onSerialSizeChange("open");
    this.device.serialWrite(data);
    this.terminal.focus();
  }
}
