import {
  attachComponent
} from "./chunk-36AZKHWN.js";
import "./chunk-X6PYF5VD.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-KX4G5RV4.js";
import {
  __async
} from "./chunk-ZVATTXSA.js";

// node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js
var tabCss = ":host(.tab-hidden){display:none !important}";
var IonTabStyle0 = tabCss;
var Tab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.loaded = false;
    this.active = false;
    this.delegate = void 0;
    this.tab = void 0;
    this.component = void 0;
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      if (this.active) {
        yield this.setActive();
      }
    });
  }
  /** Set the active component for the tab */
  setActive() {
    return __async(this, null, function* () {
      yield this.prepareLazyLoaded();
      this.active = true;
    });
  }
  changeActive(isActive) {
    if (isActive) {
      this.prepareLazyLoaded();
    }
  }
  prepareLazyLoaded() {
    if (!this.loaded && this.component != null) {
      this.loaded = true;
      try {
        return attachComponent(this.delegate, this.el, this.component, ["ion-page"]);
      } catch (e) {
        console.error(e);
      }
    }
    return Promise.resolve(void 0);
  }
  render() {
    const {
      tab,
      active,
      component
    } = this;
    return h(Host, {
      key: "cb75d0877979b3b8df8f7e1952bfa9677da1eaa5",
      role: "tabpanel",
      "aria-hidden": !active ? "true" : null,
      "aria-labelledby": `tab-button-${tab}`,
      class: {
        "ion-page": component === void 0,
        "tab-hidden": !active
      }
    }, h("slot", {
      key: "37fbb7b7a6b03eb93b1dacd2dc1025b78eb2aa6b"
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "active": ["changeActive"]
    };
  }
};
Tab.style = IonTabStyle0;
var tabsCss = ":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}";
var IonTabsStyle0 = tabsCss;
var Tabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionNavWillLoad = createEvent(this, "ionNavWillLoad", 7);
    this.ionTabsWillChange = createEvent(this, "ionTabsWillChange", 3);
    this.ionTabsDidChange = createEvent(this, "ionTabsDidChange", 3);
    this.transitioning = false;
    this.onTabClicked = (ev) => {
      const {
        href,
        tab
      } = ev.detail;
      if (this.useRouter && href !== void 0) {
        const router = document.querySelector("ion-router");
        if (router) {
          router.push(href);
        }
      } else {
        this.select(tab);
      }
    };
    this.selectedTab = void 0;
    this.useRouter = false;
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      if (!this.useRouter) {
        this.useRouter = (!!this.el.querySelector("ion-router-outlet") || !!document.querySelector("ion-router")) && !this.el.closest("[no-router]");
      }
      if (!this.useRouter) {
        const tabs = this.tabs;
        if (tabs.length > 0) {
          yield this.select(tabs[0]);
        }
      }
      this.ionNavWillLoad.emit();
    });
  }
  componentWillRender() {
    const tabBar = this.el.querySelector("ion-tab-bar");
    if (tabBar) {
      const tab = this.selectedTab ? this.selectedTab.tab : void 0;
      tabBar.selectedTab = tab;
    }
  }
  /**
   * Select a tab by the value of its `tab` property or an element reference. This method is only available for vanilla JavaScript projects. The Angular, React, and Vue implementations of tabs are coupled to each framework's router.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  select(tab) {
    return __async(this, null, function* () {
      const selectedTab = getTab(this.tabs, tab);
      if (!this.shouldSwitch(selectedTab)) {
        return false;
      }
      yield this.setActive(selectedTab);
      yield this.notifyRouter();
      this.tabSwitch();
      return true;
    });
  }
  /**
   * Get a specific tab by the value of its `tab` property or an element reference. This method is only available for vanilla JavaScript projects. The Angular, React, and Vue implementations of tabs are coupled to each framework's router.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  getTab(tab) {
    return __async(this, null, function* () {
      return getTab(this.tabs, tab);
    });
  }
  /**
   * Get the currently selected tab. This method is only available for vanilla JavaScript projects. The Angular, React, and Vue implementations of tabs are coupled to each framework's router.
   */
  getSelected() {
    return Promise.resolve(this.selectedTab ? this.selectedTab.tab : void 0);
  }
  /** @internal */
  setRouteId(id) {
    return __async(this, null, function* () {
      const selectedTab = getTab(this.tabs, id);
      if (!this.shouldSwitch(selectedTab)) {
        return {
          changed: false,
          element: this.selectedTab
        };
      }
      yield this.setActive(selectedTab);
      return {
        changed: true,
        element: this.selectedTab,
        markVisible: () => this.tabSwitch()
      };
    });
  }
  /** @internal */
  getRouteId() {
    return __async(this, null, function* () {
      var _a;
      const tabId = (_a = this.selectedTab) === null || _a === void 0 ? void 0 : _a.tab;
      return tabId !== void 0 ? {
        id: tabId,
        element: this.selectedTab
      } : void 0;
    });
  }
  setActive(selectedTab) {
    if (this.transitioning) {
      return Promise.reject("transitioning already happening");
    }
    this.transitioning = true;
    this.leavingTab = this.selectedTab;
    this.selectedTab = selectedTab;
    this.ionTabsWillChange.emit({
      tab: selectedTab.tab
    });
    selectedTab.active = true;
    return Promise.resolve();
  }
  tabSwitch() {
    const selectedTab = this.selectedTab;
    const leavingTab = this.leavingTab;
    this.leavingTab = void 0;
    this.transitioning = false;
    if (!selectedTab) {
      return;
    }
    if (leavingTab !== selectedTab) {
      if (leavingTab) {
        leavingTab.active = false;
      }
      this.ionTabsDidChange.emit({
        tab: selectedTab.tab
      });
    }
  }
  notifyRouter() {
    if (this.useRouter) {
      const router = document.querySelector("ion-router");
      if (router) {
        return router.navChanged("forward");
      }
    }
    return Promise.resolve(false);
  }
  shouldSwitch(selectedTab) {
    const leavingTab = this.selectedTab;
    return selectedTab !== void 0 && selectedTab !== leavingTab && !this.transitioning;
  }
  get tabs() {
    return Array.from(this.el.querySelectorAll("ion-tab"));
  }
  render() {
    return h(Host, {
      key: "e01ccf6bfaccad094515be50e407399c733fc226",
      onIonTabButtonClick: this.onTabClicked
    }, h("slot", {
      key: "38d2d01dbfd8a08f01e6f0e27274b21d75424e37",
      name: "top"
    }), h("div", {
      key: "7e894f0f423e2d43e1c68daff5f9f6c442fad237",
      class: "tabs-inner"
    }, h("slot", {
      key: "df16be529a0370a26d0adf850530b31607507c23"
    })), h("slot", {
      key: "44642e1cb24c3281c43db75fd69a32fe0defe40a",
      name: "bottom"
    }));
  }
  get el() {
    return getElement(this);
  }
};
var getTab = (tabs, tab) => {
  const tabEl = typeof tab === "string" ? tabs.find((t) => t.tab === tab) : tab;
  if (!tabEl) {
    console.error(`tab with id: "${tabEl}" does not exist`);
  }
  return tabEl;
};
Tabs.style = IonTabsStyle0;
export {
  Tab as ion_tab,
  Tabs as ion_tabs
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-tab_2.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=ion-tab_2.entry-OZKEC33A.js.map
