import {
  addIcons,
  arrowBackOutline,
  send
} from "./chunk-U7I4M26G.js";
import {
  IonAvatar,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonicModule,
  TextValueAccessorDirective
} from "./chunk-QY6UERJP.js";
import "./chunk-IRNVB6F3.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-A54Y6D4U.js";
import "./chunk-ZTVCPE3I.js";
import "./chunk-5H55HBS7.js";
import "./chunk-HHPBBMWP.js";
import "./chunk-74ZUTEVJ.js";
import "./chunk-6NM256MY.js";
import "./chunk-S7CL5QHB.js";
import "./chunk-BKPN4S4N.js";
import "./chunk-36AZKHWN.js";
import "./chunk-MBNBWCEE.js";
import "./chunk-52T2EOVQ.js";
import "./chunk-X6PYF5VD.js";
import "./chunk-2HS7YJ5A.js";
import "./chunk-F4BDZKIT.js";
import "./chunk-X6W3EUXB.js";
import "./chunk-JYOJD2RE.js";
import "./chunk-5JBVT5OV.js";
import "./chunk-KX4G5RV4.js";
import "./chunk-SF4AH5PM.js";
import "./chunk-BB7NI7QA.js";
import "./chunk-Z2CSFXBF.js";
import "./chunk-OQQEQ4WG.js";
import "./chunk-4KNII73W.js";
import "./chunk-ZCSC3ZHN.js";
import "./chunk-6U2MGNWA.js";
import "./chunk-4WT7J3YM.js";
import "./chunk-6FFMTLXI.js";
import "./chunk-K3HSXS64.js";
import "./chunk-ZVATTXSA.js";

// src/app/Screen/chat/chat.component.ts
var _ChatComponent = class _ChatComponent {
  navigateBack() {
    console.log("Navegando hacia atr\xE1s");
  }
  sendMessage() {
    if (this.newMessage.trim() !== "") {
      console.log("Mensaje enviado:", this.newMessage);
      this.newMessage = "";
    }
  }
  constructor() {
    this.newMessage = "";
    addIcons({ arrowBackOutline, send });
  }
  ngOnInit() {
  }
};
_ChatComponent.\u0275fac = function ChatComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChatComponent)();
};
_ChatComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatComponent, selectors: [["app-chat"]], decls: 30, vars: 1, consts: [["fullscreen", ""], [1, "chat-container", "ion-no-padding"], [1, "chat-header", "movil"], ["size", "1", 1, "icon-back"], ["name", "arrow-back-outline", 3, "click"], ["size", "1", 1, "chat-avatar"], ["src", "https://picsum.photos/200/300?random=1"], ["size", "10", 1, "chat-user-info"], [2, "margin-left", "12%"], [1, "chat-messages"], [1, "message-list"], [1, "message", "message-sent"], [1, "message", "message-received"], [1, "chat-input-row"], ["size", "10"], ["placeholder", "Escriba un mensaje...", 3, "ngModelChange", "ngModel"], ["size", "2", 1, "send-icon"], ["name", "send", 3, "click"]], template: function ChatComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "ion-grid", 1)(2, "ion-row", 2)(3, "ion-col", 3)(4, "ion-icon", 4);
    \u0275\u0275listener("click", function ChatComponent_Template_ion_icon_click_4_listener() {
      return ctx.navigateBack();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-col", 5)(6, "ion-avatar");
    \u0275\u0275element(7, "img", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-col", 7)(9, "h4", 8);
    \u0275\u0275text(10, "Nombre del usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 8);
    \u0275\u0275text(12, "En l\xEDnea");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "ion-row", 9)(14, "ion-col")(15, "ion-list", 10)(16, "ion-item", 11)(17, "ion-label");
    \u0275\u0275text(18, "Hola, \xBFc\xF3mo est\xE1s?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "ion-item", 12)(20, "ion-label");
    \u0275\u0275text(21, "\xA1Hola! Estoy bien, \xBFy t\xFA?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "ion-item", 11)(23, "ion-label");
    \u0275\u0275text(24, "Genial, gracias por preguntar.");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(25, "ion-row", 13)(26, "ion-col", 14)(27, "ion-input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ChatComponent_Template_ion_input_ngModelChange_27_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.newMessage, $event) || (ctx.newMessage = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "ion-col", 16)(29, "ion-icon", 17);
    \u0275\u0275listener("click", function ChatComponent_Template_ion_icon_click_29_listener() {
      return ctx.sendMessage();
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(27);
    \u0275\u0275twoWayProperty("ngModel", ctx.newMessage);
  }
}, dependencies: [IonicModule, IonAvatar, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonList, IonRow, TextValueAccessorDirective, FormsModule, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n.chat-container[_ngcontent-%COMP%] {\n  background-color: #e5ddd5;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.chat-header[_ngcontent-%COMP%] {\n  background-color: #075e54;\n  color: white;\n  padding: 10px;\n  align-items: center;\n  border-bottom: 1px solid #ddd;\n}\n.icon-back[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n  cursor: pointer;\n}\n.chat-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.chat-user-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n.chat-user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #d4d4d4;\n}\n.chat-messages[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow-y: auto;\n  padding: 10px;\n  background-color: #075e54;\n}\n.message-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  background-color: #075e54;\n}\n.message[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 10px;\n  word-wrap: break-word;\n}\n.message-sent[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n.message-received[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.chat-input-row[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  padding: 10px;\n  border-top: 1px solid #ddd;\n  align-items: center;\n}\n.chat-input-row[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 20px;\n  padding: 8px 12px;\n  border: 1px solid #ddd;\n}\n.send-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.send-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #075e54;\n  cursor: pointer;\n}\n@media (max-width: 1000px) {\n  .movil[_ngcontent-%COMP%] {\n    margin-top: 14%;\n  }\n  .chat-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .chat-user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .message[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .chat-input-row[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=chat.component.css.map */'] });
var ChatComponent = _ChatComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatComponent, { className: "ChatComponent", filePath: "src/app/screen/chat/chat.component.ts", lineNumber: 17 });
})();
export {
  ChatComponent
};
//# sourceMappingURL=chat.component-NUHD6BZ6.js.map
