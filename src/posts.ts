class BoxPostList {
	static boxId = 'box-post-list';
	private buttonListSelector = `#${BoxPostList.boxId}>button[type=button]`;
	constructor() {
		this.init();
	}
	private init() {
		const buttonList = document.querySelector(this.buttonListSelector);
		buttonList.addEventListener('click', () => {
			this.hiddenBox();
			const boxForm = document.getElementById(BoxPostForm.boxId);
			boxForm.removeAttribute('style');
		});
	}
	private hiddenBox() {
		const boxList = document.getElementById(BoxPostList.boxId);
		boxList.style.display = 'none';
	}
	private showBox() {
		const boxList = document.getElementById(BoxPostList.boxId);
		boxList.removeAttribute('style');
	}
}

class BoxPostForm {
	static boxId = 'box-post-form';
	private buttonFormSelector = `#${BoxPostForm.boxId}>button[type=button]`;
	constructor() {
		this.init();
	}
	private init() {
		const buttonForm = document.querySelector(this.buttonFormSelector);
		buttonForm.addEventListener('click', () => {
			this.hiddenBox();
			const boxList = document.getElementById(BoxPostList.boxId);
			boxList.removeAttribute('style');
		});
	}
	private hiddenBox() {
		const boxForm = document.getElementById(BoxPostForm.boxId);
		boxForm.style.display = 'none';
	}
	private showBox() {
		const boxForm = document.getElementById(BoxPostForm.boxId);
		boxForm.removeAttribute('style');
	}
}

new BoxPostForm();
new BoxPostList();


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