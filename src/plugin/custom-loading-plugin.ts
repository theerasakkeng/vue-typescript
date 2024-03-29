import { h, render } from "vue";
import LoadingVue from "@/components/custom-loading/custom-loading.vue";

const createComponent = (component: any, props: any, parentContainer: Element) => {
    const vnode = h(component, props);
    const container = document.createElement("div");
    parentContainer.appendChild(container);
    render(vnode, container);

    return vnode.component;
}

const removeElement = (el: Element) => {
    if (typeof el.remove !== "undefined") {
        el.remove();
    } else {
        el.parentNode?.removeChild(el);
    }
}
export default LoadingVue;

export const useLoading = (globalProps: any = {}, globalSlots: any = {}) => {
    let instance: any = null;
    const loading: object = {
        show(props: any = globalProps, slots: any = globalSlots) {
            const forceProps: object = {
                programmati: true,
                lockScroll: true,
                isFullPage: false,
            };
            const propsData: any = Object.assign({}, globalProps, props, forceProps);
            let container = propsData.container;

            if (!propsData.container) {
                container = document.body;
                propsData.isFullPage = true;
            }
            instance = createComponent(LoadingVue, propsData, container);
            const mergedSlots = Object.assign({}, globalSlots, slots);
            Object.keys(mergedSlots).map((name) => {
                if (instance != null) {
                    instance.slots[name] = mergedSlots[name];
                }
            });
        },
        hide() {
            if (instance != null) {
                instance.setupState.hide();
                let root = instance.vnode.el;
                removeElement(root.parentElement);
            }
        },
    };
    return loading;

}