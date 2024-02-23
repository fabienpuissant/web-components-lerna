/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FabButton {
        /**
          * Disabled
         */
        "disabled": boolean;
        /**
          * Font size in the button css property
         */
        "fontSize": string;
        /**
          * Height string property that will be passed in the width css property
         */
        "height": string;
        /**
          * The label of the button
         */
        "label": string;
        /**
          * Primary style
         */
        "primary": boolean;
        /**
          * Rounded style
         */
        "rounded": 'small' | 'medium' | 'large';
        /**
          * Width string property that will be passed in the width css property
         */
        "width": string;
    }
    interface FabCheckbox {
        /**
          * Checked property
         */
        "checked": boolean;
        /**
          * Disabled
         */
        "disabled": boolean;
        /**
          * The label of the button
         */
        "label": string;
        /**
          * Name property
         */
        "name": string;
    }
}
declare global {
    interface HTMLFabButtonElement extends Components.FabButton, HTMLStencilElement {
    }
    var HTMLFabButtonElement: {
        prototype: HTMLFabButtonElement;
        new (): HTMLFabButtonElement;
    };
    interface HTMLFabCheckboxElement extends Components.FabCheckbox, HTMLStencilElement {
    }
    var HTMLFabCheckboxElement: {
        prototype: HTMLFabCheckboxElement;
        new (): HTMLFabCheckboxElement;
    };
    interface HTMLElementTagNameMap {
        "fab-button": HTMLFabButtonElement;
        "fab-checkbox": HTMLFabCheckboxElement;
    }
}
declare namespace LocalJSX {
    interface FabButton {
        /**
          * Disabled
         */
        "disabled"?: boolean;
        /**
          * Font size in the button css property
         */
        "fontSize"?: string;
        /**
          * Height string property that will be passed in the width css property
         */
        "height"?: string;
        /**
          * The label of the button
         */
        "label"?: string;
        /**
          * Primary style
         */
        "primary"?: boolean;
        /**
          * Rounded style
         */
        "rounded"?: 'small' | 'medium' | 'large';
        /**
          * Width string property that will be passed in the width css property
         */
        "width"?: string;
    }
    interface FabCheckbox {
        /**
          * Checked property
         */
        "checked"?: boolean;
        /**
          * Disabled
         */
        "disabled"?: boolean;
        /**
          * The label of the button
         */
        "label"?: string;
        /**
          * Name property
         */
        "name"?: string;
    }
    interface IntrinsicElements {
        "fab-button": FabButton;
        "fab-checkbox": FabCheckbox;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fab-button": LocalJSX.FabButton & JSXBase.HTMLAttributes<HTMLFabButtonElement>;
            "fab-checkbox": LocalJSX.FabCheckbox & JSXBase.HTMLAttributes<HTMLFabCheckboxElement>;
        }
    }
}
