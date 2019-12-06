import {EventManager} from './event-manager';
import {BoxPostForm} from './box-post-form';
import {BoxPostList} from './box-post-list';

class PostPage {
	constructor(private eventManager: EventManager) {
		this.init();
	}
	private init() {
		new BoxPostList(this.eventManager);
		new BoxPostForm(this.eventManager);
	}
}

new PostPage(new EventManager());


/*** Não se deve trabalhar dessa maneira com TypeScript, abaixo é ES6 ***/

// const buttonForm = document.querySelector('#box-post-form>button[type=button]');
// buttonForm.addEventListener('click', () => {
// 	const boxForm = document.getElementById('box-post-form');
// 	boxForm.style.display = 'none';

// 	const boxList = document.getElementById('box-post-list');
// 	boxList.removeAttribute('style');
// });

// const buttonList = document.querySelector('#box-post-list>button[type=button]');
// buttonList.addEventListener('click', () => {
// 	const boxList = document.getElementById('box-post-list');
// 	boxList.style.display = 'none';

// 	const boxForm = document.getElementById('box-post-form');
// 	boxForm.removeAttribute('style');
// });