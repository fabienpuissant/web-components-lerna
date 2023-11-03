import { newSpecPage } from '@stencil/core/testing';
import { FabButton } from '../fab-button';

describe('fab-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [FabButton],
      html: '<fab-button></fab-button>',
    });
    expect(root).toEqualHtml(`
        <fab-button primary>
          <mock:shadow-root>
          <button class="button primary"></button>
          </mock:shadow-root>
        </fab-button>
      `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [FabButton],
      html: `<fab-button label="Stencil" primary rounded="medium" width="100px" height="200px" disabled font-size="10px"></fab-button>`,
    });
    expect(root).toEqualHtml(`
        <fab-button label="Stencil" primary rounded="medium" width="100px" height="200px" disabled font-size="10px">
          <mock:shadow-root>
            <button class="button primary rounded-medium disabled" style="width: 100px; height: 200px; font-size: 10px;">Stencil</button>
          </mock:shadow-root>
        </fab-button>
      `);
  });
});
