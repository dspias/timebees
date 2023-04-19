import timezones from "../timezones";

const template:string = `
  <div id="timeAnchor" class="time-anchor"></div>
  <div id="timeComponent" class="time-bubble">
    <div style="width: 300px;">
      <div class="time-header">
        <p id="timezoneName"></p>
        <p>Options</p>
      </div>
      <div class="time-content">
        <div class="timebox fromTime">
          <h4 id="fromTime" class="time-text">-</h4>
          <p id="fromtimezone" class="timezone-text">-</p>
        </div>
        <span class="arrow-icon">
          <svg width="42" height="42" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="19" cy="19" r="17" fill="#00A4DB" stroke="white" stroke-width="4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.692 13.7059C15.8278 13.7059 15.9577 13.7616 16.0513 13.8599L18.8639 16.8121C19.0529 17.0105 19.0453 17.3247 18.8468 17.5138C18.6484 17.7029 18.3342 17.6952 18.1451 17.4968L16.1883 15.4428V23.7976C16.1883 24.0717 15.9661 24.2939 15.692 24.2939C15.4179 24.2939 15.1957 24.0717 15.1957 23.7976V15.4428L13.2388 17.4968C13.0497 17.6952 12.7356 17.7029 12.5371 17.5138C12.3387 17.3247 12.331 17.0105 12.5201 16.8121L15.3326 13.8599C15.4263 13.7616 15.5562 13.7059 15.692 13.7059ZM22.3088 13.7059C22.5829 13.7059 22.8051 13.9281 22.8051 14.2023V22.557L24.762 20.5031C24.951 20.3046 25.2652 20.297 25.4636 20.486C25.6621 20.6751 25.6697 20.9893 25.4806 21.1878L22.6681 24.1399C22.5745 24.2382 22.4446 24.2939 22.3088 24.2939C22.173 24.2939 22.0431 24.2382 21.9495 24.1399L19.137 21.1878C18.9479 20.9893 18.9555 20.6751 19.154 20.486C19.3524 20.297 19.6666 20.3046 19.8556 20.5031L21.8125 22.557V14.2023C21.8125 13.9281 22.0347 13.7059 22.3088 13.7059Z" fill="white"/>
          </svg>
        </span>
        <div class="timebox toTime">
          <h4 id="convertedTime" class="time-text">-</h4>
          <p id="localtimezone" class="timezone-text">-</p>
        </div>
      </div>
      <a class="share-feedback" href="#">
        <p>Share your feedback</p>
      </a>
    </div>
  </div>
`;

export type StyleType = {
  anchor?: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
  bubble?: {
    left: number;
    top: number;
    visibility: string;
  };
  localtimezone?: string;
  time?: {
    time: string,
    abbreviation: string,
    convertedTime: string
  }
};
export const styled = ({ anchor, bubble }: StyleType) => `
  .time-anchor {
    position: absolute;
    visibility: hidden;
    left: ${anchor?.left || 0}px;
    top: ${anchor?.top || 0}px;
    width: ${anchor?.width || 0}px;
    height: ${anchor?.height || 0}px;
  }
  #timeComponent {
    visibility: ${bubble?.visibility || 'hidden'};
    left: ${bubble?.left || 0}px;
    top: ${bubble?.top || 0}px;
    opacity: 1;
  }
  .time-bubble {
    box-shadow: 2px 5px 20px rgba(27, 37, 47, 0.12);
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    position: absolute;
    z-index: 1202;
  }
  .time-header {
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background-color: #203B54;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: #ffffff;
    padding-left: 16px;
    padding-right: 16px;
  }
  .time-content {
    position: relative;
  }
  .timebox {
    margin: 28px 28px;
    text-align: center;
    border: 1px solid #DBDEE3;
    border-radius: 10px;
    padding: 12px;
  }
  .toTime {
    border: 1px solid #00A4DB;
  }
  .time-text {
    font-size: 22px;
    margin: 0px;
    color: #203B54;
    padding: 0px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .timezone-text {
    font-size: 12px;
    margin: 0px;
    color: #546681;
  }
  .arrow-icon {
    position: absolute;
    left: 45%;
    bottom: 36.75%;
  }
  .share-feedback {
    text-decoration: none;
    color: #00A4DB;
  }
  .share-feedback p {
    text-align: center;
    font-size: 14px;
  }
`;

export default template;