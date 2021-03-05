 import { Selector } from 'testcafe';

fixture `Check main page text`
    .page `https://www.dfweb.no`;

test('Verify text on front page', async t => {
    await t
        //.typeText('#developer-name', 'John Smith')
        //.click('#submit-button')

        // Use the assertion to check if the actual header text is equal to the expected one
        
        .expect(Selector('#daniel').innerText).eql('Jeg heter Daniel Fjeldstad og er en webutvikler.');
        
        // .debug()
        // .expect(Selector('#article-header').innerText).eql('Will fail');

});