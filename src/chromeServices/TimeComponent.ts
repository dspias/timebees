import '@webcomponents/custom-elements';
import timezones from '../timezones';
import template, {styled, StyleType} from './Template';
import { convertFormatTime } from './ConvertTime';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);


const localtimezone = (zone: string | undefined) => {
  zone = (!zone) ? dayjs.tz.guess(): zone;
  const timezone =  timezones.find(time => time.zoneName === zone);
  if (!timezone) return null;
  return timezone;
}  

export default class TimeComponent extends HTMLElement {

  get context(): StyleType {
    return JSON.parse(this.getAttribute("context") || "{}");
  }

  get styleElement(): HTMLStyleElement | null {
    return this.shadowRoot && this.shadowRoot.querySelector("style");
  }
  get timezoneName(): HTMLElement | null {
    return this.shadowRoot && this.shadowRoot.getElementById("timezoneName");
  }
  get fromTime(): HTMLElement | null {
    return this.shadowRoot && this.shadowRoot.getElementById("fromTime");
  }
  get fromtimezone(): HTMLElement | null {
    return this.shadowRoot && this.shadowRoot.getElementById("fromtimezone");
  }
  get convertedTime(): HTMLElement | null {
    return this.shadowRoot && this.shadowRoot.getElementById("convertedTime");
  }
  get localtimezone(): HTMLElement | null {
    return this.shadowRoot && this.shadowRoot.getElementById("localtimezone");
  }

  static get observedAttributes(): string[] {
    return ["context"];
  }

  constructor() {
    super();
    this.render();
  }

  render(): void {
    this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = styled({});
    if (this.shadowRoot) {
      this.shadowRoot.appendChild(style);
      this.shadowRoot.innerHTML += template;
    }
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null
  ): void {
    if (name === "context") {
      const context = this.context;
      const timezone = localtimezone(context?.localtimezone);
      this.styleElement!.textContent = styled({ anchor: context.anchor, bubble: context?.bubble });

      // show in the window popup header
      this.timezoneName!.textContent = (timezone) ? `${timezone.countryName}, ${timezone.abbreviation}` : 'No Timzone';

      const time = context?.time;
      // from time
      this.fromTime!.textContent = (time) ? convertFormatTime(time.time, 'HH:mm', 12) : '-';
      this.fromtimezone!.textContent = (time) ? time.abbreviation : '-';

      // to time
      this.convertedTime!.textContent = (time) ? time.convertedTime : '-';
      this.localtimezone!.textContent = (timezone) ? timezone.zoneName : '-';

    }
  }
}

window.customElements.define("time-component", TimeComponent);
