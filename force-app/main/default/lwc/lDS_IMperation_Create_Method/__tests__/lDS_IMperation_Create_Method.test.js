import { createElement } from 'lwc';
import LDS_IMperation_Create_Method from 'c/lDS_IMperation_Create_Method';

describe('c-l-d-s-i-mperation-create-method', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-l-d-s-i-mperation-create-method', {
            is: LDS_IMperation_Create_Method
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});