import { Selector, getHref } from 'testcafe'

const isWindows = () => process.platform.startsWith('win')

const resizeWindow = async (t) => {
  if (isWindows()) await t.resizeWindow(5000, 2000)
}

fixture('Top page').page('0.0.0.0:5000/').beforeEach(async (t) => await resizeWindow(t)
)

test('find a link', async (t) => {
  await t
    .expect(Selector('a').withText('Learn React').exists).ok()
})
