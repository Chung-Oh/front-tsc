define(["require", "exports", "./event-manager", "./box-post-form", "./box-post-list"], function (require, exports, event_manager_1, box_post_form_1, box_post_list_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PostPage = /** @class */ (function () {
        function PostPage(eventManager) {
            this.eventManager = eventManager;
            this.init();
        }
        PostPage.prototype.init = function () {
            new box_post_list_1.BoxPostList(this.eventManager);
            new box_post_form_1.BoxPostForm(this.eventManager);
        };
        return PostPage;
    }());
    new PostPage(new event_manager_1.EventManager());
});
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
//# sourceMappingURL=posts.js.map