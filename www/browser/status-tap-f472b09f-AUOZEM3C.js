import {
  findClosestIonContent,
  scrollToTop
} from "./chunk-ULOFQHX6.js";
import "./chunk-52T2EOVQ.js";
import {
  componentOnReady
} from "./chunk-X6PYF5VD.js";
import {
  readTask,
  writeTask
} from "./chunk-KX4G5RV4.js";
import {
  __async
} from "./chunk-ZVATTXSA.js";

// node_modules/@ionic/core/dist/esm/status-tap-f472b09f.js
var startStatusTap = () => {
  const win = window;
  win.addEventListener("statusTap", () => {
    readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = findClosestIonContent(el);
      if (contentEl) {
        new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
          writeTask(() => __async(void 0, null, function* () {
            contentEl.style.setProperty("--overflow", "hidden");
            yield scrollToTop(contentEl, 300);
            contentEl.style.removeProperty("--overflow");
          }));
        });
      }
    });
  });
};
export {
  startStatusTap
};
/*! Bundled license information:

@ionic/core/dist/esm/status-tap-f472b09f.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=status-tap-f472b09f-AUOZEM3C.js.map
