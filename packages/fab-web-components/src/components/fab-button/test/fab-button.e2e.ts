import { newE2EPage } from '@stencil/core/testing';

describe('fab-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<fab-button></fab-button>');
    const element = await page.find('fab-button');
    expect(element).toHaveClass('hydrated');
    const button = await page.find('fab-button >>> button');
    expect(button).toHaveClass(`button`);
  });

  it('renders with label', async () => {
    const page = await newE2EPage();

    await page.setContent('<fab-button label="firstLabel"></fab-button>');
    const component = await page.find('fab-button');
    const element = await page.find('fab-button >>> button');
    expect(element.textContent).toEqual(`firstLabel`);

    component.setProperty('label', 'secondLabel');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`secondLabel`);
  });

  it('renders with primary props', async () => {
    const page = await newE2EPage();

    await page.setContent('<fab-button primary></fab-button>');
    const element = await page.find('fab-button >>> button');
    expect(element.className).toContain(`primary`);
  });

  it('renders with primary props per default', async () => {
    const page = await newE2EPage();

    await page.setContent('<fab-button></fab-button>');
    const element = await page.find('fab-button >>> button');
    expect(element.className).toContain(`primary`);
  });

  it('renders with rounded props', async () => {
    const page = await newE2EPage();

    await page.setContent('<fab-button rounded="medium"></fab-button>');
    const element = await page.find('fab-button >>> button');
    expect(element.className).toContain(`rounded-medium`);
  });

  it('renders with width props', async () => {
    const page = await newE2EPage();

    await page.setContent('<fab-button width="100px"></fab-button>');
    const element = await page.find('fab-button >>> button');
    expect((await element.getComputedStyle()).width).toEqual('100px');
  });

  it('renders with height props', async () => {
    const page = await newE2EPage();

    await page.setContent('<fab-button height="100px"></fab-button>');
    const element = await page.find('fab-button >>> button');
    expect((await element.getComputedStyle()).height).toEqual('100px');
  });

  it('renders with font-size props', async () => {
    const page = await newE2EPage();

    await page.setContent('<fab-button font-size="10px"></fab-button>');
    const element = await page.find('fab-button >>> button');
    expect((await element.getComputedStyle()).fontSize).toEqual('10px');
  });
});
