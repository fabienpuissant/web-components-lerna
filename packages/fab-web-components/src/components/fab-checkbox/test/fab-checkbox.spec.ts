import { newSpecPage } from '@stencil/core/testing';
import { FabCheckBox } from '../fab-checkbox';

describe('fab-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [FabCheckBox],
      html: '<fab-checkbox label="checkbox" name="check" checked="true" disabled="false"></fab-checkbox>',
    });
    expect(root).toEqualHtml(`
        <fab-checkbox label="checkbox" name="check" checked="true" disabled="false">
          <mock:shadow-root>
          <div>
          <input class="checked" type="checkbox" name="check" checked="true" disabled="false"/>
            <label>checkbox</label>
          </div>
          </mock:shadow-root>
        </fab-checkbox>
      `);
  });

});
