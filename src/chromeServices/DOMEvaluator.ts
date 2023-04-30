import './TimeComponent';
import DetectTime from './DetectTime';
import ConvertTime from './ConvertTime';

const timeComponent = document.createElement("time-component");
document.body.appendChild(timeComponent);

// set time component position
const setContext = (context:any) =>
timeComponent.setAttribute(
  "context",
  JSON.stringify(context)
);

// get time component position 
const getTimeComponentPosition = (time: string, abbreviation?: string | null, convertedTime?: string | null, localtimezone?: string | null) => {
  const rangeBounds = window
    ?.getSelection()
    ?.getRangeAt(0)
    ?.getBoundingClientRect();
  const timeAnchor = rangeBounds && {
    left: rangeBounds.left,
    top: rangeBounds.top + window.pageYOffset ,
    width: rangeBounds.width,
    height: rangeBounds.height
  };
  const timeBubble = rangeBounds && {
    left: rangeBounds.left + rangeBounds.width / 2 - 150,
    top: rangeBounds.top + window.pageYOffset + rangeBounds.height + 10,
    visibility: 'visible'
  };
  return {
    anchor: timeAnchor,
    bubble: timeBubble,
    localtimezone: localtimezone,
    time: { time, abbreviation, convertedTime }
  };
};

const getSelectedText = () => window.getSelection()?.toString();

document.addEventListener("click", (e) => {
  try {
    chrome.storage.sync.get().then((storage) => {
      const selectedText = getSelectedText();    
      if (selectedText && selectedText.length > 0) {
        const isTrack = storage?.isalltrack;
        if (isTrack === undefined || isTrack === true) {
          const [time, abbreviation] = DetectTime(selectedText);
          if (time && abbreviation) {
            const convertedTime = ConvertTime(time, abbreviation, storage?.localtimezone);
            const position= getTimeComponentPosition(time, abbreviation, convertedTime, storage?.localtimezone);
            setContext(position);
          }
        } 
      }
    });
  } catch (e) {}
});

document.addEventListener("selectionchange", () => {
  try {
    chrome.storage.sync.get().then((storage) => {
      const selectedText = getSelectedText();
      if (selectedText?.length === 0 || !selectedText) {
        setContext({bubble: { visibility: 'hidden' }, localtimezone: storage?.localtimezone, time: null });
      }
    });
  } catch (e) {}
});
