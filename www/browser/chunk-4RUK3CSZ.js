import {
  hapticSelectionChanged,
  hapticSelectionEnd,
  hapticSelectionStart
} from "./chunk-3XAIP4YB.js";
import {
  createGesture
} from "./chunk-2HS7YJ5A.js";
import {
  writeTask
} from "./chunk-KX4G5RV4.js";

// node_modules/@ionic/core/dist/esm/button-active-f6503382.js
var createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === "undefined") {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target) || target.disabled) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    writeTask(() => buttonToModify.classList.add("ion-activated"));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    writeTask(() => buttonToModify.classList.remove("ion-activated"));
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = void 0;
  };
  return createGesture({
    el,
    gestureName: "buttonActiveDrag",
    threshold: 0,
    onStart: (ev) => activateButtonAtPoint(ev.currentX, ev.currentY, hapticSelectionStart),
    onMove: (ev) => activateButtonAtPoint(ev.currentX, ev.currentY, hapticSelectionChanged),
    onEnd: () => {
      clearActiveButton(true);
      hapticSelectionEnd();
      initialTouchedButton = void 0;
    }
  });
};

export {
  createButtonActiveGesture
};
/*! Bundled license information:

@ionic/core/dist/esm/button-active-f6503382.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-4RUK3CSZ.js.map
