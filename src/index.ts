import { GlobalEvents } from "./components/global_events";
import LocalLinkElement from "./components/local_link";

customElements.define(LocalLinkElement.tag, LocalLinkElement);

new GlobalEvents();
