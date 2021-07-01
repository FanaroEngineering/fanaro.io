export default class Bitcoin extends HTMLElement {
  static readonly tag: string = "bit-coin";

  private static readonly walletAddr: string =
    "zpub6o1BausLvdMgM3ebTGvUAcXnb965XnenGw5ij8gVWHvaDyKxBCUHi3yg2ZbTXE5XnZrfQTLHxdQDnp5UfbwSUP92awRXc8nV57JJzXcqq6M";

  private static readonly helperMsg: string =
    "Copy the following to your clipboard: (Ctrl+C)";

  private static readonly template: string = `
    <button>
      <svg>
        <image href="../../assets/bitcoin.svg"></image>
      </svg>
    </button>
  `;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = Bitcoin.template;
    this.onclick = this.onClick;
  }

  private onClick = (): void => {
    window.prompt(Bitcoin.helperMsg, Bitcoin.walletAddr);
  };
}
