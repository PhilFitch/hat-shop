import { findHat } from '../src/register.js';
import { renderLineItem } from '../src/render-line-item.js';
import hats from '../src/hats.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test ('renders line item', assert => {
    const lineItem = {
        code: 'newsboy',
        quantity: 2,
    };
    const newsboy = findHat(hats, lineItem.code);
    const expected = '<tr><td>Newsboy</td><td>2</td><td>$60.00</td><td>$120.00</td></tr>'

    const dom = renderLineItem(lineItem, newsboy);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});