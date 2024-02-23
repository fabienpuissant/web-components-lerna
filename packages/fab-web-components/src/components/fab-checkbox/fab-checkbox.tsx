import { Component, Prop, State, h, Element, Watch } from '@stencil/core';

@Component({
  tag: 'fab-checkbox',
  styleUrls: ['fab-checkbox.scss'],
  shadow: true,
})
export class FabCheckBox {
  /**
   * The label of the button
   */
  @Prop() label: string;

  /**
   * Disabled
   */
  @Prop({ reflect: true }) disabled: boolean;

  /**
   * Name property
   */
  @Prop() name: string;

  /**
   * Checked property
   */
  @Prop({ reflect: true }) checked: boolean;

  @State() classMap: Record<string, boolean>;

  @State() style: { [key: string]: string };

  @Element() element: HTMLElement;

  @Watch('disabled')
  watchDisabled(newValue: boolean, _oldValue: boolean) {
    this.element.setAttribute('disabled', `${newValue}`);
  }

  @Watch('checked')
  watchChecked(newValue: boolean, _oldValue: boolean) {
    this.element.setAttribute('checked', `${newValue}`);
  }

  @Watch('name')
  watchName(newValue: boolean, _oldValue: boolean) {
    this.element.setAttribute('name', `${newValue}`);
  }

  constructor() {
    const classMap = {};
    if (this.disabled) {
      classMap['disabled'] = true;
    }
    if(this.checked) {
      classMap['checked'] = true;
    }
    this.classMap = classMap;

    if(this.name) {
      this.element.setAttribute("name", `${this.name}`);
    }

    if(this.checked) {
      this.element.setAttribute("checked", `${this.checked}`);
    }

    if(this.disabled) {
      this.element.setAttribute("disabled", `${this.checked}`);
    }
  }

  render() {
    return (
      <div>
        <input type="checkbox" class={this.classMap} />
        <label>{this.label}</label>
      </div>
    );
  }
}
