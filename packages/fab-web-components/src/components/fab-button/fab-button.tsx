import { Component, Prop, State, h, Element, Watch } from '@stencil/core';

@Component({
  tag: 'fab-button',
  styleUrls: ['fab-button.scss'],
  shadow: true,
})
export class FabButton {
  /**
   * The label of the button
   */
  @Prop() label: string;

  /**
   * Primary style
   */
  @Prop({ reflect: true }) primary: boolean = true;

  /**
   * Disabled
   */
  @Prop({ reflect: true }) disabled: boolean;

  /**
   * Rounded style
   */
  @Prop() rounded: 'small' | 'medium' | 'large';

  /**
   * Width string property that will be passed in the width css property
   */
  @Prop() width: string;

  /**
   * Height string property that will be passed in the width css property
   */
  @Prop() height: string;

  /**
   * Font size in the button css property
   */
  @Prop() fontSize: string;

  @State() classMap: Record<string, boolean>;

  @State() style: { [key: string]: string };

  @Element() element: HTMLElement;

  @Watch('disabled')
  watchDisabled(newValue: boolean, _oldValue: boolean) {
    this.element.setAttribute('disabled', `${newValue}`);
  }

  constructor() {
    const classMap = {
      button: true,
    };
    if (this.primary) {
      classMap['primary'] = true;
    } else {
      classMap['secondary'] = true;
    }
    if (this.rounded) {
      classMap[`rounded-${this.rounded}`] = true;
    }
    if (this.disabled) {
      classMap['disabled'] = true;
    }
    this.classMap = classMap;

    const style = {};
    if (this.width) {
      style['width'] = this.width;
    }
    if (this.height) {
      style['height'] = this.height;
    }
    if (this.fontSize) {
      style['font-size'] = this.fontSize;
    }
    this.style = style;
  }

  render() {
    return (
      <button class={this.classMap} style={this.style}>
        {this.label}
      </button>
    );
  }
}
